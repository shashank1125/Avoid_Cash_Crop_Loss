import { analyzeCropSpecificSoil } from './cropSpecificAnalysis';
import { generateRecommendation } from './recommendations';

export async function analyzeSoil(soilData, cropType, language = 'en') {
  try {
    const cropAnalysis = analyzeCropSpecificSoil(soilData, cropType, language);
    return generateRecommendation(soilData, cropAnalysis.score, cropType, language);
  } catch (error) {
    console.error('Soil analysis failed:', error);
    throw new Error('Failed to analyze soil data');
  }
}