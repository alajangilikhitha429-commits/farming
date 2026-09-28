import React, { useState } from 'react';
import { ORGANIC_INPUTS_DATA } from '../data/organicInputs';
import { BioInputRecipe } from '../types/farming';
import {
  Leaf,
  Bug,
  AlertOctagon,
  Calculator,
  Clock,
  ShieldCheck,
  CheckCircle,
  FlaskConical,
  Sparkles,
  Layers,
  Info
} from 'lucide-react';

interface OrganicInputsHandbookProps {
  onReadAloud?: (text: string) => void;
  fieldMode?: boolean;
}

export const OrganicInputsHandbook: React.FC<OrganicInputsHandbookProps> = ({
  onReadAloud,
  fieldMode = false,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [activeRecipe, setActiveRecipe] = useState<BioInputRecipe>(ORGANIC_INPUTS_DATA[0]);
  const [targetAcreage, setTargetAcreage] = useState<number>(1);

  const filteredRecipes = ORGANIC_INPUTS_DATA.filter((recipe) => {
    if (selectedType === 'All') return true;
    return recipe.type === selectedType;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <FlaskConical className="w-4 h-4" />
            <span>Farm-Crafted Bio Inputs & Natural Protection</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            Organic Inputs, DIY Bio-Pesticides & Fertilizers Handbook
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Eliminate costly toxic chemicals from your farm. Explore field-tested recipes for living bio-fertilizers, botanical pest repellents, and natural weed management with our interactive acreage calculator.
          </p>
        </div>

        {/* Input Type Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-stone-800">
          {[
            { id: 'All', label: 'All Natural Remedies', icon: Sparkles },
            { id: 'Fertilizer', label: 'Organic Fertilizers & Tonics', icon: Leaf },
            { id: 'Pesticide', label: 'Bio-Pesticides & Repellents', icon: Bug },
            { id: 'Fungicide', label: 'Natural Bio-Fungicides', icon: ShieldCheck },
            { id: 'Weed Control', label: 'Non-Chemical Weed Management', icon: Layers },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedType(id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedType === id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout: Recipe Selector & Interactive Preparation Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of Remedies */}
        <div className="lg:col-span-4 space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 px-1">
            Choose Bio Formulation ({filteredRecipes.length})
          </h2>

          <div className="space-y-2">
            {filteredRecipes.map((recipe) => {
              const isSelected = activeRecipe.id === recipe.id;
              return (
                <div
                  key={recipe.id}
                  onClick={() => setActiveRecipe(recipe)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                      : 'bg-white border-stone-200 hover:border-emerald-300 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        recipe.type === 'Fertilizer'
                          ? 'bg-emerald-100 text-emerald-800'
                          : recipe.type === 'Pesticide'
                          ? 'bg-amber-100 text-amber-900'
                          : recipe.type === 'Fungicide'
                          ? 'bg-sky-100 text-sky-900'
                          : 'bg-teal-100 text-teal-900'
                      }`}
                    >
                      {recipe.type}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      Shelf: {recipe.shelfLife.split(' ')[0]} {recipe.shelfLife.split(' ')[1]}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900">
                    {recipe.name}
                  </h3>

                  <p className="text-xs text-stone-500 line-clamp-1 mt-1">
                    {recipe.targetIssues[0]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Recipe Details & Live Scale Calculator */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 shadow-sm p-4 sm:p-6 space-y-6">
          {/* Active Recipe Header */}
          <div className="border-b border-stone-200 pb-4 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                {activeRecipe.type} Solution
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                {activeRecipe.shelfLife}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-['Outfit']">
              {activeRecipe.name}
            </h2>

            {/* Target benefits */}
            <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 space-y-1">
              <span className="text-xs font-bold text-stone-700 block">
                Agronomic Purpose & Target Benefits:
              </span>
              <ul className="grid sm:grid-cols-2 gap-1 text-xs text-stone-600">
                {activeRecipe.targetIssues.map((issue, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Recipe Scale Calculator Box */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-2xl p-4 sm:p-5 border border-emerald-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-emerald-950">
                    Ingredient Scaling Calculator
                  </h3>
                  <p className="text-xs text-emerald-800">
                    Adjust your land acreage to calculate precise batch quantities
                  </p>
                </div>
              </div>

              {/* Acreage Selector Quick Buttons */}
              <div className="flex items-center gap-1.5">
                {[0.25, 0.5, 1, 2, 5].map((acre) => (
                  <button
                    key={acre}
                    onClick={() => setTargetAcreage(acre)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      targetAcreage === acre
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-white text-emerald-900 border border-emerald-300 hover:bg-emerald-100'
                    }`}
                  >
                    {acre} {acre === 1 ? 'Acre' : 'Acres'}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Acreage Input */}
            <div className="flex items-center gap-3 pt-1">
              <label className="text-xs font-semibold text-emerald-900 shrink-0">
                Custom Land Size:
              </label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0.1"
                  max="100"
                  step="0.25"
                  value={targetAcreage}
                  onChange={(e) => setTargetAcreage(Math.max(0.1, parseFloat(e.target.value) || 1))}
                  className="w-20 px-2 py-1 bg-white border border-emerald-300 rounded-lg text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <span className="text-xs font-semibold text-emerald-900">Acre(s)</span>
              </div>
            </div>

            {/* Scaled Ingredients Table */}
            <div className="bg-white rounded-xl border border-emerald-200 overflow-hidden shadow-xs">
              <div className="px-3.5 py-2 bg-emerald-100/70 border-b border-emerald-200 text-xs font-bold text-emerald-950 flex justify-between">
                <span>Ingredient Item</span>
                <span>Scaled Quantity for {targetAcreage} Acre(s)</span>
              </div>
              <div className="divide-y divide-emerald-100 text-xs">
                {activeRecipe.ingredients.map((ing, idx) => {
                  const scaledAmount = Number((ing.amountPerAcre * targetAcreage).toFixed(2));
                  return (
                    <div key={idx} className="px-3.5 py-2.5 flex items-center justify-between gap-2 hover:bg-emerald-50/40">
                      <div>
                        <span className="font-semibold text-stone-900">{ing.item}</span>
                        {ing.notes && (
                          <span className="block text-[11px] text-stone-500">
                            {ing.notes}
                          </span>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-sm text-emerald-800">
                          {scaledAmount} {ing.unit}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step-by-Step Preparation Guide */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4 text-emerald-700" />
              Step-by-Step Preparation Method
            </h3>

            <div className="space-y-2">
              {activeRecipe.preparationSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Instructions & Best Timing */}
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-stone-900 block flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-stone-600" />
                Application Rate & Method
              </span>
              <p className="text-stone-600 leading-relaxed">
                {activeRecipe.applicationInstructions}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="font-bold text-stone-900 block flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Best Time to Apply
              </span>
              <p className="text-stone-600 leading-relaxed">
                {activeRecipe.bestTime}
              </p>
            </div>
          </div>

          {/* Safety & Precautions */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <AlertOctagon className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Safety & Quality Precaution:</strong>
              <p className="text-amber-900/90 leading-relaxed">{activeRecipe.safetyPrecautions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
