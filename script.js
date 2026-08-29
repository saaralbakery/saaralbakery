/**
 * SAARAL BAKES - DIGITAL MENU APPLICATION
 * Comprehensive database and interactivity for Saaral Bakes & Cafe.
 * Features:
 * - 100+ authentic menu items from Sample screenshots
 * - 18 Categories + Must Try & Saaral Special
 * - Pure/Normal juice variants, multi-scoop ice creams
 * - Grid View vs In-Store Chalkboard Menu Card View
 * - English & Tamil (தமிழ்) language toggle
 * - Table number / Takeaway selector
 * - 5% GST computation & itemized WhatsApp checkout
 * - Live Review dialog & dynamic customer testimonials
 * - Side Step Tracker (01, 02, 03, 04) & FAQ accordion
 */

// ==========================================================================
// 1. COMPREHENSIVE MENU DATABASE (Extracted 100% from Sample Screenshots)
// ==========================================================================
const MENU_DATA = [
  // --- MUST TRY (From Screenshot 135547) ---
  {
    id: 'mt-1',
    name: 'White Tea',
    nameTa: 'வெள்ளை தேநீர் (White Tea)',
    category: 'Must Try',
    subCategory: 'Tea & Coffee',
    price: 60,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Delicate, minimally processed young tea leaves offering a subtle floral sweetness and high antioxidants.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mt-2',
    name: 'Kothumai Nattu Sakkarai Cake',
    nameTa: 'கோதுமை நாட்டு சர்க்கரை கேக்',
    category: 'Must Try',
    subCategory: 'Dessert',
    price: 100,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Traditional healthy whole wheat cake sweetened with organic country brown sugar (Nattu Sakkarai).',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mt-3',
    name: 'Mushroom Fritters',
    nameTa: 'மஷ்ரூம் ஃப்ரிட்டர்ஸ் (Mushroom Fritters)',
    category: 'Must Try',
    subCategory: 'Snacks',
    price: 120,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Golden crisp batter-fried button mushrooms seasoned with aromatic freshly crushed pepper.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mt-4',
    name: 'OG Rose Milk',
    nameTa: 'ஓஜி ரோஸ் மில்க் (OG Rose Milk)',
    category: 'Must Try',
    subCategory: 'Milkshakes',
    price: 120,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Our legendary vintage recipe chilled rose milk made with rich chilled milk and authentic rose essence.',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mt-5',
    name: 'OG Badham Milk',
    nameTa: 'ஓஜி பாதாம் மில்க் (OG Badham Milk)',
    category: 'Must Try',
    subCategory: 'Milkshakes',
    price: 120,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Creamy chilled milk slow-simmered with crushed almonds, saffron strands, and cardamom.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mt-6',
    name: 'Paneer Fingers',
    nameTa: 'பன்னீர் ஃபிங்கர்ஸ் (Paneer Fingers)',
    category: 'Must Try',
    subCategory: 'Snacks',
    price: 150,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Succulent malai paneer batons coated in herbed panko crumbs and fried to golden crunchy perfection.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mt-7',
    name: 'Karuppatti Laddu (Per Kg)',
    nameTa: 'கருப்பட்டி லட்டு (1 கிலோ)',
    category: 'Must Try',
    subCategory: 'Dessert',
    price: 600,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Heritage authentic palm jaggery laddu packed with roasted gram, pure ghee, and nuts. Sold per kg.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80'
  },

  // --- SAARAL SPECIAL (From Screenshot 135547) ---
  {
    id: 'ss-1',
    name: 'Coconut Opputtu',
    nameTa: 'தேங்காய் போளி / ஒப்புட்டு (Coconut Opputtu)',
    category: 'Saaral Special',
    subCategory: 'Dessert',
    price: 25,
    diet: 'veg',
    isSpecial: true,
    isMustTry: false,
    desc: 'Soft melt-in-mouth traditional sweet flatbread stuffed with grated coconut and jaggery roasted in pure ghee.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ss-2',
    name: 'Carrot Halwa with Icecream',
    nameTa: 'கேரட் அல்வா வித் ஐஸ்கிரீம்',
    category: 'Saaral Special',
    subCategory: 'Dessert',
    price: 100,
    diet: 'veg',
    isSpecial: true,
    isMustTry: false,
    desc: 'Warm rich Gajar Halwa prepared with grated red carrots, khoya and ghee, served with a scoop of vanilla ice cream.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ss-3',
    name: 'Gulab Jamun with Icecream',
    nameTa: 'குலாப் ஜாமுன் வித் ஐஸ்கிரீம்',
    category: 'Saaral Special',
    subCategory: 'Dessert',
    price: 100,
    diet: 'veg',
    isSpecial: true,
    isMustTry: false,
    desc: 'Two soft hot syrup-soaked gulab jamuns paired with a creamy cold vanilla ice cream scoop.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ss-4',
    name: 'Brownie with Icecream',
    nameTa: 'பிரவுனி வித் ஐஸ்கிரீம் (Brownie with Icecream)',
    category: 'Saaral Special',
    subCategory: 'Dessert',
    price: 120,
    diet: 'veg',
    isSpecial: true,
    isMustTry: true,
    desc: 'Warm, gooey chocolate fudge brownie with molten center, crowned with vanilla ice cream and hot chocolate sauce.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ss-5',
    name: 'Kulfi Cake',
    nameTa: 'குல்ஃபி கேக் (Kulfi Cake)',
    category: 'Saaral Special',
    subCategory: 'Dessert',
    price: 120,
    diet: 'veg',
    isSpecial: true,
    isMustTry: false,
    desc: 'Exquisite fusion gateau infused with creamy malai kulfi, saffron, cardamom, and chopped pistachios.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ss-6',
    name: 'Panakarkandu Coconut Barfi (Per Kg)',
    nameTa: 'பனங்கற்கண்டு தேங்காய் பர்பி (1 கிலோ)',
    category: 'Saaral Special',
    subCategory: 'Dessert',
    price: 1000,
    diet: 'veg',
    isSpecial: true,
    isMustTry: false,
    desc: 'Premium traditional coconut fudge made with pure natural palm candy (Panakarkandu). Sold per kg.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80'
  },

  // --- TEA & COFFEE (From Screenshot 135556 & 135531) ---
  {
    id: 'tc-1',
    name: 'Milk',
    nameTa: 'பால் (Fresh Cow Milk)',
    category: 'Tea & Coffee',
    price: 15,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Hot boiled pure farm-fresh cow milk.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-2',
    name: 'Sukku Milk (Nattu Sakkarai)',
    nameTa: 'சுக்கு பால் (நாட்டு சர்க்கரை)',
    category: 'Tea & Coffee',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Herbal digestive hot milk brewed with dry ginger, black pepper, and organic country brown sugar.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-3',
    name: 'Black Tea',
    nameTa: 'பிளாக் டீ (Black Tea)',
    category: 'Tea & Coffee',
    price: 15,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Strong brewed Nilgiri black tea served hot.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-4',
    name: 'Tea',
    nameTa: 'டீ (Saaral Special Tea)',
    category: 'Tea & Coffee',
    price: 20,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Slow brewed tea prepared with fresh cow milk for an authentic, home style taste.',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-5',
    name: 'Tea (Nattu Sakkarai)',
    nameTa: 'டீ (நாட்டு சர்க்கரை)',
    category: 'Tea & Coffee',
    price: 20,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Fragrant home style milk tea sweetened with healthy unprocessed Nattu Sakkarai.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-6',
    name: 'Enji Tea',
    nameTa: 'இஞ்சி டீ (Ginger Tea)',
    category: 'Tea & Coffee',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Refreshing milk tea infused with freshly crushed zesty ginger root.',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-7',
    name: 'Green Tea',
    nameTa: 'கிரீன் டீ (Green Tea)',
    category: 'Tea & Coffee',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Pure whole leaf green tea infused with light grassy notes and revitalizing antioxidants.',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-8',
    name: 'Lemon Tea',
    nameTa: 'லெமன் டீ (Lemon Tea)',
    category: 'Tea & Coffee',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Clear black tea spiked with freshly squeezed lemon juice and a touch of sweetness.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-9',
    name: 'Black Coffee',
    nameTa: 'பிளாக் காபி (Black Coffee)',
    category: 'Tea & Coffee',
    price: 20,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Bold, dark roasted freshly brewed coffee decoction without milk.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-10',
    name: 'Filter Coffee',
    nameTa: 'ஃபில்டர் காபி (Filter Coffee)',
    category: 'Tea & Coffee',
    price: 30,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Authentic aromatic South Indian filter coffee brewed with fresh frothy cow milk.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-11',
    name: 'Filter Coffee (Nattu Sakkarai)',
    nameTa: 'ஃபில்டர் காபி (நாட்டு சர்க்கரை)',
    category: 'Tea & Coffee',
    price: 30,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Traditional degree filter coffee sweetened with country unrefined brown sugar.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-12',
    name: 'Sukku Coffee',
    nameTa: 'சுக்கு காபி (Sukku Coffee)',
    category: 'Tea & Coffee',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Traditional herbal decoction made with dry ginger, coriander seeds, pepper, and palm jaggery.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-13',
    name: 'Badam Milk (Hot)',
    nameTa: 'சூடான பாதாம் பால் (Hot Badam Milk)',
    category: 'Tea & Coffee',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Warm comforting milk enriched with crushed badam (almond) powder and saffron aroma.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-14',
    name: 'Horlicks',
    nameTa: 'ஹார்லிக்ஸ் (Hot Horlicks)',
    category: 'Tea & Coffee',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Warm nourishing malt beverage blended with hot creamy milk.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'tc-15',
    name: 'Boost',
    nameTa: 'பூஸ்ட் (Hot Boost)',
    category: 'Tea & Coffee',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Chocolate malt energy drink mixed with piping hot frothy milk.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80'
  },

  // --- CRISPY BITES (From Screenshot 135556) ---
  {
    id: 'cb-1',
    name: 'Aloo Samosa',
    nameTa: 'ஆலூ சமோசா (Aloo Samosa)',
    category: 'Crispy Bites',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Flaky golden pastry pocket stuffed with spiced potato and green peas masala.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-2',
    name: 'Veg Puffs',
    nameTa: 'வெஜ் பஃப்ஸ் (Veg Puffs)',
    category: 'Crispy Bites',
    price: 25,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crispy multi-layered puff pastry filled with seasoned mixed vegetable filling.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-3',
    name: 'Mushroom Puffs',
    nameTa: 'மஷ்ரூம் பஃப்ஸ் (Mushroom Puffs)',
    category: 'Crispy Bites',
    price: 30,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Baked flaky puff stuffed with sautéed spiced button mushrooms and onions.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-4',
    name: 'Paneer Puffs',
    nameTa: 'பன்னீர் பஃப்ஸ் (Paneer Puffs)',
    category: 'Crispy Bites',
    price: 40,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Buttery flaky bakery puff packed with tender paneer cubes in tikka spices.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-5',
    name: 'Egg Puffs',
    nameTa: 'முட்டை பஃப்ஸ் (Egg Puffs)',
    category: 'Crispy Bites',
    price: 25,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Golden crisp puff loaded with boiled egg half and caramelized onion masala.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-6',
    name: 'Chicken Puffs',
    nameTa: 'சிக்கன் பஃப்ஸ் (Chicken Puffs)',
    category: 'Crispy Bites',
    price: 40,
    diet: 'non-veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Oven-baked flaky pastry envelope filled with spicy shredded chicken masala.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-7',
    name: 'Veg Roll',
    nameTa: 'வெஜ் ரோல் (Veg Roll)',
    category: 'Crispy Bites',
    price: 30,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Breadcrumb-crusted deep fried roll stuffed with spiced mixed vegetables.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-8',
    name: 'Mushroom Roll',
    nameTa: 'மஷ்ரூம் ரோல் (Mushroom Roll)',
    category: 'Crispy Bites',
    price: 40,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crispy crust cylinder filled with pepper-tossed button mushrooms.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-9',
    name: 'Egg Roll',
    nameTa: 'முட்டை ரோல் (Egg Roll)',
    category: 'Crispy Bites',
    price: 40,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crunchy golden roll packed with spiced egg scramble and herbs.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cb-10',
    name: 'Chicken Roll',
    nameTa: 'சிக்கன் ரோல் (Chicken Roll)',
    category: 'Crispy Bites',
    price: 50,
    diet: 'non-veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crispy fried snack roll filled with juicy seasoned minced chicken.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },

  // --- SANDWICH (From Screenshot 135537) ---
  {
    id: 'sw-1',
    name: 'Veg Sandwich',
    nameTa: 'வெஜ் சாண்ட்விச் (Veg Sandwich)',
    category: 'Sandwich',
    price: 130,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Toasted bread filled with Cheese, Fresh Salads, cucumber, tomatoes and mint chutney.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sw-2',
    name: 'Sweet Corn Sandwich',
    nameTa: 'ஸ்வீட் கார்ன் சாண்ட்விச் (Sweet Corn Sandwich)',
    category: 'Sandwich',
    price: 145,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Golden toasted bread loaded with melted Cheese and juicy Sweet Corn kernels.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sw-3',
    name: 'Mushroom Sandwich',
    nameTa: 'மஷ்ரூம் சாண்ட்விச் (Mushroom Sandwich)',
    category: 'Sandwich',
    price: 160,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Grilled sandwich packed with Cheese, Mushroom Gravy, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sw-4',
    name: 'Cheese & Chilly Sandwich',
    nameTa: 'சீஸ் & சில்லி சாண்ட்விச் (Cheese & Chilly Sandwich)',
    category: 'Sandwich',
    price: 160,
    diet: 'veg',
    isMustTry: false,
    isSpecial: true,
    desc: 'Spicy and cheesy classic with melted Cheese, Green Chilly, and toasted golden crust.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sw-5',
    name: 'Paneer Sandwich',
    nameTa: 'பன்னீர் சாண்ட்விச் (Paneer Sandwich)',
    category: 'Sandwich',
    price: 170,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Grilled sandwich loaded with Cheese, Paneer Gravy, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sw-6',
    name: 'Egg Sandwich',
    nameTa: 'முட்டை சாண்ட்விச் (Egg Sandwich)',
    category: 'Sandwich',
    price: 170,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Grilled bread filled with Cheese, Egg Gravy, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sw-7',
    name: 'Chicken Sandwich',
    nameTa: 'சிக்கன் சாண்ட்விச் (Chicken Sandwich)',
    category: 'Sandwich',
    price: 200,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Delicious grilled sandwich packed with Cheese, Chicken Gravy, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&auto=format&fit=crop&q=80'
  },

  // --- PIZZA (From Screenshot 135537 & 135531) ---
  {
    id: 'pz-1',
    name: 'Veg Pizza',
    nameTa: 'வெஜ் பீட்சா (Veg Pizza)',
    category: 'Pizza',
    price: 140,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Hand-stretched crust baked with rich tomato sauce, Cheese, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pz-2',
    name: 'Sweet Corn Pizza',
    nameTa: 'ஸ்வீட் கார்ன் பீட்சா (Sweet Corn Pizza)',
    category: 'Pizza',
    price: 150,
    diet: 'veg',
    isMustTry: false,
    isSpecial: true,
    desc: 'Topped with sweet golden corn kernels and generous gooey melted Cheese.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pz-3',
    name: 'Mushroom Pizza',
    nameTa: 'மஷ்ரூம் பீட்சா (Mushroom Pizza)',
    category: 'Pizza',
    price: 170,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Loaded with Cheese, savoury Mushroom Gravy, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pz-4',
    name: 'Cheese Pizza',
    nameTa: 'சீஸ் பீட்சா (Cheese Pizza)',
    category: 'Pizza',
    price: 190,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Loaded with stretchy cheese, baked golden, and topped with bold green chilly flavors.',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pz-5',
    name: 'Paneer Pizza',
    nameTa: 'பன்னீர் பீட்சா (Paneer Pizza)',
    category: 'Pizza',
    price: 230,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Topped with Cheese, spicy marinated Paneer Gravy, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pz-6',
    name: 'Mixed Veg Pizza',
    nameTa: 'மிக்ஸ்டு வெஜ் பீட்சா (Mixed Veg Pizza)',
    category: 'Pizza',
    price: 250,
    diet: 'veg',
    isMustTry: true,
    isSpecial: true,
    desc: 'Grand feast topped with Cheese, Sweet Corn, Mushroom, Paneer, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pz-7',
    name: 'Egg Pizza',
    nameTa: 'முட்டை பீட்சா (Egg Pizza)',
    category: 'Pizza',
    price: 170,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Freshly baked pizza topped with Cheese, spiced Egg Gravy, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pz-8',
    name: 'Chicken Pizza',
    nameTa: 'சிக்கன் பீட்சா (Chicken Pizza)',
    category: 'Pizza',
    price: 230,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Loaded with melted Cheese, succulent Chicken Gravy, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80'
  },

  // --- PASTA (From Screenshot 135537) ---
  {
    id: 'ps-1',
    name: 'Veg White Sauce Pasta',
    nameTa: 'வெஜ் ஒயிட் சாஸ் பாஸ்தா (White Sauce Pasta)',
    category: 'Pasta',
    price: 150,
    diet: 'veg',
    isMustTry: true,
    isSpecial: true,
    desc: 'Penne pasta tossed in rich parmesan cream sauce, sauteed garlic, and Italian herbs.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ps-2',
    name: 'Veg Red Sauce Pasta',
    nameTa: 'வெஜ் ரெட் சாஸ் பாஸ்தா (Red Sauce Pasta)',
    category: 'Pasta',
    price: 150,
    diet: 'veg',
    isMustTry: false,
    isSpecial: true,
    desc: 'Penne pasta simmered in tangy Italian arrabbiata tomato sauce with oregano and basil.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ps-3',
    name: 'Veg Mixed Sauce Pasta',
    nameTa: 'வெஜ் மிக்ஸ்டு சாஸ் பாஸ்தா (Pink Sauce Pasta)',
    category: 'Pasta',
    price: 170,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'The best of both worlds — creamy white alfredo blended with tangy red arrabbiata sauce.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?w=600&auto=format&fit=crop&q=80'
  },

  // --- BURGUR (From Screenshot 135616 & 135531) ---
  {
    id: 'bg-1',
    name: 'Veg Burger',
    nameTa: 'வெஜ் பர்கர் (Veg Burger)',
    category: 'Burgur',
    price: 110,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Juicy patty layered with fresh veggies, sliced cheese, and signature sauce.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg-2',
    name: 'Sweet Corn Burger',
    nameTa: 'ஸ்வீட் கார்ன் பர்கர் (Sweet Corn Burger)',
    category: 'Burgur',
    price: 130,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crispy patty loaded with Sliced Cheese, sweet corn relish, and crunchy greens.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg-3',
    name: 'Mushroom Burger',
    nameTa: 'மஷ்ரூம் பர்கர் (Mushroom Burger)',
    category: 'Burgur',
    price: 160,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Stacked with Sliced Cheese, Sautéed Mushroom, Veg Patty, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg-4',
    name: 'Cheese Burger',
    nameTa: 'சீஸ் பர்கர் (Cheese Burger)',
    category: 'Burgur',
    price: 160,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Double Sliced Cheese, seasoned Veg Patty, Fresh Salads, and house secret burger sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg-5',
    name: 'Paneer Burger',
    nameTa: 'பன்னீர் பர்கர் (Paneer Burger)',
    category: 'Burgur',
    price: 180,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Sliced Cheese, spicy Paneer Filling & Crispy Patty, with Fresh Salads on toasted brioche bun.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg-6',
    name: 'Egg Burger',
    nameTa: 'முட்டை பர்கர் (Egg Burger)',
    category: 'Burgur',
    price: 150,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Toasted bun packed with Sliced Cheese, seasoned Egg Filling, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg-7',
    name: 'Chicken Burger',
    nameTa: 'சிக்கன் பர்கர் (Chicken Burger)',
    category: 'Burgur',
    price: 180,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Juicy Chicken Patty topped with Sautéed Chicken bits, Sliced Cheese, and Fresh Salads.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=80'
  },

  // --- WRAPS (From Screenshot 135616) ---
  {
    id: 'wr-1',
    name: 'Veg Wrap',
    nameTa: 'வெஜ் ராப் (Veg Wrap)',
    category: 'Wraps',
    price: 110,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Fresh Salads and seasoned veggies Wrapped With Soft Tortilla and house dressing.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'wr-2',
    name: 'Sweet Corn Wrap',
    nameTa: 'ஸ்வீட் கார்ன் ராப் (Sweet Corn Wrap)',
    category: 'Wraps',
    price: 130,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Sweet Corn & Fresh Salads Wrapped With Soft Tortilla and melted cheese drizzle.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'wr-3',
    name: 'Mushroom Wrap',
    nameTa: 'மஷ்ரூம் ராப் (Mushroom Wrap)',
    category: 'Wraps',
    price: 150,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Sautéed pepper Mushroom & Fresh Salads Wrapped With Soft Tortilla.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'wr-4',
    name: 'Paneer Wrap',
    nameTa: 'பன்னீர் ராப் (Paneer Wrap)',
    category: 'Wraps',
    price: 170,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Marinated tikka Paneer & Fresh Salads Wrapped With Soft Tortilla with mint mayo.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'wr-5',
    name: 'Egg Wrap',
    nameTa: 'முட்டை ராப் (Egg Wrap)',
    category: 'Wraps',
    price: 150,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Egg Filling & Fresh Salads Wrapped With Soft Tortilla and zesty spice mix.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'wr-6',
    name: 'Chicken Wrap',
    nameTa: 'சிக்கன் ராப் (Chicken Wrap)',
    category: 'Wraps',
    price: 180,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Tender grilled Chicken & Fresh Salads Wrapped With Soft Tortilla with garlic aioli.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },

  // --- MOMOS (From Screenshot 135616) ---
  {
    id: 'mm-1',
    name: 'Veg Momos (5pcs)',
    nameTa: 'வெஜ் மோமோஸ் 5 பீஸ் (Veg Momos)',
    category: 'Momos',
    price: 90,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Delicate steamed dumplings stuffed with finely minced seasoned vegetables, served with spicy red chutney.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mm-2',
    name: 'Paneer Momos (5pcs)',
    nameTa: 'பன்னீர் மோமோஸ் 5 பீஸ் (Paneer Momos)',
    category: 'Momos',
    price: 100,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Steamed dumplings packed with grated spiced paneer and aromatic herbs.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mm-3',
    name: 'Chicken Momos (5pcs)',
    nameTa: 'சிக்கன் மோமோஸ் 5 பீஸ் (Chicken Momos)',
    category: 'Momos',
    price: 100,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: true,
    desc: 'Juicy steamed chicken dumplings bursting with flavour, served with fiery garlic chili sauce.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80'
  },

  // --- SNACKS (From Screenshot 135631) ---
  {
    id: 'sn-1',
    name: 'Veg Cutlet',
    nameTa: 'வெஜ் கட்லெட் (Veg Cutlet)',
    category: 'Snacks',
    price: 30,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crisp breadcrumb crusted patty made of mashed spiced potatoes, carrots, and beetroot.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-2',
    name: 'Paneer Cutlet',
    nameTa: 'பன்னீர் கட்லெட் (Paneer Cutlet)',
    category: 'Snacks',
    price: 60,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crispy fried cutlet enriched with tender paneer mash and herbs.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-3',
    name: 'Chicken Cutlet',
    nameTa: 'சிக்கன் கட்லெட் (Chicken Cutlet)',
    category: 'Snacks',
    price: 60,
    diet: 'non-veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crunchy on outside, juicy spiced minced chicken on inside.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-4',
    name: 'Veg Nuggets (7pcs)',
    nameTa: 'வெஜ் நக்கட்ஸ் 7 பீஸ் (Veg Nuggets)',
    category: 'Snacks',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Golden crispy vegetable nuggets served with tangy tomato ketchup.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-5',
    name: 'Cheese Corn Nuggets (7pcs)',
    nameTa: 'சீஸ் கார்ன் நக்கட்ஸ் 7 பீஸ் (Cheese Corn Nuggets)',
    category: 'Snacks',
    price: 150,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Molten cheddar cheese and sweet corn bites coated in golden crunchy batter.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-6',
    name: 'Chicken Nuggets (7pcs)',
    nameTa: 'சிக்கன் நக்கட்ஸ் 7 பீஸ் (Chicken Nuggets)',
    category: 'Snacks',
    price: 160,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Golden fried bites, crunchy outside and tender inside, served with signature dip.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-7',
    name: 'French Fries',
    nameTa: 'ஃப்ரெஞ்ச் ஃப்ரைஸ் (French Fries)',
    category: 'Snacks',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Classic salted golden potato fries fried to crispy perfection.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-8',
    name: 'Peri-Peri French Fries',
    nameTa: 'பெரி-பெரி ஃப்ரைஸ் (Peri-Peri French Fries)',
    category: 'Snacks',
    price: 130,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Extra crispy fries tossed in fiery and tangy African peri-peri spice dust.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-9',
    name: 'Cheese French Fries',
    nameTa: 'சீஸ் ஃப்ரைஸ் (Cheese French Fries)',
    category: 'Snacks',
    price: 150,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crisp hot fries smothered with rich warm liquid cheddar cheese sauce.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-10',
    name: 'Smiley Potato (7pcs)',
    nameTa: 'ஸ்மைலி பொட்டேட்டோ 7 பீஸ் (Smiley Potato)',
    category: 'Snacks',
    price: 100,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Playful and crispy potato smiley faces, a favourite treat for kids and families.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-11',
    name: 'Fish Finger',
    nameTa: 'ஃபிஷ் ஃபிங்கர் (Fish Finger)',
    category: 'Snacks',
    price: 110,
    diet: 'non-veg',
    isMustTry: false,
    isSpecial: true,
    desc: 'Delicate fish fillets crumbed and deep fried, served with tartar sauce.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-12',
    name: 'Bread Omelette',
    nameTa: 'பிரெட் ஆம்லெட் (Bread Omelette)',
    category: 'Snacks',
    price: 60,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Fluffy double egg masala omelette folded seamlessly inside toasted buttered bread.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sn-13',
    name: 'Chicken Bread Omelette',
    nameTa: 'சிக்கன் பிரெட் ஆம்லெட் (Chicken Bread Omelette)',
    category: 'Snacks',
    price: 120,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Loaded bread omelette stuffed with shredded seasoned chicken and spices.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80'
  },

  // --- CRISPY (From Screenshot 135631) ---
  {
    id: 'cr-1',
    name: 'Crispy Chicken Leg Piece (1pc)',
    nameTa: 'க்ரிஸ்ப்பி சிக்கன் லெக் பீஸ் 1 பீஸ்',
    category: 'Crispy',
    price: 120,
    diet: 'non-veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Juicy chicken drumstick crumbed in seasoned flour and fried to super crunchiness.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cr-2',
    name: 'Crispy Chicken Popcorn (10pcs)',
    nameTa: 'க்ரிஸ்ப்பி சிக்கன் பாப்கார்ன் 10 பீஸ்',
    category: 'Crispy',
    price: 150,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Bite-sized tender boneless chicken bites with an ultra crunchy outer crust.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cr-3',
    name: 'Crispy Chicken LolliPop (4pcs)',
    nameTa: 'க்ரிஸ்ப்பி சிக்கன் லாலிபாப் 4 பீஸ்',
    category: 'Crispy',
    price: 200,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: true,
    desc: 'Frenched chicken winglets tossed in fiery spices and fried to crunchy perfection.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80'
  },

  // --- CHAAT ITEMS (From Screenshot 135647) ---
  {
    id: 'ct-1',
    name: 'Punjabi Samosa',
    nameTa: 'பஞ்சாபி சமோசா (Punjabi Samosa)',
    category: 'Chat Items',
    price: 50,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Large crispy pastry pyramid stuffed with rich cashew, potato, and peas filling.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-2',
    name: 'Pani Puri',
    nameTa: 'பானி பூரி (Pani Puri)',
    category: 'Chat Items',
    price: 45,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Hollow crisp puris filled with spiced potato mash, served with tangy mint water.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-3',
    name: 'Masal Puri',
    nameTa: 'மசால் பூரி (Masal Puri)',
    category: 'Chat Items',
    price: 45,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crushed crisp puris drenched in steaming hot dried-pea masala gravy, onions and sev.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-4',
    name: 'Bhel Puri',
    nameTa: 'பேல் பூரி (Bhel Puri)',
    category: 'Chat Items',
    price: 45,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Puffed rice tossed with chopped onions, tomatoes, tamarind chutney, and fine sev.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-5',
    name: 'Egg Bhel Puri',
    nameTa: 'எக் பேல் பூரி (Egg Bhel Puri)',
    category: 'Chat Items',
    price: 70,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Tangy bhel puri tossed with boiled chopped spiced eggs and zesty chutneys.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-6',
    name: 'Mushroom Fry',
    nameTa: 'மஷ்ரூம் ஃப்ரை (Mushroom Fry)',
    category: 'Chat Items',
    price: 60,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crispy fried mushroom florets tossed in South Indian street spices and curry leaves.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-7',
    name: 'Egg Mushroom Fry',
    nameTa: 'எக் மஷ்ரூம் ஃப்ரை (Egg Mushroom Fry)',
    category: 'Chat Items',
    price: 80,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Wok-fried mushrooms and scrambled eggs spiced with crushed black pepper.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-8',
    name: 'Gobi Chilli',
    nameTa: 'கோபி சில்லி (Gobi Chilli)',
    category: 'Chat Items',
    price: 100,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crisp cauliflower florets tossed in Indo-Chinese chili sauce, garlic, and capsicum.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-9',
    name: 'Mushroom Chilli',
    nameTa: 'மஷ்ரூம் சில்லி (Mushroom Chilli)',
    category: 'Chat Items',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Batter fried mushrooms wok-tossed with green chilies, soy, and spring onions.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-10',
    name: 'Baby Corn Chilli',
    nameTa: 'பேபிகார்ன் சில்லி (Baby Corn Chilli)',
    category: 'Chat Items',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crunchy baby corn pieces tossed in spicy dark soya and green chili sauce.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-11',
    name: 'Paneer Chilli',
    nameTa: 'பன்னீர் சில்லி (Paneer Chilli)',
    category: 'Chat Items',
    price: 140,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Soft cottage cheese cubes wok tossed in aromatic garlic, chilies, and bell peppers.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-12',
    name: 'Chicken Chilli (Boneless)',
    nameTa: 'சிக்கன் சில்லி போன்லெஸ் (Chicken Chilli)',
    category: 'Chat Items',
    price: 140,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Tender boneless chicken morsels tossed in spicy Indo-Chinese chilli glaze.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-13',
    name: 'Gobi Manchurian',
    nameTa: 'கோபி மஞ்சூரியன் (Gobi Manchurian)',
    category: 'Chat Items',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Deep fried cauliflower coated with rich ginger garlic Manchurian glaze.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-14',
    name: 'Mushroom Manchurian',
    nameTa: 'மஷ்ரூம் மஞ்சூரியன் (Mushroom Manchurian)',
    category: 'Chat Items',
    price: 130,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crisp button mushrooms tossed in authentic savory Manchurian sauce.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-15',
    name: 'Babycorn Manchurian',
    nameTa: 'பேபிகார்ன் மஞ்சூரியன் (Babycorn Manchurian)',
    category: 'Chat Items',
    price: 130,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Golden fried babycorn tossed with scallions and tangy savory sauce.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ct-16',
    name: 'Chicken Manchurian',
    nameTa: 'சிக்கன் மஞ்சூரியன் (Chicken Manchurian)',
    category: 'Chat Items',
    price: 160,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Juicy fried chicken chunks simmered in dark garlic-infused Manchurian gravy.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
  },

  // --- STIR FRIES (From Screenshot 135647) ---
  {
    id: 'sf-1',
    name: 'Veg Rice',
    nameTa: 'வெஜ் ஃப்ரைட் ரைஸ் (Veg Fried Rice)',
    category: 'Stir Fries',
    price: 90,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Aromatic basmati rice stir-fried in a hot wok with finely chopped garden vegetables.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-2',
    name: 'Veg Noodles',
    nameTa: 'வெஜ் நூடுல்ஸ் (Veg Noodles)',
    category: 'Stir Fries',
    price: 90,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Hakka noodles tossed with shredded cabbage, carrots, bell peppers, and mild soy.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-3',
    name: 'Gobi Rice',
    nameTa: 'கோபி ஃப்ரைட் ரைஸ் (Gobi Rice)',
    category: 'Stir Fries',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Wok tossed fried rice mixed with crispy seasoned cauliflower bites.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-4',
    name: 'Gobi Noodles',
    nameTa: 'கோபி நூடுல்ஸ் (Gobi Noodles)',
    category: 'Stir Fries',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Stir-fried noodles combined with crispy Manchurian gobi bites.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-5',
    name: 'Mushroom Rice',
    nameTa: 'மஷ்ரூம் ஃப்ரைட் ரைஸ் (Mushroom Rice)',
    category: 'Stir Fries',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Fragrant wok-fried rice tossed with button mushrooms and cracked pepper.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-6',
    name: 'Mushroom Noodles',
    nameTa: 'மஷ்ரூம் நூடுல்ஸ் (Mushroom Noodles)',
    category: 'Stir Fries',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Hakka noodles tossed with sliced tender mushrooms and spring onions.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-7',
    name: 'Egg Rice',
    nameTa: 'எக் ஃப்ரைட் ரைஸ் (Egg Rice)',
    category: 'Stir Fries',
    price: 110,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Fluffy rice wok-tossed with scrambled eggs and aromatic seasonings.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-8',
    name: 'Egg Noodles',
    nameTa: 'எக் நூடுல்ஸ் (Egg Noodles)',
    category: 'Stir Fries',
    price: 110,
    diet: 'egg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Wok tossed noodles packed with scrambled eggs, cabbage, and light soya.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-9',
    name: 'Chicken Rice',
    nameTa: 'சிக்கன் ஃப்ரைட் ரைஸ் (Chicken Rice)',
    category: 'Stir Fries',
    price: 140,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Fried rice tossed with tender shredded chicken, egg scramble, and veggies.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sf-10',
    name: 'Chicken Noodles',
    nameTa: 'சிக்கன் நூடுல்ஸ் (Chicken Noodles)',
    category: 'Stir Fries',
    price: 140,
    diet: 'non-veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Sizzling noodles tossed with juicy chicken strips, bell peppers, and dark soy.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80'
  },

  // --- MILKSHAKES (From Screenshot 135716) ---
  {
    id: 'ms-1',
    name: 'Vanilla Thick Shake',
    nameTa: 'வெண்ணிலா திக் ஷேக் (Vanilla Shake)',
    category: 'Milkshakes',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Classic thick milkshake blended with pure French vanilla ice cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-2',
    name: 'Strawberry Thick Shake',
    nameTa: 'ஸ்ட்ராபெரி திக் ஷேக் (Strawberry Shake)',
    category: 'Milkshakes',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Sweet and creamy shake blended with natural strawberry fruit compote.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-3',
    name: 'Cold Boost Shake',
    nameTa: 'கோல்ட் பூஸ்ட் ஷேக் (Cold Boost Shake)',
    category: 'Milkshakes',
    price: 120,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Chilled energy drink milkshake with extra Boost malt sprinkles on top.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-4',
    name: 'Cold Coffee Shake',
    nameTa: 'கோல்ட் காபி ஷேக் (Cold Coffee Shake)',
    category: 'Milkshakes',
    price: 120,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Thick espresso blended with chilled milk, ice cream, and chocolate swirl.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-5',
    name: 'Pista Thick Shake',
    nameTa: 'பிஸ்தா திக் ஷேக் (Pista Thick Shake)',
    category: 'Milkshakes',
    price: 140,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Rich creamy milkshake infused with real pistachios and saffron notes.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-6',
    name: 'Mango Thick Shake',
    nameTa: 'மாம்பழ திக் ஷேக் (Mango Thick Shake)',
    category: 'Milkshakes',
    price: 140,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Luscious golden Alphonso mango puree whipped into thick rich shake.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-7',
    name: 'Chocolate Thick Shake',
    nameTa: 'சாக்லேட் திக் ஷேக் (Chocolate Thick Shake)',
    category: 'Milkshakes',
    price: 140,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Decadent Dutch cocoa blended with rich chocolate ice cream and fudge drizzle.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-8',
    name: 'Butterscotch Thick Shake',
    nameTa: 'பட்டர்ஸ்காட்ச் திக் ஷேக்',
    category: 'Milkshakes',
    price: 140,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Creamy caramel butterscotch milkshake loaded with crunchy praline bits.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-9',
    name: 'Blackcurrant Thick Shake',
    nameTa: 'பிளாக்பெர்ரி / பிளாக்கரண்ட் ஷேக்',
    category: 'Milkshakes',
    price: 140,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Zesty purple blackcurrant fruit blended with thick cream and ice cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-10',
    name: 'Oreo Shake',
    nameTa: 'ஓரியோ ஷேக் (Oreo Shake)',
    category: 'Milkshakes',
    price: 140,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Thick creamy chocolate ice cream blended with crushed Oreos and whipped cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-11',
    name: 'Kitkat Shake',
    nameTa: 'கிட்காட் ஷேக் (Kitkat Shake)',
    category: 'Milkshakes',
    price: 140,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crispy chocolate wafer Kitkat bars crushed into thick frosty milkshake.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-12',
    name: 'Dairy Milk Shake',
    nameTa: 'டைரி மில்க் ஷேக் (Dairy Milk Shake)',
    category: 'Milkshakes',
    price: 140,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Smooth Cadbury Dairy Milk chocolate melted into thick chilled milkshake.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-13',
    name: 'Brownie Shake',
    nameTa: 'பிரவுனி ஷேக் (Brownie Shake)',
    category: 'Milkshakes',
    price: 180,
    diet: 'veg',
    isMustTry: true,
    isSpecial: true,
    desc: 'Gooey dark fudge brownie blended into thick chocolate shake with brownie crown.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-14',
    name: 'Blackforest Shake',
    nameTa: 'பிளாக்பாரஸ்ட் ஷேக் (Blackforest Shake)',
    category: 'Milkshakes',
    price: 180,
    diet: 'veg',
    isMustTry: false,
    isSpecial: true,
    desc: 'Decadent shake inspired by black forest cake, with dark cherry compote and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ms-15',
    name: 'Red Velvet Shake',
    nameTa: 'ரெட் வெல்வெட் ஷேக் (Red Velvet Shake)',
    category: 'Milkshakes',
    price: 180,
    diet: 'veg',
    isMustTry: true,
    isSpecial: true,
    desc: 'Royal red velvet cake crumbs blended with cream cheese frosting and ice cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80'
  },

  // --- FALOODA (From Screenshot 135716) ---
  {
    id: 'fl-1',
    name: 'Normal Falooda',
    nameTa: 'ஃபலோடா (Normal Falooda)',
    category: 'Falooda',
    price: 150,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Rose syrup, basil seeds, vermicelli noodles, chilled milk, topped with a scoop of vanilla ice cream.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fl-2',
    name: 'Royal Falooda',
    nameTa: 'ராயல் ஃபலோடா (Royal Falooda)',
    category: 'Falooda',
    price: 200,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Double scoop sundae falooda loaded with dry fruits, kulfi, rabri, and rich rose syrup.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fl-3',
    name: 'Arabian Falooda',
    nameTa: 'அரேபியன் ஃபலோடா (Arabian Falooda)',
    category: 'Falooda',
    price: 200,
    diet: 'veg',
    isMustTry: false,
    isSpecial: true,
    desc: 'Middle-Eastern delicacy packed with roasted dates, figs, pistachios, saffron cream, and ice cream.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },

  // --- FRESH JUICE (From Screenshot 135716 - With Pure / Normal option) ---
  {
    id: 'fj-1',
    name: 'Lemon Juice',
    nameTa: 'எலுமிச்சை சாறு (Lemon Juice)',
    category: 'Fresh Juice',
    price: 50,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Freshly hand-squeezed refreshing lime juice.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-2',
    name: 'Watermelon Juice',
    nameTa: 'தர்பூசணி சாறு (Watermelon Juice)',
    category: 'Fresh Juice',
    price: 60,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: '100% fresh pressed sweet red watermelon juice served chilled.',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-3',
    name: 'Lemon Mint Juice',
    nameTa: 'லெமன் புதினா சாறு (Lemon Mint)',
    category: 'Fresh Juice',
    price: 60,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Zesty lemon juice muddled with garden fresh mint leaves.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-4',
    name: 'Lemon Soda',
    nameTa: 'லெமன் சோடா (Lemon Soda)',
    category: 'Fresh Juice',
    price: 70,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Fizzy carbonated soda with fresh lime juice, sweet or salted.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-5',
    name: 'Mulampalam (Muskmelon)',
    nameTa: 'முலாம் பழம் சாறு (Mulampalam)',
    category: 'Fresh Juice',
    price: 100,
    priceNormal: 80,
    hasVariants: true,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Naturally fragrant chilled muskmelon juice (Pure: ₹100 / Normal: ₹80).',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-6',
    name: 'Pineapple Juice',
    nameTa: 'அன்னாசி சாறு (Pineapple Juice)',
    category: 'Fresh Juice',
    price: 100,
    priceNormal: 80,
    hasVariants: true,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Fresh tropical pineapple juice with natural sweetness (Pure: ₹100 / Normal: ₹80).',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-7',
    name: 'Mosambi Juice',
    nameTa: 'சாத்துக்குடி சாறு (Mosambi Juice)',
    category: 'Fresh Juice',
    price: 100,
    priceNormal: 80,
    hasVariants: true,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Cold-pressed sweet lime juice rich in vitamin C (Pure: ₹100 / Normal: ₹80).',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-8',
    name: 'Orange Juice',
    nameTa: 'ஆரஞ்சு சாறு (Orange Juice)',
    category: 'Fresh Juice',
    price: 130,
    priceNormal: 90,
    hasVariants: true,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Freshly extracted Nagpur juicy orange (Pure: ₹130 / Normal: ₹90).',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-9',
    name: 'Apple Juice',
    nameTa: 'ஆப்பிள் சாறு (Apple Juice)',
    category: 'Fresh Juice',
    price: 120,
    priceNormal: 100,
    hasVariants: true,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Crisp Shimla apple juice freshly extracted on order (Pure: ₹120 / Normal: ₹100).',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fj-10',
    name: 'Mathulai (Pomegranate)',
    nameTa: 'மாதுளை சாறு (Mathulai / Pomegranate)',
    category: 'Fresh Juice',
    price: 170,
    priceNormal: 100,
    hasVariants: true,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Ruby red fresh pomegranate pearls cold pressed (Pure: ₹170 / Normal: ₹100).',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80'
  },

  // --- MOJITO (From Screenshot 135716) ---
  {
    id: 'mj-1',
    name: 'Lemon Mint Mojito',
    nameTa: 'லெமன் புதினா மொஜித்தோ (Lemon Mint Mojito)',
    category: 'Mojito',
    price: 100,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Classic Cuban cooler with muddled lime wedges, fresh mint leaves, and chilled club soda.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mj-2',
    name: 'Blueberry Mojito',
    nameTa: 'புளூபெர்ரி மொஜித்தோ (Blueberry Mojito)',
    category: 'Mojito',
    price: 100,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Wild blueberry crush, mint sprigs, lime, and sparkling soda over crushed ice.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mj-3',
    name: 'Green Apple Mojito',
    nameTa: 'கிரீன் ஆப்பிள் மொஜித்தோ (Green Apple Mojito)',
    category: 'Mojito',
    price: 100,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Tart green apple syrup with fresh mint, lime, and effervescent sparkling soda.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mj-4',
    name: 'Strawberry Mojito',
    nameTa: 'ஸ்ட்ராபெரி மொஜித்தோ (Strawberry Mojito)',
    category: 'Mojito',
    price: 100,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Ripe sweet strawberries crushed with mint and lime over sparkling ice.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mj-5',
    name: 'Watermelon Mojito',
    nameTa: 'தர்பூசணி மொஜித்தோ (Watermelon Mojito)',
    category: 'Mojito',
    price: 100,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Juicy fresh watermelon chunks muddled with mint and sparkling soda.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80'
  },

  // --- DESSERT (From Screenshot 135808 & 135531) ---
  {
    id: 'ds-1',
    name: 'Baked Chessecake',
    nameTa: 'பேக்டு சீஸ்கேக் (Baked Cheesecake)',
    category: 'Dessert',
    price: 110,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Classic New York style slow-baked cheesecake on buttery graham cracker crust.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-2',
    name: 'Malai Chessecake',
    nameTa: 'மலை சீஸ்கேக் (Malai Cheesecake)',
    category: 'Dessert',
    price: 120,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Decadent Indian fusion cheesecake infused with rabri malai and cardamom.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-3',
    name: 'Lotus Biscoff Cake',
    nameTa: 'லோட்டஸ் பிஸ்காஃப் கேக் (Lotus Biscoff Cake)',
    category: 'Dessert',
    price: 120,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Layered cake frosted with Belgian caramelized Biscoff spread and crushed cookies.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-4',
    name: 'Matilda Cake',
    nameTa: 'மட்டில்டா கேக் (Matilda Cake)',
    category: 'Dessert',
    price: 170,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Super moist, ultra-rich triple layer dark chocolate fudge cake with dripping ganache.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-5',
    name: 'Russian Honey Cake',
    nameTa: 'ரஷ்யன் ஹனி கேக் (Russian Honey Cake)',
    category: 'Dessert',
    price: 170,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Multiple ultra-thin caramelized honey biscuit layers filled with whipped sour cream filling.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-6',
    name: 'Milk Cake',
    nameTa: 'மில்க் கேக் (Milk Cake / Tres Leches)',
    category: 'Dessert',
    price: 180,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Melt-in-mouth sponge soaked in saffron infused evaporated milk and condensed cream.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-7',
    name: 'Pistachio Nutella Cake',
    nameTa: 'பிஸ்தா நுடெல்லா கேக் (Pistachio Nutella)',
    category: 'Dessert',
    price: 180,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Sponge cake layered with rich Italian Nutella hazelnut cream and toasted pistachios.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-8',
    name: 'Opera Cake',
    nameTa: 'ஓபரா கேக் (Opera Cake)',
    category: 'Dessert',
    price: 200,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'French classic featuring layers of almond sponge soaked in coffee syrup, ganache, and buttercream.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-9',
    name: 'Tiramisu',
    nameTa: 'திராமிசு (Italian Tiramisu)',
    category: 'Dessert',
    price: 300,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Traditional Italian dessert of espresso soaked ladyfingers layered with mascarpone cream.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-10',
    name: 'Ferrero Nutella Cake (Bento Cake)',
    nameTa: 'ஃபெரேரோ நுடெல்லா பென்டோ கேக்',
    category: 'Dessert',
    price: 350,
    diet: 'veg',
    isMustTry: true,
    isSpecial: true,
    desc: 'Adorable mini bento celebration cake loaded with whole Ferrero Rocher and Nutella fudge.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ds-11',
    name: 'Saaral Warm Brownie',
    nameTa: 'சாரல் வார்ம் பிரவுனி (Saaral Brownie)',
    category: 'Dessert',
    price: 100,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Warm, gooey chocolate cake with a molten center that melts instantly.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80'
  },

  // --- ICE CREAM (From Screenshot 135808 & 135531) ---
  {
    id: 'ic-1',
    name: 'Vanilla Ice Cream (1 Scoop)',
    nameTa: 'வெண்ணிலா ஐஸ்கிரீம் (1 ஸ்கூப்)',
    category: 'Ice Cream',
    price: 50,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Creamy classic vanilla bean ice cream scoop.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ic-2',
    name: 'Strawberry Ice Cream (1 Scoop)',
    nameTa: 'ஸ்ட்ராபெரி ஐஸ்கிரீம் (1 ஸ்கூப்)',
    category: 'Ice Cream',
    price: 50,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Sweet strawberry ice cream scoop with real berry swirl.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ic-3',
    name: 'Pista Ice Cream (1 Scoop)',
    nameTa: 'பிஸ்தா ஐஸ்கிரீம் (1 ஸ்கூப்)',
    category: 'Ice Cream',
    price: 50,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Nutty pistachio green scoop loaded with nut shavings.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ic-4',
    name: 'Mango Ice Cream (1 Scoop)',
    nameTa: 'மாம்பழ ஐஸ்கிரீம் (1 ஸ்கூப்)',
    category: 'Ice Cream',
    price: 60,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Rich summer Alphonso mango ice cream scoop.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ic-5',
    name: 'Chocolate Ice Cream (1 Scoop)',
    nameTa: 'சாக்லேட் ஐஸ்கிரீம் (1 ஸ்கூப்)',
    category: 'Ice Cream',
    price: 60,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Rich dark Belgian cocoa chocolate scoop.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ic-6',
    name: 'Butterscotch Ice Cream (1 Scoop)',
    nameTa: 'பட்டர்ஸ்காட்ச் ஐஸ்கிரீம் (1 ஸ்கூப்)',
    category: 'Ice Cream',
    price: 60,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Caramel butterscotch scoop with golden cashew praline crunch.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ic-7',
    name: 'Blackcurrant Ice Cream (1 Scoop)',
    nameTa: 'பிளாக்பெர்ரி ஐஸ்கிரீம் (1 ஸ்கூப்)',
    category: 'Ice Cream',
    price: 60,
    diet: 'veg',
    isMustTry: false,
    isSpecial: false,
    desc: 'Exotic wild blackcurrant berries ice cream scoop.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ic-8',
    name: 'Boat Ice Cream (Banana Split)',
    nameTa: 'போட் ஐஸ்கிரீம் (Boat Ice Cream)',
    category: 'Ice Cream',
    price: 280,
    diet: 'veg',
    isMustTry: true,
    isSpecial: true,
    desc: 'Grand royal ice cream boat with 3 scoops of assorted ice creams, fruits, chocolate fudge, and wafer rolls.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ic-9',
    name: 'Ice Cream with Chocolate Chips',
    nameTa: 'சாக்லேட் சிப்ஸ் ஐஸ்கிரீம்',
    category: 'Ice Cream',
    price: 80,
    diet: 'veg',
    isMustTry: true,
    isSpecial: false,
    desc: 'Creamy vanilla ice cream generously packed with crunchy chocolate chips.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80'
  }
];

// All 20 Categories including Bento Cakes & Hot Snacks
const CATEGORIES_LIST = [
  { en: 'Bento Cakes', ta: 'பென்டோ கேக்' },
  { en: 'Hot Snacks', ta: 'ஹாட் ஸ்நாக்ஸ்' },
  { en: 'Tea & Coffee', ta: 'டீ & காபி' },
  { en: 'Burgur', ta: 'பர்கர்' },
  { en: 'Milkshakes', ta: 'மில்க்ஷேக்' },
  { en: 'Crispy Bites', ta: 'க்ரிஸ்பி பைட்ஸ்' },
  { en: 'Momos', ta: 'மோமோஸ்' },
  { en: 'Falooda', ta: 'ஃபலோடா' },
  { en: 'Sandwich', ta: 'சாண்ட்விச்' },
  { en: 'Wraps', ta: 'ராப்ஸ்' },
  { en: 'Fresh Juice', ta: 'பிரெஷ் ஜூஸ்' },
  { en: 'Pizza', ta: 'பீட்சா' },
  { en: 'Snacks', ta: 'ஸ்நாக்ஸ்' },
  { en: 'Mojito', ta: 'மொஜித்தோ' },
  { en: 'Pasta', ta: 'பாஸ்தா' },
  { en: 'Crispy', ta: 'க்ரிஸ்ப்பி' },
  { en: 'Dessert', ta: 'டெசர்ட்' },
  { en: 'Chat Items', ta: 'சாட் ஐட்டம்ஸ்' },
  { en: 'Stir Fries', ta: 'ஸ்டிர் ஃப்ரைஸ்' },
  { en: 'Ice Cream', ta: 'ஐஸ்கிரீம்' }
];

// Customer Testimonials
let customerReviews = [
  {
    name: 'Priya Raman',
    initial: 'P',
    rating: 5,
    date: '2 days ago',
    tag: 'Must Try: White Tea & Kulfi Cake',
    comment: 'The White Forest Cake and Kulfi Cake from Saaral Bakes made my sister\'s birthday unforgettable! Softest sponge with genuine fresh cream. 10/10 recommended!'
  },
  {
    name: 'Karthik Raja',
    initial: 'K',
    rating: 5,
    date: '1 week ago',
    tag: 'Favorite: Tower Burger & Peri Peri Fries',
    comment: 'Best snack hangout in town. The burgers are juicy, fries are piping hot and crispy, and the ambiance has such warm positive vibes.'
  },
  {
    name: 'Ananya Sharma',
    initial: 'A',
    rating: 5,
    date: '2 weeks ago',
    tag: 'Loved: Royal Rose Falooda & Boat Ice Cream',
    comment: 'Their Falooda and Triple Scoop Boat Ice Cream are sheer heaven. Prompt service and super clean preparation!'
  }
];

// ==========================================================================
// 2. APP STATE MANAGEMENT
// ==========================================================================
let currentLanguage = 'en'; // 'en' or 'ta'
let activeCategory = 'ALL';
let activeSpecialFilter = 'ALL'; // 'ALL', 'MUST_TRY', 'SPECIAL', 'VEG', 'NON_VEG', 'EGG'
let searchQuery = '';
let currentViewMode = 'grid'; // 'grid' or 'chalkboard'
let sortBy = 'default';
let tableOrTakeaway = 'Dine-In (Table 01)';
let cart = JSON.parse(localStorage.getItem('saaral_cart') || '[]');

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSideStepObserver();
  renderCategoryPills();
  renderMenuItems();
  renderChalkboardView();
  renderReviews();
  initCartDrawer();
  initReviewModal();
  initFAQAccordion();
  initContactForm();
  initLanguageToggle();
  initViewToggle();
  initTableSelector();
  updateCartCount();
});

