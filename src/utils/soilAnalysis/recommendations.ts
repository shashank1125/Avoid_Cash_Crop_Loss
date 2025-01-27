import { SoilData, Recommendation } from '../../types/soil';
import { UDUPI_SOIL_DATA } from '../../data/cropSpecificData';
import { predictSoilHealth } from './decisionTreeModel';

export async function analyzeSoil(
  soilData: SoilData,
  cropType: 'coconut' | 'areca'
): Promise<Recommendation> {
  const score = await predictSoilHealth(soilData, cropType);
  const optimalRanges = UDUPI_SOIL_DATA[cropType].optimalRanges;
  
  const recommendations: string[] = [];
  const fertilizers: string[] = [];

  // pH recommendations
  if (soilData.pH < optimalRanges.pH.min) {
    recommendations.push('soilAnalysis.recommendations.increasePh');
    fertilizers.push('fertilizers.dolomitic');
  } else if (soilData.pH > optimalRanges.pH.max) {
    recommendations.push('soilAnalysis.recommendations.decreasePh');
    fertilizers.push('fertilizers.sulfur');
  }

  // NPK recommendations
  if (soilData.nitrogen < optimalRanges.nitrogen.min) {
    recommendations.push('soilAnalysis.recommendations.lowNitrogen');
    fertilizers.push('fertilizers.urea', 'fertilizers.ammoniumSulfate');
  }

  if (soilData.phosphorus < optimalRanges.phosphorus.min) {
    recommendations.push('soilAnalysis.recommendations.lowPhosphorus');
    fertilizers.push('fertilizers.superPhosphate');
  }

  if (soilData.potassium < optimalRanges.potassium.min) {
    recommendations.push('soilAnalysis.recommendations.lowPotassium');
    fertilizers.push('fertilizers.potash');
  }

  // Organic matter recommendations
  if (soilData.organicMatter < optimalRanges.organicMatter.min) {
    recommendations.push('soilAnalysis.recommendations.lowOrganicMatter');
    fertilizers.push('fertilizers.compost', 'fertilizers.greenManure');
  }

  // Irrigation advice
  let irrigation = 'soilAnalysis.irrigation.maintain';
  if (soilData.moisture < optimalRanges.moisture.min) {
    irrigation = 'soilAnalysis.irrigation.increase';
  } else if (soilData.moisture > optimalRanges.moisture.max) {
    irrigation = 'soilAnalysis.irrigation.decrease';
  }

  return {
    score,
    recommendation: recommendations.join('. '),
    fertilizers: [...new Set(fertilizers)],
    irrigation
  };
}