import React, { useState } from 'react';
import { PEST_DATABASE } from '../data/pestDatabase';
import { PestDiagnosticEntry } from '../types/farming';
import {
  Bug,
  AlertTriangle,
  ShieldCheck,
  Search,
  CheckCircle2,
  Sparkles,
  Bot,
  Eye,
  Info
} from 'lucide-react';

interface PestDoctorProps {
  onAskAiAboutPest: (pestName: string) => void;
  onReadAloud?: (text: string) => void;
  fieldMode?: boolean;
}

export const PestDoctor: React.FC<PestDoctorProps> = ({
  onAskAiAboutPest,
  onReadAloud,
  fieldMode = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const symptomFilters = [
    { label: 'All Issues', value: 'All' },
    { label: 'Curled / Crinkled Leaves', value: 'curling' },
    { label: 'Fruit & Shoot Boreholes', value: 'borer' },
    { label: 'White Powdery Coating', value: 'powdery' },
    { label: 'Black Spots / Greasy Rot', value: 'blight' },
    { label: 'Sudden Daytime Drooping', value: 'wilt' },
    { label: 'Swollen Root Knots', value: 'nematode' },
    { label: 'Chewed Leaves with Frass', value: 'armyworm' },
  ];

  const filteredEntries = PEST_DATABASE.filter((entry) => {
    // Symptom tag filter
    if (selectedCategory !== 'All') {
      const q = selectedCategory.toLowerCase();
      const matchesSymptom =
        entry.name.toLowerCase().includes(q) ||
        entry.symptomSummary.toLowerCase().includes(q) ||
        entry.visibleSigns.some(s => s.toLowerCase().includes(q));
      if (!matchesSymptom) return false;
    }

    // Text search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesText =
        entry.name.toLowerCase().includes(q) ||
        entry.type.toLowerCase().includes(q) ||
        entry.symptomSummary.toLowerCase().includes(q) ||
        entry.affectedCrops.some(c => c.toLowerCase().includes(q));
      if (!matchesText) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Bug className="w-4 h-4" />
            <span>Plant Health & Crop Protection Clinic</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            Pest & Disease Awareness Doctor
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Spot visible crop symptoms early. Select what you observe on your plants to identify the pathogen and apply safe, non-toxic bio-pesticides and organic herbal treatments immediately.
          </p>
        </div>

        {/* Symptom Tag Pills */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-amber-900/40">
          {symptomFilters.map((sym) => (
            <button
              key={sym.value}
              onClick={() => setSelectedCategory(sym.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === sym.value
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {sym.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by pest name or affected crop (e.g. Tomato, Aphid, Borer)..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm bg-white"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
          >
            Clear
          </button>
        )}
      </div>

      {/* Diagnostic Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEntries.map((pest) => (
          <div
            key={pest.id}
            className={`rounded-2xl overflow-hidden border flex flex-col justify-between ${
              fieldMode
                ? 'bg-white border-stone-800 shadow-md ring-1 ring-stone-900'
                : 'bg-white border-stone-200 shadow-sm hover:shadow-md transition-shadow'
            }`}
          >
            <div>
              {/* Image & Header */}
              <div className="relative h-44 w-full overflow-hidden bg-stone-900">
                <img
                  src={pest.imageUrl}
                  alt={pest.name}
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/20" />

                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase ${
                      pest.type === 'Insect Pest'
                        ? 'bg-amber-600 text-white'
                        : pest.type === 'Fungal Disease'
                        ? 'bg-rose-600 text-white'
                        : 'bg-purple-600 text-white'
                    }`}
                  >
                    {pest.type}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] drop-shadow-sm">
                    {pest.name}
                  </h3>
                </div>
              </div>

              {/* Symptoms & Visual Signs */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-amber-700" />
                    Key Visible Field Signs
                  </span>
                  <ul className="space-y-1 text-xs text-stone-700">
                    {pest.visibleSigns.map((sign, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Affected Crops */}
                <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="font-semibold text-stone-500">Commonly infects:</span>
                  {pest.affectedCrops.map((c, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium text-[11px]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Organic Remedies */}
                <div className="pt-2 border-t border-stone-100 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Organic Curative Remedies
                  </span>
                  <div className="space-y-2">
                    {pest.organicTreatments.map((treatment, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs space-y-0.5">
                        <strong className="text-emerald-950 font-bold block">
                          {treatment.title}
                        </strong>
                        <p className="text-emerald-900/90 leading-relaxed">
                          {treatment.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preventive Cultural Tactics */}
                <div className="pt-2 border-t border-stone-100 space-y-1">
                  <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider">
                    Long-term Cultural Prevention:
                  </span>
                  <ul className="text-xs text-stone-600 space-y-1">
                    {pest.preventiveMeasures.map((prev, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{prev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="p-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                100% Bio-Organic Treatment
              </span>
              <button
                onClick={() => onAskAiAboutPest(pest.name)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Ask AI About {pest.name.split(' ')[0]}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