// ==========================================================================
// 4. LANGUAGE TOGGLE (English <-> தமிழ்)
// ==========================================================================
function initLanguageToggle() {
  const langBtns = document.querySelectorAll('.lang-toggle-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLanguage = btn.getAttribute('data-lang');
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update UI texts with language
      updateLanguageUI();
      renderCategoryPills();
      renderMenuItems();
      renderChalkboardView();
    });
  });
}

function updateLanguageUI() {
  document.querySelectorAll('[data-en]').forEach(el => {
    const textEn = el.getAttribute('data-en');
    const textTa = el.getAttribute('data-ta');
    if (currentLanguage === 'ta' && textTa) {
      el.textContent = textTa;
    } else if (textEn) {
      el.textContent = textEn;
    }
  });
}

// ==========================================================================
// 5. VIEW MODE TOGGLE (Grid vs Chalkboard)
// ==========================================================================
function initViewToggle() {
  const gridBtn = document.getElementById('viewModeGridBtn');
  const boardBtn = document.getElementById('viewModeBoardBtn');
  const gridSection = document.getElementById('menuGridSection');
  const boardSection = document.getElementById('menuChalkboardSection');

  if (gridBtn && boardBtn && gridSection && boardSection) {
    gridBtn.addEventListener('click', () => {
      currentViewMode = 'grid';
      gridBtn.classList.add('active');
      boardBtn.classList.remove('active');
      gridSection.style.display = 'block';
      boardSection.style.display = 'none';
    });

    boardBtn.addEventListener('click', () => {
      currentViewMode = 'chalkboard';
      boardBtn.classList.add('active');
      gridBtn.classList.remove('active');
      gridSection.style.display = 'none';
      boardSection.style.display = 'block';
      renderChalkboardView();
    });
  }
}

