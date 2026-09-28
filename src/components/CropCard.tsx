import React from 'react';
import { Crop } from '../types/farming';
import { Droplet, Clock, TrendingUp, Sparkles, ChevronRight, ShieldCheck, Leaf } from 'lucide-react';

interface CropCardProps {
  crop: Crop;
  matchScore: number;
  matchReasons: string[];
  onSelect: (crop: Crop) => void;
  onReadAloud?: (text: string) => void;
  fieldMode?: boolean;
}

export const CropCard: React.FC<CropCardProps> = ({
  crop,
  matchScore,
  matchReasons,
  onSelect,
  fieldMode = false,
}) => {
  return (
    <div
      onClick={() => onSelect(crop)}
      className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-200 border text-left flex flex-col justify-between ${
        fieldMode
          ? 'bg-white border-stone-800 shadow-md ring-1 ring-stone-900'
          : 'bg-white border-stone-200 hover:border-emerald-500 hover:shadow-lg hover:-translate-y-0.5'
      }`}
    >
      <div>
        {/* Realistic Crop Image with Match Badge */}
        <div className="relative h-48 w-full overflow-hidden bg-stone-100">
          <img
            src={crop.imageUrl}
            alt={crop.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-black/20" />

          {/* Match Score Indicator */}
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold tracking-tight shadow-md backdrop-blur-md ${
                matchScore >= 90
                  ? 'bg-emerald-600/95 text-white border border-emerald-400/40'
                  : matchScore >= 70
                  ? 'bg-amber-600/95 text-white border border-amber-400/40'
                  : 'bg-stone-800/90 text-stone-200 border border-stone-600/40'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {matchScore}% Match
            </span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-stone-900/80 text-white backdrop-blur-md border border-stone-700/60">
              {crop.category}
            </span>
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="text-xl font-bold tracking-tight font-['Outfit'] drop-shadow-sm flex items-center justify-between">
              <span>{crop.name}</span>
            </h3>
            {crop.localNames && (
              <p className="text-xs text-stone-200 italic line-clamp-1">
                Also known as: {crop.localNames}
              </p>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Unboxed Metadata row */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-stone-500 font-medium">
            <span className="text-emerald-700 font-semibold">{crop.seasons.join(', ')} Season</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{crop.growthDurationDays}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-600">{crop.profitability}</span>
          </div>

          {/* Overview text */}
          <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {crop.overview}
          </p>

          {/* Match Reasons pills */}
          {matchReasons.length > 0 && (
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-lg p-2.5 text-xs text-emerald-900 space-y-1">
              <div className="font-semibold text-emerald-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Why it fits your field:</span>
              </div>
              <ul className="list-disc list-inside text-[11px] text-emerald-700 space-y-0.5">
                {matchReasons.slice(0, 2).map((reason, idx) => (
                  <li key={idx} className="line-clamp-1">{reason}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-stone-100">
            <div className="flex items-center gap-1.5 text-stone-600">
              <Droplet className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span className="truncate">{crop.waterRequirement.split(' ')[0]} Water</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600">
              <TrendingUp className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">{crop.averageYield.split('/')[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-4 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between group-hover:bg-emerald-50/60 transition-colors">
        <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
          <Leaf className="w-3.5 h-3.5 text-emerald-600" />
          Organic Guide & Remedies
        </span>
        <span className="flex items-center text-xs font-bold text-stone-800 group-hover:text-emerald-700 transition-colors">
          View Details
          <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
};
