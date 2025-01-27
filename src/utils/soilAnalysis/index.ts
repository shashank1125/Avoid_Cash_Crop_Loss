import { SoilData, Recommendation } from '../../types/soil';
import { generateRecommendation } from './recommendations';
import { getPythonPrediction } from '../pythonBridge';

export async function analyzeSoil(soilData: SoilData): Promise<Recommendation> {
  try {
    // Get prediction from Python model
    const score = await getPythonPrediction(soilData);
    
    // Generate recommendation based on soil data and predicted score
    return generateRecommendation(soilData, score);
  } catch (error) {
    console.error('Soil analysis failed:', error);
    throw new Error('Failed to analyze soil data');
  }
}