// ==========================================================================
// 6. NAVBAR & SIDE SCROLL TRACKER
// ==========================================================================
function initNavbar() {
  const header = document.querySelector('.main-header');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

function initSideStepObserver() {
  const sections = [
    { id: 'home', node: document.querySelector('.step-node[data-step="01"]') },
    { id: 'menu', node: document.querySelector('.step-node[data-step="02"]') },
    { id: 'about', node: document.querySelector('.step-node[data-step="03"]') },
    { id: 'contact', node: document.querySelector('.step-node[data-step="04"]') }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        sections.forEach(s => {
          if (s.node) {
            if (s.id === targetId) {
              s.node.classList.add('active');
            } else {
              s.node.classList.remove('active');
            }
          }
        });

        if (targetId === 'menu' || targetId === 'reviews' || targetId === 'faq') {
          document.body.classList.add('in-light-section');
        } else {
          document.body.classList.remove('in-light-section');
        }
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });
}

// ==========================================================================
// 7. CATEGORY PILLS & MENU RENDERING
// ==========================================================================
function renderCategoryPills() {
  const container = document.getElementById('categoryCapsulesGrid');
  if (!container) return;

  container.innerHTML = '';

  CATEGORIES_LIST.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `category-pill-btn ${activeCategory === cat.en ? 'active' : ''}`;
    btn.innerHTML = `<span>${currentLanguage === 'ta' ? cat.ta : cat.en}</span>`;
    btn.addEventListener('click', () => {
      if (activeCategory === cat.en) {
        activeCategory = 'ALL';
      } else {
        activeCategory = cat.en;
      }
      activeSpecialFilter = 'ALL';
      updateFilterPillStates();
      renderCategoryPills();
      renderMenuItems();
      
      if (currentViewMode === 'chalkboard') {
        const gridBtn = document.getElementById('viewModeGridBtn');
        if (gridBtn) gridBtn.click();
      }
    });
    container.appendChild(btn);
  });
}

