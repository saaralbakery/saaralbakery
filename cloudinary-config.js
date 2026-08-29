/* ==========================================================================
   SAARAL BAKES - CLOUDINARY CONFIGURATION & IMAGE MAPPER
   ========================================================================== */

const CLOUDINARY_CONFIG = {
  // 1. Enter your Cloudinary Cloud Name below (e.g., "saaralbakes")
  cloudName: "",

  // 2. Base folder in your Cloudinary Media Library
  folder: "saaral-menu",

  // 3. Enable Cloudinary delivery (Set to true once images are uploaded)
  enabled: false,

  // 4. Default transformations: auto format (WebP/AVIF), auto quality, max width 600px
  transformations: "f_auto,q_auto,w_600",

  /**
   * Helper to build full Cloudinary URL
   * @param {string} publicId - Cloudinary public ID of the image
   * @param {string} [transforms] - Custom transformation string (optional)
   * @returns {string|null} Full Cloudinary URL or null if cloudName not set
   */
  buildUrl: function(publicId, transforms) {
    if (!this.cloudName) return null;
    const tr = transforms || this.transformations;
    const folderPath = this.folder ? `${this.folder}/` : "";
    return `https://res.cloudinary.com/${this.cloudName}/image/upload/${tr}/${folderPath}${publicId}`;
  }
};

