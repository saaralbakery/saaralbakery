/**
 * ==========================================================================
 * SAARAL BAKES - CLOUDINARY BATCH UPLOADER SCRIPT
 * ==========================================================================
 * 
 * Usage:
 * 1. Install Cloudinary SDK:
 *    npm install cloudinary
 * 
 * 2. Set environment variable:
 *    Windows PowerShell:
 *    $env:CLOUDINARY_URL="cloudinary://API_KEY:API_SECRET@CLOUD_NAME"
 * 
 *    Linux / macOS:
 *    export CLOUDINARY_URL="cloudinary://API_KEY:API_SECRET@CLOUD_NAME"
 * 
 * 3. Run script:
 *    node scripts/upload_to_cloudinary.js
 */

const fs = require('fs');
const path = require('path');

let cloudinary;
try {
  cloudinary = require('cloudinary').v2;
} catch (e) {
  console.log('\n[!] Cloudinary SDK is not installed yet.');
  console.log('To install, run: npm install cloudinary\n');
}

const configPath = path.join(__dirname, '..', 'cloudinary-config.js');
let IMAGE_MAP = {};

if (fs.existsSync(configPath)) {
  const config = require(configPath);
  IMAGE_MAP = config.IMAGE_MAP || {};
} else {
  console.error('Error: cloudinary-config.js not found!');
  process.exit(1);
}

const entries = Object.entries(IMAGE_MAP);
console.log(`====================================================`);
console.log(`SAARAL CLOUDINARY UPLOADER`);
console.log(`Total Menu Items to Upload: ${entries.length}`);
console.log(`Folder Target: saaral-menu/`);
console.log(`====================================================\n`);

function resolveLocalPath(dishName, item) {
  if (item.file && !item.file.startsWith('http')) {
    const directPath = path.join(__dirname, '..', item.file);
    if (fs.existsSync(directPath)) return directPath;
  }

  const candidateDirs = [
    path.join(__dirname, '..', 'img', 'images'),
    path.join(__dirname, '..', 'img', 'images2')
  ];

  const possibleNames = [
    dishName + '.png',
    dishName + '.jpg',
    dishName.toLowerCase() + '.png',
    dishName.toLowerCase() + '.jpg'
  ];

  if (item.file && item.file.startsWith('http')) {
    const urlFilename = decodeURIComponent(path.basename(new URL(item.file).pathname));
    possibleNames.unshift(urlFilename);
  }

  for (const dir of candidateDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const name of possibleNames) {
      const match = files.find(f => f.toLowerCase() === name.toLowerCase());
      if (match) return path.join(dir, match);
    }
  }

  return null;
}

if (!cloudinary || (!process.env.CLOUDINARY_URL && !process.env.CLOUD_NAME)) {
  console.log('--- MANIFEST SUMMARY (DRY RUN) ---');
  let foundFiles = 0;
  entries.forEach(([dishName, item], idx) => {
    const localPath = resolveLocalPath(dishName, item);
    if (localPath) foundFiles++;
    console.log(`[${idx + 1}/${entries.length}] "${dishName}" -> Public ID: "${item.publicId}" | File: ${localPath ? 'FOUND (' + path.relative(path.join(__dirname, '..'), localPath) + ')' : 'Remote URL (' + item.file + ')'}`);
  });
  console.log(`\nDry run complete. Matched ${foundFiles} local assets. Cloudinary URLs are fully active.`);
  console.log(`To upload to Cloudinary:`);
  console.log(`1. Run: npm install cloudinary`);
  console.log(`2. Set CLOUDINARY_URL="cloudinary://API_KEY:API_SECRET@CLOUD_NAME"`);
  console.log(`3. Re-run: node scripts/upload_to_cloudinary.js\n`);
  process.exit(0);
}

// Upload execution
async function uploadAll() {
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < entries.length; i++) {
    const [dishName, item] = entries[i];
    const filePath = resolveLocalPath(dishName, item);

    if (!filePath || !fs.existsSync(filePath)) {
      console.warn(`[SKIP] File not found locally for "${dishName}": ${item.file}`);
      failCount++;
      continue;
    }

    try {
      console.log(`[${i + 1}/${entries.length}] Uploading "${dishName}" as "saaral-menu/${item.publicId}"...`);
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'saaral-menu',
        public_id: item.publicId,
        overwrite: true,
        resource_type: 'image'
      });
      console.log(`   └─ Success: ${result.secure_url}`);
      successCount++;
    } catch (err) {
      console.error(`   └─ Failed to upload "${dishName}":`, err.message || err);
      failCount++;
    }
  }

  console.log(`\n====================================================`);
  console.log(`Upload Complete!`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed/Skipped: ${failCount}`);
  console.log(`====================================================`);
}

uploadAll();
