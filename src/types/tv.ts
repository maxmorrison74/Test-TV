export type PanelTechnology = 'OLED' | 'QD-OLED' | 'Mini-LED' | 'QLED' | 'LED';
export type TVBrand = 'LG' | 'Samsung' | 'Sony' | 'TCL' | 'Hisense' | 'Philips';

export interface TVModel {
  id: string;
  name: string;
  brand: TVBrand;
  panelTech: PanelTechnology;
  sizes: number[]; // e.g. [48, 55, 65]
  prices: Record<number, number>; // price in € for each size
  startingPrice: number;
  refreshRate: 60 | 120 | 144;
  peakBrightnessNits: number;
  contrast: string;
  dimmingZones: string;
  hdrFormats: string[];
  hdmi21Ports: number;
  gamingFeatures: string[];
  inputLagMs: number;
  smartOS: string;
  soundSystem: string;
  viewingAngleScore: number; // 1-10
  reflectionHandlingScore: number; // 1-10
  roomLightSuitability: 'Ottimo al buio' | 'Eccellente luce diurna' | 'Versatile a 360°';
  overallScore: number;
  scores: {
    cinema: number;
    gaming: number;
    brightRoom: number;
    sports: number;
    valueForMoney: number;
  };
  bestFor: string;
  pros: string[];
  cons: string[];
  description: string;
  energyClass: string;
  vesaMount: string;
  badge?: string;
}

export type BudgetTier = 'all' | 'under500' | '500-900' | '900-1400' | 'above1400';

export type PrimaryUsage = 'cinema' | 'gaming' | 'brightRoom' | 'sports' | 'mixed';

export interface AdvisorRecommendation {
  recommendedModel: string;
  screenSize: string;
  estimatedPrice: number | string;
  whyThisModel: string;
  alternativeSavings?: string;
  alternativeUpgrade?: string;
  keyAdvice: string;
  pros: string[];
  cons: string[];
}