/* Full 100% dish-to-image mapping (Cloudinary Public IDs & Cloudinary Image URLs) */
const IMAGE_MAP = {
  "White Tea": {
    "publicId": "white_tea",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920198/whitw_tea.png"
  },
  "Kothumai Nattu Sakkarai Cake": {
    "publicId": "kothumai_nattu_sakkarai_cake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920973/kothumai_nattu_sakkarai_cake.png"
  },
  "Mushroom Fritters": {
    "publicId": "mushroom_fritters",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920213/mushroom_fritters.png"
  },
  "OG Rose Milk": {
    "publicId": "og_rose_milk",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920218/og_rose_milk.png"
  },
  "OG Badham Milk": {
    "publicId": "og_badham_milk",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787986503/og_Batham_milk.png"
  },
  "Paneer Fingers": {
    "publicId": "paneer_fingers",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920232/panner_fingers.png"
  },
  "Karuppatti Laddu (Per Kg)": {
    "publicId": "karuppatti_laddu",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920972/karuppatti_laddu.png"
  },
  "Coconut Opputtu": {
    "publicId": "coconut_opputtu",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920954/coconut_opputtu.png"
  },
  "Carrot Halwa with Icecream": {
    "publicId": "carrot_halwa_with_icecream",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920939/carrot_halwa_with_Icecreame.png"
  },
  "Gulab Jamun with Icecream": {
    "publicId": "gulab_jamun_with_icecream",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920970/gulab_jamun_with_ice_creame.png"
  },
  "Brownie with Icecream": {
    "publicId": "brownie_with_icecream",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920938/brownie_with_icecreame.png"
  },
  "Kulfi Cake": {
    "publicId": "kulfi_cake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920973/kulfi_cake.png"
  },
  "Panakarkandu Coconut Barfi (Per Kg)": {
    "publicId": "panakarkandu_coconut_barfi",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920227/panakarkandu_coconut_barfi.png"
  },
  "Milk": {
    "publicId": "milk",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920207/milk.png"
  },
  "Sukku Milk (Nattu Sakkarai)": {
    "publicId": "sukku_milk",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920181/sukku_milk.png"
  },
  "Black Tea": {
    "publicId": "black_tea",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920933/black_tea.png"
  },
  "Tea": {
    "publicId": "tea",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920184/Tea.png"
  },
  "Tea (Nattu Sakkarai)": {
    "publicId": "tea",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920184/tea_nattu_sakkarai.png"
  },
  "Enji Tea": {
    "publicId": "enji_tea",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920963/enji_tea.png"
  },
  "Green Tea": {
    "publicId": "green_tea",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920969/green_tea.png"
  },
  "Lemon Tea": {
    "publicId": "lemon_tea",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920975/Lemon_Tea.png"
  },
  "Black Coffee": {
    "publicId": "black_coffee",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920933/Black_Coffe.png"
  },
  "Filter Coffee": {
    "publicId": "filter_coffee",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920965/Filter_Coffee.png"
  },
  "Filter Coffee (Nattu Sakkarai)": {
    "publicId": "filter_coffee",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920972/ilter_Coffee_Nattu_Sakkarai.png"
  },
  "Sukku Coffee": {
    "publicId": "sukku_coffee",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920180/Sukku_Coffe.png"
  },
  "Badam Milk (Hot)": {
    "publicId": "badam_milk",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920933/Badam_Milk_Hot.png"
  },
  "Horlicks": {
    "publicId": "horlicks",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920971/Horlicks.png"
  },
  "Boost": {
    "publicId": "boost",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920938/boost.png"
  },
  "Aloo Samosa": {
    "publicId": "aloo_samosa",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920976/Aloo_Samosa.png"
  },
  "Veg Puffs": {
    "publicId": "veg_puffs",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920190/veg_puffs.png"
  },
  "Mushroom Puffs": {
    "publicId": "mushroom_puffs",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920216/Mushroom_Puffs.png"
  },
  "Paneer Puffs": {
    "publicId": "paneer_puffs",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920226/Paneer_Puffs.png"
  },
  "Egg Puffs": {
    "publicId": "egg_puffs",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920961/Egg_Puffs.png"
  },
  "Chicken Puffs": {
    "publicId": "chicken_puffs",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920948/Chicken_Puffs.png"
  },
  "Veg Roll": {
    "publicId": "veg_roll",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920194/veg_Roll.png"
  },
  "Mushroom Roll": {
    "publicId": "mushroom_roll",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920221/Mushroom_Roll.png"
  },
  "Egg Roll": {
    "publicId": "egg_roll",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920961/Egg_Roll.png"
  },
  "Chicken Roll": {
    "publicId": "chicken_roll",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920951/Chicken_Roll.png"
  },
  "Veg Sandwich": {
    "publicId": "veg_sandwich",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920192/Veg_Sandwich.png"
  },
  "Sweet Corn Sandwich": {
    "publicId": "sweet_corn_sandwich",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920187/Sweet_Corn_Sandwich.png"
  },
  "Mushroom Sandwich": {
    "publicId": "mushroom_sandwich",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920219/Mushroom_Sandwich.png"
  },
  "Cheese & Chilly Sandwich": {
    "publicId": "cheese_chilly_sandwich",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920941/Cheese_Chilly_Sandwich.png"
  },
  "Paneer Sandwich": {
    "publicId": "paneer_sandwich",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920227/Paneer_Sandwich.png"
  },
  "Egg Sandwich": {
    "publicId": "egg_sandwich",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920964/Egg_Sandwich.png"
  },
  "Chicken Sandwich": {
    "publicId": "chicken_sandwich",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920950/Chicken_Sandwich.png"
  },
  "Veg White Sauce Pasta": {
    "publicId": "veg_white_sauce_pasta",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920192/veg_white_sause_pasta.png"
  },
  "Veg Red Sauce Pasta": {
    "publicId": "veg_red_sauce_pasta",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920190/veg_red_sause_pasta.png"
  },
  "Veg Mixed Sauce Pasta": {
    "publicId": "veg_mixed_sauce_pasta",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920190/veg_mixed_sause_pasta.png"
  },
  "Veg Pizza": {
    "publicId": "veg_pizza",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920191/Veg_Pizza.png"
  },
  "Sweet Corn Pizza": {
    "publicId": "sweet_corn_pizza",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920182/Sweet_Corn_Pizza.png"
  },
  "Mushroom Pizza": {
    "publicId": "mushroom_pizza",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920216/Mushroom_Pizza.png"
  },
  "Cheese Pizza": {
    "publicId": "cheese_pizza",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920943/Cheese_Pizza.png"
  },
  "Paneer Pizza": {
    "publicId": "paneer_pizza",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920225/Paneer_Pizza.png"
  },
  "Mixed Veg Pizza": {
    "publicId": "mixed_veg_pizza",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920209/mixed_veg_pizza.png"
  },
  "Egg Pizza": {
    "publicId": "egg_pizza",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920959/egg_pizza.png"
  },
  "Chicken Pizza": {
    "publicId": "chicken_pizza",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920949/Chicken_Pizza.png"
  },
  "Veg Burger": {
    "publicId": "veg_burger",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920186/veg_burger.png"
  },
  "Sweet Corn Burger": {
    "publicId": "sweet_corn_burger",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920182/sweet_corn_burger.png"
  },
  "Mushroom Burger": {
    "publicId": "mushroom_burger",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787986659/Mushroom_burg.png"
  },
  "Cheese Burger": {
    "publicId": "cheese_burger",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920943/cheese_burger.png"
  },
  "Paneer Burger": {
    "publicId": "paneer_burger",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920228/panner_burger.png"
  },
  "Egg Burger": {
    "publicId": "egg_burger",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920960/egg_burger.png"
  },
  "Chicken Burger": {
    "publicId": "chicken_burger",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920945/Chicken_burger.png"
  },
  "Veg Wrap": {
    "publicId": "veg_wrap",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920195/veg_wrap.png"
  },
  "Sweet Corn Wrap": {
    "publicId": "sweet_corn_wrap",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920183/Sweet_corn_wrap.png"
  },
  "Mushroom Wrap": {
    "publicId": "mushroom_wrap",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920220/Mushroom_wrap.png"
  },
  "Paneer Wrap": {
    "publicId": "paneer_wrap",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920230/panner_wrap.png"
  },
  "Egg Wrap": {
    "publicId": "egg_wrap",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920963/egg_wrap.png"
  },
  "Chicken Wrap": {
    "publicId": "chicken_wrap",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920950/Chicken_Wrap.png"
  },
  "Veg Momos (5pcs)": {
    "publicId": "veg_momos",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920188/veg_momos.png"
  },
  "Paneer Momos (5pcs)": {
    "publicId": "paneer_momos",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920229/Panner_moms.png"
  },
  "Chicken Momos (5pcs)": {
    "publicId": "chicken_momos",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920947/Chicken_Momos.png"
  },
  "Veg Cutlet": {
    "publicId": "veg_cutlet",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920186/veg_Cutlet.png"
  },
  "Paneer Cutlet": {
    "publicId": "paneer_cutlet",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920230/panner_Cutlet.png"
  },
  "Chicken Cutlet": {
    "publicId": "chicken_cutlet",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920945/Chicken_Culet.png"
  },
  "Veg Nuggets (7pcs)": {
    "publicId": "veg_nuggets",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920190/veg_Nuggets.png"
  },
  "Cheese Corn Nuggets (7pcs)": {
    "publicId": "cheese_corn_nuggets",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920941/Cheese_corn_nuggets.png"
  },
  "Chicken Nuggets (7pcs)": {
    "publicId": "chicken_nuggets",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920947/Chicken_nuggets.png"
  },
  "French Fries": {
    "publicId": "french_fries",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920967/french_fries.png"
  },
  "Peri-Peri French Fries": {
    "publicId": "peri_peri_french_fries",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920236/peri_peri_french_fries.png"
  },
  "Cheese French Fries": {
    "publicId": "cheese_french_fries",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920942/Cheese_french_fries.png"
  },
  "Smiley Potato (7pcs)": {
    "publicId": "smiley_potato",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920176/Smiley.png"
  },
  "Fish Finger": {
    "publicId": "fish_finger",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920964/Fish_Finger.png"
  },
  "Bread Omelette": {
    "publicId": "bread_omelette",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920939/Bread_Omblete.png"
  },
  "Chicken Bread Omelette": {
    "publicId": "chicken_bread_omelette",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920943/Chicken_Bread_Omlete.png"
  },
  "Crispy Chicken Leg Piece (1pc)": {
    "publicId": "crispy_chicken_leg_piece",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920966/Fried_Leg.png"
  },
  "Crispy Chicken Popcorn (10pcs)": {
    "publicId": "crispy_chicken_popcorn",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920966/fried_chicken_popcorn.png"
  },
  "Crispy Chicken LolliPop (4pcs)": {
    "publicId": "crispy_chicken_lollipop",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920969/Fried_Lollipop.png"
  },
  "Punjabi Samosa": {
    "publicId": "punjabi_samosa",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920182/punjabi_samosa.png"
  },
  "Pani Puri": {
    "publicId": "pani_puri",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920229/Pani_puri.png"
  },
  "Masal Puri": {
    "publicId": "masal_puri",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920202/Masala_puri.png"
  },
  "Bhel Puri": {
    "publicId": "bhel_puri",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920933/Bhel_puri.png"
  },
  "Egg Bhel Puri": {
    "publicId": "egg_bhel_puri",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920957/Egg_bhel_puri.png"
  },
  "Mushroom Fry": {
    "publicId": "mushroom_fry",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920213/Mushroom_fry.png"
  },
  "Egg Mushroom Fry": {
    "publicId": "egg_mushroom_fry",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920959/Egg_Mushroom_Fry.png"
  },
  "Gobi Chilli": {
    "publicId": "gobi_chilli",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920972/Gobi_Chilli.png"
  },
  "Mushroom Chilli": {
    "publicId": "mushroom_chilli",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920212/Mushroom_Chilli.png"
  },
  "Baby Corn Chilli": {
    "publicId": "baby_corn_chilli",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920981/Baby_corn_Chilli.png"
  },
  "Paneer Chilli": {
    "publicId": "paneer_chilli",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920224/Paneer_Chilli.png"
  },
  "Chicken Chilli (Boneless)": {
    "publicId": "chicken_chilli",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920948/Chicken_chilli.png"
  },
  "Gobi Manchurian": {
    "publicId": "gobi_manchurian",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920971/Gobi_Manchurian.png"
  },
  "Mushroom Manchurian": {
    "publicId": "mushroom_manchurian",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920216/Mushroom_manchurian.png"
  },
  "Babycorn Manchurian": {
    "publicId": "babycorn_manchurian",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920980/Babycorn_Manchurian.png"
  },
  "Chicken Manchurian": {
    "publicId": "chicken_manchurian",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920944/Chicken_Manchurian.png"
  },
  "Veg Rice": {
    "publicId": "veg_rice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920192/veg_Rice.png"
  },
  "Veg Noodles": {
    "publicId": "veg_noodles",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920188/Veg_noodles.png"
  },
  "Gobi Rice": {
    "publicId": "gobi_rice",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920969/Gobi_rice.png"
  },
  "Gobi Noodles": {
    "publicId": "gobi_noodles",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920968/Gobi_Noodles.png"
  },
  "Mushroom Rice": {
    "publicId": "mushroom_rice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920217/Mushroom_rice.png"
  },
  "Mushroom Noodles": {
    "publicId": "mushroom_noodles",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920215/Mushroom_Noodles.png"
  },
  "Egg Rice": {
    "publicId": "egg_rice",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920961/Egg_rice.png"
  },
  "Egg Noodles": {
    "publicId": "egg_noodles",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920959/Egg_Noodles.png"
  },
  "Chicken Rice": {
    "publicId": "chicken_rice",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920949/Chicken_Rice.png"
  },
  "Chicken Noodles": {
    "publicId": "chicken_noodles",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920946/Chicken_noodles.png"
  },
  "Vanilla Thick Shake": {
    "publicId": "vanilla_thick_shake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920198/VenillaThickShake.png"
  },
  "Strawberry Thick Shake": {
    "publicId": "strawberry_thick_shake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920183/StrawberryThickShake.png"
  },
  "Cold Boost Shake": {
    "publicId": "cold_boost_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920955/ColdBoostShake.png"
  },
  "Cold Coffee Shake": {
    "publicId": "cold_coffee_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920957/ColdCofeeShake.png"
  },
  "Pista Thick Shake": {
    "publicId": "pista_thick_shake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787986517/Pistha.png"
  },
  "Mango Thick Shake": {
    "publicId": "mango_thick_shake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920204/Mangosh.png"
  },
  "Chocolate Thick Shake": {
    "publicId": "chocolate_thick_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920959/ChocolateShake.png"
  },
  "Butterscotch Thick Shake": {
    "publicId": "butterscotch_thick_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920941/ButterscatchShake.png"
  },
  "Blackcurrant Thick Shake": {
    "publicId": "blackcurrant_thick_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920937/BlackcurrentShake.png"
  },
  "Oreo Shake": {
    "publicId": "oreo_shake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920228/OreaShake.png"
  },
  "Kitkat Shake": {
    "publicId": "kitkat_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920975/KitkatShake.png"
  },
  "Dairy Milk Shake": {
    "publicId": "dairy_milk_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920963/DairyMilkShake.png"
  },
  "Brownie Shake": {
    "publicId": "brownie_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920938/BrownieShake.png"
  },
  "Blackforest Shake": {
    "publicId": "blackforest_shake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920957/ColdCofeeShake.png"
  },
  "Red Velvet Shake": {
    "publicId": "red_velvet_shake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920204/RedVelvetShake.png"
  },
  "Normal Falooda": {
    "publicId": "normal_falooda",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920226/NormalFalooda.png"
  },
  "Royal Falooda": {
    "publicId": "royal_falooda",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920186/RoyalFalooda.png"
  },
  "Arabian Falooda": {
    "publicId": "arabian_falooda",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920983/ArabianFalooda.png"
  },
  "Lemon Juice (Pure)": {
    "publicId": "lemon_juice",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920980/LemonJuice.png"
  },
  "Watermelon Juice (Pure)": {
    "publicId": "watermelon_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920196/Watermelon_Juice.png"
  },
  "Lemon Mint Juice": {
    "publicId": "lemon_mint_juice",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920978/LemonMint.png"
  },
  "Lemon Soda": {
    "publicId": "lemon_soda",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920212/LemonSodaa.png"
  },
  "Mulampalam Juice (Pure)": {
    "publicId": "mulampalam_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920214/Mulampalam.png"
  },
  "Mulampalam Juice (Normal)": {
    "publicId": "mulampalam_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920214/Mulampalam.png"
  },
  "Pineapple Juice (Pure)": {
    "publicId": "pineapple_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920177/PineAppleApplr.png"
  },
  "Pineapple Juice (Normal)": {
    "publicId": "pineapple_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920177/PineAppleApplr.png"
  },
  "Mosambi Juice (Pure)": {
    "publicId": "mosambi_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920209/Mosambi.png"
  },
  "Mosambi Juice (Normal)": {
    "publicId": "mosambi_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920209/Mosambi.png"
  },
  "Orange Juice (Pure)": {
    "publicId": "orange_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920224/OrangeJuice.png"
  },
  "Orange Juice (Normal)": {
    "publicId": "orange_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920224/OrangeJuice.png"
  },
  "Apple Juice (Pure)": {
    "publicId": "apple_juice",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920982/AppleJuice.png"
  },
  "Apple Juice (Normal)": {
    "publicId": "apple_juice",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920982/AppleJuice.png"
  },
  "Mathulai Juice (Pure)": {
    "publicId": "mathulai_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920210/Mathulai.png"
  },
  "Mathulai Juice (Normal)": {
    "publicId": "mathulai_juice",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920210/Mathulai.png"
  },
  "Lemon Mint Mojito": {
    "publicId": "lemon_mint_mojito",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787921541/LemonMintMojito.png"
  },
  "Blueberry Mojito": {
    "publicId": "blueberry_mojito",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787921541/BlueBerryMojito.png"
  },
  "Green Apple Mojito": {
    "publicId": "green_apple_mojito",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787921541/GreenAppleMojito.png"
  },
  "Strawberry Mojito": {
    "publicId": "strawberry_mojito",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787931406/StrawberryMojito.png"
  },
  "Watermelon Mojito": {
    "publicId": "watermelon_mojito",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920196/WatermelonMojito.png"
  },
  "Baked Cheesecake": {
    "publicId": "baked_cheesecake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920933/Baked_Chassecake.png"
  },
  "Malai Cheesecake": {
    "publicId": "malai_cheesecake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920205/Malai_Cheesecake.png"
  },
  "Lotus Biscoff Cake": {
    "publicId": "lotus_biscoff_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920198/Lotus_Biscoff_Cake.png"
  },
  "Matilda Cake": {
    "publicId": "matilda_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920207/Matalida_Cake.png"
  },
  "Russian Honey Cake": {
    "publicId": "russian_honey_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920175/Russian_Honey_Cake.png"
  },
  "Milk Cake": {
    "publicId": "milk_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920228/Milk_Cake.png"
  },
  "Pistachio Nutella Cake": {
    "publicId": "pistachio_nutella_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920180/Pistachino_Nutella_CAke.png"
  },
  "Opera Cake": {
    "publicId": "opera_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920221/Opera_Cake.png"
  },
  "Tiramisu": {
    "publicId": "tiramisu",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787931427/Tiramisu.png"
  },
  "Ferrero Nutella Cake (Bento Cake)": {
    "publicId": "ferrero_nutella_cake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920967/Ferrero_Nutella_Cake.png"
  },
  "Vanilla (1 Scoop)": {
    "publicId": "vanilla",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920193/Venilla.png"
  },
  "Strawberry (1 Scoop)": {
    "publicId": "strawberry",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920179/Strawberry.png"
  },
  "Pista (1 Scoop)": {
    "publicId": "pista",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920172/Pista.png"
  },
  "Mango (1 Scoop)": {
    "publicId": "mango",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920208/Mango.png"
  },
  "Chocolate (1 Scoop)": {
    "publicId": "chocolate",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920954/Chocolate.png"
  },
  "Butterscotch (1 Scoop)": {
    "publicId": "butterscotch",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920949/Butterscotch.png"
  },
  "Blackcurrent (1 Scoop)": {
    "publicId": "blackcurrent",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920934/Blackcurrent.png"
  },
  "Boat Ice Cream": {
    "publicId": "boat_ice_cream",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920941/Boat.png"
  },
  "Sukku Milk": {
    "publicId": "sukku_coffee",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920180/Sukku_Coffe.png"
  },
  "Ferrero Nutella Bento Cake": {
    "publicId": "ferrero_nutella_cake",
    "file": "https://res.cloudinary.com/lgwou4eo/image/upload/v1787920967/Ferrero_Nutella_Cake.png"
  },
  "Red Velvet Cream Cheese Bento Cake": {
    "publicId": "red_velvet_shake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920204/RedVelvetShake.png"
  },
  "Chocolate Truffle Bento Cake": {
    "publicId": "opera_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920221/Opera_Cake.png"
  },
  "Lotus Biscoff Bento Cake": {
    "publicId": "lotus_biscoff_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920198/Lotus_Biscoff_Cake.png"
  },
  "Mango Passion Bento Cake": {
    "publicId": "russian_honey_cake",
    "file": "https://res.cloudinary.com/nv10e8u3/image/upload/v1787920175/Russian_Honey_Cake.png"
  }
};

