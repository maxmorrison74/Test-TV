import React, { useState, useMemo } from 'react';
import { TVModel, PanelTechnology, TVBrand } from '../types/tv';
import { TV_CATALOG } from '../data/tvCatalog';
import { Search, Filter, ArrowUpDown, Check, Plus, Eye, Zap, Gamepad2, ShieldCheck, Sparkles, LayoutGrid, List } from 'lucide-react';

interface CatalogGridProps {
  onSelectTV: (tv: TVModel) => void;
  onAddToCompare: (tv: TVModel) => void;
  comparedIds: string[];
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({
  onSelectTV,
  onAddToCompare,
  comparedIds,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<number | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<PanelTechnology | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState<TVBrand | 'all'>('all');
  const [budgetTier, setBudgetTier] = useState<'all' | 'under500' | '500-900' | '900-1400' | 'above1400'>('all');
  const [gamingOnly, setGamingOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'value' | 'priceAsc' | 'priceDesc' | 'score' | 'brightness'>('value');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredTVs = useMemo(() => {
    return TV_CATALOG.filter((tv) => {
      // Search term
      if (
        searchTerm &&
        !tv.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !tv.brand.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !tv.bestFor.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      // Size
      if (selectedSize !== 'all' && !tv.sizes.includes(selectedSize)) {
        return false;
      }

      // Tech
      if (selectedTech !== 'all' && tv.panelTech !== selectedTech) {
        return false;
      }

      // Brand
      if (selectedBrand !== 'all' && tv.brand !== selectedBrand) {
        return false;
      }

      // Gaming
      if (gamingOnly && (tv.refreshRate < 120 || tv.hdmi21Ports < 1)) {
        return false;
      }

      // Budget tier (calculated based on startingPrice or active size)
      const minPrice = tv.startingPrice;
      if (budgetTier === 'under500' && minPrice >= 500) return false;
      if (budgetTier === '500-900' && (minPrice < 500 || minPrice > 900)) return false;
      if (budgetTier === '900-1400' && (minPrice < 900 || minPrice > 1400)) return false;
      if (budgetTier === 'above1400' && minPrice <= 1400) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'value') return b.scores.valueForMoney - a.scores.valueForMoney;
      if (sortBy === 'priceAsc') return a.startingPrice - b.startingPrice;
      if (sortBy === 'priceDesc') return b.startingPrice - a.startingPrice;
      if (sortBy === 'score') return b.overallScore - a.overallScore;
      if (sortBy === 'brightness') return b.peakBrightnessNits - a.peakBrightnessNits;
      return 0;
    });
  }, [searchTerm, selectedSize, selectedTech, selectedBrand, budgetTier, gamingOnly, sortBy]);

  const sizesOptions = [48, 50, 55, 65, 70];
  const techOptions: PanelTechnology[] = ['OLED', 'QD-OLED', 'Mini-LED', 'QLED', 'LED'];
  const brandOptions: TVBrand[] = ['LG', 'Samsung', 'Sony', 'TCL', 'Hisense', 'Philips'];

  return (
    <section id="catalog-grid" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
          <span>03. Catalogo Completo</span>
          <span aria-hidden="true">·</span>
          <span>Modelli Testati da 48" a 70"</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Esplora Tutte le TV
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Filtra per tecnologia di pannello, budget e frequenza di aggiornamento. Seleziona i modelli per vederne la scheda dettagliata o aggiungerli al confronto diretto.
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                viewMode === 'grid' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" /> Griglia
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                viewMode === 'table' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" /> Elenco
            </button>
          </div>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 mb-8 space-y-4">
        {/* Search & Sort Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cerca per modello, marca (es. LG C4, Mini-LED, Samsung 55)..."
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="sm:col-span-4 relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-400 transition-colors appearance-none cursor-pointer"
            >
              <option value="value">Ordina: Miglior Rapporto Q/P</option>
              <option value="priceAsc">Prezzo: dal più basso al più alto</option>
              <option value="priceDesc">Prezzo: dal più alto al più basso</option>
              <option value="score">Punteggio Globale</option>
              <option value="brightness">Luminosità di Picco (Nits)</option>
            </select>
          </div>
        </div>

        {/* Quick Filter Bars */}
        <div className="pt-2 border-t border-slate-800 space-y-3">
          {/* Sizes */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 mr-2 shrink-0">
              Polliciaggio:
            </span>
            <button
              onClick={() => setSelectedSize('all')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedSize === 'all'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Tutti (48-70")
            </button>
            {sizesOptions.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedSize === s
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {s} Pollici
              </button>
            ))}
          </div>

          {/* Technology */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 mr-2 shrink-0">
              Pannello:
            </span>
            <button
              onClick={() => setSelectedTech('all')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedTech === 'all'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Tutte
            </button>
            {techOptions.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTech(t)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedTech === t
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Budget Tier & Gaming Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 mr-2 shrink-0">
                Budget:
              </span>
              <button
                onClick={() => setBudgetTier('all')}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  budgetTier === 'all' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Tutti i Budget
              </button>
              <button
                onClick={() => setBudgetTier('under500')}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  budgetTier === 'under500' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                &lt; 500 €
              </button>
              <button
                onClick={() => setBudgetTier('500-900')}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  budgetTier === '500-900' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                500 € - 900 €
              </button>
              <button
                onClick={() => setBudgetTier('900-1400')}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  budgetTier === '900-1400' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                900 € - 1.400 €
              </button>
              <button
                onClick={() => setBudgetTier('above1400')}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  budgetTier === 'above1400' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                &gt; 1.400 €
              </button>
            </div>

            {/* Gaming Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-300">
              <input
                type="checkbox"
                checked={gamingOnly}
                onChange={(e) => setGamingOnly(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-950 border-slate-700 accent-amber-400 cursor-pointer"
              />
              <span className="flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                Solo Gaming 120Hz/144Hz + HDMI 2.1
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
        <span>
          Trovati <strong className="text-white font-semibold">{filteredTVs.length}</strong> modelli corrispondenti
        </span>
        {comparedIds.length > 0 && (
          <span className="text-amber-400 font-semibold">
            {comparedIds.length} modello/i attualmente nel confronto
          </span>
        )}
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTVs.map((tv) => {
            const isCompared = comparedIds.includes(tv.id);

            return (
              <div
                key={tv.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                      {tv.brand} · {tv.panelTech}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-medium">
                      Punteggio: <strong className="text-white">{tv.overallScore}</strong>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors mb-2">
                    {tv.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {tv.bestFor}
                  </p>

                  {/* Size and Pricing Strip */}
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 mb-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Taglie disponibili:</span>
                      <span className="text-slate-300 font-medium">
                        {tv.sizes.join('" · ')}"
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">A partire da:</span>
                      <span className="text-xl font-bold font-mono text-amber-400 tabular-nums">
                        {tv.startingPrice} €
                      </span>
                    </div>
                  </div>

                  {/* Specs Quick Summary */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 mb-5">
                    <div className="flex items-center gap-1.5 p-2 bg-slate-800/40 rounded-lg">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{tv.peakBrightnessNits} nits picco</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-slate-800/40 rounded-lg">
                      <Gamepad2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{tv.refreshRate} Hz nativi</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => onSelectTV(tv)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-center"
                  >
                    Dettagli
                  </button>

                  <button
                    onClick={() => onAddToCompare(tv)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${
                      isCompared
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-amber-400/10 text-amber-400 hover:bg-amber-400/20 border border-amber-400/30'
                    }`}
                  >
                    {isCompared ? 'Nel Confronto' : '+ Confronta'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Table View */
        <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-slate-900 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/70 border-b border-slate-800 text-slate-400 uppercase text-[11px] font-semibold">
              <tr>
                <th className="p-4">Modello & Marchio</th>
                <th className="p-4">Pannello</th>
                <th className="p-4">Frequenza</th>
                <th className="p-4">Luminosità</th>
                <th className="p-4">Taglie (Prezzo Partenza)</th>
                <th className="p-4">Porte HDMI 2.1</th>
                <th className="p-4 text-right">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredTVs.map((tv) => {
                const isCompared = comparedIds.includes(tv.id);

                return (
                  <tr key={tv.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white">{tv.name}</div>
                      <div className="text-xs text-slate-400">{tv.bestFor}</div>
                    </td>
                    <td className="p-4 font-semibold text-amber-400">{tv.panelTech}</td>
                    <td className="p-4 font-mono tabular-nums">{tv.refreshRate} Hz</td>
                    <td className="p-4 font-mono font-semibold text-amber-400 tabular-nums">
                      {tv.peakBrightnessNits} nits
                    </td>
                    <td className="p-4 font-mono">
                      <span className="text-white font-bold">{tv.startingPrice} €</span>
                      <span className="block text-[11px] text-slate-500">
                        {tv.sizes.join('" · ')}"
                      </span>
                    </td>
                    <td className="p-4">
                      {tv.hdmi21Ports > 0 ? (
                        <span className="text-emerald-400 font-semibold">{tv.hdmi21Ports}x 48Gbps</span>
                      ) : (
                        <span className="text-slate-500">HDMI 2.0</span>
                      )}
                    </td>
                    <td className="p-4 text-right whitespace-nowrap space-x-2">
                      <button
                        onClick={() => onSelectTV(tv)}
                        className="py-1 px-3 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                      >
                        Scheda
                      </button>
                      <button
                        onClick={() => onAddToCompare(tv)}
                        className={`py-1 px-3 text-xs font-semibold rounded-lg transition-colors ${
                          isCompared
                            ? 'bg-rose-500/20 text-rose-300'
                            : 'bg-amber-400 text-slate-950 font-bold'
                        }`}
                      >
                        {isCompared ? 'Rimuovi' : '+ Confronta'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
