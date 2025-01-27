export interface SoilData {
  pH: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  organicMatter: number;
  moisture: number;
}

export interface NutrientStatus {
  nitrogen: 'low' | 'optimal' | 'high';
  phosphorus: 'low' | 'optimal' | 'high';
  potassium: 'low' | 'optimal' | 'high';
  organicMatter: 'low' | 'optimal' | 'high';
}

export interface SoilAnalysisResult {
  score: number;
  recommendations: string[];
  nutrientStatus: NutrientStatus;
  irrigationAdvice: {
    frequency: number;
    duration: number;
    notes: string;
  };
}