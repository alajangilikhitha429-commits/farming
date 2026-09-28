import React, { useState } from 'react';
import { Crop } from '../types/farming';
import {
  X,
  Droplet,
  Clock,
  TrendingUp,
  MapPin,
  Sparkles,
  Leaf,
  Bug,
  AlertTriangle,
  Lightbulb,
  Printer,
  Volume2,
  VolumeX,
  Bot,
  Layers,
  HeartHandshake
} from 'lucide-react';

interface CropDetailModalProps {
  crop: Crop | null;
  onClose: () => void;
  onAskAiAboutCrop: (cropName: string) => void;
  onReadAloud: (text: string) => void;
  isReading: boolean;
  fieldMode?: boolean;
}

export const CropDetailModal: React.FC<CropDetailModalProps> = ({
  crop,
  onClose,
  onAskAiAboutCrop,
  onReadAloud,
  isReading,
  fieldMode = false,
}) => {
  const [activeSection, setActiveSection] = useState<'fertilizers' | 'pesticides' | 'weeds' | 'tips' | 'diseases'>('fertilizers');

  if (!crop) return null;

  const handlePrint = () => {
    window.print();
  };

  const getAudioTextSummary = () => {
    return `${crop.name}. Duration: ${crop.growthDurationDays}. Expected yield: ${crop.averageYield}. ${crop.overview} Main organic advice: ${crop.keyFarmingTips.join('. ')}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white">
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border print:border-none print:shadow-none print:max-h-none ${
          fieldMode
            ? 'bg-white border-stone-900 ring-2 ring-stone-900'
            : 'bg-white border-stone-200'
        }`}
      >
        {/* Modal Top Bar */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-stone-900 shrink-0 print:h-40">
          <img
            src={crop.imageUrl}
            alt={crop.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/20" />

          {/* Close & Quick Action buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 print:hidden">
            <button
              onClick={() => onReadAloud(getAudioTextSummary())}
              className={`p-2 rounded-lg backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isReading
                  ? 'bg-amber-500 text-stone-950 border-amber-400'
                  : 'bg-stone-900/80 text-white border-stone-700 hover:bg-stone-800'
              }`}
              title="Read Summary Aloud"
            >
              {isReading ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isReading ? 'Stop Reading' : 'Listen'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-stone-900/80 text-white border border-stone-700 hover:bg-stone-800 backdrop-blur-md transition-colors"
              title="Print Field Sheet"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-stone-900/80 text-white border border-stone-700 hover:bg-stone-800 backdrop-blur-md transition-colors"
              title="Close Guide"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title and Botanical Badges */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-600/90 text-white">
                {crop.category}
              </span>
              <span className="text-xs text-stone-300 font-mono italic">
                {crop.scientificName}
              </span>
              {crop.localNames && (
                <span className="text-xs text-stone-300 hidden sm:inline">
                  · ({crop.localNames})
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
              {crop.name} Organic Farming Guide
            </h2>
          </div>
        </div>

        {/* Quick Facts Strip */}
        <div className="bg-stone-100 border-b border-stone-200 px-4 sm:px-6 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
          <div>
            <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              Seasons
            </span>
            <span className="font-bold text-stone-800">{crop.seasons.join(', ')}</span>
          </div>
          <div>
            <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              Duration
            </span>
            <span className="font-bold text-stone-800">{crop.growthDurationDays}</span>
          </div>
          <div>
            <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              Expected Yield
            </span>
            <span className="font-bold text-stone-800">{crop.averageYield}</span>
          </div>
          <div>
            <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              Water Need
            </span>
            <span className="font-bold text-stone-800">{crop.waterRequirement.split(' ')[0]}</span>
          </div>
        </div>

        {/* Navigation Tabs inside Modal */}
        <div className="bg-white border-b border-stone-200 px-4 sm:px-6 overflow-x-auto scrollbar-none print:hidden">
          <div className="flex space-x-1 py-2">
            <button
              onClick={() => setActiveSection('fertilizers')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeSection === 'fertilizers'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span>Organic Fertilizers ({crop.organicFertilizers.length})</span>
            </button>

            <button
              onClick={() => setActiveSection('pesticides')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeSection === 'pesticides'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Bug className="w-4 h-4 text-amber-700" />
              <span>Bio-Pesticides ({crop.organicPesticides.length})</span>
            </button>

            <button
              onClick={() => setActiveSection('weeds')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeSection === 'weeds'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Layers className="w-4 h-4 text-teal-700" />
              <span>Weed Management</span>
            </button>

            <button
              onClick={() => setActiveSection('tips')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeSection === 'tips'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Farmer Tips & Irrigation</span>
            </button>

            <button
              onClick={() => setActiveSection('diseases')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
                activeSection === 'diseases'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Diseases & Prevention</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-stone-800">
          {/* Overview Callout */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                Crop Overview & Soil Compatibility
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {crop.overview}
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-stone-600">
                <span className="font-semibold text-stone-800">Suitable Soils:</span>
                <span>{crop.suitableSoils.join(', ')}</span>
                <span className="text-stone-300">|</span>
                <span className="font-semibold text-stone-800">Ideal Climate:</span>
                <span>{crop.climates.join(', ')}</span>
              </div>
            </div>

            <button
              onClick={() => onAskAiAboutCrop(crop.name)}
              className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm transition-colors print:hidden"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI About {crop.name}</span>
            </button>
          </div>

          {/* Section: Organic Fertilizers */}
          {(activeSection === 'fertilizers' || window.matchMedia?.('print').matches) && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  Organic Nutrition & Fertilizer Schedule (Per Acre)
                </h3>
                <span className="text-xs text-stone-500 hidden sm:inline">100% Chemical-Free Nutrition</span>
              </div>

              <div className="grid gap-3 sm:gap-4">
                {crop.organicFertilizers.map((fert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                        {fert.stage}
                      </span>
                      <span className="text-xs font-mono font-semibold text-stone-700 bg-white px-2 py-0.5 rounded border border-stone-200">
                        Dosage: {fert.dosage}
                      </span>
                    </div>

                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                      {fert.remedyName}
                    </h4>

                    <div className="text-xs sm:text-sm text-stone-600 space-y-1">
                      <p>
                        <strong className="text-stone-800">How to Apply:</strong> {fert.applicationMethod}
                      </p>
                      <p className="text-emerald-800">
                        <strong className="text-emerald-950">Agronomic Benefit:</strong> {fert.benefits}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Organic Pesticides */}
          {(activeSection === 'pesticides' || window.matchMedia?.('print').matches) && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-amber-600" />
                  Natural Pest Management & Bio-Control
                </h3>
                <span className="text-xs text-stone-500 hidden sm:inline">Safe for Pollinators & Soil</span>
              </div>

              <div className="grid gap-4">
                {crop.organicPesticides.map((pest, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-amber-950 text-sm sm:text-base">
                        Target: {pest.targetPest}
                      </h4>
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                        Timing: {pest.sprayTiming}
                      </span>
                    </div>

                    <p className="text-xs text-amber-900/80">
                      <strong>Symptoms:</strong> {pest.symptoms}
                    </p>

                    <div className="p-3 bg-white rounded-lg border border-amber-200/80 text-xs sm:text-sm space-y-1">
                      <div className="font-semibold text-stone-900">
                        Recommended Remedy: {pest.organicRemedy}
                      </div>
                      <p className="text-stone-600">
                        <strong>Preparation & Application:</strong> {pest.preparationRecipe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Organic Weed Control */}
          {(activeSection === 'weeds' || window.matchMedia?.('print').matches) && (
            <div className="space-y-4">
              <div className="border-b border-stone-200 pb-2">
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-teal-600" />
                  Natural Weed Suppression & Organic Herbicides
                </h3>
              </div>

              <div className="space-y-3">
                {crop.organicHerbicides.map((weed, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-teal-200 bg-teal-50/40 space-y-2">
                    <h4 className="font-bold text-teal-950 text-sm sm:text-base">
                      Weed Challenge: {weed.weedProblem}
                    </h4>
                    <div className="p-3 bg-white rounded-lg border border-teal-200/80 text-xs sm:text-sm space-y-1">
                      <span className="font-bold text-teal-800 block">
                        Technique: {weed.organicMethod}
                      </span>
                      <p className="text-stone-600 leading-relaxed">
                        {weed.howToApply}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700">
                  <strong className="block text-stone-900 mb-1">Golden Rule for Organic Weed Control:</strong>
                  The first 30 days after sowing or transplanting determine 90% of weed damage. Keep the field clean during this initial window through mulching or shallow cultivation; once the crop canopy closes, weeds are naturally suppressed without any chemicals.
                </div>
              </div>
            </div>
          )}

          {/* Section: Farmer Tips & Irrigation */}
          {(activeSection === 'tips' || window.matchMedia?.('print').matches) && (
            <div className="space-y-4">
              <div className="border-b border-stone-200 pb-2">
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  Key Farming Tips & Water Conservation
                </h3>
              </div>

              {/* Water saving callout */}
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 flex items-start gap-3">
                <Droplet className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-sky-950">
                  <h4 className="font-bold mb-1">Water-Saving & Irrigation Secret</h4>
                  <p>{crop.waterSavingTip}</p>
                </div>
              </div>

              {/* Tips list */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Field Proven Best Practices
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {crop.keyFarmingTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Companion planting */}
              {crop.companionPlants && crop.companionPlants.length > 0 && (
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1.5">
                    <HeartHandshake className="w-4 h-4 text-emerald-700" />
                    <span>Best Companion & Trap Crops</span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    Plant alongside: <strong>{crop.companionPlants.join(' · ')}</strong> to naturally attract predatory insects, improve nitrogen, and repel major pests.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Section: Diseases */}
          {(activeSection === 'diseases' || window.matchMedia?.('print').matches) && (
            <div className="space-y-4">
              <div className="border-b border-stone-200 pb-2">
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  Common Diseases & Organic Cures
                </h3>
              </div>

              <div className="grid gap-3">
                {crop.commonDiseases.map((dis, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 space-y-2">
                    <h4 className="font-bold text-rose-950 text-sm sm:text-base">
                      {dis.name}
                    </h4>
                    <p className="text-xs text-stone-700">
                      <strong>Symptoms:</strong> {dis.symptoms}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <strong className="text-stone-800 block mb-0.5">Prevention:</strong>
                        <span className="text-stone-600">{dis.prevention}</span>
                      </div>
                      <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
                        <strong className="text-emerald-900 block mb-0.5">Organic Curative:</strong>
                        <span className="text-emerald-800">{dis.organicCure}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Footer */}
        <div className="p-3 sm:p-4 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="text-xs text-stone-600 hidden sm:block">
            Need customized dosage for your soil test? Ask our AI Agronomist anytime.
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => onAskAiAboutCrop(crop.name)}
              className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI Agronomist</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
