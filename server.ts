import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
const PORT = parseInt(process.env.PORT || '3000', 10);

const app = express();
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY)
  });
});

// Fallback agronomist responses if API key is absent or offline
function getCuratedAgronomistAnswer(query: string, cropContext?: string): string {
  const q = query.toLowerCase();
  
  if (q.includes('jeevamrutha') || q.includes('jeevamrit')) {
    return `### How to Prepare Jeevamrutha (For 1 Acre Field)
**Ingredients:**
- 10 kg fresh Desi (indigenous) cow dung
- 5 to 10 liters Desi cow urine
- 2 kg organic jaggery or 4 liters sugarcane juice
- 2 kg pulse flour (Gram / Chickpea / Besan or Moong flour)
- A handful of live virgin soil (from under a Banyan tree or undisturbed fence border)
- 200 liters water (chlorine-free)

**Preparation Steps:**
1. In a 200L plastic drum, mix 10 kg cow dung and cow urine thoroughly.
2. Dissolve 2 kg jaggery and 2 kg pulse flour in 10L water and add to the drum.
3. Add the handful of virgin soil and top up with 200L water.
4. Stir clockwise with a wooden stick for 2 minutes. Cover with a breathable burlap/jute bag.
5. Keep in shade. Stir 2 times daily (morning and evening) for 48 to 72 hours.

**Application:**
- Dilute 1:10 with water and apply through irrigation or soil drenching during sowing and every 21 days.
- **Benefits:** Multiplies soil beneficial aerobic microbes exponentially and converts locked phosphorus and micronutrients into plant-available forms.`;
  }

  if (q.includes('panchagavya')) {
    return `### Panchagavya Recipe & Dosage
**Ingredients:**
- Fresh cow dung: 7 kg
- Cow ghee: 1 kg
- Fresh cow urine: 10 liters
- Fresh cow milk: 3 liters
- Fresh cow curd: 2 liters
- Tender coconut water: 3 liters
- Ripe bananas: 12 mashed
- Sugarcane jaggery: 3 kg dissolved in 3 liters water

**Application:**
- **Foliar Spray:** 300 ml Panchagavya in 10 liters of water (3% solution). Spray early morning or after 4 PM.
- **Schedule:** Pre-flowering, flowering, and pod/fruit development stages.
- **Benefits:** Natural plant growth hormones (auxins, gibberellins), strengthens plant immune resistance against viral and fungal attacks.`;
  }

  if (q.includes('leaf curl') || q.includes('curling') || q.includes('chilli')) {
    return `### Organic Treatment for Leaf Curl
Leaf curl in crops like Chilli, Tomato, and Papaya is primarily transmitted by sucking pests: **Whiteflies, Thrips, and Mites**.

**Immediate Organic Action Plan:**
1. **Yellow & Blue Sticky Traps:** Install 8-10 yellow traps (for whiteflies) and 6 blue traps (for thrips) per acre at crop canopy height.
2. **Neem Oil / NSKE Spray:**
   - Spray 5 ml pure Neem Oil (10,000 ppm) + 2 ml mild liquid soap in 1 liter warm water.
   - Alternatively, spray 5% Neem Seed Kernel Extract (NSKE) every 7 days.
3. **Agniastra or Garlic-Chili Extract:**
   - Boil 500g crushed garlic, 500g hot green chilies, and 1 kg neem leaves in 5L cow urine. Dilute 250ml in 15L water.
   - Spray directly on the undersides of leaves where pests shelter.
4. **Sour Buttermilk (Khatti Chaas):**
   - Spray 500 ml 4-day fermented buttermilk in 15L water to boost immunity and repel viruses.`;
  }

  if (q.includes('weed') || q.includes('herbicide') || q.includes('grass')) {
    return `### Natural & Organic Weed Management
1. **Stale Seedbed Preparation:** Irrigate your field 10-14 days before actual sowing. Allow dormant weed seeds to germinate, then run a light shallow cultivator or blade harrow in hot sunlight. This eliminates up to 80% of weed pressure.
2. **Organic Straw / Biomass Mulching:** Spread a 3-4 inch layer of dry paddy straw, sugarcane bagasse, or leaf mulch between crop rows. Mulch blocks sunlight, conserves 40% soil moisture, and suppresses weed sprouts.
3. **Vinegar Contact Burndown (For Field Bunds & Pathways):**
   - Mix 1 liter Horticultural Vinegar (10-20% acetic acid) + 2 tablespoons salt + 1 teaspoon liquid soap.
   - Spray strictly on border weeds during midday bright sun. *Caution: Keep away from crop foliage.*
4. **Smother Cover Crops:** Intercrop fast-growing legumes like Cowpea (Lobia) or Sunnhemp in between wide rows. They cover the ground before weeds can take over.`;
  }

  if (q.includes('fertilizer') || q.includes('nutrient') || q.includes('growth')) {
    return `### Complete Organic Nutrient Regimen
**1. Basal Soil Conditioning (Before Sowing):**
- Well-decomposed Farm Yard Manure (FYM) or Vermicompost: 2 to 3 tons per acre.
- Castor cake or Neem cake: 150 kg/acre (acts as slow-release nitrogen and deters soil nematodes and white grubs).

**2. Seed / Root Inoculation:**
- Treat seeds with *Rhizobium* (for legumes) or *Azotobacter* / *Azospirillum* (for cereals and vegetables) @ 250g per 10kg seeds with jaggery water.

**3. Growth Stage Boost:**
- Apply 200 liters Jeevamrutha through irrigation every 15-20 days.
- Foliar spray of Vermiwash or 3% Panchagavya at 30 days and 55 days after sowing.

**4. Flowering & Fruiting (Potassium & Micronutrients):**
- Fermented Fruit Juice (Banana peels + papaya + jaggery fermented for 10 days) diluted @ 5ml/liter, or wood ash water extract to stimulate sturdy flowering and sweet, heavy produce.`;
  }

  // General helpful response
  return `### Smart Farming Advisory for ${cropContext || 'Your Farm'}
**Key Agronomic Best Practices:**
1. **Soil Health First:** Add 2 tons of well-rotted compost per acre before planting. Incorporate neem cake (100 kg/acre) to suppress soil-borne pathogens.
2. **Seed Priming:** Soak seeds in a mixture of cow urine and water (1:10) for 20 minutes before sowing to improve germination rate and seedling vigor.
3. **Pest Monitoring:** Inspect the underside of leaves twice weekly. Spray Neem Seed Kernel Extract (5%) at the first sign of pests before infestations spread.
4. **Irrigation Discipline:** Water during the cool hours of early morning or late afternoon. Drip irrigation reduces water usage by 40-60% while discouraging fungal foliage diseases.
5. **Crop Rotation:** Never plant members of the same botanical family (e.g., Tomato after Brinjal/Potato) consecutively in the same patch to avoid nematode and fungal buildup.`;
}

