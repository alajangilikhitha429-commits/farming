import React, { useState } from 'react';
import { Season } from '../types/farming';
import {
  Calendar as CalendarIcon,
  Sun,
  CloudRain,
  Snowflake,
  Clock,
  CheckCircle,
  AlertCircle,
  Sprout,
  Shield,
  Layers
} from 'lucide-react';

export const SeasonalCalendar: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<Season>('Kharif');

  const seasonInfo: Record<
    Season,
    {
      months: string;
      climate: string;
      primaryCrops: string[];
      keyMilestones: {
        stage: string;
        timing: string;
        activity: string;
        organicAction: string;
      }[];
    }
  > = {
    Kharif: {
      months: 'June to October (Monsoon Season)',
      climate: 'Warm, humid with South-West monsoon rainfall',
      primaryCrops: ['Rice (Paddy)', 'Cotton', 'Maize', 'Soybean', 'Groundnut', 'Turmeric', 'Pearl Millet', 'Chilli'],
      keyMilestones: [
        {
          stage: 'Pre-Monsoon Land Preparation',
          timing: 'May - Early June',
          activity: 'Deep summer plowing to expose resting pest pupae and weed seeds to scorching solar heat.',
          organicAction: 'Sow green manure crop (Dhaincha or Sunnhemp) with first shower, then plow it into soil after 45 days.'
        },
        {
          stage: 'Sowing & Seed Treatment',
          timing: 'Mid June - July',
          activity: 'Direct drilling or nursery raising on raised beds.',
          organicAction: 'Inoculate seeds with Trichoderma (5g/kg) and Rhizobium / Azotobacter with jaggery water to prevent damping off.'
        },
        {
          stage: 'Vegetative Growth & First Weeding',
          timing: 'July - August',
          activity: 'Critical 30-day weed control window and root aeration.',
          organicAction: 'Apply 200L Jeevamrutha through irrigation; spray 5% NSKE (Neem Seed Kernel Extract) to prevent sucking pests.'
        },
        {
          stage: 'Flowering & Grain / Fruit Set',
          timing: 'September',
          activity: 'Moisture conservation and flower retention.',
          organicAction: 'Foliar spray of 3% Panchagavya or Fermented Fruit Juice (FFJ); install pheromone traps for borers.'
        },
        {
          stage: 'Maturation & Harvest',
          timing: 'October - November',
          activity: 'Drain standing water 10 days before reaping; harvest when 85% grains or pods turn golden.',
          organicAction: 'Save healthy heirloom seeds; chop crop residue back into soil instead of stubble burning.'
        }
      ]
    },
    Rabi: {
      months: 'October to March (Winter Season)',
      climate: 'Cool, sunny days with cold nights and morning dew',
      primaryCrops: ['Wheat', 'Chickpea (Chana)', 'Mustard', 'Potato', 'Onion', 'Cauliflower', 'Tomato'],
      keyMilestones: [
        {
          stage: 'Post-Kharif Bed Preparation',
          timing: 'October - November',
          activity: 'Tillage utilizing residual monsoon sub-surface soil moisture.',
          organicAction: 'Broadcast 2-3 tons of Vermicompost + 100 kg Neem Cake per acre to neutralize soil-borne pathogens.'
        },
        {
          stage: 'Timely Winter Sowing',
          timing: 'November',
          activity: 'Sow at recommended row spacing (20-22 cm for wheat, 30 cm for chickpea).',
          organicAction: 'Treat seeds with Azotobacter and PSB to unlock insoluble soil phosphorus during cold soil temperatures.'
        },
        {
          stage: 'Crown Root Initiation & Tillering',
          timing: 'December',
          activity: 'First critical irrigation for wheat (21 DAS); rosette stage for mustard.',
          organicAction: 'Drench root zone with 200L Jeevamrutha; monitor for mustard aphid and yellow rust.'
        },
        {
          stage: 'Flowering & Pod / Earhead Bulking',
          timing: 'January - February',
          activity: 'Protection against cold waves, aphids, and powdery mildew.',
          organicAction: 'Foliar spray of Sour Buttermilk (5%) + copper extract for rust and blight prevention; spray Dashaparni Ark.'
        },
        {
          stage: 'Harvest & Grain Drying',
          timing: 'March - April',
          activity: 'Harvest during dry sunny weather when grain moisture drops below 12%.',
          organicAction: 'Sun-cure potato tubers and onions in shaded ventilated stores.'
        }
      ]
    },
    Zaid: {
      months: 'March to June (Summer Season)',
      climate: 'Hot, dry, high solar radiation with low humidity',
      primaryCrops: ['Green Gram (Moong)', 'Watermelon', 'Muskmelon', 'Cucumber', 'Okra (Bhindi)', 'Fodder Cowpea'],
      keyMilestones: [
        {
          stage: 'Quick Summer Turnaround',
          timing: 'Late February - March',
          activity: 'Direct sowing immediately following early rabi harvest (potato or mustard).',
          organicAction: 'Apply light compost and Rhizobium inoculant on pulse seeds; minimal tillage to conserve deep moisture.'
        },
        {
          stage: 'Early Vine / Shoot Growth',
          timing: 'March - April',
          activity: 'Establish drip lines or furrow irrigation systems.',
          organicAction: 'Lay dry straw mulch (8-10 cm) along furrows to prevent high summer ground evaporation.'
        },
        {
          stage: 'Active Fruiting & Sizing',
          timing: 'April - May',
          activity: 'Provide regular light evening water cycles; fruit flies and red pumpkin beetle defense.',
          organicAction: 'Hang cue-lure traps for fruit flies; spray Neem oil (5ml/L) + soap solution every 7 days.'
        },
        {
          stage: 'Harvest & Early Monsoon Prep',
          timing: 'May - June',
          activity: 'Pick melons and pods early morning before midday heat softens produce.',
          organicAction: 'Incorporate legume vines (Moong/Cowpea) back into the soil as instant nitrogenous green manure.'
        }
      ]
    },
    'All Season': {
      months: 'Perennial & Round-the-Year Crops',
      climate: 'Suitable across diverse agro-climatic zones with regular irrigation',
      primaryCrops: ['Sugarcane', 'Banana', 'Brinjal', 'Turmeric', 'Ginger', 'Chilli', 'Papaya'],
      keyMilestones: [
        {
          stage: 'Perennial Bed Formation',
          timing: 'Spring or Monsoon',
          activity: 'Deep trenching and broad raised bed preparation.',
          organicAction: 'Incorporate 4 tons FYM + 200 kg Castor / Neem cake + VAM mycorrhizae for long-term root health.'
        },
        {
          stage: 'Continuous Tillering / Vegetative Cycles',
          timing: 'Every 30-45 Days',
          activity: 'Canopy management, sucker de-suckering, and inter-cultivation.',
          organicAction: 'Monthly Jeevamrutha fertigation (200L/acre); quarterly green leaf mulching.'
        },
        {
          stage: 'Continuous Flowering & Harvesting Flushes',
          timing: 'Year-Round',
          activity: 'Staggered pickings and pest scouting.',
          organicAction: 'Alternate foliar sprays of 3% Panchagavya and Fermented Fruit Juice (FFJ) to maintain steady blossom vigor.'
        }
      ]
    }
  };

  const current = seasonInfo[activeSeason];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CalendarIcon className="w-4 h-4" />
            <span>Field Operational Timetable</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            Seasonal Farming Calendar & Crop Care
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Farming success depends on timing. Track stage-by-stage biological milestones from pre-sowing soil revitalization, green manuring, weed control windows, to harvest curing.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-emerald-900/60">
          {(['Kharif', 'Rabi', 'Zaid', 'All Season'] as Season[]).map((season) => (
            <button
              key={season}
              onClick={() => setActiveSeason(season)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeSeason === season
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {season === 'Kharif' && <CloudRain className="w-4 h-4 text-sky-400" />}
              {season === 'Rabi' && <Snowflake className="w-4 h-4 text-cyan-300" />}
              {season === 'Zaid' && <Sun className="w-4 h-4 text-amber-400" />}
              {season === 'All Season' && <Sprout className="w-4 h-4 text-emerald-400" />}
              <span>{season} Season</span>
            </button>
          ))}
        </div>
      </div>

      {/* Season Summary Card */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Selected Agricultural Cycle
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-['Outfit']">
              {activeSeason} Season Operational Guide
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              {current.months} · {current.climate}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 max-w-md">
            <span className="text-xs font-semibold text-stone-600 shrink-0 self-center mr-1">
              Top Crops:
            </span>
            {current.primaryCrops.map((crop, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100"
              >
                {crop}
              </span>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="space-y-4 pt-2">
          {current.keyMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 font-['Outfit']">
                    {milestone.stage}
                  </h3>
                </div>

                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-stone-200 text-stone-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  {milestone.timing}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pl-9">
                {milestone.activity}
              </p>

              <div className="ml-9 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold text-emerald-900 mb-0.5">
                    Organic Action / Field Remedy:
                  </strong>
                  <span>{milestone.organicAction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
