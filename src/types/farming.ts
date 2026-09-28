export type Season = 'Kharif' | 'Rabi' | 'Zaid' | 'All Season';

export type SoilType =
  | 'Alluvial / Loam'
  | 'Black / Clay Loam'
  | 'Red / Sandy Loam'
  | 'Clay'
  | 'Sandy'
  | 'Silt';

export type ClimateType =
  | 'Tropical Warm & Humid'
  | 'Semi-Arid / Hot & Dry'
  | 'Temperate / Mild'
  | 'Cool / Sub-tropical';

export type WaterAvailability =
  | 'Abundant (Canal/Tubewell)'
  | 'Moderate (Regular Rain/Drip)'
  | 'Low (Rainfed/Drip only)'
  | 'Scanty (Drought-prone/Arid)';

export type FarmRegion =
  | 'Plains & River Basins'
  | 'Deccan Plateau'
  | 'Coastal Belt'
  | 'Hilly & Valley'
  | 'Arid & Semi-Arid Zone';

export type CropCategory =
  | 'Grain / Cereal'
  | 'Pulse / Legume'
  | 'Commercial / Cash'
  | 'Oilseed'
  | 'Vegetable'
  | 'Fruit'
  | 'Spice';

export interface OrganicFertilizerStep {
  stage: string;
  remedyName: string;
  dosage: string;
  applicationMethod: string;
  benefits: string;
}

export interface OrganicPestControl {
  targetPest: string;
  symptoms: string;
  organicRemedy: string;
  preparationRecipe: string;
  sprayTiming: string;
}

export interface OrganicWeedControl {
  weedProblem: string;
  organicMethod: string;
  howToApply: string;
}

export interface CropDisease {
  name: string;
  symptoms: string;
  prevention: string;
  organicCure: string;
}

export interface Crop {
  id: string;
  name: string;
  scientificName: string;
  localNames?: string; // Hindi/vernacular alias for farmer familiarity
  category: CropCategory;
  seasons: Season[];
  suitableSoils: SoilType[];
  climates: ClimateType[];
  waterRequirement: WaterAvailability;
  suitableRegions: FarmRegion[];
  growthDurationDays: string;
  averageYield: string;
  imageUrl: string;
  overview: string;
  profitability: 'High Value' | 'Moderate / Steady' | 'Staple / Essential';
  waterSavingTip: string;
  keyFarmingTips: string[];
  organicFertilizers: OrganicFertilizerStep[];
  organicPesticides: OrganicPestControl[];
  organicHerbicides: OrganicWeedControl[];
  commonDiseases: CropDisease[];
  companionPlants: string[];
}

export interface FilterCriteria {
  season: Season | 'All';
  soilType: SoilType | 'All';
  climate: ClimateType | 'All';
  waterAvailability: WaterAvailability | 'All';
  region: FarmRegion | 'All';
  searchQuery: string;
  category: CropCategory | 'All';
}

export interface BioInputRecipe {
  id: string;
  name: string;
  type: 'Fertilizer' | 'Pesticide' | 'Fungicide' | 'Weed Control';
  shelfLife: string;
  targetIssues: string[];
  baseAcreage: number; // e.g. 1 acre
  ingredients: {
    item: string;
    amountPerAcre: number;
    unit: string;
    notes?: string;
  }[];
  preparationSteps: string[];
  applicationInstructions: string;
  bestTime: string;
  safetyPrecautions: string;
}

export interface PestDiagnosticEntry {
  id: string;
  name: string;
  type: 'Insect Pest' | 'Fungal Disease' | 'Bacterial Disease' | 'Viral Disease' | 'Nematode';
  symptomSummary: string;
  visibleSigns: string[];
  affectedCrops: string[];
  imageUrl: string;
  organicTreatments: {
    title: string;
    description: string;
  }[];
  preventiveMeasures: string[];
}
