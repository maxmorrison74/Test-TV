import React, { useState } from 'react';
import { TVModel } from '../types/tv';
import { Check, X, ShieldAlert, Sparkles, ExternalLink, Zap, Monitor, Volume2, Gamepad2, Film } from 'lucide-react';

interface TVDetailModalProps {
  tv: TVModel | null;
  onClose: () => void;
  onAddToCompare: (tv: TVModel) => void;
  isCompared: boolean;
}

export const TVDetailModal: React.FC<TVDetailModalProps> = ({
  tv,
  onClose,
  onAddToCompare,
  isCompared,
}) => {
  if (!tv) return null;

  const [selectedSize, setSelectedSize] = useState<number>(tv.sizes[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Chiudi finestra"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Zone */}
        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
            {tv.brand} · {tv.panelTech}
          </span>
          {tv.badge && (
            <span className="text-xs text-slate-400">
              · {tv.badge}
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          {tv.name}
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {tv.description}
        </p>

        {/* Size & Price Selector */}
        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 mb-6">
          <span className="block text-xs uppercase tracking-wide text-slate-400 mb-3 font-medium">
            Seleziona dimensione e visualizza prezzo stimato
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {tv.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedSize === size
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {size} Pollici — <span className="tabular-nums font-mono">{tv.prices[size]} €</span>
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/50 pt-2">
            <span>Prezzo medio di mercato aggiornato</span>
            <span className="font-semibold text-slate-200">
              Prezzo per {selectedSize}": <span className="text-amber-400 tabular-nums text-sm">{tv.prices[selectedSize]} €</span>
            </span>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
            <h4 className="text-sm font-semibold text-emerald-400 flex items-center gap-2 mb-3">
              <Check className="w-4 h-4 text-emerald-400" />
              Punti di Forza
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {tv.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40">
            <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-2 mb-3">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              Da Tenere a Mente
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {tv.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">!</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Performance Scores Matrix */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
            Punteggi per Scenario di Utilizzo (su 10)
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="p-3 bg-slate-800/40 border border-slate-800 rounded-lg text-center">
              <div className="text-slate-400 text-xs mb-1 flex items-center justify-center gap-1">
                <Film className="w-3.5 h-3.5" /> Cinema Buio
              </div>
              <div className="text-lg font-bold text-white tabular-nums">
                {tv.scores.cinema}
              </div>
            </div>
            <div className="p-3 bg-slate-800/40 border border-slate-800 rounded-lg text-center">
              <div className="text-slate-400 text-xs mb-1 flex items-center justify-center gap-1">
                <Gamepad2 className="w-3.5 h-3.5" /> Gaming
              </div>
              <div className="text-lg font-bold text-white tabular-nums">
                {tv.scores.gaming}
              </div>
            </div>
            <div className="p-3 bg-slate-800/40 border border-slate-800 rounded-lg text-center">
              <div className="text-slate-400 text-xs mb-1 flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Luce Diurna
              </div>
              <div className="text-lg font-bold text-white tabular-nums">
                {tv.scores.brightRoom}
              </div>
            </div>
            <div className="p-3 bg-slate-800/40 border border-slate-800 rounded-lg text-center">
              <div className="text-slate-400 text-xs mb-1 flex items-center justify-center gap-1">
                <Monitor className="w-3.5 h-3.5" /> Sport
              </div>
              <div className="text-lg font-bold text-white tabular-nums">
                {tv.scores.sports}
              </div>
            </div>
            <div className="p-3 bg-slate-800/40 border border-slate-800 rounded-lg text-center">
              <div className="text-slate-400 text-xs mb-1 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Valore Q/P
              </div>
              <div className="text-lg font-bold text-amber-400 tabular-nums">
                {tv.scores.valueForMoney}
              </div>
            </div>
          </div>
        </div>

        {/* Deep Tech Specs Table */}
        <div className="border border-slate-800 rounded-xl overflow-hidden mb-6">
          <table className="w-full text-left text-xs sm:text-sm">
            <tbody className="divide-y divide-slate-800">
              <tr className="bg-slate-800/30">
                <td className="p-3 text-slate-400 font-medium w-1/3">Pannello & Frequenza</td>
                <td className="p-3 text-slate-200">
                  {tv.panelTech} · {tv.refreshRate} Hz nativi
                </td>
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-medium">Luminosità di Picco HDR</td>
                <td className="p-3 text-slate-200">
                  <span className="font-semibold text-amber-400 tabular-nums">{tv.peakBrightnessNits} nits</span>
                </td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="p-3 text-slate-400 font-medium">Contrasto & Zone</td>
                <td className="p-3 text-slate-200">
                  {tv.contrast} · {tv.dimmingZones}
                </td>
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-medium">Porte HDMI 2.1 (48Gbps)</td>
                <td className="p-3 text-slate-200">
                  {tv.hdmi21Ports > 0 ? `${tv.hdmi21Ports} porte HDMI 2.1 (4K 120/144Hz, eARC)` : 'Porte HDMI 2.0 (4K 60Hz)'}
                </td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="p-3 text-slate-400 font-medium">Gaming & Input Lag</td>
                <td className="p-3 text-slate-200">
                  {tv.gamingFeatures.join(', ')} · Input Lag: <span className="tabular-nums font-mono">{tv.inputLagMs} ms</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-medium">Formati HDR Supportati</td>
                <td className="p-3 text-slate-200">
                  {tv.hdrFormats.join(' · ')}
                </td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="p-3 text-slate-400 font-medium">Audio Integrato</td>
                <td className="p-3 text-slate-200">
                  {tv.soundSystem}
                </td>
              </tr>
              <tr>
                <td className="p-3 text-slate-400 font-medium">Sistema Operativo Smart TV</td>
                <td className="p-3 text-slate-200">
                  {tv.smartOS}
                </td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="p-3 text-slate-400 font-medium">Supporto VESA & Classe Energetica</td>
                <td className="p-3 text-slate-200">
                  Attacco {tv.vesaMount} · Classe {tv.energyClass}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <button
            onClick={() => onAddToCompare(tv)}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${
              isCompared
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            {isCompared ? 'Rimuovi dal Confronto' : '+ Aggiungi al Confronto'}
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors whitespace-nowrap"
          >
            Chiudi Scheda
          </button>
        </div>
      </div>
    </div>
  );
};
