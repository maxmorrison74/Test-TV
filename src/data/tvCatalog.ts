import { TVModel } from '../types/tv';

export const TV_CATALOG: TVModel[] = [
  {
    id: 'lg-c4',
    name: 'LG OLED evo C4',
    brand: 'LG',
    panelTech: 'OLED',
    sizes: [48, 55, 65],
    prices: {
      48: 999,
      55: 1199,
      65: 1699,
    },
    startingPrice: 999,
    refreshRate: 144,
    peakBrightnessNits: 1150,
    contrast: 'Infinito : 1 (Pixel auto-emissivi)',
    dimmingZones: '8.3 milioni di pixel indipendenti',
    hdrFormats: ['Dolby Vision', 'HDR10', 'HLG', 'Dolby Vision IQ'],
    hdmi21Ports: 4,
    gamingFeatures: ['4K @ 144Hz', 'VRR', 'ALLM', 'G-Sync Compatible', 'FreeSync Premium Pro', 'Game Optimizer'],
    inputLagMs: 5.2,
    smartOS: 'webOS 24 (4 anni di upgrade garantiti)',
    soundSystem: '40W 2.2 canali (AI Sound Pro 9.1.2 virtuale, eARC)',
    viewingAngleScore: 9.8,
    reflectionHandlingScore: 9.2,
    roomLightSuitability: 'Ottimo al buio',
    overallScore: 9.6,
    scores: {
      cinema: 9.8,
      gaming: 9.9,
      brightRoom: 8.4,
      sports: 9.4,
      valueForMoney: 8.9,
    },
    bestFor: 'Il punto di riferimento per cinema buio e gaming next-gen',
    pros: [
      'Nero assoluto e contrasto infinito senza aloni di luce',
      '4 porte HDMI 2.1 a piena banda 48Gbps con 144Hz e G-Sync',
      'Processore α9 Gen 7 con upscaling e mappatura toni straordinari',
    ],
    cons: [
      'Non supporta il formato HDR10+ (presente invece Dolby Vision)',
      'Luminosità di picco inferiore ai top Mini-LED in stanze piene di sole',
    ],
    description: 'Il TV più completo e bilanciato del mercato premium. Ideale sia per cinefili esigenti sia per possessori di PS5, Xbox Series X o PC gaming di fascia alta.',
    energyClass: 'G',
    vesaMount: '300x200 mm',
    badge: 'Miglior TV a 360°',
  },
  {
    id: 'samsung-s90d',
    name: 'Samsung S90D QD-OLED',
    brand: 'Samsung',
    panelTech: 'QD-OLED',
    sizes: [55, 65],
    prices: {
      55: 1249,
      65: 1799,
    },
    startingPrice: 1249,
    refreshRate: 144,
    peakBrightnessNits: 1350,
    contrast: 'Infinito : 1',
    dimmingZones: 'Pixel auto-emissivi con Quantum Dot',
    hdrFormats: ['HDR10+', 'HDR10', 'HLG', 'HDR10+ Gaming'],
    hdmi21Ports: 4,
    gamingFeatures: ['4K @ 144Hz', 'VRR', 'ALLM', 'FreeSync Premium Pro', 'Samsung Gaming Hub'],
    inputLagMs: 5.1,
    smartOS: 'Tizen OS 2024 (Samsung Gaming Hub integrato)',
    soundSystem: '40W 2.1 canali (OTS Lite, Q-Symphony)',
    viewingAngleScore: 9.9,
    reflectionHandlingScore: 9.5,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 9.5,
    scores: {
      cinema: 9.6,
      gaming: 9.8,
      brightRoom: 8.9,
      sports: 9.3,
      valueForMoney: 8.8,
    },
    bestFor: 'Colori puri e vivaci QD-OLED con alta luminosità',
    pros: [
      'Volume colore eccezionale grazie ai Quantum Dot puri',
      'Luminosità superiore ai tradizionali OLED WOLED',
      'Gaming Hub integrato con Xbox Cloud Gaming senza console',
    ],
    cons: [
      'Assenza del supporto Dolby Vision (usa HDR10+)',
      'Livello del nero che può apparire leggermente violaceo con luce diretta sul pannello',
    ],
    description: 'Grazie all’unione tra neri OLED e brillantezza dei Quantum Dot, offre immagini sature ed entusiasmanti sia al buio che in ambienti moderatamente illuminati.',
    energyClass: 'F',
    vesaMount: '300x200 mm',
    badge: 'Miglior Volume Colore',
  },
  {
    id: 'sony-bravia-8',
    name: 'Sony BRAVIA 8 (XR80)',
    brand: 'Sony',
    panelTech: 'OLED',
    sizes: [55, 65],
    prices: {
      55: 1599,
      65: 2199,
    },
    startingPrice: 1599,
    refreshRate: 120,
    peakBrightnessNits: 1050,
    contrast: 'Infinito : 1',
    dimmingZones: 'Pixel auto-emissivi',
    hdrFormats: ['Dolby Vision', 'HDR10', 'HLG'],
    hdmi21Ports: 2,
    gamingFeatures: ['4K @ 120Hz', 'VRR', 'ALLM', 'Auto HDR Tone Mapping per PS5', 'Menu Gioco'],
    inputLagMs: 8.5,
    smartOS: 'Google TV con Sony Pictures Core (5 film inclusi)',
    soundSystem: 'Acoustic Surface Audio+ (50W, lo schermo emette il suono)',
    viewingAngleScore: 9.7,
    reflectionHandlingScore: 9.1,
    roomLightSuitability: 'Ottimo al buio',
    overallScore: 9.5,
    scores: {
      cinema: 9.9,
      gaming: 8.9,
      brightRoom: 8.2,
      sports: 9.7,
      valueForMoney: 8.1,
    },
    bestFor: 'Cinefili puri e fedeltà cromatica da sala regia',
    pros: [
      'Processore XR con la migliore elaborazione video e upscaling del settore',
      'Audio Acoustic Surface Audio+: dialoghi che provengono direttamente dalla bocca degli attori',
      'Resa cromatica e sfumature cinematografiche impareggiabili',
    ],
    cons: [
      'Prezzo di listino elevato rispetto ai rivali diretti',
      'Solo 2 porte HDMI 2.1 (di cui una condivisa con eARC)',
    ],
    description: 'La scelta per eccellenza per chi guarda film in 4K Blu-ray e serie d’autore al buio. Il processore XR estrae ogni minimo dettaglio naturale senza forzature digitali.',
    energyClass: 'G',
    vesaMount: '300x300 mm',
    badge: 'Scelta Cinefilo',
  },
  {
    id: 'sony-bravia-7',
    name: 'Sony BRAVIA 7 (XR70)',
    brand: 'Sony',
    panelTech: 'Mini-LED',
    sizes: [55, 65],
    prices: {
      55: 1499,
      65: 1899,
    },
    startingPrice: 1499,
    refreshRate: 120,
    peakBrightnessNits: 2000,
    contrast: '80.000 : 1 nativo con local dimming',
    dimmingZones: 'Oltre 900 zone Mini-LED gestite da XR Backlight Master Drive',
    hdrFormats: ['Dolby Vision', 'HDR10', 'HLG'],
    hdmi21Ports: 2,
    gamingFeatures: ['4K @ 120Hz', 'VRR', 'ALLM', 'Perfetto per PS5'],
    inputLagMs: 10.2,
    smartOS: 'Google TV con Sony Pictures Core',
    soundSystem: 'Acoustic Multi-Audio (40W, tweeter posizionati nella cornice)',
    viewingAngleScore: 8.2,
    reflectionHandlingScore: 9.3,
    roomLightSuitability: 'Eccellente luce diurna',
    overallScore: 9.4,
    scores: {
      cinema: 9.3,
      gaming: 8.8,
      brightRoom: 9.8,
      sports: 9.6,
      valueForMoney: 8.3,
    },
    bestFor: 'Salotti luminosi e appassionati di sport e cinema HDR diurno',
    pros: [
      'Luminosità mostruosa di 2000 nits che buca qualsiasi riflesso diurno',
      'Algoritmo di attenuazione XR Backlight Master Drive con quasi zero blooming',
      'Colori naturali e gestione del movimento Sony Motionflow senza artefatti',
    ],
    cons: [
      'Angolo di visione inferiore agli schermi OLED se visti lateralmente',
      '2 sole porte HDMI 2.1',
    ],
    description: 'Un capolavoro tecnologico Mini-LED: porta l’algoritmo di controllo luce professionale dei monitor di riferimento Sony nei salotti più luminosi con impatto HDR travolgente.',
    energyClass: 'F',
    vesaMount: '300x300 mm',
    badge: 'Re Luminosità Sony',
  },
  {
    id: 'tcl-c855',
    name: 'TCL C855 QD Mini-LED',
    brand: 'TCL',
    panelTech: 'Mini-LED',
    sizes: [55, 65],
    prices: {
      55: 899,
      65: 1199,
    },
    startingPrice: 899,
    refreshRate: 144,
    peakBrightnessNits: 2800,
    contrast: '100.000 : 1 dinamico',
    dimmingZones: '1.344 zone (su 55") / 2.160 zone (su 65")',
    hdrFormats: ['Dolby Vision IQ', 'HDR10+', 'HDR10', 'HLG'],
    hdmi21Ports: 2,
    gamingFeatures: ['4K @ 144Hz VRR', 'ALLM', 'AMD FreeSync Premium Pro', 'Game Master Pro 3.0'],
    inputLagMs: 5.6,
    smartOS: 'Google TV con assistente vocale hands-free',
    soundSystem: 'Sistema audio Onkyo 2.1.2 da 60W con subwoofer posteriore',
    viewingAngleScore: 8.4,
    reflectionHandlingScore: 9.4,
    roomLightSuitability: 'Eccellente luce diurna',
    overallScore: 9.3,
    scores: {
      cinema: 9.2,
      gaming: 9.5,
      brightRoom: 9.9,
      sports: 9.2,
      valueForMoney: 9.8,
    },
    bestFor: 'Rapporto prestazioni/prezzo imbattibile per luminosità e HDR',
    pros: [
      'Fino a 2800 nits e oltre 1300 zone di oscuramento a meno di 1000€',
      'Supporto a TUTTI i formati HDR (Dolby Vision e HDR10+ insieme)',
      'Subwoofer Onkyo integrato per bassi corposi senza soundbar esterna',
    ],
    cons: [
      'Upscaling di segnali SD a bassa definizione inferiore a Sony e LG',
      'Software Google TV che richiede qualche istante di assestamento all’avvio',
    ],
    description: 'La bestia del valore HDR. Per meno di 1000€ offre numeri da TV che ne costano il doppio: luminosità accecante, neri profondissimi e audio Onkyo con subwoofer vero.',
    energyClass: 'G',
    vesaMount: '300x300 mm',
    badge: 'Miglior Rapporto Qualità/Prezzo Mini-LED',
  },
  {
    id: 'lg-b4',
    name: 'LG OLED B4',
    brand: 'LG',
    panelTech: 'OLED',
    sizes: [48, 55, 65],
    prices: {
      48: 799,
      55: 949,
      65: 1399,
    },
    startingPrice: 799,
    refreshRate: 120,
    peakBrightnessNits: 750,
    contrast: 'Infinito : 1',
    dimmingZones: 'Pixel auto-emissivi',
    hdrFormats: ['Dolby Vision', 'HDR10', 'HLG'],
    hdmi21Ports: 4,
    gamingFeatures: ['4K @ 120Hz', 'VRR', 'ALLM', 'G-Sync Compatible', 'FreeSync Premium', '4x HDMI 2.1'],
    inputLagMs: 5.5,
    smartOS: 'webOS 24',
    soundSystem: '20W 2.0 canali (Dolby Atmos virtuale, eARC)',
    viewingAngleScore: 9.6,
    reflectionHandlingScore: 8.8,
    roomLightSuitability: 'Ottimo al buio',
    overallScore: 9.2,
    scores: {
      cinema: 9.4,
      gaming: 9.7,
      brightRoom: 7.9,
      sports: 9.1,
      valueForMoney: 9.6,
    },
    bestFor: 'La porta d’accesso ideale all’OLED senza spendere una fortuna',
    pros: [
      'Vero pannello OLED con nero assoluto e contrasto infinito sotto i 1000€',
      'Ben 4 porte HDMI 2.1 a 120Hz (novità assoluta per la serie B di LG)',
      'Tempo di risposta istantaneo (0.1ms) per gaming fluidissimo',
    ],
    cons: [
      'Luminosità di picco inferiore al fratello maggiore C4 (circa 750 nits vs 1150 nits)',
      'Audio integrato basilare da 20W, consigliata soundbar dedicata',
    ],
    description: 'La svolta del 2024/2025: finalmente una serie B con 4 porte HDMI 2.1 e processore α8. Regala la magia dell’OLED al prezzo di un TV LED di fascia media.',
    energyClass: 'G',
    vesaMount: '300x200 mm',
    badge: 'Miglior OLED Budget',
  },
  {
    id: 'hisense-u8n',
    name: 'Hisense U8N Mini-LED',
    brand: 'Hisense',
    panelTech: 'Mini-LED',
    sizes: [55, 65],
    prices: {
      55: 949,
      65: 1299,
    },
    startingPrice: 949,
    refreshRate: 144,
    peakBrightnessNits: 3000,
    contrast: '90.000 : 1 dinamico',
    dimmingZones: 'Oltre 1.000 zone Mini-LED indipendenti',
    hdrFormats: ['Dolby Vision IQ', 'HDR10+', 'HDR10', 'HLG', 'IMAX Enhanced'],
    hdmi21Ports: 2,
    gamingFeatures: ['4K @ 144Hz', 'VRR', 'ALLM', 'AMD FreeSync Premium Pro', 'Game Bar Plus'],
    inputLagMs: 5.7,
    smartOS: 'VIDAA U 7.6 (estremamente veloce e reattivo)',
    soundSystem: 'Audio 2.1.2 canali da 50W con subwoofer posteriore',
    viewingAngleScore: 8.3,
    reflectionHandlingScore: 9.5,
    roomLightSuitability: 'Eccellente luce diurna',
    overallScore: 9.2,
    scores: {
      cinema: 9.1,
      gaming: 9.4,
      brightRoom: 10.0,
      sports: 9.1,
      valueForMoney: 9.4,
    },
    bestFor: 'Il televisore più luminoso in assoluto nella fascia sotto i 1000€',
    pros: [
      'Picco straordinario di 3000 nits: i riflessi diurni sono completamente annullati',
      'Trattamento antiriflesso a basso indice di rifrazione di altissimo livello',
      'Supporta sia Dolby Vision IQ che HDR10+ Adaptive',
    ],
    cons: [
      'Sistema operativo VIDAA molto scattante ma con qualche app estera in meno rispetto a Google TV',
      'Angolo di visione limitato rispetto a un pannello OLED',
    ],
    description: 'Se hai una portafinestra esposta a sud nel salotto e vuoi goderti film ed eventi sportivi di giorno con colori abbaglianti e neri solidi, l’Hisense U8N è uno schiacciasassi.',
    energyClass: 'G',
    vesaMount: '400x300 mm',
    badge: 'Mostro di Luminosità',
  },
  {
    id: 'samsung-qn90d',
    name: 'Samsung QN90D Neo QLED',
    brand: 'Samsung',
    panelTech: 'Mini-LED',
    sizes: [55, 65],
    prices: {
      55: 1199,
      65: 1699,
    },
    startingPrice: 1199,
    refreshRate: 144,
    peakBrightnessNits: 2100,
    contrast: '75.000 : 1 con Quantum Matrix',
    dimmingZones: '720 zone Mini-LED con controllo microscopico',
    hdrFormats: ['HDR10+', 'HDR10', 'HLG', 'HDR10+ Gaming'],
    hdmi21Ports: 4,
    gamingFeatures: ['4K @ 144Hz su tutte le 4 porte', 'VRR', 'FreeSync Premium Pro', 'Gaming Hub'],
    inputLagMs: 5.0,
    smartOS: 'Tizen OS 2024 con Daily+ e SmartThings',
    soundSystem: '60W 4.2.2 canali con Object Tracking Sound+',
    viewingAngleScore: 8.8,
    reflectionHandlingScore: 9.6,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 9.3,
    scores: {
      cinema: 9.0,
      gaming: 9.7,
      brightRoom: 9.8,
      sports: 9.5,
      valueForMoney: 8.7,
    },
    bestFor: 'Qualità costruttiva premium, zero rischio burn-in e 4x HDMI 2.1',
    pros: [
      'Pannello antiriflesso d’eccellenza e luminosità esplosiva',
      'Tutte e 4 le porte HDMI supportano 4K@144Hz',
      'Nessun rischio di ritenzione d’immagine (burn-in), ideale per chi tiene canali news 24/7 o gioca molte ore',
    ],
    cons: [
      'Niente Dolby Vision',
      'Prezzo vicino agli OLED della stessa taglia',
    ],
    description: 'Il punto di riferimento per chi cerca il top della tecnologia LED senza le preoccupazioni di usura organica dell’OLED, con audio surround corposo e design ultra-slim.',
    energyClass: 'F',
    vesaMount: '200x200 mm',
    badge: 'Top Neo QLED',
  },
  {
    id: 'philips-oled708',
    name: 'Philips OLED708 Ambilight',
    brand: 'Philips',
    panelTech: 'OLED',
    sizes: [48, 55, 65],
    prices: {
      48: 899,
      55: 1049,
      65: 1499,
    },
    startingPrice: 899,
    refreshRate: 120,
    peakBrightnessNits: 800,
    contrast: 'Infinito : 1',
    dimmingZones: 'Pixel auto-emissivi',
    hdrFormats: ['Dolby Vision', 'HDR10+', 'HDR10', 'HLG'],
    hdmi21Ports: 2,
    gamingFeatures: ['4K @ 120Hz', 'VRR', 'ALLM', 'G-Sync Compatible', 'FreeSync Premium'],
    inputLagMs: 8.2,
    smartOS: 'Google TV',
    soundSystem: '40W 2.1 canali con subwoofer integrato e DTS:X',
    viewingAngleScore: 9.7,
    reflectionHandlingScore: 8.9,
    roomLightSuitability: 'Ottimo al buio',
    overallScore: 9.1,
    scores: {
      cinema: 9.5,
      gaming: 9.1,
      brightRoom: 8.0,
      sports: 9.2,
      valueForMoney: 9.0,
    },
    bestFor: 'Esperienza visiva immersiva con luci Ambilight a 3 lati',
    pros: [
      'Tecnologia Ambilight a 3 lati che proietta i colori del film sulla parete',
      'Supporto simultaneo a Dolby Vision E HDR10+',
      'Processore Philips P5 AI di 7a generazione per immagini scolpite',
    ],
    cons: [
      'Solo 2 porte HDMI 2.1',
      'Luminosità OLED standard adatta prevalentemente a visione serale',
    ],
    description: 'Unico nel suo genere: l’illuminazione intelligente Ambilight trasforma la parete dietro al TV in un’estensione scenica dell’immagine, riducendo anche l’affaticamento visivo serale.',
    energyClass: 'G',
    vesaMount: '300x300 mm',
    badge: 'Esperienza Ambilight',
  },
  {
    id: 'tcl-c755',
    name: 'TCL C755 / C805 Mini-LED',
    brand: 'TCL',
    panelTech: 'Mini-LED',
    sizes: [50, 55, 65],
    prices: {
      50: 549,
      55: 649,
      65: 849,
    },
    startingPrice: 549,
    refreshRate: 144,
    peakBrightnessNits: 1300,
    contrast: '50.000 : 1',
    dimmingZones: '384 zone (su 55") / 512 zone (su 65")',
    hdrFormats: ['Dolby Vision IQ', 'HDR10+', 'HDR10', 'HLG'],
    hdmi21Ports: 2,
    gamingFeatures: ['4K @ 144Hz VRR', 'ALLM', 'FreeSync Premium Pro', 'Game Master 2.0'],
    inputLagMs: 5.8,
    smartOS: 'Google TV',
    soundSystem: '30W 2.0 canali (Dolby Atmos, DTS Virtual:X)',
    viewingAngleScore: 8.1,
    reflectionHandlingScore: 8.8,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 9.0,
    scores: {
      cinema: 8.8,
      gaming: 9.4,
      brightRoom: 9.2,
      sports: 9.0,
      valueForMoney: 9.9,
    },
    bestFor: 'Il Re indiscusso del budget medio (550€ - 850€)',
    pros: [
      'Pannello Mini-LED a 144Hz a partire da soli 549€ per il 50" e 649€ per il 55"',
      'Doppio supporto Dolby Vision e HDR10+',
      '1300 nits di picco: spazza via qualsiasi TV LED convenzionale in questa fascia',
    ],
    cons: [
      'Angolo di visione laterale ridotto (meglio sedersi frontalmente)',
      'Audio discreto ma non all’altezza del modello superiore C855',
    ],
    description: 'Il TV più venduto e consigliato per chi cerca le specifiche di un top di gamma (Mini-LED, 144Hz, oltre 1000 nits) senza superare i 650-850€. Incredibile valore.',
    energyClass: 'G',
    vesaMount: '300x300 mm',
    badge: 'Miglior Acquisto 600€-800€',
  },
  {
    id: 'hisense-u7n',
    name: 'Hisense U7N Mini-LED',
    brand: 'Hisense',
    panelTech: 'Mini-LED',
    sizes: [55, 65],
    prices: {
      55: 699,
      65: 899,
    },
    startingPrice: 699,
    refreshRate: 144,
    peakBrightnessNits: 1500,
    contrast: '60.000 : 1',
    dimmingZones: '384 zone Mini-LED',
    hdrFormats: ['Dolby Vision IQ', 'HDR10+', 'HDR10', 'HLG'],
    hdmi21Ports: 2,
    gamingFeatures: ['4K @ 144Hz', 'VRR', 'ALLM', 'FreeSync Premium Pro'],
    inputLagMs: 5.9,
    smartOS: 'VIDAA U 7.6',
    soundSystem: '40W 2.1 canali con subwoofer integrato',
    viewingAngleScore: 8.2,
    reflectionHandlingScore: 9.0,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 8.9,
    scores: {
      cinema: 8.7,
      gaming: 9.3,
      brightRoom: 9.3,
      sports: 8.9,
      valueForMoney: 9.5,
    },
    bestFor: 'Grande luminosità, gaming 144Hz e audio con subwoofer a budget contenuto',
    pros: [
      'Luminosità di 1500 nits eccezionale per la fascia dei 700€',
      'Subwoofer posteriore incluso per un audio già corposo senza periferiche',
      'Piena compatibilità con Dolby Vision IQ e HDR10+',
    ],
    cons: [
      'Piattaforma VIDAA anziché Google TV (verificare presenza di alcune app locali specifiche)',
      'Leggero blooming visibile su sottotitoli in scene buie',
    ],
    description: 'Rivaleggia direttamente con il TCL C755 offrendo una luminosità ancora maggiore (1500 nits) e un comparto audio 2.1 con subwoofer integrato.',
    energyClass: 'G',
    vesaMount: '400x300 mm',
    badge: 'Alternativa Mini-LED Best Buy',
  },
  {
    id: 'samsung-q80d',
    name: 'Samsung Q80D QLED',
    brand: 'Samsung',
    panelTech: 'QLED',
    sizes: [50, 55, 65],
    prices: {
      50: 649,
      55: 749,
      65: 999,
    },
    startingPrice: 649,
    refreshRate: 120,
    peakBrightnessNits: 900,
    contrast: 'Direct Full Array LED',
    dimmingZones: 'Circa 48 zone Direct Full Array',
    hdrFormats: ['HDR10+', 'HDR10', 'HLG'],
    hdmi21Ports: 4,
    gamingFeatures: ['4K @ 120Hz su tutte le 4 porte', 'VRR', 'FreeSync Premium Pro', 'Gaming Hub'],
    inputLagMs: 5.4,
    smartOS: 'Tizen OS 2024',
    soundSystem: '40W 2.2 canali (OTS Lite)',
    viewingAngleScore: 8.3,
    reflectionHandlingScore: 8.9,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 8.7,
    scores: {
      cinema: 8.3,
      gaming: 9.5,
      brightRoom: 8.8,
      sports: 9.1,
      valueForMoney: 8.8,
    },
    bestFor: '4 porte HDMI 2.1 a 120Hz e affidabilità Samsung sotto gli 800€',
    pros: [
      'Tutte le 4 porte HDMI sono 2.1 con supporto 4K 120Hz',
      'Direct Full Array LED molto più contrastato dei QLED edge-lit di base',
      'Piattaforma Smart Tizen ricchissima con Samsung TV Plus gratuita',
    ],
    cons: [
      'Numero di zone di oscuramento limitato rispetto ai Mini-LED',
      'Niente Dolby Vision',
    ],
    description: 'Il punto di equilibrio ideale per chi ama l’ecosistema Samsung e cerca un TV rapido a 120Hz con ottime prestazioni diurne e 4 ingressi HDMI 2.1 per console multiple.',
    energyClass: 'G',
    vesaMount: '200x200 mm',
    badge: 'Miglior QLED Samsung 120Hz',
  },
  {
    id: 'tcl-c655',
    name: 'TCL C655 QLED Pro',
    brand: 'TCL',
    panelTech: 'QLED',
    sizes: [50, 55, 65, 70],
    prices: {
      50: 369,
      55: 429,
      65: 599,
      70: 749,
    },
    startingPrice: 369,
    refreshRate: 60,
    peakBrightnessNits: 450,
    contrast: '5.000 : 1 nativo pannello VA',
    dimmingZones: 'Direct LED con Micro Dimming software',
    hdrFormats: ['Dolby Vision', 'HDR10+', 'HDR10', 'HLG'],
    hdmi21Ports: 0,
    gamingFeatures: ['Game Accelerator 120Hz (DLG a 1080p/1440p)', 'ALLM', 'Game Bar'],
    inputLagMs: 9.5,
    smartOS: 'Google TV',
    soundSystem: 'Sistema audio Onkyo 2.1 da 30W con subwoofer (su 55", 65" e 70")',
    viewingAngleScore: 7.2,
    reflectionHandlingScore: 7.8,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 8.4,
    scores: {
      cinema: 7.9,
      gaming: 8.2,
      brightRoom: 8.1,
      sports: 8.0,
      valueForMoney: 9.9,
    },
    bestFor: 'Il Campione del Budget sotto i 450-600€',
    pros: [
      'Prezzo sbalorditivo: Quantum Dot, Dolby Vision e Google TV a partire da ~370€',
      'Subwoofer Onkyo integrato nei tagli da 55" e superiori',
      'Disponibile anche in taglio gigante da 70 pollici a un prezzo accessibile',
    ],
    cons: [
      'Pannello nativo a 60Hz (la modalità 120Hz DLG riduce la risoluzione verticale)',
      'Luminosità di picco modesta (450 nits), l’HDR è discreto ma non abbagliante',
    ],
    description: 'Il salvadanaio intelligente: offre la vivacità dei Quantum Dot, il supporto sia a Dolby Vision che a Google TV e perfino un subwoofer integrato a un prezzo incredibile.',
    energyClass: 'F',
    vesaMount: '300x300 mm',
    badge: 'Miglior Scelta Economica (< 450€)',
  },
  {
    id: 'hisense-e7nq-pro',
    name: 'Hisense E7NQ Pro QLED 144Hz',
    brand: 'Hisense',
    panelTech: 'QLED',
    sizes: [55, 65, 70],
    prices: {
      55: 499,
      65: 699,
      70: 899,
    },
    startingPrice: 499,
    refreshRate: 144,
    peakBrightnessNits: 500,
    contrast: '4.500 : 1 nativo',
    dimmingZones: 'Direct LED Full Array locale base',
    hdrFormats: ['Dolby Vision IQ', 'HDR10+', 'HDR10', 'HLG'],
    hdmi21Ports: 2,
    gamingFeatures: ['4K @ 144Hz nativo', 'VRR', 'ALLM', 'FreeSync Premium', 'Game Bar'],
    inputLagMs: 5.9,
    smartOS: 'VIDAA U 7.6',
    soundSystem: 'Audio 2.1 da 40W con subwoofer integrato',
    viewingAngleScore: 7.5,
    reflectionHandlingScore: 8.0,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 8.5,
    scores: {
      cinema: 8.0,
      gaming: 9.3,
      brightRoom: 8.2,
      sports: 8.6,
      valueForMoney: 9.7,
    },
    bestFor: 'Il TV gaming a 144Hz nativo più economico sul mercato',
    pros: [
      'Vero pannello nativo a 144Hz con HDMI 2.1 a meno di 500€ per il 55"',
      'Audio 2.1 con subwoofer integrato e Dolby Atmos',
      'Supporto a Dolby Vision IQ e HDR10+',
    ],
    cons: [
      'Luminosità massima di 500 nits: non raggiunge l’impatto HDR dei Mini-LED',
      'Neri meno profondi nelle scene buie rispetto a OLED e Mini-LED',
    ],
    description: 'Perfetto per chi vuole collegare una PS5 o un PC da gaming e giocare a 120Hz/144Hz fluidi spendendo solo 499€ per un 55 pollici. Un affare per i gamer con budget limitato.',
    energyClass: 'F',
    vesaMount: '400x300 mm',
    badge: 'Gaming 144Hz Low Cost',
  },
  {
    id: 'samsung-du8000',
    name: 'Samsung DU8000 Crystal UHD',
    brand: 'Samsung',
    panelTech: 'LED',
    sizes: [50, 55, 65, 70],
    prices: {
      50: 389,
      55: 449,
      65: 649,
      70: 799,
    },
    startingPrice: 389,
    refreshRate: 60,
    peakBrightnessNits: 350,
    contrast: '3.800 : 1',
    dimmingZones: 'Edge LED con UHD Dimming',
    hdrFormats: ['HDR10+', 'HDR10', 'HLG'],
    hdmi21Ports: 0,
    gamingFeatures: ['ALLM', 'Gaming Hub (Xbox Cloud Gaming senza console)', 'HGiG'],
    inputLagMs: 9.8,
    smartOS: 'Tizen OS 2024',
    soundSystem: '20W 2.0 canali (OTS Lite, Q-Symphony)',
    viewingAngleScore: 6.9,
    reflectionHandlingScore: 7.4,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 7.9,
    scores: {
      cinema: 7.2,
      gaming: 7.8,
      brightRoom: 7.5,
      sports: 7.6,
      valueForMoney: 8.8,
    },
    bestFor: 'TV familiare sottile e affidabile per streaming e TV quotidiana',
    pros: [
      'Design AirSlim sottilissimo (solo 26 mm di spessore)',
      'Tizen OS ricchissimo di app e Samsung TV Plus con centinaia di canali gratis',
      'Telecomando SolarCell ecologico a ricarica solare senza pile usa e getta',
    ],
    cons: [
      'Pannello 60Hz senza porte HDMI 2.1',
      'Luminosità e contrasto base, sconsigliato per HDR spinto',
    ],
    description: 'Il classico bestseller Samsung per chi desidera un televisore elegante, dal design sottilissimo e con un sistema smart affidabile per Netflix, Prime e canali digitali.',
    energyClass: 'G',
    vesaMount: '200x200 mm',
    badge: 'Design Slim & TV Quotidiana',
  },
  {
    id: 'lg-ut8100',
    name: 'LG UT8100 4K UHD LED',
    brand: 'LG',
    panelTech: 'LED',
    sizes: [50, 55, 65, 70],
    prices: {
      50: 369,
      55: 419,
      65: 599,
      70: 769,
    },
    startingPrice: 369,
    refreshRate: 60,
    peakBrightnessNits: 340,
    contrast: '3.500 : 1',
    dimmingZones: 'Direct LED standard',
    hdrFormats: ['HDR10', 'HLG'],
    hdmi21Ports: 0,
    gamingFeatures: ['ALLM', 'HGiG', 'Game Optimizer'],
    inputLagMs: 10.4,
    smartOS: 'webOS 24 (con programma Re:New di 4 anni di upgrade)',
    soundSystem: '20W 2.0 canali (AI Sound Pro)',
    viewingAngleScore: 7.2,
    reflectionHandlingScore: 7.3,
    roomLightSuitability: 'Versatile a 360°',
    overallScore: 7.8,
    scores: {
      cinema: 7.0,
      gaming: 7.5,
      brightRoom: 7.4,
      sports: 7.8,
      valueForMoney: 8.7,
    },
    bestFor: 'Uso quotidiano con il celebre telecomando puntatore Magic Remote',
    pros: [
      'Telecomando Magic Remote con puntatore giroscopico comodissimo per digitare',
      'Sistema operativo webOS 24 fluido e aggiornato per 4 anni',
      'Disponibile in tutti i formati da 50" fino a 70" a prezzi popolari',
    ],
    cons: [
      'Luminosità e contrasto limitati per contenuti cinematografici HDR',
      'Niente 120Hz nativi né HDMI 2.1',
    ],
    description: 'La soluzione senza pensieri di LG: interfaccia webOS facile da navigare grazie al puntatore del telecomando, ottimo per telegiornali, cartoni animati e streaming standard.',
    energyClass: 'G',
    vesaMount: '300x300 mm',
    badge: 'Facilità d’Uso Magic Remote',
  },
];

