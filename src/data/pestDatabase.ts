import { PestDiagnosticEntry } from '../types/farming';

export const PEST_DATABASE: PestDiagnosticEntry[] = [
  {
    id: 'aphids-whiteflies',
    name: 'Aphids, Whiteflies & Jassids (Sucking Pests)',
    type: 'Insect Pest',
    symptomSummary: 'Curling of leaf margins, yellowing foliage, sticky honeydew attracting black sooty mold.',
    visibleSigns: [
      'Tiny green, black, or yellowish insects clustering on the undersides of leaves and young buds',
      'Sticky shiny liquid (honeydew) excreted over leaves and stems',
      'Black soot-like mold coating the upper surface of leaves',
      'Upward or downward crinkling and premature leaf drop'
    ],
    affectedCrops: ['Chilli', 'Tomato', 'Cotton', 'Mustard', 'Wheat', 'Brinjal', 'Soybean'],
    imageUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80',
    organicTreatments: [
      {
        title: 'Neem Oil Spray (10,000 ppm)',
        description: 'Mix 5 ml cold-pressed Neem Oil + 2 ml mild liquid soap in 1 liter of warm water. Spray thoroughly on the underside of leaves where pests shelter. Repeat every 5-7 days.'
      },
      {
        title: 'Dashaparni Ark or Agniastra',
        description: 'Spray 500 ml Dashaparni Ark diluted in 15 liters of water. Acts as a potent organic neuro-toxin and deterrent for sap suckers.'
      },
      {
        title: 'Lecanicillium lecanii Bio-Pesticide',
        description: 'Fungal entomopathogen that penetrates and parasitizes whiteflies and aphids. Mix 5g wettable powder per liter of water and spray during humid, overcast hours.'
      }
    ],
    preventiveMeasures: [
      'Install 10-12 bright yellow sticky traps and 6 blue sticky traps per acre at crop canopy level.',
      'Grow 2 border rows of Maize or Sorghum as a physical barrier against wind-blown pests.',
      'Spray 5% Neem Seed Kernel Extract (NSKE) 15 days after transplanting before pest population builds up.'
    ]
  },
  {
    id: 'fruit-shoot-borer',
    name: 'Fruit and Shoot Borer (Helicoverpa / Leucinodes)',
    type: 'Insect Pest',
    symptomSummary: 'Drooping withered shoot tips, circular entrance boreholes on fruits and pods with brown excreta.',
    visibleSigns: [
      'Tender top shoots of plants wilting and snapping during sunny hours',
      'Holes drilled into green fruits, pods, or bolls plugged with dark frass pellets',
      'Premature fruit decay, internal rotting, and heavy fruit drop'
    ],
    affectedCrops: ['Brinjal', 'Tomato', 'Chickpea', 'Chilli', 'Cotton', 'Pigeon Pea'],
    imageUrl: 'https://images.unsplash.com/photo-1596726690410-099185a7d0e4?auto=format&fit=crop&w=800&q=80',
    organicTreatments: [
      {
        title: 'Manual Clipping & Destruction of Drooping Shoots',
        description: 'Twice a week, clip wilted shoot tips 2 inches below the wilting point and immerse them in soap water or burn them. This terminates the caterpillar inside before it enters the fruit.'
      },
      {
        title: 'Bacillus thuringiensis (Bt) Spray',
        description: 'Mix 2g Bt wettable powder per liter of water. Caterpillars ingesting Bt suffer gut paralysis within 48 hours. Spray in late afternoon.'
      },
      {
        title: 'Agniastra (Boiled Garlic-Chilli-Neem Extract)',
        description: 'Dilute 300 ml Agniastra in 15 liters of water. Spray directly onto fruit clusters and flowers.'
      }
    ],
    preventiveMeasures: [
      'Install 4-6 species-specific pheromone lure traps per acre to disrupt mating flights.',
      'Plant French Marigold (Tagetes erecta) every 10 rows as a sacrificial trap crop to attract egg-laying moths away from cash crops.',
      'Release Trichogramma parasitoid wasp cards @ 20,000 eggs/acre starting 30 days after transplanting.'
    ]
  },
  {
    id: 'powdery-mildew',
    name: 'Powdery Mildew (Fungal Infection)',
    type: 'Fungal Disease',
    symptomSummary: 'Talcum powder-like white spots that rapidly coalesce to coat entire leaves and stems.',
    visibleSigns: [
      'White to greyish superficial powdery fungal patches on upper leaf surfaces',
      'Leaves turning pale yellow, drying into brittle brown parchment, and falling off',
      'Distorted young shoots and poor fruit sweetness/size'
    ],
    affectedCrops: ['Green Gram', 'Mustard', 'Chilli', 'Peas', 'Cucurbits / Watermelon', 'Grapes'],
    imageUrl: 'https://images.unsplash.com/photo-1618218168350-6e7c81151b64?auto=format&fit=crop&w=800&q=80',
    organicTreatments: [
      {
        title: 'Sour Buttermilk (Khatti Chaas) Spray',
        description: 'Ferment fresh cow buttermilk for 4-5 days. Dilute 500 ml in 15 liters of water (1:30 ratio) and spray foliage thoroughly. Lactic acid bacteria outcompete mildew fungi.'
      },
      {
        title: 'Baking Soda (Potassium Bicarbonate) Spray',
        description: 'Dissolve 3 grams baking soda + 2 ml organic vegetable oil + 1 ml liquid soap in 1 liter of water. The alkaline pH immediately disrupts fungal spores.'
      },
      {
        title: 'Milk & Water Spray (1:9 ratio)',
        description: 'Mix 100 ml fresh cow milk in 900 ml water. Under sunlight, milk creates antiseptic free radicals that kill powdery mildew.'
      }
    ],
    preventiveMeasures: [
      'Ensure wide spacing between plants for adequate cross-ventilation and sunlight penetration.',
      'Avoid excessive nitrogen fertilization which produces soft, succulent, disease-prone tissues.',
      'Water the root zone directly with drip lines; never wet the leaf canopy in late evening.'
    ]
  },
  {
    id: 'early-late-blight',
    name: 'Early & Late Blight (Alternaria / Phytophthora)',
    type: 'Fungal Disease',
    symptomSummary: 'Target-board concentric dark spots or greasy water-soaked black patches on leaves and tubers.',
    visibleSigns: [
      'Brown to black spots with concentric rings ("target board" pattern) on lower older leaves (Early Blight)',
      'Large irregular water-soaked dark lesions with white fungal down on leaf undersides in humid mornings (Late Blight)',
      'Black sunken greasy rot on tomato fruits or potato tuber flesh'
    ],
    affectedCrops: ['Potato', 'Tomato', 'Chilli', 'Brinjal'],
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
    organicTreatments: [
      {
        title: 'Copper-Fermented Buttermilk (Tamra Chaas)',
        description: 'Place a clean piece of copper wire or plate in 5L sour buttermilk for 4 days until it turns greenish-blue. Dilute 500 ml in 15L water and spray early morning.'
      },
      {
        title: 'Pseudomonas fluorescens & Trichoderma Bio-Fungicide',
        description: 'Mix 5g Pseudomonas fluorescens + 5g Trichoderma harzianum per liter of water. Spray foliage and drench root collars.'
      },
      {
        title: 'Horsetail / Ginger-Garlic Herbal Decoction',
        description: 'High natural silica and sulfur decoction strengthens cell walls and halts mycelial invasion.'
      }
    ],
    preventiveMeasures: [
      'Practice 3-year crop rotation: never follow tomato after potato or eggplant in the same plot.',
      'Prune off all bottom leaves touching the bare soil and apply a 3-inch straw mulch.',
      'Destroy and burn infected crop debris; never toss blight-infected vines into compost piles.'
    ]
  },
  {
    id: 'fusarium-bacterial-wilt',
    name: 'Fusarium & Bacterial Wilt (Vascular Collapse)',
    type: 'Fungal Disease',
    symptomSummary: 'Sudden daytime drooping of green leaves, vascular browning when stem is cut horizontally.',
    visibleSigns: [
      'Plant wilts suddenly during the heat of noon even when soil has ample moisture',
      'Leaves droop while retaining green color, followed by total plant collapse within 3-5 days',
      'Dark brown discoloration inside the vascular ring of the cut stem',
      'Bacterial ooze test: a fresh cut stem placed in clear glass water emits milky bacterial threads within 2 minutes'
    ],
    affectedCrops: ['Tomato', 'Chilli', 'Chickpea', 'Brinjal', 'Banana', 'Potato'],
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    organicTreatments: [
      {
        title: 'Root Drenching with Trichoderma & Pseudomonas',
        description: 'Mix 1 kg Trichoderma viride + 1 kg Pseudomonas fluorescens in 100 liters of water. Drench 200 ml slurry around the root zone of neighboring healthy plants immediately.'
      },
      {
        title: 'Neem Cake + Mustard Cake Soil Fortification',
        description: 'Apply 150 kg Neem Cake mixed with 50 kg Mustard cake per acre. Liberates natural allyl isothiocyanates that inhibit fungal chlamydospores in soil.'
      }
    ],
    preventiveMeasures: [
      'Deep summer plowing (30 cm) to solarize and sterilize dormant resting spores.',
      'Raise planting beds by 15-20 cm to ensure rapid root drainage during rainstorms.',
      'Dip seedling roots in Pseudomonas slurry (10g/L) for 30 minutes before transplanting.'
    ]
  },
  {
    id: 'root-knot-nematode',
    name: 'Root-Knot Nematodes (Meloidogyne spp.)',
    type: 'Nematode',
    symptomSummary: 'Stunted unthrifty growth, midday wilting, characteristic galls and swollen knots on roots.',
    visibleSigns: [
      'Patches of stunted, pale yellow plants that do not respond to fertilizer application',
      'Roots dug up show distinct round swellings, knobby galls, and malformed root hairs',
      'Heavy reduction in flowering, fruit count, and tuber sizing'
    ],
    affectedCrops: ['Tomato', 'Brinjal', 'Chilli', 'Potato', 'Okra', 'Turmeric', 'Ginger'],
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    organicTreatments: [
      {
        title: 'Paeclomyces lilacinus Bio-Nematicide',
        description: 'Beneficial soil fungus that parasitizes nematode egg masses. Mix 2 kg Paecilomyces lilacinus in 200 kg decomposed manure, incubate 7 days, and incorporate into root furrows.'
      },
      {
        title: 'Neem Cake + Mahua Cake Incorporation',
        description: 'Broadcast 250 kg Neem Cake per acre during final bed preparation. Decomposing neem cake releases triterpenoids that paralyze juvenile nematodes.'
      }
    ],
    preventiveMeasures: [
      'French Marigold (Tagetes patula) Intercropping: Marigold roots exude alpha-terthienyl, an organic compound toxic to root-knot nematodes.',
      'Soil Solarization: Cover moist tilled beds with clear 25-micron polythene sheet for 4-6 weeks during peak summer months.',
      'Crop rotation with non-host crops like Sorghum, Pearl Millet, or Sunnhemp green manure.'
    ]
  },
  {
    id: 'fall-armyworm',
    name: 'Fall Armyworm (Spodoptera frugiperda)',
    type: 'Insect Pest',
    symptomSummary: 'Voracious chewing in plant whorls, large ragged leaf tears with wet sawdust frass.',
    visibleSigns: [
      'Pinholes on young leaves expanding into extensive shredded tears',
      'Large clumps of damp sawdust-like yellowish-brown fecal pellets deep in the whorl',
      'Fat greenish-brown caterpillars with four dark spots arranged in a square on the 8th abdominal segment',
      'Destroyed tassel and chewed ear heads'
    ],
    affectedCrops: ['Maize / Corn', 'Pearl Millet', 'Sorghum', 'Sugarcane', 'Rice'],
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    organicTreatments: [
      {
        title: 'Sand + Wood Ash Whorl Application',
        description: 'Mix 9 parts dry sieved sand with 1 part fine wood ash. Drop a pinch (3-5 grams) directly into the central whorl of each seedling at 15-20 DAS. The abrasive particles shred caterpillar skin and block respiration.'
      },
      {
        title: 'Metarhizium rileyi (Nomuraea) / Bacillus thuringiensis',
        description: 'Spray 5g Metarhizium rileyi or 2g Bt wettable powder per liter of water directly directed into the whorl cup late in the evening.'
      },
      {
        title: 'Agniastra + Cow Urine',
        description: 'Spray 300 ml Agniastra diluted in 15L water directly into the plant heart.'
      }
    ],
    preventiveMeasures: [
      'Install 5 Fall Armyworm pheromone lure traps per acre right from seedling emergence.',
      'Erect T-shaped bird perches (15-20 per acre) so local insectivorous birds (drongos, mynas) can hunt caterpillars.',
      'Intercrop with Cowpea or Desmodium (push-pull method) to repel egg-laying moths.'
    ]
  }
];
