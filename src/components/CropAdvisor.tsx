import React, { useState, useMemo } from 'react';
import { CROPS_DATA } from '../data/cropsData';
import { Crop, FilterCriteria, Season, SoilType, ClimateType, WaterAvailability, FarmRegion, CropCategory } from '../types/farming';
import { CropCard } from './CropCard';
import {
  Search,
  Filter,
  RotateCcw,
  Sparkles,
  CloudRain,
  Layers,
  Thermometer,
  Droplets,
  MapPin,
  Tag,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';

interface CropAdvisorProps {
  onSelectCrop: (crop: Crop) => void;
  onReadAloud?: (text: string) => void;
  fieldMode?: boolean;
}

export const CropAdvisor: React.FC<CropAdvisorProps> = ({
  onSelectCrop,
  onReadAloud,
  fieldMode = false,
}) => {
  const [filters, setFilters] = useState<FilterCriteria>({
    season: 'All',
    soilType: 'All',
    climate: 'All',
    waterAvailability: 'All',
    region: 'All',
    searchQuery: '',
    category: 'All',
  });

  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Quick 1-click preset handlers
  const applyPreset = (preset: 'kharif-monsoon' | 'rabi-winter' | 'drought-hardy' | 'high-value') => {
    switch (preset) {
      case 'kharif-monsoon':
        setFilters({
          season: 'Kharif',
          soilType: 'Alluvial / Loam',
          climate: 'Tropical Warm & Humid',
          waterAvailability: 'Moderate (Regular Rain/Drip)',
          region: 'Plains & River Basins',
          searchQuery: '',
          category: 'All',
        });
        break;
      case 'rabi-winter':
        setFilters({
          season: 'Rabi',
          soilType: 'Alluvial / Loam',
          climate: 'Cool / Sub-tropical',
          waterAvailability: 'Moderate (Regular Rain/Drip)',
          region: 'Plains & River Basins',
          searchQuery: '',
          category: 'All',
        });
        break;
      case 'drought-hardy':
        setFilters({
          season: 'All',
          soilType: 'All',
          climate: 'Semi-Arid / Hot & Dry',
          waterAvailability: 'Scanty (Drought-prone/Arid)',
          region: 'Arid & Semi-Arid Zone',
          searchQuery: '',
          category: 'All',
        });
        break;
      case 'high-value':
        setFilters({
          season: 'All',
          soilType: 'All',
          climate: 'All',
          waterAvailability: 'All',
          region: 'All',
          searchQuery: '',
          category: 'Vegetable',
        });
        break;
    }
  };

  const resetFilters = () => {
    setFilters({
      season: 'All',
      soilType: 'All',
      climate: 'All',
      waterAvailability: 'All',
      region: 'All',
      searchQuery: '',
      category: 'All',
    });
  };

  // Compute match score and matching crops
  const scoredCrops = useMemo(() => {
    return CROPS_DATA.map((crop) => {
      let score = 100;
      const reasons: string[] = [];

      // 1. Season match (30 points)
      if (filters.season !== 'All') {
        const matchesSeason = crop.seasons.includes(filters.season as Season) || crop.seasons.includes('All Season');
        if (matchesSeason) {
          reasons.push(`Perfect for ${filters.season} season`);
        } else {
          score -= 30;
        }
      }

      // 2. Soil match (25 points)
      if (filters.soilType !== 'All') {
        const matchesSoil = crop.suitableSoils.includes(filters.soilType as SoilType);
        if (matchesSoil) {
          reasons.push(`Highly compatible with ${filters.soilType} soil`);
        } else {
          score -= 25;
        }
      }

      // 3. Climate match (20 points)
      if (filters.climate !== 'All') {
        const matchesClimate = crop.climates.includes(filters.climate as ClimateType);
        if (matchesClimate) {
          reasons.push(`Adapted to ${filters.climate}`);
        } else {
          score -= 20;
        }
      }

      // 4. Water requirement match (15 points)
      if (filters.waterAvailability !== 'All') {
        const targetWater = filters.waterAvailability;
        const cropWater = crop.waterRequirement;
        if (cropWater === targetWater) {
          reasons.push(`Water match: ${cropWater.split(' ')[0]}`);
        } else if (
          (targetWater.includes('Abundant') && cropWater.includes('Moderate')) ||
          (targetWater.includes('Moderate') && (cropWater.includes('Low') || cropWater.includes('Scanty')))
        ) {
          score -= 5;
          reasons.push(`Easily thrives under your water availability`);
        } else {
          score -= 15;
        }
      }

      // 5. Region match (10 points)
      if (filters.region !== 'All') {
        const matchesRegion = crop.suitableRegions.includes(filters.region as FarmRegion);
        if (matchesRegion) {
          reasons.push(`Proven in ${filters.region}`);
        } else {
          score -= 10;
        }
      }

      // 6. Category filter
      if (filters.category !== 'All' && crop.category !== filters.category) {
        score -= 40;
      }

      // 7. Search query filter
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchedText =
          crop.name.toLowerCase().includes(q) ||
          crop.scientificName.toLowerCase().includes(q) ||
          (crop.localNames && crop.localNames.toLowerCase().includes(q)) ||
          crop.category.toLowerCase().includes(q) ||
          crop.overview.toLowerCase().includes(q);

        if (!matchedText) {
          score = 0;
        }
      }

      return {
        crop,
        matchScore: Math.max(0, score),
        reasons,
      };
    })
      .filter(item => item.matchScore > 20) // Only show reasonable candidates
      .sort((a, b) => b.matchScore - a.matchScore);
  }, [filters]);

  const activeFiltersCount = [
    filters.season !== 'All',
    filters.soilType !== 'All',
    filters.climate !== 'All',
    filters.waterAvailability !== 'All',
    filters.region !== 'All',
    filters.category !== 'All',
    Boolean(filters.searchQuery.trim()),
  ].filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Hero Introduction & Quick Presets */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Subtle decorative grain background */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Sparkles className="w-80 h-80" />
        </div>

        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Intelligent Agricultural Matching Engine</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight leading-tight">
            Find the Best Crops for Your Soil, Water & Climate
          </h1>
          <p className="text-stone-200 text-xs sm:text-sm sm:leading-relaxed">
            Select your farm conditions below. Smart Farming Advisor analyzes seasonal soil biology, moisture needs, and local weather to recommend high-yielding crops along with complete organic fertilization, biological pest remedies, and weed prevention plans.
          </p>
        </div>

        {/* 1-Click Quick Presets */}
        <div className="mt-6 pt-5 border-t border-emerald-700/60 relative z-10">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-semibold text-emerald-200">
              Popular Field Presets:
            </span>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs text-emerald-300 hover:text-white flex items-center gap-1 transition-colors underline"
              >
                <RotateCcw className="w-3 h-3" />
                Reset All Filters
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => applyPreset('kharif-monsoon')}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-600/70 text-xs font-medium text-emerald-100 transition-all hover:border-emerald-400"
            >
              🌧️ Monsoon (Kharif) Paddy & Pulses
            </button>
            <button
              onClick={() => applyPreset('rabi-winter')}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-600/70 text-xs font-medium text-emerald-100 transition-all hover:border-emerald-400"
            >
              ❄️ Winter (Rabi) Wheat & Mustard
            </button>
            <button
              onClick={() => applyPreset('drought-hardy')}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-600/70 text-xs font-medium text-emerald-100 transition-all hover:border-emerald-400"
            >
              ☀️ Low Water & Millets (Drought Resilient)
            </button>
            <button
              onClick={() => applyPreset('high-value')}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-600/70 text-xs font-medium text-emerald-100 transition-all hover:border-emerald-400"
            >
              🍅 High-Value Commercial Vegetables
            </button>
          </div>
        </div>
      </div>

      {/* Main Filter Control Console */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 sm:p-6 space-y-4">
        {/* Top Search & Toggle Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="Search crop name, local alias (e.g. Gehun, Tamatar, Chana)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm bg-stone-50/50"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFiltersMobile(prev => !prev)}
              className="sm:hidden flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 bg-stone-50"
            >
              <SlidersHorizontal className="w-4 h-4 text-emerald-700" />
              <span>Criteria Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="px-3 py-2 text-xs font-semibold text-rose-700 hover:text-rose-800 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Selectors Grid (Desktop always, Mobile toggleable) */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2 ${showFiltersMobile ? 'block' : 'hidden sm:grid'}`}>
          {/* 1. Season */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
              <CloudRain className="w-3.5 h-3.5 text-emerald-600" />
              <span>Season</span>
            </label>
            <select
              value={filters.season}
              onChange={(e) => setFilters(prev => ({ ...prev, season: e.target.value as any }))}
              className="w-full text-xs sm:text-sm rounded-lg border border-stone-300 bg-white py-2 px-2.5 text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="All">All Seasons</option>
              <option value="Kharif">Kharif (Monsoon / Jul-Oct)</option>
              <option value="Rabi">Rabi (Winter / Nov-Mar)</option>
              <option value="Zaid">Zaid (Summer / Mar-Jun)</option>
              <option value="All Season">All Season / Perennial</option>
            </select>
          </div>

          {/* 2. Soil Type */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              <span>Soil Type</span>
            </label>
            <select
              value={filters.soilType}
              onChange={(e) => setFilters(prev => ({ ...prev, soilType: e.target.value as any }))}
              className="w-full text-xs sm:text-sm rounded-lg border border-stone-300 bg-white py-2 px-2.5 text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="All">All Soil Types</option>
              <option value="Alluvial / Loam">Alluvial / Loam (River plains)</option>
              <option value="Black / Clay Loam">Black / Clay Loam (Cotton soils)</option>
              <option value="Red / Sandy Loam">Red / Sandy Loam</option>
              <option value="Clay">Clay (Heavy / Moisture retentive)</option>
              <option value="Sandy">Sandy (Light / Fast draining)</option>
              <option value="Silt">Silt (River delta)</option>
            </select>
          </div>

          {/* 3. Climate / Weather */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
              <Thermometer className="w-3.5 h-3.5 text-rose-600" />
              <span>Climate</span>
            </label>
            <select
              value={filters.climate}
              onChange={(e) => setFilters(prev => ({ ...prev, climate: e.target.value as any }))}
              className="w-full text-xs sm:text-sm rounded-lg border border-stone-300 bg-white py-2 px-2.5 text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="All">All Climates</option>
              <option value="Tropical Warm & Humid">Tropical Warm & Humid</option>
              <option value="Semi-Arid / Hot & Dry">Semi-Arid / Hot & Dry</option>
              <option value="Temperate / Mild">Temperate / Mild</option>
              <option value="Cool / Sub-tropical">Cool / Sub-tropical</option>
            </select>
          </div>

          {/* 4. Water Availability */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
              <Droplets className="w-3.5 h-3.5 text-sky-600" />
              <span>Water Availability</span>
            </label>
            <select
              value={filters.waterAvailability}
              onChange={(e) => setFilters(prev => ({ ...prev, waterAvailability: e.target.value as any }))}
              className="w-full text-xs sm:text-sm rounded-lg border border-stone-300 bg-white py-2 px-2.5 text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="All">All Water Levels</option>
              <option value="Abundant (Canal/Tubewell)">Abundant (Canal/Borewell)</option>
              <option value="Moderate (Regular Rain/Drip)">Moderate (Rain/Drip)</option>
              <option value="Low (Rainfed/Drip only)">Low (Rainfed / Critical only)</option>
              <option value="Scanty (Drought-prone/Arid)">Scanty (Drought-prone)</option>
            </select>
          </div>

          {/* 5. Region / Location */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>Farm Region</span>
            </label>
            <select
              value={filters.region}
              onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value as any }))}
              className="w-full text-xs sm:text-sm rounded-lg border border-stone-300 bg-white py-2 px-2.5 text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="All">All Regions</option>
              <option value="Plains & River Basins">Plains & River Basins</option>
              <option value="Deccan Plateau">Deccan Plateau</option>
              <option value="Coastal Belt">Coastal Belt</option>
              <option value="Hilly & Valley">Hilly & Valley</option>
              <option value="Arid & Semi-Arid Zone">Arid & Semi-Arid Zone</option>
            </select>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="pt-2 border-t border-stone-100 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <span className="font-semibold text-stone-500 shrink-0 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            Category:
          </span>
          {(['All', 'Grain / Cereal', 'Pulse / Legume', 'Commercial / Cash', 'Oilseed', 'Vegetable', 'Spice'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                filters.category === cat
                  ? 'bg-emerald-700 text-white font-bold shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat === 'All' ? 'All Categories' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Match Results Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-['Outfit'] flex items-center gap-2">
            <span>Recommended Crops</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              {scoredCrops.length} {scoredCrops.length === 1 ? 'Crop Found' : 'Crops Found'}
            </span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Ranked by agronomic compatibility with your selected soil, climate, water, and season.
          </p>
        </div>

        {/* Result summary */}
        {activeFiltersCount > 0 && (
          <div className="text-xs text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Filtering with <strong>{activeFiltersCount} active criteria</strong></span>
          </div>
        )}
      </div>

      {/* Crop Cards Grid */}
      {scoredCrops.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {scoredCrops.map(({ crop, matchScore, reasons }) => (
            <CropCard
              key={crop.id}
              crop={crop}
              matchScore={matchScore}
              matchReasons={reasons}
              onSelect={onSelectCrop}
              onReadAloud={onReadAloud}
              fieldMode={fieldMode}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-dashed border-stone-300 p-8 text-center space-y-4 max-w-lg mx-auto my-8">
          <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
            <Filter className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-stone-800 text-base">No Exact Crops Match This Specific Combination</h3>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
              Try widening one or two criteria (such as setting Climate or Region to "All"), or try one of our popular field presets.
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