// AI Advisor chat endpoint
app.post('/api/advisor/chat', async (req, res) => {
  try {
    const { prompt, cropContext, farmContext } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Valid prompt string is required' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Return curated agronomist response gracefully
      const fallbackAnswer = getCuratedAgronomistAnswer(prompt, cropContext);
      res.json({
        answer: fallbackAnswer,
        source: 'curated_agronomist_knowledgebase',
        note: 'Generated by Smart Farming Advisor agronomist knowledge engine.'
      });
      return;
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      const systemInstruction = `You are a warm, highly experienced, empathetic Senior Organic Agronomist and Agricultural Extension Specialist for "Smart Farming Advisor".
Your mission is to provide farmers with practical, safe, low-cost, and organic/natural farming techniques that maximize soil fertility, protect crops, and improve yields.

Context provided by the farmer:
- Selected Crop: ${cropContext || 'General Crops'}
- Farm Details: ${farmContext ? JSON.stringify(farmContext) : 'Standard Smallholder Farm'}

Guidelines for your response:
1. Use simple, direct, farmer-friendly language. Avoid academic jargon.
2. Prioritize organic/natural remedies: Jeevamrutha, Panchagavya, Neem oil/NSKE, Dashaparni, Trichoderma, cow urine preparations, mulching, companion planting, and crop rotation.
3. Provide exact, measurable recipes (e.g. "Mix 5ml neem oil with 1 liter water", "Apply 200L Jeevamrutha per acre").
4. Include application timings (e.g. "Spray in the evening after 4:30 PM to avoid sun burn and protect bees").
5. Format with clear Markdown headings, concise bullet points, and safety cautions. Keep it practical and easy to read on a mobile phone in the field.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.3,
        }
      });

      const text = response.text || '';
      if (!text.trim()) {
        const fallback = getCuratedAgronomistAnswer(prompt, cropContext);
        res.json({ answer: fallback, source: 'curated_fallback' });
        return;
      }

      res.json({
        answer: text,
        source: 'gemini_smart_agronomist'
      });
    } catch (aiError: any) {
      console.warn('Gemini API call notice:', aiError?.message || aiError);
      const fallback = getCuratedAgronomistAnswer(prompt, cropContext);
      res.json({
        answer: fallback,
        source: 'curated_fallback_after_error'
      });
    }
  } catch (err: any) {
    console.error('Advisor endpoint error:', err);
    res.status(500).json({ error: 'Internal server error while processing farming advice' });
  }
});

// Setup Vite or static serving
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Smart Farming Advisor running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