// Helper calculations and guides
export interface DistanceRecommendation {
  distanceMeters: number;
  recommendedInchesMin: number;
  recommendedInchesMax: number;
  idealInches: number;
  cinemaAngle: string; // "30° SMPTE" or "40° THX"
  fieldOfViewSummary: string;
}

export function calculateDistanceRecommendation(meters: number): DistanceRecommendation {
  // Standard 4K viewing distance formulas:
  // SMPTE standard (30° FOV) -> Distance / 1.6 = Screen Width -> Inches ≈ meters * 25.4
  // THX cinema immersion (40° FOV) -> Distance / 1.2 = Screen Width
  // In general for 4K TV:
  // 1.5m -> 48"-50"
  // 2.0m -> 50"-55"
  // 2.3m -> 55"-65"
  // 2.8m -> 65"-70"
  // 3.2m+ -> 70"+
  let ideal = 55;
  if (meters < 1.7) {
    ideal = 48;
  } else if (meters < 2.1) {
    ideal = 50;
  } else if (meters < 2.6) {
    ideal = 55;
  } else if (meters < 3.1) {
    ideal = 65;
  } else {
    ideal = 70;
  }

  const minInches = Math.max(48, Math.round(meters * 19.5));
  const maxInches = Math.min(75, Math.round(meters * 24.5));

  return {
    distanceMeters: meters,
    recommendedInchesMin: minInches,
    recommendedInchesMax: maxInches,
    idealInches: ideal,
    cinemaAngle: meters <= 2.2 ? '38° THX Immersion' : '30° SMPTE Standard',
    fieldOfViewSummary:
      meters <= 2.0
        ? 'Distanza ravvicinata: 48" o 50" offrono nitidezza perfetta senza affaticare gli occhi.'
        : meters <= 2.6
        ? 'Distanza standard da salotto: 55" è il formato più equilibrato e conveniente.'
        : 'Ampia distanza: 65" o 70" sono necessari per cogliere la risoluzione 4K e sentirsi al cinema.',
  };
}

