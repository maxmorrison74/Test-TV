import React, { useState } from 'react';
import { TVModel } from '../types/tv';
import { TV_CATALOG } from '../data/tvCatalog';
import { X, Plus, Check, SlidersHorizontal, ArrowUpDown, Sparkles, Monitor, Gamepad2, Film, Zap } from 'lucide-react';

interface ComparisonMatrixProps {
  selectedTVs: TVModel[];
  onRemoveTV: (id: string) => void;
  onAddTV: (tv: TVModel) => void;
  onOpenDetails: (tv: TVModel) => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  selectedTVs,
  onRemoveTV,
  onAddTV,
  onOpenDetails,
}) => {
  const [highlightDiffs, setHighlightDiffs] = useState<boolean>(true);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>({});
  const [selectorOpenIndex, setSelectorOpenIndex] = useState<number | null>(null);

  // Helper to get active size for a TV
  const getSize = (tv: TVModel) => {
    return selectedSizes[tv.id] || (tv.sizes.includes(55) ? 55 : tv.sizes[0]);
  };

  const setSize = (tvId: string, size: number) => {
    setSelectedSizes((prev) => ({ ...prev, [tvId]: size }));
  };

  const isDifferent = (getter: (tv: TVModel) => any) => {
    if (selectedTVs.length < 2) return false;
    const firstVal = JSON.stringify(getter(selectedTVs[0]));
    return selectedTVs.some((tv) => JSON.stringify(getter(tv)) !== firstVal);
  };

  const availableToAdd = TV_CATALOG.filter((tv) => !selectedTVs.some((s) => s.id === tv.id));

  return (
    <section id="comparison-matrix" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
            <span>02. Analisi Tecnica Affiancata</span>
            <span aria-hidden="true">·</span>
            <span>Fino a 4 Modelli</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Matrice di Confronto Diretto
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Confronta fianco a fianco le specifiche reali: luminosità di picco, nits, gestione delle zone, porte HDMI 2.1 e prezzi aggiornati per ciascuna taglia.
          </p>
        </div>

        {/* Toggle Diff */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setHighlightDiffs(!highlightDiffs)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-colors flex items-center gap-2 whitespace-nowrap ${
              highlightDiffs
                ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {highlightDiffs ? 'Evidenzia differenze: ATTIVO' : 'Evidenzia differenze: DISATTIVO'}
          </button>
        </div>
      </div>

      {/* When no TVs are selected */}
      {selectedTVs.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
          <Monitor className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">
            Nessun modello selezionato per il confronto
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
            Aggiungi fino a 4 televisori dal catalogo o seleziona un suggerimento rapido per iniziare il confronto.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TV_CATALOG.slice(0, 3).map((tv) => (
              <button
                key={tv.id}
                onClick={() => onAddTV(tv)}
                className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                + {tv.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* The Responsive Comparison Table */
        <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-slate-900/90 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[760px]">
            {/* Header: Product Cards Row */}
            <thead>
              <tr className="border-b border-slate-800 divide-x divide-slate-800 bg-slate-950/60">
                <th className="p-4 w-52 shrink-0 align-top text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Parametri Tecnici
                </th>
                {selectedTVs.map((tv) => {
                  const currentSize = getSize(tv);
                  const price = tv.prices[currentSize] || tv.startingPrice;

                  return (
                    <th key={tv.id} className="p-5 align-top min-w-[220px] max-w-[280px]">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                          {tv.brand} · {tv.panelTech}
                        </span>
                        <button
                          onClick={() => onRemoveTV(tv.id)}
                          className="p-1 rounded-md text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
                          title="Rimuovi dal confronto"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <h4 className="text-base font-bold text-white tracking-tight line-clamp-1 mb-2">
                        {tv.name}
                      </h4>

                      {/* Size Selector for this TV in Table */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <span className="text-xs text-slate-400">Taglia:</span>
                        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                          {tv.sizes.map((s) => (
                            <button
                              key={s}
                              onClick={() => setSize(tv.id, s)}
                              className={`px-2 py-0.5 text-xs font-medium rounded transition-colors ${
                                currentSize === s
                                  ? 'bg-amber-400 text-slate-950 font-bold'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {s}"
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                          {price} €
                        </div>
                        <span className="text-[11px] text-slate-500">
                          Stima per {currentSize} pollici
                        </span>
                      </div>

                      <button
                        onClick={() => onOpenDetails(tv)}
                        className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-center"
                      >
                        Scheda Completa
                      </button>
                    </th>
                  );
                })}

                {/* Add column slot if < 4 */}
                {selectedTVs.length < 4 && (
                  <th className="p-5 align-middle text-center min-w-[200px]">
                    <div className="p-6 border-2 border-dashed border-slate-800 rounded-xl text-center">
                      <Plus className="w-6 h-6 text-slate-500 mx-auto mb-2" />
                      <span className="block text-xs font-semibold text-slate-400 mb-3">
                        Aggiungi TV al confronto
                      </span>
                      <select
                        onChange={(e) => {
                          const found = TV_CATALOG.find((t) => t.id === e.target.value);
                          if (found) onAddTV(found);
                        }}
                        defaultValue=""
                        className="w-full text-xs p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                      >
                        <option value="" disabled>
                          Scegli modello...
                        </option>
                        {availableToAdd.map((tv) => (
                          <option key={tv.id} value={tv.id}>
                            {tv.name} ({tv.panelTech})
                          </option>
                        ))}
                      </select>
                    </div>
                  </th>
                )}
              </tr>
            </thead>

            {/* Spec Comparison Rows */}
            <tbody className="divide-y divide-slate-800 text-xs sm:text-sm">
              {/* Row: Panel Tech */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.panelTech) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Tecnologia Pannello</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-200 font-medium">
                    <span className="font-semibold text-amber-400">{tv.panelTech}</span>
                    <span className="block text-xs text-slate-400">{tv.contrast}</span>
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: Peak Brightness */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.peakBrightnessNits) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">
                  Luminosità di Picco HDR
                </td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-amber-400 tabular-nums">
                        {tv.peakBrightnessNits} nits
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {tv.peakBrightnessNits >= 2000
                          ? '(Accecante)'
                          : tv.peakBrightnessNits >= 1000
                          ? '(Molto Alta)'
                          : tv.peakBrightnessNits >= 700
                          ? '(Buona per OLED)'
                          : '(Base)'}
                      </span>
                    </div>
                    {/* Visual Brightness Bar */}
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-400 h-full rounded-full"
                        style={{ width: `${Math.min(100, (tv.peakBrightnessNits / 3000) * 100)}%` }}
                      />
                    </div>
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: Refresh Rate */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.refreshRate) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Frequenza di Aggiornamento</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-200 font-semibold font-mono tabular-nums">
                    {tv.refreshRate} Hz nativi
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: Dimming Zones */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.dimmingZones) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Controllo Zone Oscuramento</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-300">
                    {tv.dimmingZones}
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: HDMI 2.1 */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.hdmi21Ports) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Porte HDMI 2.1 (48Gbps)</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-200">
                    {tv.hdmi21Ports > 0 ? (
                      <span className="font-semibold text-emerald-400">
                        {tv.hdmi21Ports} porte HDMI 2.1
                      </span>
                    ) : (
                      <span className="text-slate-500">Solo HDMI 2.0 (4K 60Hz)</span>
                    )}
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: Gaming features & Input Lag */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.inputLagMs) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Gaming & Input Lag</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-300 text-xs">
                    <div className="font-mono font-semibold text-slate-200 mb-1">
                      Lag: {tv.inputLagMs} ms
                    </div>
                    <div className="text-slate-400">
                      {tv.gamingFeatures.slice(0, 3).join(', ')}
                    </div>
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: HDR Formats */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.hdrFormats.join(',')) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Formati HDR</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-300 text-xs">
                    <div className="space-y-0.5">
                      {tv.hdrFormats.map((f) => (
                        <span key={f} className="inline-block mr-1 text-slate-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: Smart OS */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.smartOS) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Sistema Smart TV</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-300 text-xs font-medium">
                    {tv.smartOS}
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: Audio */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.soundSystem) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Audio Integrato</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-300 text-xs">
                    {tv.soundSystem}
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: Room Suitability */}
              <tr className={`divide-x divide-slate-800 ${highlightDiffs && isDifferent((tv) => tv.roomLightSuitability) ? 'bg-amber-400/5' : ''}`}>
                <td className="p-3.5 font-semibold text-slate-400">Ambiente Ideale</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5 text-slate-200 text-xs font-semibold">
                    {tv.roomLightSuitability}
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>

              {/* Row: Overall Score */}
              <tr className="divide-x divide-slate-800 bg-slate-950/40">
                <td className="p-3.5 font-bold text-white">Punteggio Complessivo</td>
                {selectedTVs.map((tv) => (
                  <td key={tv.id} className="p-3.5">
                    <span className="text-xl font-bold font-mono text-amber-400 tabular-nums">
                      {tv.overallScore}
                    </span>
                    <span className="text-xs text-slate-400"> / 10</span>
                  </td>
                ))}
                {selectedTVs.length < 4 && <td className="p-3.5" />}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
