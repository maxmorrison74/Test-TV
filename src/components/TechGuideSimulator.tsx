import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Check, X, Shield, Eye, Layers } from 'lucide-react';

export const TechGuideSimulator: React.FC = () => {
  const [simulatedLight, setSimulatedLight] = useState<'dark' | 'bright'>('dark');

  const techBreakdown = [
    {
      name: 'OLED (WOLED)',
      badge: 'Nero Assoluto & Cinema Notturno',
      highlight: 'Pixel auto-emissivi senza retroilluminazione',
      pros: [
        'Contrasto infinito: i pixel si spengono al 100% per un nero perfetto',
        'Angolo di visione quasi totale (99%) senza perdita di colore o contrasto',
        'Tempo di risposta istantaneo (~0.1ms), ideale per gaming senza scie',
      ],
      cons: [
        'Luminosità di picco inferiore ai top Mini-LED (700 - 1200 nits)',
        'Minimo rischio teorico di burn-in se utilizzato come monitor con loghi fissi 12 ore al giorno',
      ],
      idealFor: 'Stanze oscurate, cinefili esigenti e sessioni di gaming serale.',
    },
    {
      name: 'QD-OLED',
      badge: 'Il Top del Colore & Luminosità OLED',
      highlight: 'Unione di pannello OLED blu con Quantum Dot puri',
      pros: [
        'Volume colore superiore: rossi e verdi brillanti anche ad altissima luminosità',
        'Luminosità di picco più elevata rispetto ai tradizionali WOLED (fino a 1400 nits)',
        'Resa visiva vivida e tridimensionale con neri assoluti',
      ],
      cons: [
        'Costo di listino elevato',
        'In ambienti con forte luce solare diretta il nero può assumere una lieve sfumatura violacea',
      ],
      idealFor: 'Appassionati che cercano il massimo impatto cromatico senza rinunciare ai neri OLED.',
    },
    {
      name: 'Mini-LED (Neo QLED)',
      badge: 'Re della Luminosità & Anti-Riflesso',
      highlight: 'Migliaia di micro-LED con centinaia o migliaia di zone indipendenti',
      pros: [
        'Luminosità accecante (1500 - 3000 nits): annulla qualsiasi riflesso in salotti soleggiati',
        'Zero rischio di burn-in o usura organica nel tempo',
        'Neri molto profondi grazie al local dimming avanzato',
      ],
      cons: [
        'Possibile lieve effetto alone ("blooming") attorno a sottotitoli o loghi bianchi su sfondo nero',
        'Angolo di visione laterale inferiore rispetto a OLED',
      ],
      idealFor: 'Salotti esposti a sud con ampie vetrate, visione diurna e appassionati di sport.',
    },
    {
      name: 'QLED (Direct / Full Array)',
      badge: 'Rapporto Qualità / Prezzo',
      highlight: 'Retroilluminazione LED con filtro Quantum Dot per colori ricchi',
      pros: [
        'Colori saturi e vivaci a prezzi estremamente accessibili',
        'Ottima longevità e affidabilità nel tempo',
        'Supporto a risoluzione 4K HDR a budget contenuto (sotto i 500-750€)',
      ],
      cons: [
        'Meno zone di attenuazione rispetto a Mini-LED, neri più tendenti al grigio scuro al buio',
        'Luminosità di picco standard (450 - 900 nits)',
      ],
      idealFor: 'Uso quotidiano per tutta la famiglia con ottimo bilanciamento spesa-resa.',
    },
  ];

  return (
    <section id="tech-guide" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
          <span>05. Guida alle Tecnologie</span>
          <span aria-hidden="true">·</span>
          <span>OLED vs Mini-LED vs QLED</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          Capire le Differenze tra i Pannelli
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Non esiste un televisore perfetto per tutti: la scelta tra OLED e Mini-LED dipende soprattutto dalla luce naturale della tua stanza e da come userai lo schermo.
        </p>
      </div>

      {/* Interactive Light Simulator */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              Simulatore di Illuminazione Ambientale
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Guarda come si comportano OLED e Mini-LED quando cambia l'illuminazione del salotto.
            </p>
          </div>

          {/* Switch buttons */}
          <div className="flex items-center p-1 bg-slate-950 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setSimulatedLight('dark')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                simulatedLight === 'dark'
                  ? 'bg-slate-800 text-amber-400 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4 text-amber-400" /> Stanza Buia (Notte)
            </button>
            <button
              onClick={() => setSimulatedLight('bright')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                simulatedLight === 'bright'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-400" /> Salotto Molto Luminoso
            </button>
          </div>
        </div>

        {/* Visual Showcase Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* OLED Box in current lighting */}
          <div
            className={`p-6 rounded-xl border transition-all ${
              simulatedLight === 'dark'
                ? 'bg-slate-950 border-amber-400/60 shadow-lg shadow-amber-400/5'
                : 'bg-slate-950/70 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pannello OLED / QD-OLED
              </span>
              <span className="text-xs font-mono text-slate-400">
                {simulatedLight === 'dark' ? 'Valutazione: 10/10 Eccellenza' : 'Valutazione: 8/10 Buono'}
              </span>
            </div>

            <h4 className="text-lg font-bold text-white mb-2">
              {simulatedLight === 'dark' ? 'Vittoria Totale: Nero Assoluto e Dettagli' : 'Bello ma con Riflessi Possibili'}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {simulatedLight === 'dark'
                ? 'Al buio, nessun Mini-LED o LED può competere. Ogni pixel si spegne singolarmente: lo spazio profondo, le ombre dei film noir e i contrasti nelle serie TV appaiono perfetti e senza la minima sbavatura luminosa.'
                : 'Di giorno, l’OLED si vede comunque molto bene, ma se hai una portafinestra di fronte o lateralmente, la luminosità di picco (800-1100 nits) e i riflessi potrebbero richiedere di abbassare le tapparelle per i film più scuri.'}
            </p>

            <div className="p-3 bg-slate-900 rounded-lg text-xs text-slate-400 border border-slate-800">
              <strong className="text-slate-200">Consiglio:</strong> Scegli OLED se guardi la TV prevalentemente la sera o puoi schermare la luce del giorno.
            </div>
          </div>

          {/* Mini-LED Box in current lighting */}
          <div
            className={`p-6 rounded-xl border transition-all ${
              simulatedLight === 'bright'
                ? 'bg-slate-950 border-amber-400/60 shadow-lg shadow-amber-400/5'
                : 'bg-slate-950/70 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pannello Mini-LED (Neo QLED)
              </span>
              <span className="text-xs font-mono text-slate-400">
                {simulatedLight === 'bright' ? 'Valutazione: 10/10 Insuperabile' : 'Valutazione: 9/10 Ottimo'}
              </span>
            </div>

            <h4 className="text-lg font-bold text-white mb-2">
              {simulatedLight === 'bright' ? 'Vittoria Totale: Immagine Abbagliante' : 'Quasi come un OLED, con Lieve Alone'}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {simulatedLight === 'bright'
                ? 'Con oltre 2000-3000 nits di picco, i Mini-LED spazzano via la concorrenza di giorno. L’immagine resta vibrante, i colori mantengono la saturazione e i trattamenti antiriflesso annullano le finestre aperte.'
                : 'Al buio completo, i Mini-LED moderni con oltre 1000 zone offrono neri profondissimi. Su scene estremamente critiche (sottotitoli bianchi su sfondo nero pece) un occhio molto attento potrà notare un leggerissimo alone di luce.'}
            </p>

            <div className="p-3 bg-slate-900 rounded-lg text-xs text-slate-400 border border-slate-800">
              <strong className="text-slate-200">Consiglio:</strong> Scegli Mini-LED se il televisore è collocato in un salotto inondato di sole o per guardare partite di calcio diurne.
            </div>
          </div>
        </div>

        {/* Real photographic illustration */}
        <div className="mt-8 rounded-xl overflow-hidden border border-slate-800 relative">
          <img
            src="/src/assets/images/tv_tech_comparison_1792664403875.jpg"
            alt="Confronto fotografico tra OLED e Quantum Dot Mini-LED"
            referrerPolicy="no-referrer"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-5">
            <span className="text-xs sm:text-sm text-slate-200 font-medium">
              Dimostrazione reale del controllo luce: OLED a sinistra (neri di fondo assoluti) vs Mini-LED a destra (esplosione di luminanza e colore).
            </span>
          </div>
        </div>
      </div>

      {/* Grid of 4 Techs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techBreakdown.map((tech) => (
          <div
            key={tech.name}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                {tech.badge}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {tech.name}
            </h3>

            <p className="text-xs text-slate-400 mb-4">
              {tech.highlight}
            </p>

            {/* Pros */}
            <div className="space-y-1.5 mb-4">
              {tech.pros.map((pro, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{pro}</span>
                </div>
              ))}
            </div>

            {/* Cons */}
            <div className="space-y-1.5 mb-4">
              {tech.cons.map((con, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="text-amber-400 font-bold shrink-0">!</span>
                  <span>{con}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-300">
              <strong className="text-white">Ideale per: </strong>
              {tech.idealFor}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
