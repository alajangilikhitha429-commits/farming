import React from 'react';
import { Sprout, PhoneCall, ShieldCheck, Heart, Leaf } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'advisor' | 'organic' | 'pests' | 'calendar' | 'ai') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-16 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg font-['Outfit'] tracking-tight">
                Smart Farming Advisor
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              Dedicated to empowering farmers with sustainable, regenerative, and cost-effective organic agricultural practices. Select optimal crops suited for your climate, regenerate living soil biology with Jeevamrutha, and protect yields without poisonous chemicals.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Safe for Families, Pollinators, Earthworms & Rivers</span>
            </div>
          </div>

          {/* Quick Tools Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">
              Advisory Modules
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('advisor')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  🌾 Crop Selector & Soil Match
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('organic')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  🌿 Organic Fertilizers & Pesticides Handbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pests')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  🔍 Pest & Disease Diagnostic Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calendar')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  📅 Seasonal Farming Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  🤖 Ask AI Smart Agronomist
                </button>
              </li>
            </ul>
          </div>

          {/* Farmer Advisory Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">
              Farmer Support & Safety
            </h4>
            <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Kisan Helpline (Toll-Free)</span>
              </div>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                Contact your regional Agriculture Extension Officer (KVK) or dial National Kisan Call Center <strong>1800-180-1551</strong> for local weather alerts.
              </p>
            </div>
            <p className="text-[11px] text-stone-500">
              Recommendations provided are verified traditional agro-ecological practices and biological pest remedies.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Smart Farming Advisor · Empowering Farmers Everywhere.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Natural Farming</span>
            <span aria-hidden="true">·</span>
            <span>Zero Poison Residue</span>
            <span aria-hidden="true">·</span>
            <span>Soil Microbiome Health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
