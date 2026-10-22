/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TVModel } from './types/tv';
import { TV_CATALOG } from './data/tvCatalog';
import { BudgetAdvisor } from './components/BudgetAdvisor';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { CatalogGrid } from './components/CatalogGrid';
import { DistanceCalculator } from './components/DistanceCalculator';
import { TechGuideSimulator } from './components/TechGuideSimulator';
import { TVDetailModal } from './components/TVDetailModal';
import { ArrowDown, Tv, CheckCircle2, ChevronRight, Sliders, Shield } from 'lucide-react';

export default function App() {
  // Pre-load comparison with 3 iconic benchmark TVs
  const [comparedTVs, setComparedTVs] = useState<TVModel[]>([
    TV_CATALOG.find((t) => t.id === 'lg-c4') || TV_CATALOG[0],
    TV_CATALOG.find((t) => t.id === 'tcl-c855') || TV_CATALOG[4],
    TV_CATALOG.find((t) => t.id === 'samsung-s90d') || TV_CATALOG[1],
  ]);

  const [selectedTVForModal, setSelectedTVForModal] = useState<TVModel | null>(null);

  const handleAddToCompare = (tv: TVModel) => {
    if (comparedTVs.some((item) => item.id === tv.id)) {
      setComparedTVs((prev) => prev.filter((item) => item.id !== tv.id));
    } else {
      if (comparedTVs.length >= 4) {
        alert('Puoi confrontare fino a 4 televisori contemporaneamente. Rimuovine uno per aggiungerne un altro.');
        return;
      }
      setComparedTVs((prev) => [...prev, tv]);
    }
  };

  const handleRemoveFromCompare = (id: string) => {
    setComparedTVs((prev) => prev.filter((tv) => tv.id !== id));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const comparedIds = comparedTVs.map((t) => t.id);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* 
        TOP BAR CONTRACT:
        Zone 1: Brand Wordmark (single line)
        Zone 2: 4-5 text links (whitespace-nowrap)
        Zone 3: 1 primary action
      */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors"
          >
            GuidaTV 48-70"
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('budget-advisor')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Consulente Budget
            </button>
            <button
              onClick={() => scrollToSection('comparison-matrix')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Confronto Diretto
            </button>
            <button
              onClick={() => scrollToSection('catalog-grid')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Catalogo TV
            </button>
            <button
              onClick={() => scrollToSection('distance-calculator')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Distanza & Pollici
            </button>
            <button
              onClick={() => scrollToSection('tech-guide')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Guida Tecnologie
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollToSection('budget-advisor')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Trova la Tua TV
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-slate-800 pt-10 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline and Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold">
                <span>Guida all'Acquisto 2025/2026</span>
                <span aria-hidden="true">·</span>
                <span>Mercato Italiano & Europeo</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display leading-[1.15] text-balance">
                Confronto TV tra 48 e 70 Pollici: Scegli il Modello Perfetto per il Tuo Budget
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                OLED dai neri assoluti, QD-OLED ad altissimo volume colore, o Mini-LED da 3000 nits per salotti soleggiati? Confronta specifiche verificate, calcola la distanza corretta dal divano e scopri esattamente quanto spendere.
              </p>

              {/* Fast Budget Jump Buttons */}
              <div className="pt-2">
                <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                  Inizia subito selezionando la tua fascia di spesa:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    onClick={() => scrollToSection('budget-advisor')}
                    className="p-3 bg-slate-900 border border-slate-800 hover:border-amber-400 rounded-xl text-left transition-all group"
                  >
                    <span className="block text-xs font-mono text-emerald-400 font-bold">&lt; 500 €</span>
                    <span className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">Economico / Smart</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('budget-advisor')}
                    className="p-3 bg-slate-900 border border-slate-800 hover:border-amber-400 rounded-xl text-left transition-all group"
                  >
                    <span className="block text-xs font-mono text-amber-400 font-bold">500 - 900 €</span>
                    <span className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">Best Value 144Hz</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('budget-advisor')}
                    className="p-3 bg-slate-900 border border-slate-800 hover:border-amber-400 rounded-xl text-left transition-all group"
                  >
                    <span className="block text-xs font-mono text-purple-400 font-bold">900 - 1.400 €</span>
                    <span className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">OLED & Mini-LED Top</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('budget-advisor')}
                    className="p-3 bg-slate-900 border border-slate-800 hover:border-amber-400 rounded-xl text-left transition-all group"
                  >
                    <span className="block text-xs font-mono text-sky-400 font-bold">&gt; 1.400 €</span>
                    <span className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">Flagship Cinema</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: High Fidelity Cinematic Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                <img
                  src="/src/assets/images/hero_tv_cinematic_1792664403032.jpg"
                  alt="Televisore OLED moderno ultra-slim in salotto contemporaneo"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                    Design & Calibrazione
                  </span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Dai 48" compatti fino ai maestosi 70" per home cinema
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quantitative Proof Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 tabular-nums">
                16 Modelli
              </div>
              <span className="text-xs text-slate-400">
                Selezionati tra i top brand (LG, Samsung, Sony, TCL, Hisense, Philips)
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                48" — 70"
              </div>
              <span className="text-xs text-slate-400">
                Copertura totale delle taglie più vendute per salotto e camera
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                350€ — 2.200€
              </div>
              <span className="text-xs text-slate-400">
                Analisi per ogni fascia di spesa con calcolo del miglior valore
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
                0 Pubblicità
              </div>
              <span className="text-xs text-slate-400">
                Confronto tecnico 100% indipendente basato su nits, contrasto e porte
              </span>
            </div>
          </div>
        </section>

        {/* 01. BUDGET ADVISOR */}
        <BudgetAdvisor
          onSelectTV={(tv) => setSelectedTVForModal(tv)}
          onAddToCompare={handleAddToCompare}
          comparedIds={comparedIds}
        />

        {/* 02. COMPARISON MATRIX */}
        <ComparisonMatrix
          selectedTVs={comparedTVs}
          onRemoveTV={handleRemoveFromCompare}
          onAddTV={handleAddToCompare}
          onOpenDetails={(tv) => setSelectedTVForModal(tv)}
        />

        {/* 03. FULL CATALOG GRID */}
        <CatalogGrid
          onSelectTV={(tv) => setSelectedTVForModal(tv)}
          onAddToCompare={handleAddToCompare}
          comparedIds={comparedIds}
        />

        {/* 04. DISTANCE CALCULATOR */}
        <DistanceCalculator
          onFilterBySize={(size) => {
            scrollToSection('catalog-grid');
          }}
        />

        {/* 05. TECH GUIDE & LIGHTING SIMULATOR */}
        <TechGuideSimulator />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div>
            <span className="text-white font-bold font-display text-sm">GuidaTV 48-70"</span>
            <p className="mt-1 text-slate-500">
              Piattaforma indipendente per il confronto tecnico e la scelta della TV ideale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span>Aggiornato con i modelli di riferimento 2025/2026</span>
            <span aria-hidden="true">·</span>
            <span>Standard SMPTE & THX per risoluzione 4K UHD</span>
          </div>
        </div>
      </footer>

      {/* DETAIL MODAL */}
      <TVDetailModal
        tv={selectedTVForModal}
        onClose={() => setSelectedTVForModal(null)}
        onAddToCompare={handleAddToCompare}
        isCompared={selectedTVForModal ? comparedIds.includes(selectedTVForModal.id) : false}
      />
    </div>
  );
}
