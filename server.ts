import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// API endpoint for TV advisory
app.post('/api/tv-advisor', async (req: Request, res: Response) => {
  try {
    const { budget, distance, usage, roomBrightness, notes, currentCatalog } = req.body;

    if (!ai) {
      return res.status(200).json({
        success: false,
        fallback: true,
        message: 'Chiave API non configurata per la modalità remota. Il sistema userà il consulente esperto deterministico integrato.',
      });
    }

    const systemInstruction = `Sei il massimo esperto e consulente di acquisto per televisori (mercato italiano ed europeo), specializzato su modelli tra 48 e 70 pollici.
Il tuo compito è aiutare l'utente a scegliere il miglior televisore in base al suo budget preciso, distanza di visione, illuminazione della stanza e abitudini (gaming PS5/Xbox, cinema buio, sport, streaming, uso familiare).

Regole:
1. Sii estremamente concreto, pratico e onesto sui pro e contro (luminosità, nits, gestione riflessi, burn-in su OLED se uso statico, blooming su Mini-LED/LED, porte HDMI 2.1).
2. Fornisci un consiglio strutturato in JSON con:
   - "recommendedModel": nome del modello vincitore
   - "screenSize": pollici consigliati (es. "55 pollici" o "65 pollici") in base alla distanza
   - "estimatedPrice": prezzo stimato in euro
   - "whyThisModel": spiegazione dettagliata del perché è la scelta vincente per il suo budget (2-3 frasi)
   - "alternativeSavings": alternativa più economica se vuole risparmiare
   - "alternativeUpgrade": cosa otterrebbe spendendo poco di più (+150/300€)
   - "keyAdvice": un consiglio tecnico importante per l'installazione o impostazione d'immagine
   - "pros": lista di 3 punti di forza principali
   - "cons": 1-2 compromessi onesti da tenere a mente
Rispondi esclusivamente in formato JSON valido conforme alla struttura.`;

    const userPrompt = `Dati dell'utente per l'acquisto TV:
- Budget massimo: ${budget ? budget + ' €' : 'Non specificato'}
- Distanza di visione: ${distance ? distance + ' metri' : 'Non specificata'}
- Utilizzo principale: ${usage || 'Misto / Serie TV e Cinema'}
- Illuminazione stanza: ${roomBrightness || 'Normale / Variabile'}
- Richieste extra: ${notes || 'Nessuna nota aggiuntiva'}

Catalog reference models note: ${currentCatalog ? JSON.stringify(currentCatalog).slice(0, 800) : ''}

Fornisci la tua consulenza professionale e personalizzata.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.3,
      },
    });

    const text = response.text || '{}';
    let parsedData = {};
    try {
      parsedData = JSON.parse(text);
    } catch {
      parsedData = { rawText: text };
    }

    return res.status(200).json({
      success: true,
      data: parsedData,
    });
  } catch (error: any) {
    console.error('Error generating TV advice:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Errore nella generazione del consiglio',
    });
  }
});

// Vite or Static handling
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
