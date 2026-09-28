import { Crop } from '../types/farming';

export const CROPS_DATA: Crop[] = [
  {
    id: 'rice-paddy',
    name: 'Rice (Paddy)',
    scientificName: 'Oryza sativa',
    localNames: 'Dhan, Chawal, Arisi, Nellu',
    category: 'Grain / Cereal',
    seasons: ['Kharif', 'Zaid'],
    suitableSoils: ['Clay', 'Alluvial / Loam', 'Black / Clay Loam'],
    climates: ['Tropical Warm & Humid', 'Cool / Sub-tropical'],
    waterRequirement: 'Abundant (Canal/Tubewell)',
    suitableRegions: ['Plains & River Basins', 'Coastal Belt', 'Hilly & Valley'],
    growthDurationDays: '115 - 145 days',
    averageYield: '22 - 28 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80',
    overview: 'Primary food grain requiring warm temperatures and abundant water. Deep puddle preparation and organic mulching retain soil moisture and boost root anchorage.',
    profitability: 'Staple / Essential',
    waterSavingTip: 'Adopt Alternate Wetting and Drying (AWD) or System of Rice Intensification (SRI) to cut water use by 30-40% while preserving root aeration.',
    keyFarmingTips: [
      'Incorporate Dhaincha or Sunnhemp green manure 45 days prior to puddling to add 60-80 kg N/ha naturally.',
      'Maintain 2-3 cm shallow water layer during initial tillering; drain field 10 days before harvesting.',
      'Dip seedling roots in Pseudomonas fluorescens slurry (200g in 5L water) for 30 minutes before transplanting.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal / Field Preparation',
        remedyName: 'Well-decomposed FYM + Neem Cake',
        dosage: '4 Tons FYM + 150 kg Neem Cake / acre',
        applicationMethod: 'Broadcast and plow into the soil 2 weeks before transplanting',
        benefits: 'Provides steady nitrogen, enriches organic carbon, and suppresses root nematodes'
      },
      {
        stage: 'Early Tillering (20-25 DAT)',
        remedyName: 'Jeevamrutha Soil Drench / Canal Feed',
        dosage: '200 Liters / acre',
        applicationMethod: 'Channel through the inlet irrigation water or direct soil spray',
        benefits: 'Multiplies native aerobic soil bacteria and releases locked phosphorus'
      },
      {
        stage: 'Panicle Initiation (50-60 DAT)',
        remedyName: 'Panchagavya Foliar Spray',
        dosage: '3% solution (300 ml in 10L water)',
        applicationMethod: 'Foliar spray during cool morning or evening hours',
        benefits: 'Stimulates robust panicle emergence, increases grain count, and strengthens immunity'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Stem Borer & Leaf Folder',
        symptoms: 'Dead hearts in young tillers; folded leaves with scraped white patches',
        organicRemedy: 'Neem Seed Kernel Extract (NSKE 5%) + Trichogramma Cards',
        preparationRecipe: 'Soak 5 kg crushed neem seed powder in 100L water overnight, filter and add 100g soap nut solution.',
        sprayTiming: 'Spray at first sign of moth flight; release Trichogramma chilonis egg cards @ 20,000/acre.'
      },
      {
        targetPest: 'Brown Planthopper (BPH)',
        symptoms: 'Hopper burn (circular patches of drying plants like burnt straw)',
        organicRemedy: 'Beauveria bassiana & Neem Oil Spray',
        preparationRecipe: 'Mix 5g Beauveria bassiana wettable powder + 5ml pure neem oil per liter of water.',
        sprayTiming: 'Direct spray at the base of the rice hills where hoppers congregate.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Broadleaf weeds & Barnyard grass (Echinochloa)',
        organicMethod: 'Water depth control + Cono Weeder',
        howToApply: 'Maintain 3-5 cm water level for 15 days after planting; run a mechanical cono weeder between rows at 15 and 30 DAT to incorporate weeds as green compost.'
      }
    ],
    commonDiseases: [
      {
        name: 'Blast & Bacterial Leaf Blight',
        symptoms: 'Eye-shaped lesions with grey center on leaves; yellow-to-white wavy margins',
        prevention: 'Avoid excessive nitrogen; ensure 20cm x 15cm seedling spacing for good airflow',
        organicCure: 'Spray Sour Buttermilk (500ml fermented for 4 days in 15L water) combined with 5g Pseudomonas fluorescens.'
      }
    ],
    companionPlants: ['Azolla (in flooded water)', 'Sesbania / Dhaincha (border)', 'Marigold (bunds)']
  },
  {
    id: 'wheat',
    name: 'Wheat',
    scientificName: 'Triticum aestivum',
    localNames: 'Gehun, Kanak, Godhuma',
    category: 'Grain / Cereal',
    seasons: ['Rabi'],
    suitableSoils: ['Alluvial / Loam', 'Black / Clay Loam', 'Clay'],
    climates: ['Temperate / Mild', 'Cool / Sub-tropical'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Plains & River Basins', 'Deccan Plateau', 'Hilly & Valley'],
    growthDurationDays: '110 - 130 days',
    averageYield: '18 - 24 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    overview: 'Essential winter cereal thriving in cool, sunny weather. High quality grain requires timely irrigation at crown root initiation and flowering.',
    profitability: 'Staple / Essential',
    waterSavingTip: 'Crown Root Initiation (CRI) at 21 days after sowing is the most critical irrigation stage. Skipping it causes up to 35% yield drop.',
    keyFarmingTips: [
      'Inoculate seeds with Azotobacter and PSB (Phosphate Solubilizing Bacteria) @ 25g/kg seed with jaggery water before sowing.',
      'Sow at 20-22 cm row-to-row spacing and 4-5 cm depth for uniform germination.',
      'Apply light irrigation prior to expected frost or high winter winds.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Sowing',
        remedyName: 'Vermicompost + Mustard Seed Cake',
        dosage: '2 Tons Vermicompost + 100 kg Mustard Cake / acre',
        applicationMethod: 'Incorporate into the top 10 cm soil during final plowing',
        benefits: 'Slow, steady release of nitrogen, phosphorus, and trace minerals'
      },
      {
        stage: 'Tillering (30-35 DAS)',
        remedyName: 'Jeevamrutha Irrigation Drench',
        dosage: '200 Liters / acre',
        applicationMethod: 'Apply along with first or second irrigation water',
        benefits: 'Boosts root length, activates soil microbes, improves nutrient uptake'
      },
      {
        stage: 'Boot Leaf & Flowering (65-75 DAS)',
        remedyName: 'Vermiwash + Wood Ash Extract Spray',
        dosage: '1 Liter Vermiwash + 200g ash extract per 15L sprayer',
        applicationMethod: 'Fine foliar mist in late afternoon',
        benefits: 'Supplies natural potassium and silica to prevent lodging (falling) of wheat stalks'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Wheat Aphid (Mahua)',
        symptoms: 'Colonies of tiny green/black insects sucking sap on tender ears and leaves',
        organicRemedy: 'Dashaparni Ark or Garlic-Chilli Extract',
        preparationRecipe: 'Boil 500g crushed garlic, 500g green hot chillies, and 1kg neem leaves in 5L cow urine; dilute 250ml in 15L water.',
        sprayTiming: 'Spray at first sight of aphid colonies on the ear heads.'
      },
      {
        targetPest: 'Termites (Deemak)',
        symptoms: 'Yellowing tillers that pull out easily from the root zone; dried roots',
        organicRemedy: 'Neem Cake + Calotropis (Aak) Extract Drench',
        preparationRecipe: 'Soak 10kg Calotropis leaves in 50L cow urine for 7 days; add to irrigation water inlet.',
        sprayTiming: 'Apply immediately during first irrigation if termite tubes are noticed.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Phalaris minor (Gulli danda / Canary grass)',
        organicMethod: 'Stale seedbed + Crop canopy density',
        howToApply: 'Pre-irrigate field 10 days before sowing to trigger weed seeds, cultivate shallowly, then sow wheat at close 18 cm rows to shade out weeds.'
      }
    ],
    commonDiseases: [
      {
        name: 'Yellow Rust & Loose Smut',
        symptoms: 'Yellow stripe pustules on leaves; ears converted into powdery black mass',
        prevention: 'Treat seeds with Trichoderma viride @ 4g/kg seed before sowing',
        organicCure: 'Spray Sour Buttermilk (500ml/15L water) + Copper extract (soak copper coin in buttermilk for 3 days) as protective fungicide.'
      }
    ],
    companionPlants: ['Mustard (as trap crop on borders)', 'Chickpea (intercrop 4:1)', 'Fenugreek / Methi']
  },
  {
    id: 'chickpea-chana',
    name: 'Chickpea (Bengal Gram / Chana)',
    scientificName: 'Cicer arietinum',
    localNames: 'Chana, Harbara, Kadale, Chhole',
    category: 'Pulse / Legume',
    seasons: ['Rabi'],
    suitableSoils: ['Black / Clay Loam', 'Alluvial / Loam', 'Red / Sandy Loam'],
    climates: ['Semi-Arid / Hot & Dry', 'Temperate / Mild'],
    waterRequirement: 'Low (Rainfed/Drip only)',
    suitableRegions: ['Deccan Plateau', 'Plains & River Basins', 'Arid & Semi-Arid Zone'],
    growthDurationDays: '95 - 115 days',
    averageYield: '8 - 12 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80',
    overview: 'High-protein legume that enriches soil by fixing atmospheric nitrogen. Highly drought tolerant, requires minimal water, and thrives on residual soil moisture.',
    profitability: 'Moderate / Steady',
    waterSavingTip: 'Needs only 1 to 2 light irrigations (pre-flowering and pod filling). Never flood the field during peak bloom as flowers will drop.',
    keyFarmingTips: [
      'Inoculate seeds with Rhizobium leguminosarum strain and Trichoderma viride to prevent wilt.',
      'Nipping (pinching the apical shoot tip at 30-40 days) forces aggressive side branching and doubles pod numbers.',
      'Avoid overly wet soils to protect against collar rot.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Soil Bed',
        remedyName: 'Compost + Rock Phosphate + PSB',
        dosage: '1.5 Tons Compost + 50 kg Rock Phosphate / acre',
        applicationMethod: 'Incorporate into furrow lines before seed placement',
        benefits: 'Legumes need high phosphorus for root nodule development and nitrogen fixation'
      },
      {
        stage: 'Branching Stage (35-40 DAS)',
        remedyName: 'Panchagavya Foliar Spray',
        dosage: '3% (300ml in 10L water)',
        applicationMethod: 'Foliar spray after nipping',
        benefits: 'Rapidly triggers secondary and tertiary flowering branches'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Gram Pod Borer (Helicoverpa armigera)',
        symptoms: 'Round holes bored into green pods; caterpillars half-submerged in the pod',
        organicRemedy: 'HaNPV (Helicoverpa Nuclear Polyhedrosis Virus) + NSKE 5%',
        preparationRecipe: 'Mix 100 LE HaNPV + 100g jaggery + 50ml soap in 200L water per acre.',
        sprayTiming: 'Spray at dusk when larvae emerge to feed on leaves and early pods.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Broadleaf weeds during first 30 days',
        organicMethod: 'Hand hoeing + Wheat straw mulching',
        howToApply: 'One manual weeding or light wheel hoeing at 25-30 DAS provides season-long weed control.'
      }
    ],
    commonDiseases: [
      {
        name: 'Fusarium Wilt & Dry Root Rot',
        symptoms: 'Sudden drooping and yellow-brown drying of leaves while stems remain upright',
        prevention: 'Deep summer plowing to expose resting spores to hot sunlight',
        organicCure: 'Soil application of Trichoderma harzianum (2 kg mixed in 100 kg compost) placed along the root zone.'
      }
    ],
    companionPlants: ['Coriander (attracts beneficial parasitoid wasps)', 'Linseed', 'Mustard']
  },
  {
    id: 'cotton',
    name: 'Cotton (White Gold)',
    scientificName: 'Gossypium hirsutum',
    localNames: 'Kapas, Patti, Ambadi',
    category: 'Commercial / Cash',
    seasons: ['Kharif'],
    suitableSoils: ['Black / Clay Loam', 'Alluvial / Loam'],
    climates: ['Semi-Arid / Hot & Dry', 'Tropical Warm & Humid'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Deccan Plateau', 'Plains & River Basins', 'Arid & Semi-Arid Zone'],
    growthDurationDays: '150 - 180 days',
    averageYield: '10 - 15 Quintals (Kapas) / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=800&q=80',
    overview: 'High-value commercial fiber crop. Deep tap roots thrive in moisture-retentive black cotton soils with sunny, warm dry weather during boll opening.',
    profitability: 'High Value',
    waterSavingTip: 'Drip irrigation with alternate furrow method saves up to 50% water and prevents waterlogging around root collars.',
    keyFarmingTips: [
      'Maintain 90 cm x 60 cm spacing for good air circulation and sunlight penetration.',
      'Intercrop with Cowpea or Green Gram to smother weeds and supply natural nitrogen.',
      'Install 4-5 pheromone traps per acre to monitor Pink Bollworm moths.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Soil Preparation',
        remedyName: 'Farm Yard Manure + Castor Cake',
        dosage: '3 Tons FYM + 200 kg Castor Cake / acre',
        applicationMethod: 'Spread and incorporate thoroughly before making ridges',
        benefits: 'Provides organic nitrogen and repels soil-dwelling grubs'
      },
      {
        stage: 'Square (Bud) Formation (45 DAS)',
        remedyName: 'Jeevamrutha Drench',
        dosage: '200 Liters / acre',
        applicationMethod: 'Drip fertigation or canal irrigation channel',
        benefits: 'Enhances vegetative vigor and strengthens flower bud retention'
      },
      {
        stage: 'Peak Flowering & Boll Development (75-90 DAS)',
        remedyName: 'Fermented Fruit Juice (FFJ) + Panchagavya',
        dosage: '300 ml Panchagavya + 50 ml FFJ per 15L sprayer',
        applicationMethod: 'Foliar spray in the evening',
        benefits: 'Supplies potassium and boron, preventing flower drop and improving boll size and fiber strength'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Pink Bollworm (Pectinophora gossypiella)',
        symptoms: 'Rosetted flowers that fail to open; entry holes in bolls plugged with excreta',
        organicRemedy: 'Pheromone Traps + Trichogramma bactrae + Agniastra',
        preparationRecipe: 'Install 5 Pheromone funnel traps/acre; spray Agniastra (500ml/15L water) at 60 and 80 DAS.',
        sprayTiming: 'Spray at twilight when adult moths mate and lay eggs on squares and tender bolls.'
      },
      {
        targetPest: 'Sucking Pests (Whitefly, Jassids, Thrips)',
        symptoms: 'Downward cupping of leaves, yellow margins, honeydew excretion causing sooty mold',
        organicRemedy: 'Yellow & Blue Sticky Traps + Neem Oil 10,000 ppm',
        preparationRecipe: 'Mix 5ml Neem Oil + 2ml liquid soap per liter of water; install 10 yellow traps/acre.',
        sprayTiming: 'Spray early morning to thoroughly wet undersides of leaves.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Grasses & Sedges (Cyperus rotundus)',
        organicMethod: 'Cowpea intercropping + Inter-cultivation',
        howToApply: 'Sow one row of Cowpea between two rows of cotton. At 45 days, slash cowpea and use as green mulch.'
      }
    ],
    commonDiseases: [
      {
        name: 'Bacterial Blight & Root Rot',
        symptoms: 'Angular water-soaked leaf spots turning brown; sudden wilting and black root decay',
        prevention: 'Treat seeds with Pseudomonas fluorescens (10g/kg seed); ensure ridge planting',
        organicCure: 'Drench root zone with Trichoderma viride (1kg in 100L water) and spray sour buttermilk with copper.'
      }
    ],
    companionPlants: ['Cowpea (smother crop)', 'Okra (border trap crop for fruit borer)', 'Marigold']
  },
  {
    id: 'tomato',
    name: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    localNames: 'Tamatar, Thakkali, Golbhedā',
    category: 'Vegetable',
    seasons: ['Rabi', 'Kharif', 'Zaid'],
    suitableSoils: ['Red / Sandy Loam', 'Alluvial / Loam', 'Black / Clay Loam'],
    climates: ['Temperate / Mild', 'Tropical Warm & Humid', 'Cool / Sub-tropical'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Plains & River Basins', 'Deccan Plateau', 'Hilly & Valley', 'Coastal Belt'],
    growthDurationDays: '100 - 120 days',
    averageYield: '150 - 220 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    overview: 'High-value, fast-growing solanaceous vegetable. Continuous staking, mulching, and balanced organic nutrition ensure abundant flowering and crack-free, juicy fruits.',
    profitability: 'High Value',
    waterSavingTip: 'Drip irrigation under black/silver or organic straw mulch cuts irrigation water by 50% and stops splash-borne fungal spores from reaching lower leaves.',
    keyFarmingTips: [
      'Stake indeterminate plants with bamboo trellises to keep heavy fruit clusters off the damp soil.',
      'Prune sucker shoots (shoots growing in leaf axils) to direct plant energy into large fruit development.',
      'Spray calcium-rich lime water (1g slaked lime/liter) at early fruit set to eliminate Blossom End Rot.'
    ],
    organicFertilizers: [
      {
        stage: 'Transplanting & Nursery Bed',
        remedyName: 'Vermicompost + Neem Cake + Trichoderma',
        dosage: '2 Tons Vermicompost + 100 kg Neem Cake + 2 kg Trichoderma / acre',
        applicationMethod: 'Mix into raised planting beds before laying drip lines',
        benefits: 'Protects tender seedling roots from damping off while supplying balanced macro and trace minerals'
      },
      {
        stage: 'Vegetative Growth (20-30 DAT)',
        remedyName: 'Jeevamrutha Root Drenching',
        dosage: '100 ml per plant root zone or 200L through drip',
        applicationMethod: 'Weekly or bi-weekly application during morning hours',
        benefits: 'Encourages lush branching, sturdy stems, and deep root foraging'
      },
      {
        stage: 'Flowering & Fruiting (45-75 DAT)',
        remedyName: 'Bio-Potash & Fermented Banana Peel Extract',
        dosage: '5 ml / Liter water foliar spray',
        applicationMethod: 'Spray weekly during fruit sizing',
        benefits: 'High organic potassium ensures deep red fruit color, higher lycopene, and thick skin that resists cracking'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Tomato Fruit Borer (Helicoverpa) & Pinworm',
        symptoms: 'Circular holes on fruits, rotting fruit interior, chewed leaves',
        organicRemedy: 'Neem Seed Kernel Extract 5% + Bacillus thuringiensis (Bt)',
        preparationRecipe: 'Mix 2g Bt wettable powder + 5ml NSKE per liter of water.',
        sprayTiming: 'Spray at sunset when larvae are actively moving across outer fruits.'
      },
      {
        targetPest: 'Whitefly (Vector for Leaf Curl Virus)',
        symptoms: 'Leaves curl upward with yellow margins; stunted plant growth',
        organicRemedy: 'Yellow Sticky Traps + Verticillium lecanii + Garlic-Chili Ark',
        preparationRecipe: 'Install 12 yellow sticky sheets per acre. Spray 5g Verticillium lecanii/liter in humid weather.',
        sprayTiming: 'Apply immediately when whiteflies are seen hovering upon disturbance.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Broadleaf weeds & crabgrass around tomato beds',
        organicMethod: 'Dry paddy straw or sugarcane bagasse mulch (10 cm thick)',
        howToApply: 'Spread dry straw around plants 7 days after transplanting, leaving 5 cm around the base stem.'
      }
    ],
    commonDiseases: [
      {
        name: 'Early & Late Blight',
        symptoms: 'Target-like dark brown concentric rings on lower leaves; dark greasy patches on fruits',
        prevention: 'Avoid overhead watering; remove and burn lower diseased leaves promptly',
        organicCure: 'Spray Sour Buttermilk (1:10 dilution with water) mixed with 2g baking soda (potassium bicarbonate) per liter.'
      }
    ],
    companionPlants: ['French Marigold (repels root knot nematodes)', 'Basil (repels thrips and hornworms)', 'Onion / Garlic']
  },
  {
    id: 'potato',
    name: 'Potato',
    scientificName: 'Solanum tuberosum',
    localNames: 'Aloo, Batata, Urulaikilangu',
    category: 'Vegetable',
    seasons: ['Rabi'],
    suitableSoils: ['Alluvial / Loam', 'Red / Sandy Loam', 'Sandy'],
    climates: ['Cool / Sub-tropical', 'Temperate / Mild'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Plains & River Basins', 'Hilly & Valley', 'Deccan Plateau'],
    growthDurationDays: '85 - 110 days',
    averageYield: '100 - 160 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    overview: 'Crucial tuber crop needing loose, well-aerated sandy loam soil for unhindered tuber expansion. Earthing-up operations prevent tuber greening from sunlight.',
    profitability: 'High Value',
    waterSavingTip: 'Stop irrigation 10-12 days before harvest to allow tuber skin to cure and harden, extending shelf storage life.',
    keyFarmingTips: [
      'Perform earthing-up (mounding soil around stems) at 30 and 45 DAS to keep growing tubers well covered.',
      'De-haulm (cut and remove above-ground vines) 10 days before digging to prevent aphid transmission of viruses to tubers.',
      'Treat seed tubers with Trichoderma viride slurry before planting.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Furrow Placement',
        remedyName: 'Well-rotted FYM + Wood Ash + Bone Meal',
        dosage: '4 Tons FYM + 200 kg Wood Ash + 50 kg Bone Meal / acre',
        applicationMethod: 'Place in planting furrows under seed tubers and cover with 5 cm soil',
        benefits: 'Provides high potassium and phosphorus vital for vigorous stolon and tuber initiation'
      },
      {
        stage: 'Tuber Bulking Stage (40-60 DAS)',
        remedyName: 'Vermiwash + Jeevamrutha Spray',
        dosage: '10% Vermiwash solution foliar spray',
        applicationMethod: 'Foliar spray twice at 15-day intervals',
        benefits: 'Accelerates carbohydrate translocation from leaves into expanding tubers'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Potato Tuber Moth (PTM) & Cutworms',
        symptoms: 'Young shoots severed at ground level; mined galleries inside stored tubers',
        organicRemedy: 'Neem Cake soil incorporation + NSKE spray',
        preparationRecipe: 'Incorporate 150 kg Neem Cake/acre at earthing-up; spray NSKE 5% on foliage.',
        sprayTiming: 'Ensure tubers remain buried under soil; spray foliage at dusk.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Early season annual weeds',
        organicMethod: 'Earthing-up cultivation',
        howToApply: 'Trench ridging and earthing up at 30 DAS completely buries and destroys weed seedlings while banking soft soil.'
      }
    ],
    commonDiseases: [
      {
        name: 'Late Blight (Phytophthora infestans)',
        symptoms: 'Water-soaked black lesions on leaves with white fluffy fungal growth under leaves during foggy cool mornings',
        prevention: 'Certified disease-free seed tubers; plant at 60cm row spacing for good air drainage',
        organicCure: 'Preventive spray of Copper-infused Sour Buttermilk (churned in copper vessel for 3 days) @ 30ml/liter water.'
      }
    ],
    companionPlants: ['Horseradish (repels potato bugs)', 'Beans', 'Coriander']
  },
  {
    id: 'onion',
    name: 'Onion',
    scientificName: 'Allium cepa',
    localNames: 'Pyaaz, Kanda, Vengayam, Ulligadda',
    category: 'Vegetable',
    seasons: ['Rabi', 'Kharif'],
    suitableSoils: ['Alluvial / Loam', 'Red / Sandy Loam', 'Black / Clay Loam'],
    climates: ['Temperate / Mild', 'Semi-Arid / Hot & Dry'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Deccan Plateau', 'Plains & River Basins', 'Arid & Semi-Arid Zone'],
    growthDurationDays: '120 - 140 days',
    averageYield: '100 - 140 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
    overview: 'High-demand bulb crop with shallow fibrous roots requiring light, loose, organic-rich soil and strict weed control during early establishment.',
    profitability: 'High Value',
    waterSavingTip: 'Shallow root system requires frequent light irrigations; stop watering 15 days before lifting when 50% of plant tops fall naturally.',
    keyFarmingTips: [
      'Transplant sturdy 7-8 week old seedlings at 15 cm x 10 cm spacing on raised broad beds.',
      'Cure harvested bulbs in shade for 7-10 days with dry foliage covering the bulbs to prevent sun-scald.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Bed Preparation',
        remedyName: 'Vermicompost + Poultry Manure + Sulphur-rich Mustard Cake',
        dosage: '2.5 Tons Vermicompost + 100 kg Mustard Cake / acre',
        applicationMethod: 'Incorporate into broad raised beds',
        benefits: 'Natural sulphur compounds elevate pungent aroma, pungency, and bulb firmness'
      },
      {
        stage: 'Bulb Initiation (45-60 DAT)',
        remedyName: 'Panchagavya + Seaweed Extract Spray',
        dosage: '3% Panchagavya + 2ml/L liquid seaweed',
        applicationMethod: 'Foliar spray twice at 15-day intervals',
        benefits: 'Enlarges bulb diameter and creates thick protective outer scales for longer storage'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Onion Thrips (Thrips tabaci)',
        symptoms: 'Silvery-white patches or streaks on leaves; curled leaf tips and stunted bulbs',
        organicRemedy: 'Blue Sticky Traps + Neem Oil + Lecanicillium lecanii',
        preparationRecipe: 'Install 15 blue sticky sheets/acre; spray 5ml Neem Oil (10,000 ppm) + 5g Lecanicillium per liter.',
        sprayTiming: 'Spray directed inside the leaf sheaths early morning when thrips are active.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Broadleaf weeds & grass in narrow planting rows',
        organicMethod: 'Hand weeding at 20 & 40 DAT + Rice husk mulch',
        howToApply: 'Onion plants have tubular upright leaves that cast zero shade; shallow hoeing at 20 and 40 DAT is mandatory.'
      }
    ],
    commonDiseases: [
      {
        name: 'Purple Blotch & Stemphylium Blight',
        symptoms: 'Sunken purple lesions on leaves surrounded by yellow halo, spreading rapidly in humid weather',
        prevention: 'Seedling dip in Trichoderma viride; avoid overhead sprinkler watering',
        organicCure: 'Foliar spray of 5% Dashaparni Ark mixed with 5g Pseudomonas fluorescens per liter.'
      }
    ],
    companionPlants: ['Carrot', 'Chamomile', 'Beetroot']
  },
  {
    id: 'chilli-pepper',
    name: 'Chilli (Hot & Red Pepper)',
    scientificName: 'Capsicum annuum',
    localNames: 'Mirch, Milagai, Mirapa',
    category: 'Spice',
    seasons: ['Kharif', 'Rabi', 'Zaid'],
    suitableSoils: ['Black / Clay Loam', 'Red / Sandy Loam', 'Alluvial / Loam'],
    climates: ['Tropical Warm & Humid', 'Semi-Arid / Hot & Dry', 'Temperate / Mild'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Deccan Plateau', 'Plains & River Basins', 'Coastal Belt', 'Arid & Semi-Arid Zone'],
    growthDurationDays: '140 - 170 days',
    averageYield: '40 - 60 Quintals (Green) / 10 - 15 Quintals (Dry) / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    overview: 'High-value spice crop prized worldwide. Highly responsive to organic manure, requires well-drained soil, and vulnerable to sucking pest-transmitted viruses.',
    profitability: 'High Value',
    waterSavingTip: 'Chilli plants are extremely sensitive to waterlogging. Elevated ridges and furrow or drip lines prevent collar rot.',
    keyFarmingTips: [
      'Raise seedlings under 40-mesh insect-proof nylon nets to prevent early viruliferous whitefly infestation.',
      'Spray 2% Cow milk + pinch of turmeric as a natural antiviral protectant at 25 and 45 DAT.',
      'Harvest mature red pods promptly to encourage continuous flushes of flowers.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Ridge Construction',
        remedyName: 'Farm Yard Manure + Neem Cake + VAM (Mycorrhiza)',
        dosage: '3 Tons FYM + 150 kg Neem Cake + 5 kg VAM / acre',
        applicationMethod: 'Incorporate into the ridge bed',
        benefits: 'Mycorrhizae multiply root absorption surface by 400%, extracting deep soil moisture and phosphorus'
      },
      {
        stage: 'Active Flowering & Picking Stage',
        remedyName: 'Jeevamrutha + Fermented Egg-Amino Acid / FFJ',
        dosage: '200L Jeevamrutha through drip + 3ml FFJ/L spray',
        applicationMethod: 'Alternate weeks throughout the 4-month picking period',
        benefits: 'Prevents flower drop, promotes glossy dark green pods with high capsaicin content'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Chilli Thrips & Yellow Mites (Murda Disease)',
        symptoms: 'Leaves curl upward (thrips) or downward like an inverted boat (mites); brittle leaves',
        organicRemedy: 'Agniastra + Wettable Sulphur (Organic grade) / Neem Oil',
        preparationRecipe: 'Boil 500g garlic, 500g hot chillies, 1kg neem leaves in cow urine; spray 30ml/10L water.',
        sprayTiming: 'Spray late afternoon every 7-10 days.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Broadleaf weeds and sedges',
        organicMethod: 'Silver-black plastic mulch or organic sugarcane bagasse mulch',
        howToApply: 'Lay 25-micron mulch sheet before transplanting; punch planting holes at 45 cm distance.'
      }
    ],
    commonDiseases: [
      {
        name: 'Anthracnose / Die-back & Fruit Rot',
        symptoms: 'Circular sunken black spots with salmon pink spore masses on ripening chilli pods; stem tips dry from top down',
        prevention: 'Dip seed in Trichoderma viride (10g/kg); maintain proper plant spacing for aeration',
        organicCure: 'Spray Sour Buttermilk (5%) + 5g Pseudomonas fluorescens per liter.'
      }
    ],
    companionPlants: ['French Marigold (perimeter trap crop)', 'Onion (deterrent)', 'Coriander']
  },
  {
    id: 'maize-corn',
    name: 'Maize (Corn)',
    scientificName: 'Zea mays',
    localNames: 'Makka, Bhutta, Cholam, Mokka Jonnalu',
    category: 'Grain / Cereal',
    seasons: ['Kharif', 'Rabi', 'Zaid'],
    suitableSoils: ['Alluvial / Loam', 'Red / Sandy Loam', 'Black / Clay Loam'],
    climates: ['Tropical Warm & Humid', 'Temperate / Mild', 'Semi-Arid / Hot & Dry'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Plains & River Basins', 'Deccan Plateau', 'Hilly & Valley'],
    growthDurationDays: '90 - 115 days',
    averageYield: '25 - 32 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    overview: 'High-yielding miracle cereal used for human food, poultry feed, and silage. Heavy feeder requiring organic nitrogen and well-drained fertile loam.',
    profitability: 'Moderate / Steady',
    waterSavingTip: 'Silking and grain-filling are critical moisture windows. Water stress at tasseling can cause barren cobs.',
    keyFarmingTips: [
      'Maintain 60 cm row-to-row and 20 cm plant-to-plant spacing.',
      'Sow 2 rows of cowpea or black gram for every 4 rows of maize for weed control and natural nitrogen.',
      'Earthing up at 30-35 DAS anchors the prop roots and prevents lodging during heavy monsoon winds.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Field Prep',
        remedyName: 'Vermicompost + Poultry Manure',
        dosage: '3 Tons Vermicompost / acre',
        applicationMethod: 'Plowed into soil during final harrowing',
        benefits: 'Provides steady nitrogen and organic matter for root growth'
      },
      {
        stage: 'Knee-high Stage (30-35 DAS)',
        remedyName: 'Jeevamrutha Drench',
        dosage: '200 Liters / acre',
        applicationMethod: 'Channel through furrow irrigation',
        benefits: 'Spurs vigorous stem thickening and dark green leaf canopy'
      },
      {
        stage: 'Tasseling & Silking Stage (55-65 DAS)',
        remedyName: 'Panchagavya Foliar Spray',
        dosage: '3% solution (300 ml in 10L water)',
        applicationMethod: 'Foliar spray on foliage and developing cobs',
        benefits: 'Improves complete kernel filling right to the tip of the cob'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Fall Armyworm (Spodoptera frugiperda)',
        symptoms: 'Large ragged holes on leaves with sawdust-like fecal frass in the central plant whorl',
        organicRemedy: 'Sand + Wood Ash whorl application + Metarhizium rileyi / Bacillus thuringiensis',
        preparationRecipe: 'Mix 9 parts dry sieved sand + 1 part fine wood ash; drop 1 pinch directly into the central whorl of each plant.',
        sprayTiming: 'Apply at 15-20 DAS as soon as pinhole leaf scratching is spotted.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Monsoon grass and sedges',
        organicMethod: 'Inter-row cultivation + Green mulch',
        howToApply: 'Run a tractor or bullock-drawn blade harrow between 60cm rows at 25 DAS, followed by earthing up.'
      }
    ],
    commonDiseases: [
      {
        name: 'Turcicum Leaf Blight & Banded Leaf Rot',
        symptoms: 'Long boat-shaped greyish-tan lesions on leaves starting from bottom leaves moving upward',
        prevention: 'Seed treatment with Trichoderma (10g/kg); ensure proper drainage without standing water',
        organicCure: 'Spray Sour Buttermilk (5%) + Pseudomonas fluorescens (5g/L).'
      }
    ],
    companionPlants: ['Cowpea (nitrogen fixer & weed suppressor)', 'Pumpkin / Squash (living mulch)', 'Sunflowers (border)']
  },
  {
    id: 'groundnut-peanut',
    name: 'Groundnut (Peanut)',
    scientificName: 'Arachis hypogaea',
    localNames: 'Mungfali, Verkadalai, Verusenagalu, Shengdana',
    category: 'Oilseed',
    seasons: ['Kharif', 'Zaid'],
    suitableSoils: ['Red / Sandy Loam', 'Sandy', 'Alluvial / Loam'],
    climates: ['Semi-Arid / Hot & Dry', 'Tropical Warm & Humid'],
    waterRequirement: 'Low (Rainfed/Drip only)',
    suitableRegions: ['Deccan Plateau', 'Coastal Belt', 'Arid & Semi-Arid Zone', 'Plains & River Basins'],
    growthDurationDays: '105 - 125 days',
    averageYield: '10 - 14 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1567892323821-4c6e949ff051?auto=format&fit=crop&w=800&q=80',
    overview: 'Valuable legume oilseed that pegs underground. Friable, well-aerated sandy loam with adequate calcium is crucial for easy peg penetration and plump pod development.',
    profitability: 'Moderate / Steady',
    waterSavingTip: 'Never allow heavy soil crusting during pegging (40-60 DAS); light sprinkler or drip irrigation keeps soil surface friable for pegs.',
    keyFarmingTips: [
      'Apply 200 kg natural Gypsum per acre at 40-45 DAS along the root zone to supply calcium and sulphur for pod filling.',
      'Inoculate seeds with Rhizobium and Trichoderma slurry before sowing.',
      'Do not hoe or disturb the soil once pegging begins after 45 days, as developing pegs will break.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Soil Bed',
        remedyName: 'Compost + Rock Phosphate + Trichoderma',
        dosage: '2 Tons Compost + 50 kg Rock Phosphate / acre',
        applicationMethod: 'Incorporate into the top 10 cm soil',
        benefits: 'Provides slow-release phosphorus essential for nitrogen fixation nodules'
      },
      {
        stage: 'Pegging Stage (40-45 DAS)',
        remedyName: 'Natural Gypsum + Wood Ash Banding',
        dosage: '200 kg Gypsum + 50 kg Wood Ash / acre',
        applicationMethod: 'Broadcast close to the base of plants and lightly earth up',
        benefits: 'Supplies calcium directly to the subterranean pods, preventing "pops" (empty pods)'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Red Hairy Caterpillar & Leaf Miner',
        symptoms: 'Blister-like mines on leaves; voracious caterpillars defoliating entire fields',
        organicRemedy: 'Bonfire / Light Traps + NSKE 5% + Bacillus thuringiensis',
        preparationRecipe: 'Set up 1 light trap per acre at night; spray 5% NSKE at early instar stage.',
        sprayTiming: 'Deploy light traps on new moon nights when adult moths emerge.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Early grass weeds during first 35 days',
        organicMethod: 'Hand weeding at 20 DAS + Ground cover',
        howToApply: 'One thorough hand weeding or light hoeing at 20-25 DAS keeps field clean until groundnut canopy covers the soil.'
      }
    ],
    commonDiseases: [
      {
        name: 'Tikka Disease (Early & Late Leaf Spot)',
        symptoms: 'Dark brown circular spots on leaves with bright yellow halos, causing premature leaf shedding',
        prevention: 'Seed treatment with Trichoderma; avoid planting groundnut in the same field consecutively',
        organicCure: 'Spray Sour Buttermilk (5%) mixed with 5g Pseudomonas fluorescens per liter of water.'
      }
    ],
    companionPlants: ['Bajra / Pearl Millet (intercrop 4:1)', 'Castor (border trap crop)', 'Pigeon pea']
  },
  {
    id: 'mustard',
    name: 'Mustard (Sarson / Rapeseed)',
    scientificName: 'Brassica juncea',
    localNames: 'Sarson, Rai, Kadugu, Avalu',
    category: 'Oilseed',
    seasons: ['Rabi'],
    suitableSoils: ['Alluvial / Loam', 'Sandy', 'Red / Sandy Loam', 'Clay'],
    climates: ['Cool / Sub-tropical', 'Temperate / Mild', 'Semi-Arid / Hot & Dry'],
    waterRequirement: 'Low (Rainfed/Drip only)',
    suitableRegions: ['Plains & River Basins', 'Arid & Semi-Arid Zone', 'Deccan Plateau'],
    growthDurationDays: '105 - 130 days',
    averageYield: '8 - 12 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=800&q=80',
    overview: 'Major winter oilseed crop requiring cool weather during growth and warm sunny conditions at harvest. Low water requirement and naturally repels several soil nematodes.',
    profitability: 'Moderate / Steady',
    waterSavingTip: 'Needs only two irrigations: first at rosette / pre-flowering stage (30 DAS) and second at pod formation (60 DAS).',
    keyFarmingTips: [
      'Thin seedlings at 15-20 DAS to maintain 10-15 cm between plants; overcrowding causes weak spindly stems.',
      'Keep honeybee boxes (2-3 hives/acre) to dramatically improve cross-pollination and seed set by 25-30%.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Soil Bed',
        remedyName: 'Well-rotted FYM + Organic Sulphur (Gypsum)',
        dosage: '2 Tons FYM + 100 kg Gypsum / acre',
        applicationMethod: 'Incorporate during preparatory tillage',
        benefits: 'Sulphur is essential for pungent sinigrin and vegetable oil synthesis'
      },
      {
        stage: 'Flowering & Siliqua (Pod) Formation',
        remedyName: 'Vermiwash + Jeevamrutha Spray',
        dosage: '10% Vermiwash foliar mist',
        applicationMethod: 'Foliar spray at 45 and 65 DAS',
        benefits: 'Increases the number of seeds per pod and oil content'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Mustard Aphid (Lipaphis erysimi)',
        symptoms: 'Masses of tiny greenish-grey lice covering tender shoots, flowers, and developing pods',
        organicRemedy: 'Yellow Sticky Traps + Verticillium lecanii + Dashaparni Ark',
        preparationRecipe: 'Install 15 yellow sticky sheets per acre. Spray Dashaparni Ark (500ml/15L water) or 5g Verticillium/L.',
        sprayTiming: 'Spray in the afternoon when aphids start infesting the floral buds.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Winter weeds like Chenopodium (Bathua)',
        organicMethod: 'One hand weeding at 20-25 DAS',
        howToApply: 'Weed once before the mustard canopy expands; bathua can be harvested as edible nutritious green vegetable.'
      }
    ],
    commonDiseases: [
      {
        name: 'White Rust & Alternaria Blight',
        symptoms: 'White chalky blisters under leaves; dark concentric rings on pods and stems',
        prevention: 'Deep summer plowing; treat seeds with Trichoderma (6g/kg)',
        organicCure: 'Spray Sour Buttermilk (5%) + 5g Pseudomonas fluorescens.'
      }
    ],
    companionPlants: ['Chickpea (intercrop)', 'Wheat (strip crop)', 'Fennel (attracts aphid predators)']
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane',
    scientificName: 'Saccharum officinarum',
    localNames: 'Ganna, Karumbu, Cheruku, Kabbu',
    category: 'Commercial / Cash',
    seasons: ['All Season'],
    suitableSoils: ['Alluvial / Loam', 'Black / Clay Loam', 'Clay'],
    climates: ['Tropical Warm & Humid', 'Cool / Sub-tropical'],
    waterRequirement: 'Abundant (Canal/Tubewell)',
    suitableRegions: ['Plains & River Basins', 'Deccan Plateau', 'Coastal Belt'],
    growthDurationDays: '300 - 365 days',
    averageYield: '350 - 500 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1589307004396-55584995e868?auto=format&fit=crop&w=800&q=80',
    overview: 'High-biomass perennial commercial crop. Deep fertile soils with high organic matter, sustained sunshine, and adequate irrigation yield rich sugar sucrose accumulation.',
    profitability: 'High Value',
    waterSavingTip: 'Trash mulching (spreading dry cane leaves 10 cm thick between rows) saves 30% irrigation water and smothers 90% of weeds.',
    keyFarmingTips: [
      'Select healthy two-budded or single-eye settlings treated with Trichoderma and cow urine slurry.',
      'Adopt Sustainable Sugarcane Initiative (SSI) with wide row spacing of 5 feet for better tillering and mechanized inter-culture.',
      'Retain and chop trash after harvest rather than burning it, returning 3-4 tons of organic matter back to the soil.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Trench Placement',
        remedyName: 'Press Mud (Filter Cake) / Farm Compost + Neem Cake',
        dosage: '4 Tons Compost + 200 kg Neem Cake / acre',
        applicationMethod: 'Place along furrows before planting setts',
        benefits: 'Provides long-lasting organic nutrition and repels termites and white grubs'
      },
      {
        stage: 'Formative / Tillering Phase (60-120 DAP)',
        remedyName: 'Jeevamrutha Drench',
        dosage: '250 Liters / acre monthly',
        applicationMethod: 'Channel through canal water or drip lines',
        benefits: 'Produces 8-12 sturdy tillers per clump'
      },
      {
        stage: 'Grand Growth & Elongation (150-210 DAP)',
        remedyName: 'Panchagavya Foliar Spray',
        dosage: '3% solution foliar spray',
        applicationMethod: 'Spray using high-clearance boom sprayer',
        benefits: 'Increases internodal length, girth, and cane weight'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Early Shoot Borer & Internode Borer',
        symptoms: 'Dead hearts in shoots up to 3 months; bore holes with excreta in nodes',
        organicRemedy: 'Trichogramma chilonis egg parasitoid release + Granulosis Virus (GV)',
        preparationRecipe: 'Tie Trichogramma cards @ 20,000 parasitized eggs/acre at 15-day intervals.',
        sprayTiming: 'Deploy from 30 days after planting until canopy closure.'
      },
      {
        targetPest: 'White Grub (Holotrichia serrata)',
        symptoms: 'Yellowing and wilting of clumps; roots chewed off beneath soil',
        organicRemedy: 'Metarhizium anisopliae + Neem Cake drench',
        preparationRecipe: 'Mix 2 kg Metarhizium anisopliae in 100 kg moist compost, incubate 7 days, apply to root zones.',
        sprayTiming: 'Apply during pre-monsoon showers when adult beetles emerge to lay eggs.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Broadleaf weeds and grasses during early 90 days',
        organicMethod: 'Trash Mulching (5-8 cm thick) or Intercropping with Soybean/Cowpea',
        howToApply: 'Spread dry cane trash or sow cowpea in wide interspaces. Cowpea is harvested at 60 days, leaving soil enriched and weed-free.'
      }
    ],
    commonDiseases: [
      {
        name: 'Red Rot (Colletotrichum falcatum)',
        symptoms: 'Third or fourth leaf from top shows yellowing; split cane shows red discoloration with white cross patches and sour alcoholic smell',
        prevention: 'Strict sett selection; hot water treatment (50°C for 2 hrs) or dip in Trichoderma slurry; avoid ratoon of infected crop',
        organicCure: 'Preventive bio-fungicide drenching with Pseudomonas fluorescens (2.5 kg/acre).'
      }
    ],
    companionPlants: ['Cowpea (intercrop)', 'Soybean (intercrop)', 'Marigold (borders)']
  },
  {
    id: 'pearl-millet-bajra',
    name: 'Pearl Millet (Bajra)',
    scientificName: 'Pennisetum glaucum',
    localNames: 'Bajra, Sajje, Kambu, Sajjalu',
    category: 'Grain / Cereal',
    seasons: ['Kharif', 'Zaid'],
    suitableSoils: ['Sandy', 'Red / Sandy Loam', 'Alluvial / Loam'],
    climates: ['Semi-Arid / Hot & Dry', 'Tropical Warm & Humid'],
    waterRequirement: 'Scanty (Drought-prone/Arid)',
    suitableRegions: ['Arid & Semi-Arid Zone', 'Deccan Plateau', 'Plains & River Basins'],
    growthDurationDays: '75 - 90 days',
    averageYield: '12 - 16 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=800&q=80',
    overview: 'Nutri-cereal powerhouse celebrated for high iron and zinc content. Extremely drought-hardy, heat-tolerant, and thrives on poor sandy soils where other cereals fail.',
    profitability: 'Staple / Essential',
    waterSavingTip: 'Needs only 200-350 mm total water. Survives prolonged dry spells by rolling its leaves and resuming growth upon light rain.',
    keyFarmingTips: [
      'Sow with the onset of monsoon at 45 cm row spacing and 3-4 cm depth.',
      'Thinning at 15 DAS is essential to leave 10-12 cm between plants.',
      'Intercrop with moth bean, cowpea, or cluster bean (guar) for risk mitigation and soil fertility.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Application',
        remedyName: 'Farm Compost + Azospirillum seed treatment',
        dosage: '1.5 Tons FYM / acre + 200g Azospirillum / 10kg seed',
        applicationMethod: 'Broadcast compost during plowing; coat seeds with inoculant',
        benefits: 'Azospirillum fixes 20-30 kg N/ha in root rhizosphere and secretes growth hormones'
      },
      {
        stage: 'Vegetative Growth (25-30 DAS)',
        remedyName: 'Jeevamrutha Spray / Drench',
        dosage: '150 Liters / acre',
        applicationMethod: 'Foliar spray or soil application before expected rain',
        benefits: 'Stimulates fast tillering and strong root depth'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Shoot Fly & Grasshoppers',
        symptoms: 'Central shoot wilts and dries into deadheart in seedlings; chewed foliage',
        organicRemedy: 'Neem Seed Kernel Extract 5% + Agniastra',
        preparationRecipe: 'Spray 5% NSKE at 7 and 14 days after emergence.',
        sprayTiming: 'Morning spray during the critical first 3 weeks of seedling growth.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Desert scrub and weed emergence',
        organicMethod: 'One inter-cultivation with blade harrow at 20-25 DAS',
        howToApply: 'Run a shallow blade harrow between 45cm rows. Bajra quickly shades out late-sprouting weeds.'
      }
    ],
    commonDiseases: [
      {
        name: 'Downy Mildew (Green Ear Disease) & Ergot',
        symptoms: 'Floral heads transform into leafy green mass; pinkish sweet fluid oozes from spikelets turning into dark sclerotia',
        prevention: 'Soak seeds in 10% brine (salt solution); discard floating light ergot sclerotia; rinse seeds with clean water',
        organicCure: 'Spray Sour Buttermilk (5%) + Trichoderma harzianum at boot leaf stage.'
      }
    ],
    companionPlants: ['Cowpea (intercrop 2:1)', 'Cluster Bean / Guar', 'Green Gram']
  },
  {
    id: 'finger-millet-ragi',
    name: 'Finger Millet (Ragi)',
    scientificName: 'Eleusine coracana',
    localNames: 'Ragi, Mandua, Kezhvaragu, Ragulu',
    category: 'Grain / Cereal',
    seasons: ['Kharif', 'Rabi'],
    suitableSoils: ['Red / Sandy Loam', 'Alluvial / Loam', 'Black / Clay Loam'],
    climates: ['Tropical Warm & Humid', 'Temperate / Mild', 'Semi-Arid / Hot & Dry'],
    waterRequirement: 'Low (Rainfed/Drip only)',
    suitableRegions: ['Deccan Plateau', 'Hilly & Valley', 'Plains & River Basins'],
    growthDurationDays: '100 - 120 days',
    averageYield: '12 - 16 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    overview: 'Superfood grain containing the highest natural calcium among cereals. Highly resilient to erratic rainfall, pest attacks, and stores for decades without chemical fumigation.',
    profitability: 'Moderate / Steady',
    waterSavingTip: 'Adopt transplanted Guli Ragi method (square planting 25cm x 25cm with single seedling) to cut water by 40% and double yield.',
    keyFarmingTips: [
      'Transplant 21-day-old vigorous seedlings rather than direct broadcasting for uniform tillering.',
      'Pass rotary weeder at 20 and 35 DAT to aerate the root zone and mulch in weeds.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Soil Bed',
        remedyName: 'Vermicompost + Wood Ash',
        dosage: '2 Tons Vermicompost + 100 kg Wood Ash / acre',
        applicationMethod: 'Incorporate into soil during final harrowing',
        benefits: 'Enriches calcium and potassium for sturdy stems and heavy finger grain ears'
      },
      {
        stage: 'Tillering & Flowering (35 & 65 DAT)',
        remedyName: 'Jeevamrutha Drench',
        dosage: '200 Liters / acre',
        applicationMethod: 'Channel with irrigation or spray in moist soil',
        benefits: 'Promotes 8-12 productive tillers per hill'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Ragi Stem Borer & Aphids',
        symptoms: 'Drying of central shoots; colonies of aphids on finger earheads',
        organicRemedy: 'Neem Oil Spray (10,000 ppm) + Dashaparni Ark',
        preparationRecipe: 'Mix 5ml Neem Oil + 1ml liquid soap per liter of water.',
        sprayTiming: 'Spray at earhead emergence.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Monsoon broadleaf weeds',
        organicMethod: 'Rotary hoe / Cono weeder',
        howToApply: 'Run rotary weeder twice across the 25cm x 25cm grid pattern at 20 and 35 DAT.'
      }
    ],
    commonDiseases: [
      {
        name: 'Blast (Pyricularia grisea)',
        symptoms: 'Spindle-shaped lesions on leaves and neck rot of the finger head causing drooping and empty grains',
        prevention: 'Seed treatment with Pseudomonas fluorescens (10g/kg seed)',
        organicCure: 'Spray Sour Buttermilk (5%) + Pseudomonas (5g/L) at heading stage.'
      }
    ],
    companionPlants: ['Field Bean / Avare', 'Cowpea', 'Niger (border)']
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    localNames: 'Haldi, Manjal, Pasupu, Arishina',
    category: 'Spice',
    seasons: ['Kharif'],
    suitableSoils: ['Alluvial / Loam', 'Red / Sandy Loam', 'Black / Clay Loam'],
    climates: ['Tropical Warm & Humid', 'Cool / Sub-tropical'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Plains & River Basins', 'Coastal Belt', 'Deccan Plateau', 'Hilly & Valley'],
    growthDurationDays: '210 - 270 days',
    averageYield: '80 - 120 Quintals (Fresh Rhizome) / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    overview: 'High-value medicinal spice rhizome. Thrives under partial shade or open fields with rich friable loam, heavy organic mulching, and excellent drainage.',
    profitability: 'High Value',
    waterSavingTip: 'Green leaf mulching is essential: spread 5 tons of tree leaves/paddy straw per acre immediately after planting to retain moisture for 60 days.',
    keyFarmingTips: [
      'Select disease-free mother rhizomes weighing 35-40g each.',
      'Treat seed rhizomes with Trichoderma viride and Pseudomonas slurry for 30 minutes before planting on raised beds.',
      'Repeat mulching at 45 and 90 DAP with green leaves (Glyricidia, Pongamia, or Sunnhemp).'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Raised Bed Preparation',
        remedyName: 'Farm Compost + Neem Cake + VAM',
        dosage: '4 Tons Compost + 200 kg Neem Cake + 5 kg Mycorrhiza / acre',
        applicationMethod: 'Incorporate into broad raised beds',
        benefits: 'Provides slow continuous organic nutrition and shields rhizomes from fungal rot'
      },
      {
        stage: 'Rhizome Multiplication Phase (90-150 DAP)',
        remedyName: 'Jeevamrutha + Panchagavya Alternate Drenching',
        dosage: '200L Jeevamrutha / acre monthly + 3% Panchagavya spray',
        applicationMethod: 'Through drip or soil drenching during earthing up',
        benefits: 'Produces thick, plump finger rhizomes with high curcumin concentration'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Shoot Borer (Conogethes punctiferalis)',
        symptoms: 'Central shoot wilts and dries up; boreholes on pseudo-stem with frass',
        organicRemedy: 'Neem Oil Spray (10,000 ppm) + Bacillus thuringiensis',
        preparationRecipe: 'Spray 5ml Neem Oil + 2g Bt per liter of water.',
        sprayTiming: 'Spray at 60 and 90 DAP when moths begin ovipositing on leaf sheaths.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Broadleaf weeds during long gestation',
        organicMethod: 'Heavy triple mulching with forest leaves or straw',
        howToApply: 'First mulch immediately after planting (5 tons/acre), second at 45 days (3 tons), and third at 90 days after weeding.'
      }
    ],
    commonDiseases: [
      {
        name: 'Rhizome Rot & Leaf Blotch',
        symptoms: 'Soft water-soaked foul-smelling rotting of rhizomes; brown necrotic patches on leaves',
        prevention: 'Plant strictly on 15cm raised beds with drainage channels; avoid water stagnation',
        organicCure: 'Drench root bed with Trichoderma harzianum (2.5 kg in 100 kg compost) + Sour Buttermilk spray.'
      }
    ],
    companionPlants: ['Maize (shade border)', 'Chilli (intercrop)', 'Cowpea']
  },
  {
    id: 'brinjal-eggplant',
    name: 'Brinjal (Eggplant / Aubergine)',
    scientificName: 'Solanum melongena',
    localNames: 'Baingan, Kathirikai, Vankaya, Badanekai',
    category: 'Vegetable',
    seasons: ['All Season', 'Kharif', 'Rabi'],
    suitableSoils: ['Alluvial / Loam', 'Black / Clay Loam', 'Red / Sandy Loam', 'Silt'],
    climates: ['Tropical Warm & Humid', 'Cool / Sub-tropical', 'Semi-Arid / Hot & Dry'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Plains & River Basins', 'Deccan Plateau', 'Coastal Belt', 'Hilly & Valley'],
    growthDurationDays: '130 - 160 days',
    averageYield: '120 - 180 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1628773822503-930a8449c2a6?auto=format&fit=crop&w=800&q=80',
    overview: 'Hardy, long-duration vegetable giving continuous flushes of glossy fruits. High feeder needing steady organic manure and proactive protection against shoot & fruit borer.',
    profitability: 'High Value',
    waterSavingTip: 'Drip irrigation with alternate day schedule saves 45% water and prevents splash-dispersal of fungal fruit rot.',
    keyFarmingTips: [
      'Clip and destroy drooping tender shoot tips twice weekly to manually break the shoot borer cycle.',
      'Install 4-6 Leucinodes pheromone traps per acre to monitor and mass trap male fruit borer moths.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Soil Bed',
        remedyName: 'Vermicompost + Neem Cake + Castor Cake',
        dosage: '2.5 Tons Vermicompost + 100 kg Neem Cake + 50 kg Castor Cake / acre',
        applicationMethod: 'Incorporate into ridges and furrows',
        benefits: 'Slow nutrition release and strong protection against root knot nematodes'
      },
      {
        stage: 'Flowering & Continuous Harvest',
        remedyName: 'Jeevamrutha + Fermented Fruit Juice (FFJ)',
        dosage: '200L Jeevamrutha through drip + 3ml FFJ foliar spray every 15 days',
        applicationMethod: 'Apply after every major fruit picking flush',
        benefits: 'Sustains continuous blossom setting and prevents flower abortion'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Shoot and Fruit Borer (Leucinodes orbonalis)',
        symptoms: 'Wilted drooping shoot tips; holes in fruits plugged with caterpillar excreta',
        organicRemedy: 'Pheromone Traps + Clipping + NSKE 5% + Agniastra',
        preparationRecipe: 'Install 5 Lucin-lure traps/acre; spray Agniastra (30ml/10L) every 10 days.',
        sprayTiming: 'Clip affected shoots weekly before larvae enter fruits; spray Agniastra in the evening.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Monsoon grass and broadleaf weeds',
        organicMethod: 'Organic straw mulching or inter-cultivation',
        howToApply: 'Mulch with 8 cm paddy straw or run wheel hoe between 75 cm rows at 25 and 45 DAT.'
      }
    ],
    commonDiseases: [
      {
        name: 'Little Leaf Disease & Bacterial Wilt',
        symptoms: 'Leaves become extremely tiny, crowded like a rosette; sudden wilting of green plant',
        prevention: 'Eradicate leafhoppers (the vector) using yellow sticky traps; dip seedling roots in Pseudomonas',
        organicCure: 'Rogue out infected little-leaf plants; drench remaining root zones with Trichoderma.'
      }
    ],
    companionPlants: ['French Marigold (intercrop for borer diversion & nematodes)', 'Basil', 'Coriander']
  },
  {
    id: 'soybean',
    name: 'Soybean',
    scientificName: 'Glycine max',
    localNames: 'Soybean, Bhat',
    category: 'Oilseed',
    seasons: ['Kharif'],
    suitableSoils: ['Black / Clay Loam', 'Alluvial / Loam'],
    climates: ['Tropical Warm & Humid', 'Semi-Arid / Hot & Dry'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Deccan Plateau', 'Plains & River Basins'],
    growthDurationDays: '90 - 105 days',
    averageYield: '10 - 14 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    overview: 'High-protein, high-oil pulse crop that substantially enriches soil through Bradyrhizobium nitrogen fixation. Highly adapted to rainfed black soils of central plateaus.',
    profitability: 'Moderate / Steady',
    waterSavingTip: 'Pod development and seed filling (60-80 DAS) are critical moisture periods. If dry spell occurs, one protective sprinkler irrigation doubles yield.',
    keyFarmingTips: [
      'Inoculate seeds with Bradyrhizobium japonicum culture and PSB @ 20g/kg seed with jaggery water.',
      'Sow on Broad Bed and Furrow (BBF) or ridges to avoid waterlogging during excessive monsoon cloudbursts.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Furrow Application',
        remedyName: 'Compost + Rock Phosphate',
        dosage: '1.5 Tons Compost + 50 kg Rock Phosphate / acre',
        applicationMethod: 'Incorporate into the seed furrow',
        benefits: 'Supports robust nodulation and healthy root establishment'
      },
      {
        stage: 'Pre-flowering & Pod Sizing (35 & 60 DAS)',
        remedyName: 'Panchagavya Foliar Spray',
        dosage: '3% solution (300 ml in 10L water)',
        applicationMethod: 'Foliar spray during calm morning hours',
        benefits: 'Improves flower retention, pod set, and bean weight'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Girdle Beetle (Obereopsis brevis) & Semilooper',
        symptoms: 'Two ring-like cuts on petiole/stem causing top shoot to wither; defoliated leaves',
        organicRemedy: 'Neem Seed Kernel Extract 5% + Bacillus thuringiensis (Bt)',
        preparationRecipe: 'Spray 5% NSKE at 25 DAS; apply 2g Bt/L for caterpillar flushes.',
        sprayTiming: 'Spray at first sign of girdle beetle rings on petioles.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Echinochloa & Commelina (Kena) weeds',
        organicMethod: 'Hand weeding or wheel hoe at 20 & 35 DAS',
        howToApply: 'Weed once before soybean canopy closes completely around 35 days.'
      }
    ],
    commonDiseases: [
      {
        name: 'Yellow Mosaic Virus & Rust',
        symptoms: 'Bright yellow-green mosaic patches on leaves; tiny reddish-brown pustules',
        prevention: 'Install 10 yellow sticky sheets/acre to control whiteflies (the vector)',
        organicCure: 'Spray Sour Buttermilk (5%) with 5g Pseudomonas fluorescens.'
      }
    ],
    companionPlants: ['Pigeon Pea (intercrop 4:2)', 'Sorghum (border)', 'Maize']
  },
  {
    id: 'ginger',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    localNames: 'Adrak, Inji, Allam, Shunti',
    category: 'Spice',
    seasons: ['Kharif'],
    suitableSoils: ['Red / Sandy Loam', 'Alluvial / Loam', 'Sandy'],
    climates: ['Tropical Warm & Humid', 'Cool / Sub-tropical'],
    waterRequirement: 'Moderate (Regular Rain/Drip)',
    suitableRegions: ['Hilly & Valley', 'Coastal Belt', 'Plains & River Basins'],
    growthDurationDays: '210 - 240 days',
    averageYield: '60 - 90 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80',
    overview: 'High-value rhizome that flourishes in warm, humid weather with partial shade. Loose, humus-rich soil and heavy green leaf mulching are mandatory for high yields.',
    profitability: 'High Value',
    waterSavingTip: 'Heavy organic mulch (straw or tree leaves) reduces evaporation by 60% and eliminates soil compaction around growing fingers.',
    keyFarmingTips: [
      'Select healthy mother seed rhizomes (25-30g) with at least one viable germinating sprout.',
      'Treat seed rhizomes with Trichoderma viride and Pseudomonas slurry (10g/L) for 30 minutes before planting.',
      'Provide 3 split mulchings: at planting, 40 days, and 90 days.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Bed Preparation',
        remedyName: 'Vermicompost + Neem Cake + Wood Ash',
        dosage: '3 Tons Vermicompost + 150 kg Neem Cake + 100 kg Wood Ash / acre',
        applicationMethod: 'Incorporate into raised broad beds',
        benefits: 'Enriches soil aeration, deters root grubs, and provides natural potassium'
      },
      {
        stage: 'Tillering & Rhizome Expansion (60-120 DAP)',
        remedyName: 'Jeevamrutha Drench',
        dosage: '200 Liters / acre monthly',
        applicationMethod: 'Apply to root zones followed by light earthing up and mulching',
        benefits: 'Accelerates multiple tiller emergence and fat ginger hand formation'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Shoot Borer & Scales',
        symptoms: 'Yellowing of central leaf shoot with hole on pseudo-stem; encrusted grey scales on rhizomes',
        organicRemedy: 'Neem Oil Spray (10,000 ppm) + Dashaparni Ark',
        preparationRecipe: 'Mix 5ml Neem Oil + 1ml liquid soap in 1L water; spray on shoots.',
        sprayTiming: 'Spray at 60 and 90 days after emergence.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Monsoon weed growth',
        organicMethod: 'Heavy green leaf mulching (6 tons/acre)',
        howToApply: 'Mulch suppresses weed emergence almost completely while decomposing into organic manure.'
      }
    ],
    commonDiseases: [
      {
        name: 'Soft Rot (Pythium / Bacterial Wilt)',
        symptoms: 'Water-soaked rotting at collar zone; foul smell; shoots pull out effortlessly',
        prevention: 'Strict raised bed cultivation; certified healthy seed rhizomes; avoid water stagnation',
        organicCure: 'Drench bed with Trichoderma harzianum (2 kg in 100L water) and spray copper-buttermilk.'
      }
    ],
    companionPlants: ['Maize (shade provider)', 'Pigeon pea (shade border)', 'Cowpea']
  },
  {
    id: 'moong-green-gram',
    name: 'Green Gram (Moong)',
    scientificName: 'Vigna radiata',
    localNames: 'Moong, Pesalu, Payaru, Hesaru',
    category: 'Pulse / Legume',
    seasons: ['Zaid', 'Kharif'],
    suitableSoils: ['Alluvial / Loam', 'Red / Sandy Loam', 'Black / Clay Loam'],
    climates: ['Tropical Warm & Humid', 'Semi-Arid / Hot & Dry', 'Temperate / Mild'],
    waterRequirement: 'Low (Rainfed/Drip only)',
    suitableRegions: ['Plains & River Basins', 'Deccan Plateau', 'Coastal Belt'],
    growthDurationDays: '60 - 75 days',
    averageYield: '5 - 8 Quintals / Acre',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    overview: 'Short-duration, catch crop that fixes atmospheric nitrogen, restoring depleted soils between main seasons. Minimal water need and matures in just 60 days.',
    profitability: 'Moderate / Steady',
    waterSavingTip: 'Needs only 2 to 3 light irrigations during summer (Zaid). In Kharif, normal monsoon rainfall is plenty.',
    keyFarmingTips: [
      'Inoculate seeds with Rhizobium phaseoli and PSB culture before sowing for rapid nodule setup.',
      'Sow immediately after harvesting wheat or mustard to utilize residual soil moisture.'
    ],
    organicFertilizers: [
      {
        stage: 'Basal Placement',
        remedyName: 'Compost + Rock Phosphate',
        dosage: '1 Ton Compost + 40 kg Rock Phosphate / acre',
        applicationMethod: 'Incorporate into furrows before seed drilling',
        benefits: 'Supplies available phosphorus for energy transfer in root nodules'
      },
      {
        stage: 'Flowering Stage (30-35 DAS)',
        remedyName: 'Panchagavya Foliar Spray',
        dosage: '3% solution (300 ml in 10L water)',
        applicationMethod: 'Foliar spray in late afternoon',
        benefits: 'Synchronizes uniform flowering and prevents pod shedding'
      }
    ],
    organicPesticides: [
      {
        targetPest: 'Spotted Pod Borer & Whitefly',
        symptoms: 'Flowers and pods webbed together with frass; yellowing leaves from virus',
        organicRemedy: 'Neem Seed Kernel Extract 5% + Yellow Sticky Traps',
        preparationRecipe: 'Install 8 yellow traps/acre; spray 5% NSKE at flower bud stage.',
        sprayTiming: 'Spray at early morning or dusk.'
      }
    ],
    organicHerbicides: [
      {
        weedProblem: 'Early summer weeds',
        organicMethod: 'Hand weeding at 20 DAS',
        howToApply: 'A single manual hoeing at 20 DAS is adequate; after 25 days the leafy moong canopy suppresses weeds.'
      }
    ],
    commonDiseases: [
      {
        name: 'Yellow Mosaic Virus (YMV) & Powdery Mildew',
        symptoms: 'Yellow-golden mosaic patches on leaves; white powdery coating in dry weather',
        prevention: 'Control whitefly vector with sticky traps; use disease-resistant seeds',
        organicCure: 'Spray Sour Buttermilk (5%) + 5g Pseudomonas fluorescens/liter.'
      }
    ],
    companionPlants: ['Maize (intercrop)', 'Cotton (strip crop)', 'Sorghum']
  }
];
