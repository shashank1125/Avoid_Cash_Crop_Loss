import { analyzeCropSpecificSoil } from './cropSpecificAnalysis';
import { SOIL_THRESHOLDS } from './constants';

export function generateRecommendation(soilData, score, cropType, language) {
  const recommendations = [];
  const fertilizers = [];
  
  // Get crop-specific analysis
  const cropAnalysis = analyzeCropSpecificSoil(soilData, cropType, language);
  
  // Generate recommendations based on soil data and crop type
  if (soilData.pH < SOIL_THRESHOLDS.pH.min) {
    recommendations.push("Apply agricultural lime to increase soil pH");
    fertilizers.push("Dolomitic Lime");
  } else if (soilData.pH > SOIL_THRESHOLDS.pH.max) {
    recommendations.push("Apply elemental sulfur to decrease soil pH");
    fertilizers.push("Elemental Sulfur");
  }

  // Add more specific recommendations...
  
  return {
    score: cropAnalysis.score,
    recommendation: cropAnalysis.recommendation,
    generalRecommendations: recommendations.join(". "),
    fertilizers: [...new Set(fertilizers)],
    cropType: cropAnalysis.cropType
  };
}