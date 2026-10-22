import React, { useState } from 'react';
import { calculateDistanceRecommendation } from '../data/tvCatalog';
import { Eye, Ruler, Tv, Maximize2, ShieldCheck, Info } from 'lucide-react';

interface DistanceCalculatorProps {
  onFilterBySize: (size: number) => void;
}

export const DistanceCalculator: React.FC<DistanceCalculatorProps> = ({ onFilterBySize }) => {
  const [distance, setDistance] = useState<number>(2.4);

  const recommendation = calculateDistanceRecommendation(distance);

  const sizeDimensions = [
    { size: 48, widthCm: 106, heightCm: 60, minMeters: 1.5, maxMeters: 2.0 },
    { size: 50, widthCm: 111, heightCm: 62, minMeters: 1.7, maxMeters: 2.2 },
    { size: 55, widthCm: 122, heightCm: 69, minMeters: 2.0, maxMeters: 2.6 },
    { size: 65, widthCm: 144, heightCm: 81, minMeters: 2.4, maxMeters: 3.2 },
    { size: 70, widthCm: 155, heightCm: 87, minMeters: 2.8, maxMeters: 3.8 },
  ];

  return (
    <section id="distance-calculator" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
          <span>04. Ergonomia & Dimensioni</span>
          <span aria-hidden="true">·</span>
          <span>Standard SMPTE & THX 4K</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          Calcolatore di Distanza & Pollici Ideali
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Molti acquistano un televisore troppo piccolo per timore di affaticare la vista. Con i pannelli 4K Ultra HD la griglia dei pixel è invisibile: scopri la taglia ideale per godere del massimo coinvolgimento visivo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Slider & Math Controls */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Distanza Occhi - Schermo
              </span>
              <span className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                {distance.toFixed(1)} metri
              </span>
            </div>

            <input
              type="range"
              min="1.3"
              max="4.0"
              step="0.1"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />

            <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
              <span>1.3m (Piccolo spazio)</span>
              <span>2.4m (Standard)</span>
              <span>4.0m (Ampio salone)</span>
            </div>
          </div>

          {/* Verdict Box */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wide">
                Taglia Consigliata per {distance.toFixed(1)} m
              </span>
              <span className="text-xs text-amber-400 font-mono font-semibold">
                {recommendation.cinemaAngle}
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight mb-2">
              {recommendation.idealInches}" Pollici
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {recommendation.fieldOfViewSummary}
            </p>

            <button
              onClick={() => onFilterBySize(recommendation.idealInches)}
              className="w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors text-center"
            >
              Filtra TV da {recommendation.idealInches}" nel Catalogo
            </button>
          </div>

          {/* Golden Rules */}
          <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Altezza da terra:</strong> il centro dello schermo deve trovarsi all'altezza dei tuoi occhi da seduto (solitamente tra 100 cm e 105 cm dal pavimento).
              </span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Nessun affaticamento:</strong> in 4K l'angolo di visione consigliato da THX è di 40°, regalando l'immersione del cinema senza mal di testa.
              </span>
            </div>
          </div>
        </div>

        {/* Visual Comparison of Sizes (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
            <Maximize2 className="w-4 h-4 text-amber-400" />
            Dimensioni Fisiche a Confronto (Ingombro Reale)
          </h4>

          <div className="space-y-4">
            {sizeDimensions.map((item) => {
              const isRecommended = item.size === recommendation.idealInches;

              return (
                <div
                  key={item.size}
                  className={`p-4 rounded-xl border transition-all ${
                    isRecommended
                      ? 'bg-amber-400/10 border-amber-400/80'
                      : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold font-mono text-white">
                        {item.size}"
                      </span>
                      {isRecommended && (
                        <span className="text-xs font-bold uppercase tracking-wide text-amber-400">
                          · Consigliato per te
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      Largh: <strong className="text-slate-200">{item.widthCm} cm</strong> · Alt: <strong className="text-slate-200">{item.heightCm} cm</strong>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>
                      Distanza ottimale: <span className="text-slate-300 font-medium">{item.minMeters}m – {item.maxMeters}m</span>
                    </span>
                    <button
                      onClick={() => onFilterBySize(item.size)}
                      className="text-xs text-amber-400 hover:underline font-semibold"
                    >
                      Mostra TV {item.size}" &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
