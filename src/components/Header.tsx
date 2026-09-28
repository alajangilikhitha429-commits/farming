import React from 'react';
import { Sprout, Sun, Volume2, VolumeX, BookOpen, Bug, Calendar, Bot, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: 'advisor' | 'organic' | 'pests' | 'calendar' | 'ai';
  setActiveTab: (tab: 'advisor' | 'organic' | 'pests' | 'calendar' | 'ai') => void;
  fieldMode: boolean;
  setFieldMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  speechEnabled: boolean;
  setSpeechEnabled: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  fieldMode,
  setFieldMode,
  speechEnabled,
  setSpeechEnabled,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-inner">
            <Sprout className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-lg sm:text-xl text-white font-['Outfit']">
                Smart Farming Advisor
              </span>
              <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/80 border border-emerald-700/50 px-2 py-0.5 rounded">
                100% Organic & Field Tested
              </span>
            </div>
            <p className="text-xs text-stone-400 hidden sm:block">
              Seasonal Crop Selector · Natural Fertilizers · Bio-Pesticides · Weed Solutions
            </p>
          </div>
        </div>

        {/* Action Controls: Field Mode & Audio Speech */}
        <div className="flex items-center gap-2">
          {/* Audio Speech Toggle */}
          <button
            onClick={() => setSpeechEnabled(prev => !prev)}
            title={speechEnabled ? "Voice Reader Active (Click to mute)" : "Enable Voice Read-Aloud for Field"}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              speechEnabled
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
            }`}
          >
            {speechEnabled ? <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
            <span className="hidden md:inline">{speechEnabled ? 'Voice Reader On' : 'Voice Reader'}</span>
          </button>

          {/* Sunlight Field Mode Toggle */}
          <button
            onClick={() => setFieldMode(prev => !prev)}
            title="Toggle High-Contrast Field Sunlight Mode"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              fieldMode
                ? 'bg-emerald-600 border-emerald-500 text-white'
                : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Sun className={`w-4 h-4 ${fieldMode ? 'text-amber-200' : 'text-stone-400'}`} />
            <span className="hidden md:inline">{fieldMode ? 'Sunlight Mode On' : 'Sunlight Mode'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="bg-stone-950/80 border-t border-stone-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-3 overflow-x-auto py-2 scrollbar-none" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('advisor')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'advisor'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <Sprout className="w-4 h-4" />
              <span>Crop Advisor</span>
            </button>

            <button
              onClick={() => setActiveTab('organic')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'organic'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Organic Inputs Handbook</span>
            </button>

            <button
              onClick={() => setActiveTab('pests')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'pests'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <Bug className="w-4 h-4" />
              <span>Pest & Disease Doctor</span>
            </button>

            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'calendar'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Seasonal Calendar</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'ai'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <Bot className="w-4 h-4 text-amber-300" />
              <span>Ask AI Agronomist</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
