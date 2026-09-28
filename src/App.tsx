/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Crop } from './types/farming';
import { Header } from './components/Header';
import { CropAdvisor } from './components/CropAdvisor';
import { CropDetailModal } from './components/CropDetailModal';
import { OrganicInputsHandbook } from './components/OrganicInputsHandbook';
import { PestDoctor } from './components/PestDoctor';
import { SeasonalCalendar } from './components/SeasonalCalendar';
import { AiAgronomistChat } from './components/AiAgronomistChat';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'advisor' | 'organic' | 'pests' | 'calendar' | 'ai'>('advisor');
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [fieldMode, setFieldMode] = useState<boolean>(false);
  const [speechEnabled, setSpeechEnabled] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [aiInitialCropContext, setAiInitialCropContext] = useState<string>('');

  // Audio Speech Synthesis Helper
  const handleReadAloud = (rawText: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Strip markdown formatting symbols for clean natural speech
    const cleanText = rawText
      .replace(/#+/g, '')
      .replace(/[*_`~]/g, '')
      .replace(/\[.*?\]\(.*?\)/g, '')
      .replace(/-{3,}/g, '')
      .replace(/>/g, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95; // Slightly slower, calm cadence suitable for field instructions
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    setIsSpeaking(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // If user disables speech, stop any ongoing voice output
  useEffect(() => {
    if (!speechEnabled && isSpeaking) {
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
    }
  }, [speechEnabled, isSpeaking]);

  const handleAskAiAboutCrop = (cropName: string) => {
    setAiInitialCropContext(cropName);
    setSelectedCrop(null);
    setActiveTab('ai');
  };

  const handleAskAiAboutPest = (pestName: string) => {
    setAiInitialCropContext(`Pest & Disease: ${pestName}`);
    setActiveTab('ai');
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-150 ${
        fieldMode
          ? 'bg-stone-100 text-stone-950 font-medium text-[15px]'
          : 'bg-stone-50 text-stone-900'
      }`}
    >
      {/* App Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        fieldMode={fieldMode}
        setFieldMode={setFieldMode}
        speechEnabled={speechEnabled}
        setSpeechEnabled={setSpeechEnabled}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'advisor' && (
          <CropAdvisor
            onSelectCrop={(crop) => {
              setSelectedCrop(crop);
              if (speechEnabled) {
                handleReadAloud(`Opening guide for ${crop.name}. Season: ${crop.seasons.join(', ')}. Water need: ${crop.waterRequirement.split(' ')[0]}. Expected yield: ${crop.averageYield}.`);
              }
            }}
            onReadAloud={speechEnabled ? handleReadAloud : undefined}
            fieldMode={fieldMode}
          />
        )}

        {activeTab === 'organic' && (
          <OrganicInputsHandbook
            onReadAloud={speechEnabled ? handleReadAloud : undefined}
            fieldMode={fieldMode}
          />
        )}

        {activeTab === 'pests' && (
          <PestDoctor
            onAskAiAboutPest={handleAskAiAboutPest}
            onReadAloud={speechEnabled ? handleReadAloud : undefined}
            fieldMode={fieldMode}
          />
        )}

        {activeTab === 'calendar' && (
          <SeasonalCalendar />
        )}

        {activeTab === 'ai' && (
          <AiAgronomistChat
            initialCropContext={aiInitialCropContext}
            onReadAloud={speechEnabled ? handleReadAloud : undefined}
            isReading={isSpeaking}
            fieldMode={fieldMode}
          />
        )}
      </main>

      {/* Crop Detail Modal Sheet */}
      <CropDetailModal
        crop={selectedCrop}
        onClose={() => {
          setSelectedCrop(null);
          if (isSpeaking) {
            window.speechSynthesis?.cancel();
            setIsSpeaking(false);
          }
        }}
        onAskAiAboutCrop={handleAskAiAboutCrop}
        onReadAloud={handleReadAloud}
        isReading={isSpeaking}
        fieldMode={fieldMode}
      />

      {/* Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />
    </div>
  );
}
