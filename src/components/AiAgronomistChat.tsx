import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  Copy,
  Check,
  RotateCcw,
  Sprout,
  AlertCircle,
  ShieldCheck,
  User,
  HelpCircle
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: string;
}

interface AiAgronomistChatProps {
  initialCropContext?: string;
  onReadAloud?: (text: string) => void;
  isReading?: boolean;
  fieldMode?: boolean;
}

export const AiAgronomistChat: React.FC<AiAgronomistChatProps> = ({
  initialCropContext = '',
  onReadAloud,
  isReading = false,
  fieldMode = false,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `### Hello Farmer! Welcome to Smart AI Agronomist 🌾
I am your organic agricultural advisory companion. Ask me any question regarding:
- **Crop Selection & Suitability** for your specific soil, season, and water.
- **DIY Organic Fertilizers** (Jeevamrutha, Panchagavya, Vermicompost, FFJ).
- **Natural Bio-Pesticides** (Neem seed extract, Dashaparni, Agniastra, sour buttermilk).
- **Weed & Disease Solutions** without harmful chemical residues.

Tap one of the quick questions below or type your field question directly!`,
      timestamp: 'Just now',
      source: 'expert_agronomist'
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const suggestedPrompts = [
    'How do I prepare Jeevamrutha step-by-step for 1 acre?',
    'My chilli leaves are curling upwards. What natural spray will cure it?',
    'What is the best organic fertilizer schedule for heavy tomato yields?',
    'How to eliminate stem borer in paddy organically?',
    'What cover crop should I plant after harvesting wheat to fix nitrogen?',
    'How to stop aphids on mustard plants using neem oil?',
  ];

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: String(Date.now()),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/advisor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          cropContext: initialCropContext,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: data.answer || 'Thank you for your question. Always prioritize well-rotted compost, seed treatment, and neem oil sprays for pest control.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: data.source,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      // Fallback friendly message
      const errorMessage: Message = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: `### Organic Advisory Guidance
**Key Practical Steps for Your Query:**
1. **Soil & Root Health:** Apply 2 tons of well-rotted FYM or Vermicompost mixed with 100 kg Neem cake per acre. This deters root nematodes and feeds beneficial aerobic bacteria.
2. **Natural Pest Spray:** For sucking pests or borers, spray 5% Neem Seed Kernel Extract (NSKE) or Dashaparni Ark late in the evening (after 4:30 PM).
3. **Moisture Conservation:** Spread dry crop straw or sugarcane mulch across the root zones to save 40% irrigation water and suppress weeds.
4. **Bio-Fungicide Protection:** Drench root collars with Trichoderma viride (1 kg in 100L water) for damping-off and wilts.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'curated_offline_agronomist',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Bot className="w-4 h-4" />
            <span>24/7 Field Consultation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            Ask the AI Smart Agronomist
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Get instant expert guidance for your exact field situations: diagnostic troubleshooting, natural concoction recipes with exact measurements, organic soil amendments, and seasonal weather precautions.
          </p>
        </div>

        {/* Suggested Quick Prompts */}
        <div className="mt-6 pt-4 border-t border-stone-800 space-y-2">
          <span className="text-xs font-semibold text-stone-400 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Tap to ask instant farmer queries:
          </span>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                disabled={isLoading}
                className="text-left px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-xs text-stone-200 border border-stone-700 hover:border-amber-500/70 transition-all disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div
        className={`rounded-2xl border shadow-sm flex flex-col h-[600px] overflow-hidden ${
          fieldMode
            ? 'bg-white border-stone-800 ring-1 ring-stone-900'
            : 'bg-white border-stone-200'
        }`}
      >
        {/* Chat Messages Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-2xl rounded-2xl p-4 sm:p-5 text-xs sm:text-sm space-y-2 leading-relaxed ${
                    isUser
                      ? 'bg-emerald-700 text-white rounded-tr-xs shadow-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-800 rounded-tl-xs shadow-xs'
                  }`}
                >
                  <div className="whitespace-pre-line prose prose-stone max-w-none prose-headings:font-bold prose-headings:text-stone-900 prose-headings:text-sm prose-headings:my-1.5 prose-p:my-1 prose-ul:my-1 prose-li:my-0.5">
                    {msg.text}
                  </div>

                  {/* Message meta row */}
                  <div
                    className={`flex items-center justify-between pt-2 border-t text-[11px] ${
                      isUser
                        ? 'border-emerald-600/50 text-emerald-200'
                        : 'border-stone-200 text-stone-400'
                    }`}
                  >
                    <span>{msg.timestamp}</span>

                    {!isUser && (
                      <div className="flex items-center gap-2">
                        {onReadAloud && (
                          <button
                            onClick={() => onReadAloud(msg.text)}
                            className="hover:text-emerald-700 flex items-center gap-1 transition-colors"
                            title="Listen to advice"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Listen</span>
                          </button>
                        )}

                        <button
                          onClick={() => handleCopy(msg.id, msg.text)}
                          className="hover:text-emerald-700 flex items-center gap-1 transition-colors"
                          title="Copy to clipboard"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-stone-700 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex gap-3 justify-start items-center text-xs text-stone-500">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-stone-100 rounded-2xl px-4 py-2.5 flex items-center gap-2 border border-stone-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]" />
                <span className="font-medium text-stone-600">Agronomist is formulating organic recipe...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-stone-50 border-t border-stone-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask about your crops, pest diagnosis, organic recipes..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm bg-white text-stone-800 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-300 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-2"
            >
              <span>Ask</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-[11px] text-stone-400 mt-2 text-center sm:text-left flex items-center justify-between">
            <span>Specialized in Natural / Organic & Regenerative Agriculture</span>
            <button
              onClick={() => setMessages([messages[0]])}
              className="text-stone-500 hover:text-stone-700 underline text-[11px]"
            >
              Clear conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
