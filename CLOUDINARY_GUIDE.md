# Cloudinary Integration & Image Optimization Guide

This guide explains how to upload and serve optimized images for **Saaral** using **Cloudinary**.

---

## ⚡ Benefits of Cloudinary for Saaral

- **Blazing Fast Load Times**: Automatically converts high-res `.png` images (~800MB total) into lightweight `.webp` or `.avif` formats.
- **Smart Quality Compression (`q_auto`)**: Reduces file sizes by up to 70% without visible loss in quality.
- **Responsive Resizing (`w_600`)**: Delivers ideal image dimensions for mobile and desktop screens.
- **Instant Fallback**: If Cloudinary is disabled or offline, the app seamlessly falls back to your local `./images/` folder.

---

## 🚀 Quick Setup Instructions

### Step 1: Create a Free Cloudinary Account
1. Sign up for a free account at [https://cloudinary.com](https://cloudinary.com).
2. Go to your Cloudinary Dashboard and note down your **Cloud Name** (e.g. `saaralbakes`).

---

### Step 2: Upload Project Images to Cloudinary

You have **two easy methods** to upload your local `images/` folder:

#### Option A: Automated 1-Click Upload Script (Recommended)
1. Open PowerShell or Command Prompt in the project folder:
   ```bash
   npm install cloudinary
   ```
2. Set your Cloudinary URL (found on your Cloudinary Dashboard):
   - **Windows PowerShell**:
     ```powershell
     $env:CLOUDINARY_URL="cloudinary://API_KEY:API_SECRET@YOUR_CLOUD_NAME"
     ```
   - **Linux / macOS**:
     ```bash
     export CLOUDINARY_URL="cloudinary://API_KEY:API_SECRET@YOUR_CLOUD_NAME"
     ```
3. Run the upload script:
   ```bash
   node scripts/upload_to_cloudinary.js
   ```
   *The script will automatically upload all 164 images to the `saaral-menu/` folder in your Cloudinary account with clean public IDs.*

---

#### Option B: Drag & Drop via Cloudinary Web Dashboard
1. Log in to [Cloudinary Media Library](https://console.cloudinary.com/pm/media-library).
2. Click **Add Folder** and name it `saaral-menu`.
3. Drag & drop all 164 `.png` files from `./images/` into `saaral-menu`.

---

### Step 3: Enable Cloudinary in Saaral

1. Open `cloudinary-config.js` in your code editor.
2. Update the configuration section at the top:
   ```javascript
   const CLOUDINARY_CONFIG = {
     cloudName: "YOUR_CLOUD_NAME_HERE", // e.g. "saaralbakes"
     folder: "saaral-menu",
     enabled: true, // Change from false to true
     transformations: "f_auto,q_auto,w_600",
   };
   ```
3. Save the file and refresh `index.html`! Your website will now load lightning-fast optimized images directly from Cloudinary.

---

## 🛠️ File Structure Overview

- `cloudinary-config.js` - Contains Cloudinary credentials, transformation rules, and full 171-item image mappings.
- `scripts/upload_to_cloudinary.js` - Automated Node.js script for batch uploading local images to Cloudinary.
- `images/` - Contains all 164 local fallback image files.