function updateFilterPillStates() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const filter = chip.getAttribute('data-filter');
    if (filter === activeSpecialFilter) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

window.setSpecialFilter = function(filter) {
  if (activeSpecialFilter === filter) {
    activeSpecialFilter = 'ALL';
  } else {
    activeSpecialFilter = filter;
  }
  activeCategory = 'ALL';
  updateFilterPillStates();
  renderCategoryPills();
  renderMenuItems();
};

window.handleMenuSearch = function(e) {
  searchQuery = e.target.value.toLowerCase().trim();
  renderMenuItems();
};

window.handleSortChange = function(e) {
  sortBy = e.target.value;
  renderMenuItems();
};

function renderMenuItems() {
  const grid = document.getElementById('menuItemsGrid');
  const countEl = document.getElementById('menuItemCountDisplay');
  if (!grid) return;

  grid.innerHTML = '';

  let filtered = MENU_DATA.filter(item => {
    if (activeCategory !== 'ALL') {
      if (item.category !== activeCategory && item.subCategory !== activeCategory) {
        return false;
      }
    }
    if (activeSpecialFilter === 'MUST_TRY' && !item.isMustTry) return false;
    if (activeSpecialFilter === 'SPECIAL' && !item.isSpecial) return false;
    if (activeSpecialFilter === 'VEG' && item.diet !== 'veg') return false;
    if (activeSpecialFilter === 'NON_VEG' && item.diet !== 'non-veg') return false;
    if (activeSpecialFilter === 'EGG' && item.diet !== 'egg') return false;

    if (searchQuery) {
      const words = searchQuery.split(/\s+/).filter(Boolean);
      const name = item.name.toLowerCase();
      const nameTa = (item.nameTa || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();
      const subCat = (item.subCategory || '').toLowerCase();
      const desc = (item.desc || '').toLowerCase();

      const allMatch = words.every(w => {
        if (name.includes(w) || nameTa.includes(w) || cat.includes(w) || subCat.includes(w)) {
          return true;
        }
        const regex = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        return regex.test(desc);
      });

      if (!allMatch) return false;
    }
    return true;
  });

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} Delicious Items`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-menu-msg">
        <p style="font-size: 3rem; margin-bottom: 10px;">🍰</p>
        <h3 style="font-family: var(--font-logo); font-size: 2.2rem; color: var(--color-primary-brown);">No Delicious Items Found</h3>
        <p style="color: var(--color-text-muted); margin-top: 8px;">Try searching for another favorite snack, cake, shake, or tea!</p>
        <button onclick="resetMenuFilters()" class="btn-primary" style="margin-top: 20px; font-size: 1.1rem; padding: 10px 28px;">View All Items</button>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-card';

    const displayName = currentLanguage === 'ta' && item.nameTa ? item.nameTa : item.name;
    const specialBadge = item.isSpecial 
      ? '<span class="food-special-badge">Saaral Special</span>' 
      : (item.isMustTry ? '<span class="food-special-badge must-try-badge">Must Try</span>' : '');

    let variantHtml = '';
    if (item.hasVariants && item.priceNormal) {
      variantHtml = `
        <div class="juice-variant-picker" id="variantPicker-${item.id}">
          <label class="variant-opt active" data-type="pure" data-price="${item.price}" onclick="selectJuiceVariant('${item.id}', 'pure', ${item.price})">Pure: ₹${item.price}</label>
          <label class="variant-opt" data-type="normal" data-price="${item.priceNormal}" onclick="selectJuiceVariant('${item.id}', 'normal', ${item.priceNormal})">Normal: ₹${item.priceNormal}</label>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="food-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="food-card-img" loading="lazy" />
        <span class="food-diet-tag ${item.diet}" title="${item.diet === 'veg' ? 'Pure Vegetarian' : (item.diet === 'egg' ? 'Contains Egg' : 'Non-Vegetarian')}"></span>
        ${specialBadge}
      </div>
      <div class="food-card-body">
        <div class="food-card-category">${item.category}</div>
        <h3 class="food-card-title">${displayName}</h3>
        <p class="food-card-desc">${item.desc}</p>
        ${variantHtml}
        <div class="food-card-footer">
          <span class="food-price" id="priceDisplay-${item.id}">₹${item.price} <small style="font-size:10px; color:var(--color-text-muted); font-weight:700;">+ GST</small></span>
          <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
            <i class="fa-solid fa-plus"></i>
            <span>Add</span>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.selectJuiceVariant = function(itemId, variantType, price) {
  const picker = document.getElementById(`variantPicker-${itemId}`);
  const priceDisplay = document.getElementById(`priceDisplay-${itemId}`);
  if (picker) {
    picker.querySelectorAll('.variant-opt').forEach(opt => opt.classList.remove('active'));
    const chosen = picker.querySelector(`.variant-opt[data-type="${variantType}"]`);
    if (chosen) chosen.classList.add('active');
  }
  if (priceDisplay) {
    priceDisplay.textContent = `₹${price}`;
  }
};

window.resetMenuFilters = function() {
  activeCategory = 'ALL';
  activeSpecialFilter = 'ALL';
  searchQuery = '';
  sortBy = 'default';
  const searchInput = document.getElementById('menuSearchInput');
  const sortSelect = document.getElementById('menuSortSelect');
  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'default';
  updateFilterPillStates();
  renderCategoryPills();
  renderMenuItems();
};

// ==========================================================================
// 8. CHALKBOARD IN-STORE MENU BOARD VIEW
// ==========================================================================
function renderChalkboardView() {
  const board = document.getElementById('menuChalkboardSection');
  if (!board) return;

  const categoriesInOrder = [
    'Must Try', 'Saaral Special',
    'Tea & Coffee', 'Crispy Bites',
    'Sandwich', 'Pizza', 'Pasta',
    'Burgur', 'Wraps', 'Momos',
    'Snacks', 'Crispy',
    'Chat Items', 'Stir Fries',
    'Milkshakes', 'Falooda', 'Fresh Juice', 'Mojito',
    'Dessert', 'Ice Cream'
  ];

  let boardHtml = `
    <div class="chalkboard-container doodle-bg-dark">
      <div class="chalkboard-top-branding">
        <div class="chalkboard-logo">
          S<span class="bee-wrapper">a<svg class="bee-icon" viewBox="0 0 100 100">
            <ellipse cx="50" cy="50" rx="30" ry="24" fill="#FDB813" />
            <path d="M40 28 Q44 50 40 72" stroke="#2B0707" stroke-width="6" fill="none" stroke-linecap="round" />
            <path d="M54 26 Q58 50 54 74" stroke="#2B0707" stroke-width="6" fill="none" stroke-linecap="round" />
            <path d="M68 30 Q71 50 68 70" stroke="#2B0707" stroke-width="6" fill="none" stroke-linecap="round" />
            <circle cx="28" cy="44" r="3.5" fill="#2B0707" />
            <ellipse cx="26" cy="52" rx="3" ry="2" fill="#FF8A8A" />
            <path d="M26 48 Q30 52 34 48" stroke="#2B0707" stroke-width="2" fill="none" stroke-linecap="round" />
            <path d="M28 32 Q24 16 16 20" stroke="#2B0707" stroke-width="3" fill="none" stroke-linecap="round" />
            <circle cx="15" cy="20" r="3" fill="#2B0707" />
            <path d="M34 30 Q36 14 44 16" stroke="#2B0707" stroke-width="3" fill="none" stroke-linecap="round" />
            <circle cx="45" cy="16" r="3" fill="#2B0707" />
            <path d="M46 30 C40 10 70 5 62 30 Z" fill="rgba(255,255,255,0.85)" stroke="#2B0707" stroke-width="2" />
            <path d="M58 32 C58 16 85 14 74 34 Z" fill="rgba(255,255,255,0.7)" stroke="#2B0707" stroke-width="2" />
            <polygon points="79,50 87,47 87,53" fill="#2B0707" />
          </svg></span>aral
        </div>
        <div class="chalkboard-tamil-slogan">உங்கள் உள்ளம் தொட்ட பெயர் சாரல் • make every day sweet</div>
      </div>

      <div class="chalkboard-cards-grid">
  `;

  categoriesInOrder.forEach(catName => {
    const items = MENU_DATA.filter(i => i.category === catName);
    if (items.length === 0) return;

    boardHtml += `
      <div class="chalkboard-card">
        <div class="chalkboard-brush-heading">
          <span class="brush-bg"></span>
          <span class="brush-text">${catName.toUpperCase()}</span>
        </div>
        <div class="chalkboard-items-table">
    `;

    items.forEach(item => {
      const dietDot = `<span class="chalk-diet-dot ${item.diet}"></span>`;
      const specialStar = item.isSpecial ? '<span class="chalk-chef-icon" title="Chef Special">🌶️</span>' : '';
      const priceText = item.hasVariants && item.priceNormal 
        ? `P:₹${item.price} / N:₹${item.priceNormal}` 
        : `₹${item.price}`;

      boardHtml += `
        <div class="chalk-item-row" onclick="addToCart('${item.id}')">
          <div class="chalk-item-title-col">
            ${dietDot}
            <span class="chalk-item-name">${item.name}</span>
            ${specialStar}
          </div>
          <div class="chalk-item-dots"></div>
          <div class="chalk-item-price-pill">${priceText}</div>
        </div>
      `;
    });

    boardHtml += `
        </div>
      </div>
    `;
  });

  boardHtml += `
      </div>
      <div class="chalkboard-gst-footer">All items fresh & prepared with love</div>
    </div>
  `;

  board.innerHTML = boardHtml;
}

// ==========================================================================
// 9. SHOPPING CART & TABLE SELECTION & WHATSAPP CHECKOUT
// ==========================================================================
function initTableSelector() {
  const select = document.getElementById('diningOptionSelect');
  if (select) {
    select.addEventListener('change', (e) => {
      tableOrTakeaway = e.target.value;
    });
  }
}

window.addToCart = function(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  let selectedPrice = item.price;
  let variantLabel = '';

  const picker = document.getElementById(`variantPicker-${itemId}`);
  if (picker) {
    const activeOpt = picker.querySelector('.variant-opt.active');
    if (activeOpt && activeOpt.getAttribute('data-type') === 'normal') {
      selectedPrice = item.priceNormal;
      variantLabel = ' (Normal)';
    } else if (activeOpt) {
      variantLabel = ' (Pure)';
    }
  }

  const cartId = `${itemId}${variantLabel ? '-' + variantLabel : ''}`;
  const existing = cart.find(c => c.cartId === cartId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      cartId: cartId,
      id: item.id,
      name: `${item.name}${variantLabel}`,
      price: selectedPrice,
      diet: item.diet,
      qty: 1
    });
  }

  saveCart();
  updateCartCount();
  renderCartDrawerItems();
  showToast(`Added ${item.name} to order! 🍰`);
};