export function getDeterministicAdvice(budget: number, usage: string, distance: number): {
  winner: TVModel;
  winnerSize: number;
  savingsAlternative?: { model: TVModel; size: number };
  upgradeAlternative?: { model: TVModel; size: number };
  reason: string;
} {
  const distRec = calculateDistanceRecommendation(distance || 2.4);
  const targetSize = distRec.idealInches;

  // Filter candidates that fit the budget or are reasonably close
  const affordable = TV_CATALOG.filter((tv) => {
    // Find closest size
    const availableSizes = tv.sizes;
    const chosenSize = availableSizes.includes(targetSize)
      ? targetSize
      : availableSizes.reduce((prev, curr) => (Math.abs(curr - targetSize) < Math.abs(prev - targetSize) ? curr : prev));
    const price = tv.prices[chosenSize];
    return price <= budget * 1.08; // 8% tolerance
  });

  // Score candidate models
  let winner = TV_CATALOG[0];
  let winnerSize = 55;
  let bestScore = -1;

  affordable.forEach((tv) => {
    const availableSizes = tv.sizes;
    const chosenSize = availableSizes.includes(targetSize)
      ? targetSize
      : availableSizes.reduce((prev, curr) => (Math.abs(curr - targetSize) < Math.abs(prev - targetSize) ? curr : prev));
    const price = tv.prices[chosenSize];

    let usageScore = tv.scores.valueForMoney;
    if (usage === 'cinema') usageScore = tv.scores.cinema * 1.5 + tv.scores.valueForMoney;
    else if (usage === 'gaming') usageScore = tv.scores.gaming * 1.6 + tv.scores.valueForMoney;
    else if (usage === 'brightRoom') usageScore = tv.scores.brightRoom * 1.6 + tv.scores.valueForMoney;
    else if (usage === 'sports') usageScore = tv.scores.sports * 1.4 + tv.scores.valueForMoney;
    else usageScore = (tv.scores.cinema + tv.scores.gaming + tv.scores.brightRoom + tv.scores.sports) / 4 + tv.scores.valueForMoney;

    // Weight by size matching
    const sizePenalty = Math.abs(chosenSize - targetSize) * 0.4;
    const finalScore = usageScore - sizePenalty - (price > budget ? 1.5 : 0);

    if (finalScore > bestScore) {
      bestScore = finalScore;
      winner = tv;
      winnerSize = chosenSize;
    }
  });

  // Find a savings alternative (cheaper by at least 120€)
  const winnerPrice = winner.prices[winnerSize] || winner.startingPrice;
  const cheaperCandidates = affordable.filter((tv) => {
    const s = tv.sizes.includes(winnerSize) ? winnerSize : tv.sizes[0];
    return tv.id !== winner.id && tv.prices[s] <= winnerPrice - 120;
  });
  let savingsAlternative;
  if (cheaperCandidates.length > 0) {
    const sModel = cheaperCandidates.sort((a, b) => b.overallScore - a.overallScore)[0];
    const sSize = sModel.sizes.includes(winnerSize) ? winnerSize : sModel.sizes[0];
    savingsAlternative = { model: sModel, size: sSize };
  }

  // Find an upgrade alternative (within budget + 250€)
  const upgradeCandidates = TV_CATALOG.filter((tv) => {
    const s = tv.sizes.includes(winnerSize) ? winnerSize : tv.sizes[0];
    const p = tv.prices[s];
    return tv.id !== winner.id && p > winnerPrice && p <= winnerPrice + 350;
  });
  let upgradeAlternative;
  if (upgradeCandidates.length > 0) {
    const uModel = upgradeCandidates.sort((a, b) => b.overallScore - a.overallScore)[0];
    const uSize = uModel.sizes.includes(winnerSize) ? winnerSize : uModel.sizes[0];
    upgradeAlternative = { model: uModel, size: uSize };
  }

  const reason = `Con un budget di ${budget}€ e una distanza di ${distance}m (ideale per un ${winnerSize}"), il modello ${winner.name} rappresenta il miglior compromesso tra tecnologia del pannello (${winner.panelTech}), luminosità (${winner.peakBrightnessNits} nits) e qualità costruttiva per il tuo profilo d'uso.`;

  return {
    winner,
    winnerSize,
    savingsAlternative,
    upgradeAlternative,
    reason,
  };
}
