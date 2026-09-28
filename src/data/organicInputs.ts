import { BioInputRecipe } from '../types/farming';

export const ORGANIC_INPUTS_DATA: BioInputRecipe[] = [
  {
    id: 'jeevamrutha',
    name: 'Jeevamrutha (Liquid Bio-Inoculant)',
    type: 'Fertilizer',
    shelfLife: 'Use within 7-10 days of fermentation',
    targetIssues: [
      'Multiplies beneficial aerobic soil bacteria and earthworms',
      'Unlocks unavailable bound phosphorus and micronutrients',
      'Accelerates composting of organic matter in the root zone'
    ],
    baseAcreage: 1,
    ingredients: [
      { item: 'Fresh Desi Cow Dung', amountPerAcre: 10, unit: 'kg', notes: 'Native indigenous cow dung contains richest aerobic bacteria' },
      { item: 'Desi Cow Urine (Gomutra)', amountPerAcre: 10, unit: 'liters', notes: 'Acts as rich organic nitrogen and microbial nutrient' },
      { item: 'Organic Jaggery (Gud) or Sugarcane Juice', amountPerAcre: 2, unit: 'kg', notes: 'Energy/carbohydrate food for multiplying microbes' },
      { item: 'Pulse Flour (Besan / Gram / Moong)', amountPerAcre: 2, unit: 'kg', notes: 'Protein source for microbial colonies' },
      { item: 'Virgin Live Soil (from Banyan tree / fence line)', amountPerAcre: 0.25, unit: 'kg', notes: 'Mother culture rich in unpolluted native mycorrhizae and actinomycetes' },
      { item: 'Water (Chlorine-free / Well or Rain water)', amountPerAcre: 200, unit: 'liters', notes: 'Do not use chlorinated municipal tap water' }
    ],
    preparationSteps: [
      'Take a 200-liter clean plastic or cement drum kept under complete shade (never direct sun).',
      'Add 10 kg cow dung and 10 liters cow urine into the drum and stir with a clean wooden pole until smooth.',
      'Dissolve 2 kg jaggery and 2 kg pulse flour in 10 liters of water in a bucket, then pour into the drum.',
      'Add the handful of live virgin soil and top up the barrel with 200 liters of water.',
      'Stir clockwise for 2-3 minutes. Cover the mouth with a breathable jute/burlap bag to allow aeration while keeping flies out.',
      'Stir clockwise twice a day (morning and evening). Ferment for 48 to 72 hours in summer, or 4 to 6 days in winter.'
    ],
    applicationInstructions: 'Apply 200 liters per acre along with flood irrigation water, or dilute 1:10 with water for drip fertigation (filter through double mosquito mesh). Apply once every 21 days.',
    bestTime: 'Apply in the morning (6 AM - 9 AM) or late afternoon (after 4 PM) when soil is moist.',
    safetyPrecautions: '100% safe, non-toxic, safe for bees, birds, and earthworms. Always keep covered with burlap to prevent mosquito breeding.'
  },
  {
    id: 'panchagavya',
    name: 'Panchagavya (Organic Growth Booster & Tonic)',
    type: 'Fertilizer',
    shelfLife: 'Up to 6 months if stirred periodically',
    targetIssues: [
      'Boosts plant immunity against viral and bacterial diseases',
      'Stimulates branching, flowering, and heavy fruit setting',
      'Enhances leaf thickness, chlorophyll density, and sweetness (Brix)'
    ],
    baseAcreage: 1,
    ingredients: [
      { item: 'Fresh Cow Dung', amountPerAcre: 7, unit: 'kg', notes: 'Base organic substrate' },
      { item: 'Desi Cow Ghee (Clarified Butter)', amountPerAcre: 1, unit: 'kg', notes: 'Breaks down waxes and produces fermentation hormones' },
      { item: 'Desi Cow Urine', amountPerAcre: 10, unit: 'liters', notes: 'Nitrogen & antimicrobial compounds' },
      { item: 'Fresh Cow Milk', amountPerAcre: 3, unit: 'liters', notes: 'Proteins and lactic acids' },
      { item: 'Fresh Cow Curd (Yogurt)', amountPerAcre: 2, unit: 'liters', notes: 'Lactobacillus probiotic flora' },
      { item: 'Tender Coconut Water', amountPerAcre: 3, unit: 'liters', notes: 'Natural cytokinins and plant growth hormones' },
      { item: 'Sugarcane Jaggery', amountPerAcre: 3, unit: 'kg', notes: 'Dissolved in 3L water' },
      { item: 'Ripe Bananas (Poovan / Country type)', amountPerAcre: 12, unit: 'pieces', notes: 'Mashed; potassium source' }
    ],
    preparationSteps: [
      'Day 1 to 3: Thoroughly mix 7 kg cow dung and 1 kg cow ghee in a wide-mouthed plastic container. Keep in shade and stir twice daily for 3 days.',
      'Day 4: Add 10 liters cow urine and 10 liters water. Stir well and let sit for 10 days, stirring twice daily.',
      'Day 15: Add cow milk, cow curd, tender coconut water, jaggery syrup, and mashed bananas.',
      'Stir clockwise twice daily for another 15 days (total 30 days fermentation). Panchagavya is ready on Day 30 with a pleasant fruity-alcohol aroma.'
    ],
    applicationInstructions: 'Foliar Spray: Mix 300 ml Panchagavya in 10 liters of water (3% solution). Spray thoroughly on foliage. Soil Drench: 50 liters/acre mixed with irrigation water.',
    bestTime: 'Spray at 20-30 days interval during vegetative, pre-flowering, and fruit formation stages.',
    safetyPrecautions: 'Do not use chemical fertilizers or weed killers in the same sprayer tank without triple rinsing with clean water.'
  },
  {
    id: 'nske-5',
    name: 'Neem Seed Kernel Extract (NSKE 5%)',
    type: 'Pesticide',
    shelfLife: 'Prepare fresh; use within 48 hours',
    targetIssues: [
      'Repels chewing caterpillars, stem borers, and leaf folders',
      'Acts as anti-feedant, disrupts insect moulting and egg hatching',
      'Controls whiteflies, aphids, jassids, and thrips organically'
    ],
    baseAcreage: 1,
    ingredients: [
      { item: 'Neem Seed Kernels (dried)', amountPerAcre: 5, unit: 'kg', notes: 'Must be fresh (not older than 8-10 months) for high azadirachtin' },
      { item: 'Clean Water', amountPerAcre: 100, unit: 'liters', notes: 'For soaking and final volume' },
      { item: 'Mild Khadi / Liquid Soap or Reetha (Soapnut)', amountPerAcre: 100, unit: 'grams', notes: 'Acts as natural surfactant and sticking agent' }
    ],
    preparationSteps: [
      'Pound or grind 5 kg dry neem seed kernels gently into a coarse powder (do not make fine flour, do not heat).',
      'Tie the powdered seeds loosely in a clean cotton muslin cloth or porous burlap bag.',
      'Suspend the bag in a bucket containing 20 liters of water overnight (12 to 14 hours).',
      'Squeeze the bag repeatedly into the water until the liquid turns thick milky white.',
      'Dissolve 100g mild liquid soap or soapnut extract in 1 liter warm water and mix into the extract.',
      'Filter through muslin cloth and dilute with remaining water to make total 100 liters of 5% spray solution.'
    ],
    applicationInstructions: 'Spray evenly over both upper and lower leaf surfaces using a fine mist cone nozzle. 100 liters covers 1 acre of young crop; 150-200 liters for dense canopy.',
    bestTime: 'Always spray after 4:30 PM. Azadirachtin degrades rapidly under direct midday ultraviolet solar rays.',
    safetyPrecautions: 'Completely harmless to honeybees, spiders, and ladybugs. Wash hands with soap after spraying.'
  },
  {
    id: 'dashaparni-ark',
    name: 'Dashaparni Ark (10-Leaf Botanical Shield)',
    type: 'Pesticide',
    shelfLife: 'Can be stored in sealed containers for up to 6 months',
    targetIssues: [
      'Broad-spectrum defense against both sucking pests and fungal pathogens',
      'Prevents aphids, leafhoppers, pod borers, and thrips',
      'Suppresses mildew and leaf spot spores naturally'
    ],
    baseAcreage: 1,
    ingredients: [
      { item: 'Neem Leaves (Azadirachta indica)', amountPerAcre: 5, unit: 'kg', notes: 'Crushed' },
      { item: 'Pongamia (Karanj) Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Antimicrobial and insecticidal' },
      { item: 'Custard Apple (Sitaphal) Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Potent insect repellent' },
      { item: 'Papaya Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Enzyme rich' },
      { item: 'Castor (Arandi) Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Alkaloid rich' },
      { item: 'Calotropis (Aak / Madar) Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Milky latex repels borers' },
      { item: 'Lantana camara Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Bitter repellent' },
      { item: 'Guava Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Tannin and antifungal' },
      { item: 'Pomegranate Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Astringent' },
      { item: 'Tulsi / Holy Basil Leaves', amountPerAcre: 2, unit: 'kg', notes: 'Aromatic pest deterrent' },
      { item: 'Desi Cow Dung', amountPerAcre: 2, unit: 'kg', notes: 'Fermentation starter' },
      { item: 'Desi Cow Urine', amountPerAcre: 5, unit: 'liters', notes: 'Solvent & active nitrogen' },
      { item: 'Crushed Garlic & Green Chili paste', amountPerAcre: 1, unit: 'kg', notes: 'Capsaicin and allicin booster' },
      { item: 'Water', amountPerAcre: 200, unit: 'liters', notes: 'Fermentation base' }
    ],
    preparationSteps: [
      'In a 200L barrel, mix 200L water, 2 kg cow dung, and 5L cow urine.',
      'Coarsely chop all 10 types of leaves and add them to the barrel.',
      'Add 500g crushed garlic and 500g spicy green chillies.',
      'Stir clockwise twice daily and keep covered in shade for 30 to 40 days.',
      'After 40 days, strain the dark aromatic liquid through a fine cloth. The extract is ready for use.'
    ],
    applicationInstructions: 'Dilute 500 ml to 750 ml Dashaparni Ark in 15 liters of water (1 knapsack sprayer) and spray foliage thoroughly.',
    bestTime: 'Spray late afternoon every 15-20 days as a preventive barrier.',
    safetyPrecautions: 'Avoid touching eyes during spraying as chillies and calotropis latex cause temporary irritation.'
  },
  {
    id: 'agniastra',
    name: 'Agniastra (The Fire Brew for Severe Borer Infestation)',
    type: 'Pesticide',
    shelfLife: 'Can be stored for 3 months in closed plastic container',
    targetIssues: [
      'Rapid kill and repellent for stubborn leaf-folders, shoot & fruit borers, and armyworms',
      'Effective on hard-to-kill pod borer caterpillars (Helicoverpa)'
    ],
    baseAcreage: 1,
    ingredients: [
      { item: 'Desi Cow Urine', amountPerAcre: 10, unit: 'liters', notes: 'Potent base' },
      { item: 'Crushed Hot Green Chillies', amountPerAcre: 1, unit: 'kg', notes: 'Sharp burning capsaicin' },
      { item: 'Crushed Garlic Paste', amountPerAcre: 0.5, unit: 'kg', notes: 'Pungent allicin' },
      { item: 'Crushed Neem Leaves Pulp', amountPerAcre: 5, unit: 'kg', notes: 'Bitter insect growth regulator' },
      { item: 'Crushed Tobacco Powder (or Papaya leaves)', amountPerAcre: 0.25, unit: 'kg', notes: 'Natural nicotine (optional; substitute with ginger if unavailable)' }
    ],
    preparationSteps: [
      'Take 10 liters of cow urine in an earthen pot or stainless steel vessel.',
      'Add the crushed green chilli paste, crushed garlic, and neem leaf pulp.',
      'Boil the mixture gently on slow fire until the volume reduces by about 20% (approx 20-30 minutes of mild simmering).',
      'Remove from heat and allow to cool in shade for 48 hours.',
      'Filter the liquid through a clean cotton cloth and bottle the concentrated extract.'
    ],
    applicationInstructions: 'Dilute 250 ml to 300 ml Agniastra in 15 liters of water. Spray directly on affected shoots, buds, and fruits.',
    bestTime: 'Spray at dusk when caterpillars come out of hiding to feed.',
    safetyPrecautions: 'Wear gloves and face mask when preparing and boiling due to pungent vapors. Do not spray during noon heat.'
  },
  {
    id: 'sour-buttermilk-copper',
    name: 'Sour Buttermilk (Khatti Chaas) + Copper Fungicide',
    type: 'Fungicide',
    shelfLife: 'Use within 5-7 days after fermentation',
    targetIssues: [
      'Powdery mildew, downy mildew, early blight, and late blight',
      'Bacterial leaf streak and brown spot in rice, wheat, tomato, and cucurbits',
      'Natural foliar booster rich in lactic acid bacteria'
    ],
    baseAcreage: 1,
    ingredients: [
      { item: 'Fresh Cow Buttermilk (Chaas / Moru)', amountPerAcre: 5, unit: 'liters', notes: 'From indigenous cow milk curd' },
      { item: 'Pure Copper Plate / Copper Wire / Clean Copper Coin', amountPerAcre: 1, unit: 'piece', notes: 'Generates organic copper ions' },
      { item: 'Clean Water', amountPerAcre: 100, unit: 'liters', notes: 'Dilution' },
      { item: 'Asafoetida (Hing) Powder', amountPerAcre: 50, unit: 'grams', notes: 'Potent natural antifungal booster' }
    ],
    preparationSteps: [
      'Take 5 liters of buttermilk in an earthen pot or plastic jug.',
      'Place a clean piece of copper wire or copper plate inside the buttermilk.',
      'Add 50g of asafoetida powder and stir well.',
      'Cover with cloth and let it ferment in a warm shade for 4 to 5 days until a greenish-blue hue develops and it smells strongly sour.',
      'Remove the copper piece and strain the liquid through a fine cloth.'
    ],
    applicationInstructions: 'Mix 500 ml of fermented copper-buttermilk in 15 liters of water. Spray thoroughly on the foliage and underside of leaves.',
    bestTime: 'Early morning or late afternoon at the first warning of cloudy, foggy, or humid weather that triggers fungal blights.',
    safetyPrecautions: 'Do not use metal containers other than earthen pot or heavy plastic.'
  },
  {
    id: 'stale-seedbed-mulch',
    name: 'Stale Seedbed & Organic Mulch System',
    type: 'Weed Control',
    shelfLife: 'Effective throughout the crop season',
    targetIssues: [
      'Destroys 70-85% of dormant weed seeds before crop emergence',
      'Preserves 40% more soil moisture and reduces soil temperature in summer',
      'Eliminates need for harmful chemical herbicides that kill soil biology'
    ],
    baseAcreage: 1,
    ingredients: [
      { item: 'Dry Paddy Straw, Sugarcane Trash, or Fallen Leaves', amountPerAcre: 2.5, unit: 'tons', notes: 'Dry carbonaceous biomass' },
      { item: 'Pre-sowing Irrigation Water', amountPerAcre: 1, unit: 'cycle', notes: 'To trigger weed seed bank germination' }
    ],
    preparationSteps: [
      'Step 1 (Stale Seedbed): 12-14 days prior to planting your crop, plow and level the seedbed, then give a light irrigation.',
      'Step 2: Within 5-7 days, thousands of dormant annual weed seeds will sprout into green seedlings.',
      'Step 3: Run a very shallow blade harrow (2-3 cm depth) or light rotary tiller during midday bright sun. The exposed tender weed roots desiccate and die without turning up deeper weed seeds.',
      'Step 4: Sow your crop seeds with minimal soil disturbance.',
      'Step 5 (Biomass Mulching): 7-10 days after crop emergence, spread a 3-4 inch (8-10 cm) uniform blanket of dry straw or sugarcane trash between crop rows, keeping 3 cm away from crop collar stems.'
    ],
    applicationInstructions: 'Mulch stays in place all season. At end of season, incorporate decomposing mulch back into the soil as organic humus.',
    bestTime: 'Implement during land preparation before each main cropping season.',
    safetyPrecautions: 'Ensure dry mulch does not touch the direct collar stem of tender seedlings in extremely humid weather.'
  },
  {
    id: 'bio-vinegar-burndown',
    name: 'Horticultural Vinegar & Salt Contact Burndown',
    type: 'Weed Control',
    shelfLife: 'Stable indefinitely in airtight plastic containers',
    targetIssues: [
      'Contact burndown of stubborn weeds on field bunds, farm paths, irrigation channels, and fences',
      'Rapidly desiccates annual broadleaf weeds and grasses within 24 hours without toxic residues'
    ],
    baseAcreage: 0.25,
    ingredients: [
      { item: 'Horticultural Vinegar (15-20% Acetic Acid)', amountPerAcre: 5, unit: 'liters', notes: 'Much stronger than kitchen vinegar (5%)' },
      { item: 'Non-iodized Table Salt or Rock Salt', amountPerAcre: 1, unit: 'kg', notes: 'Draws moisture from plant cells' },
      { item: 'Mild Liquid Soap / Dish Soap', amountPerAcre: 100, unit: 'ml', notes: 'Breaks water surface tension to stick to waxy weed leaves' }
    ],
    preparationSteps: [
      'Pour 5 liters of 15% horticultural vinegar into a clean plastic bucket.',
      'Add 1 kg of salt and stir vigorously until the salt is completely dissolved.',
      'Gently stir in 100 ml of liquid soap (do not whip up excessive foam).',
      'Pour into a dedicated plastic hand-pump knapsack sprayer.'
    ],
    applicationInstructions: 'Direct spray strictly onto weed foliage on field paths, borders, and bunds on a bright, hot sunny day (above 25°C). The sun activates the acid breakdown within 2-4 hours.',
    bestTime: 'Midday (11 AM to 2 PM) when the sun is blazing hot.',
    safetyPrecautions: 'DO NOT spray on your actual cash crops. Wear safety goggles and gloves when handling concentrated vinegar.'
  }
];
