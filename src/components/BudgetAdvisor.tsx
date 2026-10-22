import React, { useState } from 'react';
import { TVModel, PrimaryUsage, AdvisorRecommendation } from '../types/tv';
import { TV_CATALOG, getDeterministicAdvice, calculateDistanceRecommendation } from '../data/tvCatalog';
import { Sparkles, ArrowRight, Check, AlertCircle, Sliders, Monitor, Film, Gamepad2, Sun, Trophy, Lightbulb } from 'lucide-react';

interface BudgetAdvisorProps {
  onSelectTV: (tv: TVModel) => void;
  onAddToCompare: (tv: TVModel) => void;
  comparedIds: string[];
}

export const BudgetAdvisor: React.FC<BudgetAdvisorProps> = ({
  onSelectTV,
  onAddToCompare,
  comparedIds,
}) => {
  const [budget, setBudget] = useState<number>(850);
  const [distance, setDistance] = useState<number>(2.4);
  const [usage, setUsage] = useState<PrimaryUsage>('cinema');
  const [roomLight, setRoomLight] = useState<'dark' | 'moderate' | 'bright'>('dark');
  const [customNotes, setCustomNotes] = useState<string>('');

  // AI State
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<AdvisorRecommendation | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  // Instant deterministic calculation
  const deterministicRec = getDeterministicAdvice(budget, usage, distance);
  const distanceInfo = calculateDistanceRecommendation(distance);

  const budgetPresets = [
    { label: '< 450 €', value: 420 },
    { label: '650 €', value: 650 },
    { label: '850 €', value: 850 },
    { label: '1.100 €', value: 1100 },
    { label: '1.400 €', value: 1400 },
    { label: '1.800 €+', value: 1800 },
  ];

  const handleAskGemini = async () => {
    setAiLoading(true);
    setAiError(null);

    try {
      const payload = {
        budget,
        distance,
        usage:
          usage === 'cinema'
            ? 'Cinema e Serie TV in stanza buia / notturna (massimo contrasto e neri)'
            : usage === 'gaming'
            ? 'Gaming competitivo e console Next-Gen PS5/Xbox Series X (120Hz/144Hz, HDMI 2.1, VRR)'
            : usage === 'brightRoom'
            ? 'Salotto molto luminoso con finestre e luce solare diurna (alta luminosità e trattamento antiriflesso)'
            : usage === 'sports'
            ? 'Sport, calcio e trasmissioni veloci (elaborazione del movimento e upscaling)'
            : 'Uso misto a 360° per tutta la famiglia',
        roomBrightness:
          roomLight === 'dark'
            ? 'Stanza buia o con illuminazione soffusa serale'
            : roomLight === 'moderate'
            ? 'Stanza con illuminazione standard / lampade'
            : 'Stanza molto illuminata, esposta al sole con finestre ampie',
        notes: customNotes,
        currentCatalog: TV_CATALOG.map((t) => ({
          name: t.name,
          brand: t.brand,
          tech: t.panelTech,
          sizes: t.sizes,
          prices: t.prices,
          peakBrightness: t.peakBrightnessNits,
          hdmi21: t.hdmi21Ports,
        })),
      };

      const res = await fetch('/api/tv-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success && data.data && data.data.recommendedModel) {
        setAiResult(data.data as AdvisorRecommendation);
      } else {
        // Fallback gracefully
        const rec = deterministicRec;
        setAiResult({
          recommendedModel: rec.winner.name,
          screenSize: `${rec.winnerSize} pollici`,
          estimatedPrice: `${rec.winner.prices[rec.winnerSize]} €`,
          whyThisModel: rec.reason,
          alternativeSavings: rec.savingsAlternative
            ? `${rec.savingsAlternative.model.name} (${rec.savingsAlternative.size}") a ${rec.savingsAlternative.model.prices[rec.savingsAlternative.size]} €`
            : undefined,
          alternativeUpgrade: rec.upgradeAlternative
            ? `${rec.upgradeAlternative.model.name} (${rec.upgradeAlternative.size}") a ${rec.upgradeAlternative.model.prices[rec.upgradeAlternative.size]} €`
            : undefined,
          keyAdvice:
            rec.winner.panelTech === 'OLED' || rec.winner.panelTech === 'QD-OLED'
              ? 'Imposta la modalità immagine Filmmaker Mode o Esperto Notte e disattiva i sensori di risparmio energetico per sbloccare la piena luminosità HDR.'
              : 'Attiva il local dimming su Alto per massimizzare la profondità del nero e ridurre il blooming.',
          pros: rec.winner.pros,
          cons: rec.winner.cons,
        });
      }
    } catch {
      // Deterministic fallback
      const rec = deterministicRec;
      setAiResult({
        recommendedModel: rec.winner.name,
        screenSize: `${rec.winnerSize} pollici`,
        estimatedPrice: `${rec.winner.prices[rec.winnerSize]} €`,
        whyThisModel: rec.reason,
        keyAdvice:
          'Calibra la distanza del divano ad almeno 2 metri per apprezzare tutti i dettagli 4K senza affaticamento visivo.',
        pros: rec.winner.pros,
        cons: rec.winner.cons,
      });
    } finally {
      setAiLoading(false);
    }
  };

  const currentWinner = deterministicRec.winner;
  const currentWinnerSize = deterministicRec.winnerSize;
  const currentWinnerPrice = currentWinner.prices[currentWinnerSize] || currentWinner.startingPrice;

  return (
    <section id="budget-advisor" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
          <span>01. Guida Intelligente</span>
          <span aria-hidden="true">·</span>
          <span>Configurazione su Misura</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Consulente di Scelta per Budget
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Imposta il tuo tetto di spesa e la distanza dal divano: il nostro motore analizza in tempo reale le migliori TV tra 48" e 70" per darti il modello vincente senza spreco di denaro.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
          {/* Budget Input & Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Budget Massimo
              </label>
              <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                {budget.toLocaleString('it-IT')} €
              </div>
            </div>

            <input
              type="range"
              min="350"
              max="2400"
              step="50"
              value={budget}
              onChange={(e) => {
                setBudget(Number(e.target.value));
                setAiResult(null);
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />

            {/* Quick Presets */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mt-3">
              {budgetPresets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setBudget(preset.value);
                    setAiResult(null);
                  }}
                  className={`py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    budget === preset.value
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Viewing Distance */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Distanza di Visione dal Divano
              </label>
              <div className="text-lg font-bold font-mono text-slate-200 tabular-nums">
                {distance.toFixed(1)} metri
              </div>
            </div>

            <input
              type="range"
              min="1.4"
              max="3.8"
              step="0.1"
              value={distance}
              onChange={(e) => {
                setDistance(Number(e.target.value));
                setAiResult(null);
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />

            <div className="mt-2 text-xs text-slate-400 flex items-center justify-between">
              <span>Taglia raccomandata: <strong className="text-amber-400 font-semibold">{distanceInfo.idealInches}"</strong></span>
              <span className="text-slate-500">Angolo: {distanceInfo.cinemaAngle}</span>
            </div>
          </div>

          {/* Primary Usage */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-slate-300 mb-2">
              Cosa guardi o fai principalmente?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setUsage('cinema');
                  setAiResult(null);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  usage === 'cinema'
                    ? 'bg-amber-400/10 border-amber-400 text-white'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 font-medium text-xs sm:text-sm">
                  <Film className="w-4 h-4 text-amber-400" />
                  Cinema & Serie TV
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Neri assoluti, contrasto e fedeltà da regista
                </p>
              </button>

              <button
                onClick={() => {
                  setUsage('gaming');
                  setAiResult(null);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  usage === 'gaming'
                    ? 'bg-amber-400/10 border-amber-400 text-white'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 font-medium text-xs sm:text-sm">
                  <Gamepad2 className="w-4 h-4 text-amber-400" />
                  Gaming PS5 / Xbox / PC
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  120/144Hz, HDMI 2.1, VRR e basso input lag
                </p>
              </button>

              <button
                onClick={() => {
                  setUsage('brightRoom');
                  setAiResult(null);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  usage === 'brightRoom'
                    ? 'bg-amber-400/10 border-amber-400 text-white'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 font-medium text-xs sm:text-sm">
                  <Sun className="w-4 h-4 text-amber-400" />
                  Stanza Molto Luminosa
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Luminosità fino a 3000 nits e antiriflesso
                </p>
              </button>

              <button
                onClick={() => {
                  setUsage('sports');
                  setAiResult(null);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  usage === 'sports'
                    ? 'bg-amber-400/10 border-amber-400 text-white'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 font-medium text-xs sm:text-sm">
                  <Monitor className="w-4 h-4 text-amber-400" />
                  Sport & Uso Misto
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Movimento fluido, upscaling canali e facilità
                </p>
              </button>
            </div>
          </div>

          {/* Room Lighting */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-slate-300 mb-2">
              Luce Ambiente Prevalente
            </label>
            <div className="flex items-center gap-2 p-1 bg-slate-950/60 rounded-xl border border-slate-800">
              <button
                onClick={() => {
                  setRoomLight('dark');
                  setAiResult(null);
                }}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  roomLight === 'dark'
                    ? 'bg-slate-800 text-amber-400 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Buia / Notte
              </button>
              <button
                onClick={() => {
                  setRoomLight('moderate');
                  setAiResult(null);
                }}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  roomLight === 'moderate'
                    ? 'bg-slate-800 text-amber-400 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Moderata
              </button>
              <button
                onClick={() => {
                  setRoomLight('bright');
                  setAiResult(null);
                }}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  roomLight === 'bright'
                    ? 'bg-slate-800 text-amber-400 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Molto Luminosa
              </button>
            </div>
          </div>

          {/* Optional Natural Language Context */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-slate-300 mb-1.5">
              Hai esigenze particolari? (Opzionale)
            </label>
            <textarea
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="Es: Ho una soundbar Sonos e collegherò sia la PS5 che la Nintendo Switch..."
              rows={2}
              className="w-full text-xs p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Ask Gemini Button */}
          <button
            onClick={handleAskGemini}
            disabled={aiLoading}
            className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-400/20 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            {aiLoading ? 'Generazione Analisi Esperta in corso...' : 'Genera Analisi con Consulente AI'}
          </button>
        </div>

        {/* Results Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Winner Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-400/50 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl">
            {/* Top Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-amber-400 text-slate-950">
                  <Trophy className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Scelta Migliore per {budget} € · {currentWinnerSize} Pollici
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Punteggio Globale: <strong className="text-white">{currentWinner.overallScore}/10</strong>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {currentWinner.brand} · {currentWinner.panelTech}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                  {currentWinner.name} ({currentWinnerSize}")
                </h3>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-bold font-mono text-amber-400 tabular-nums">
                  {currentWinnerPrice} €
                </div>
                <span className="text-xs text-slate-400">
                  Prezzo medio di listino
                </span>
              </div>
            </div>

            {/* Why This Model */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-5">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide block mb-1">
                Perché è la scelta vincente:
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {aiResult ? aiResult.whyThisModel : deterministicRec.reason}
              </p>
            </div>

            {/* Key Specs Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
              <div className="p-2.5 rounded-lg bg-slate-800/50 text-center">
                <span className="block text-[11px] text-slate-400">Pannello</span>
                <span className="text-xs font-semibold text-white">{currentWinner.panelTech}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/50 text-center">
                <span className="block text-[11px] text-slate-400">Frequenza</span>
                <span className="text-xs font-semibold text-white">{currentWinner.refreshRate} Hz</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/50 text-center">
                <span className="block text-[11px] text-slate-400">Luminosità</span>
                <span className="text-xs font-semibold text-amber-400 tabular-nums">{currentWinner.peakBrightnessNits} nits</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/50 text-center">
                <span className="block text-[11px] text-slate-400">Porte HDMI 2.1</span>
                <span className="text-xs font-semibold text-white">{currentWinner.hdmi21Ports > 0 ? `${currentWinner.hdmi21Ports}x 48Gbps` : 'HDMI 2.0'}</span>
              </div>
            </div>

            {/* Pros List */}
            <div className="mb-6 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 block mb-1">
                Caratteristiche Chiave:
              </span>
              {(aiResult ? aiResult.pros : currentWinner.pros).map((pro, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => onSelectTV(currentWinner)}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors text-center whitespace-nowrap"
              >
                Vedi Scheda Completa & Specifiche
              </button>
              <button
                onClick={() => onAddToCompare(currentWinner)}
                className={`py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${
                  comparedIds.includes(currentWinner.id)
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                {comparedIds.includes(currentWinner.id) ? 'Nel Confronto ✓' : '+ Aggiungi a Confronto'}
              </button>
            </div>
          </div>

          {/* Alternatives Grid (Savings & Upgrade) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Savings Alternative */}
            {deterministicRec.savingsAlternative && (
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="text-emerald-400 font-semibold uppercase tracking-wide flex items-center gap-1">
                      Alternativa Risparmio
                    </span>
                    <span className="font-mono tabular-nums text-white font-semibold">
                      {deterministicRec.savingsAlternative.model.prices[deterministicRec.savingsAlternative.size]} €
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {deterministicRec.savingsAlternative.model.name} ({deterministicRec.savingsAlternative.size}")
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {deterministicRec.savingsAlternative.model.bestFor}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs text-emerald-400">
                    Risparmi ~{currentWinnerPrice - deterministicRec.savingsAlternative.model.prices[deterministicRec.savingsAlternative.size]} €
                  </span>
                  <button
                    onClick={() => onSelectTV(deterministicRec.savingsAlternative!.model)}
                    className="text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1"
                  >
                    Dettagli <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Upgrade Alternative */}
            {deterministicRec.upgradeAlternative && (
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="text-purple-400 font-semibold uppercase tracking-wide flex items-center gap-1">
                      Passo Avanti (+150-300€)
                    </span>
                    <span className="font-mono tabular-nums text-white font-semibold">
                      {deterministicRec.upgradeAlternative.model.prices[deterministicRec.upgradeAlternative.size]} €
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {deterministicRec.upgradeAlternative.model.name} ({deterministicRec.upgradeAlternative.size}")
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {deterministicRec.upgradeAlternative.model.bestFor}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs text-purple-400">
                    Tecnologia {deterministicRec.upgradeAlternative.model.panelTech}
                  </span>
                  <button
                    onClick={() => onSelectTV(deterministicRec.upgradeAlternative!.model)}
                    className="text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1"
                  >
                    Dettagli <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Key Advice Box */}
          {aiResult?.keyAdvice && (
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wide text-amber-400 mb-1">
                  Consiglio Tecnico dell'Esperto
                </h5>
                <p className="text-xs sm:text-sm text-slate-300">
                  {aiResult.keyAdvice}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