/**
 * Returns the best available image URL for a given menu item.
 * Priority:
 * 1. Custom LocalStorage uploaded image (if any)
 * 2. Cloudinary URL (if enabled & cloudName configured)
 * 3. Direct Cloudinary image URL from IMAGE_MAP
 * 4. DEFAULT_FOOD_IMAGES or CATEGORY_DEFAULT_IMAGES fallback
 * 5. Unsplash fallback
 */
function getItemImageUrl(item) {
  if (!item) return "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80";

  const itemName = typeof item === 'string' ? item : item.name;
  const itemId = typeof item === 'object' && item ? item.id : null;
  const itemCat = typeof item === 'object' && item ? item.cat : null;

  // 1. Check custom local storage overrides
  if (itemId) {
    try {
      const savedCustom = localStorage.getItem('saaral_custom_images');
      if (savedCustom) {
        const customMap = JSON.parse(savedCustom);
        if (customMap[itemId]) return customMap[itemId];
      }
    } catch (e) {}
  }

  // 2. Check IMAGE_MAP
  const mapped = IMAGE_MAP[itemName];
  if (mapped) {
    if (CLOUDINARY_CONFIG.enabled && CLOUDINARY_CONFIG.cloudName) {
      const cloudUrl = CLOUDINARY_CONFIG.buildUrl(mapped.publicId);
      if (cloudUrl) return cloudUrl;
    }
    if (mapped.file) return mapped.file;
  }

  // 3. Fallback to DEFAULT_FOOD_IMAGES or CATEGORY_DEFAULT_IMAGES
  if (typeof DEFAULT_FOOD_IMAGES !== 'undefined' && itemName && DEFAULT_FOOD_IMAGES[itemName]) {
    return DEFAULT_FOOD_IMAGES[itemName];
  }
  if (typeof CATEGORY_DEFAULT_IMAGES !== 'undefined' && itemCat && CATEGORY_DEFAULT_IMAGES[itemCat]) {
    return CATEGORY_DEFAULT_IMAGES[itemCat];
  }

  return "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80";
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CLOUDINARY_CONFIG, IMAGE_MAP, getItemImageUrl };
}