window.updateItemQty = function(cartId, delta) {
  const item = cart.find(c => c.cartId === cartId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.cartId !== cartId);
  }

  saveCart();
  updateCartCount();
  renderCartDrawerItems();
};

function saveCart() {
  localStorage.setItem('saaral_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const badges = document.querySelectorAll('.cart-badge');
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'inline-block' : 'none';
  });
}

function initCartDrawer() {
  const trigger = document.getElementById('cartBtnTrigger');
  const overlay = document.getElementById('cartDrawerOverlay');
  const drawer = document.getElementById('cartDrawer');
  const closeBtn = document.getElementById('closeCartDrawer');

  if (trigger) {
    trigger.addEventListener('click', () => {
      renderCartDrawerItems();
      overlay.classList.add('open');
      drawer.classList.add('open');
    });
  }

  const closeCart = () => {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCart();
  });
}

function renderCartDrawerItems() {
  const listContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotalAmount');
  const gstEl = document.getElementById('cartGstAmount');
  const totalEl = document.getElementById('cartTotalAmount');
  if (!listContainer || !totalEl) return;

  listContainer.innerHTML = '';

  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 50px 10px; color: var(--color-text-muted);">
        <p style="font-size: 3.5rem; margin-bottom: 12px;">🧁</p>
        <p style="font-weight: 700; font-size: 1.2rem; color: var(--color-primary-brown);">Your Tray is Empty</p>
        <p style="font-size: 0.95rem; margin-top: 4px;">Explore our menu and add some sweet & savory treats!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (gstEl) gstEl.textContent = '₹0';
    totalEl.textContent = '₹0';
    return;
  }

  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>₹${item.price} each • Total: ₹${itemTotal}</p>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="updateItemQty('${item.cartId}', -1)">−</button>
        <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.qty}</span>
        <button class="qty-btn" onclick="updateItemQty('${item.cartId}', 1)">+</button>
      </div>
    `;
    listContainer.appendChild(row);
  });

  const grandTotal = subtotal;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (gstEl && gstEl.parentElement) gstEl.parentElement.style.display = 'none';
  totalEl.textContent = subtotal > 0 ? `₹${subtotal}+GST` : `₹0`;
}

window.sendWhatsAppOrder = function() {
  if (cart.length === 0) {
    showToast('Please add items to your tray first!');
    return;
  }

  const tableSelect = document.getElementById('diningOptionSelect');
  const chosenOption = tableSelect ? tableSelect.value : tableOrTakeaway;

  let orderText = `*New Order - Saaral Bakes & Cafe*\n`;
  orderText += `--------------------------------\n`;
  orderText += `*Dining / Order Type:* ${chosenOption}\n`;
  orderText += `--------------------------------\n`;

  let subtotal = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    orderText += `${index + 1}. ${item.name} x ${item.qty} = ₹${itemTotal}\n`;
  });

  const grandTotal = subtotal;

  orderText += `--------------------------------\n`;
  orderText += `*Total Amount:* ₹${grandTotal}+GST\n`;
  orderText += `--------------------------------\n`;
  orderText += `Kindly confirm my order & let me know the preparation time. Thank you! 🍰`;

  const phoneNumber = '919876543210';
  const encodedText = encodeURIComponent(orderText);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');
};

// ==========================================================================
// 10. REVIEWS & TESTIMONIALS
// ==========================================================================
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container) return;

  container.innerHTML = '';

  customerReviews.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      starsHtml += i < rev.rating ? '★' : '☆';
    }

    card.innerHTML = `
      <div class="review-card-header">
        <div class="review-avatar">${rev.initial}</div>
        <div>
          <div class="reviewer-name">${rev.name}</div>
          <div class="reviewer-date">${rev.date}</div>
        </div>
      </div>
      <div class="review-stars">${starsHtml}</div>
      <p class="review-body">"${rev.comment}"</p>
      ${rev.tag ? `<span class="review-tag">${rev.tag}</span>` : ''}
    `;
    container.appendChild(card);
  });
}

function initReviewModal() {
  const modal = document.getElementById('reviewDialog');
  const openButtons = document.querySelectorAll('.open-review-btn');
  const closeBtn = document.getElementById('closeReviewDialog');
  const stars = document.querySelectorAll('#starRatingPicker .star');
  const form = document.getElementById('submitReviewForm');
  let selectedRating = 5;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.showModal();
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-value'), 10);
      stars.forEach(s => {
        const val = parseInt(s.getAttribute('data-value'), 10);
        if (val <= selectedRating) {
          s.classList.add('selected');
        } else {
          s.classList.remove('selected');
        }
      });
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reviewerNameInput').value.trim();
      const fav = document.getElementById('reviewerFavInput').value.trim();
      const feedback = document.getElementById('reviewerCommentInput').value.trim();

      if (!name || !feedback) return;

      const newReview = {
        name: name,
        initial: name.charAt(0).toUpperCase(),
        rating: selectedRating,
        date: 'Just now',
        tag: fav ? `Favorite: ${fav}` : 'Verified Customer',
        comment: feedback
      };

      customerReviews.unshift(newReview);
      renderReviews();
      form.reset();
      modal.close();
      showToast('Thank you for dropping your sweet review! ⭐');
    });
  }
}

// ==========================================================================
// 11. FAQ ACCORDION
// ==========================================================================
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(other => other.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ==========================================================================
// 12. CONTACT FORM & TOAST UTILITY
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Inquiry sent! We will connect with you on WhatsApp shortly.');
    form.reset();
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
