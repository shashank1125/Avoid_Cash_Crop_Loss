import { UDUPI_SOIL_DATASET } from '../../../ml/datasets/udupi_soil_data.py';
import { cropRecommendations } from '../../i18n/translations/crop_recommendations';

export function analyzeCropSpecificSoil(soilData, cropType, language = 'en') {
  const dataset = UDUPI_SOIL_DATASET[cropType];
  const recommendations = cropRecommendations[language][cropType];
  
  // Compare with optimal ranges for the specific crop
  const optimalRanges = getOptimalRanges(cropType);
  const score = calculateSoilScore(soilData, optimalRanges);
  
  let recommendation;
  if (score >= 0.9) {
    recommendation = recommendations.optimal;
  } else if (score >= 0.75) {
    recommendation = recommendations.good;
  } else {
    recommendation = recommendations.needsImprovement;
  }
  
  return {
    score,
    recommendation,
    cropType
  };
}

function getOptimalRanges(cropType) {
  // Optimal ranges based on Udupi agricultural data
  const ranges = {
    coconut: {
      pH: { min: 6.2, max: 7.0 },
      nitrogen: { min: 145, max: 165 },
      phosphorus: { min: 50, max: 60 },
      potassium: { min: 200, max: 225 },
      organicMatter: { min: 3.5, max: 4.0 },
      moisture: { min: 60, max: 70 }
    },
    areca: {
      pH: { min: 5.5, max: 6.5 },
      nitrogen: { min: 130, max: 150 },
      phosphorus: { min: 45, max: 55 },
      potassium: { min: 180, max: 200 },
      organicMatter: { min: 3.0, max: 3.5 },
      moisture: { min: 55, max: 65 }
    }
  };
  
  return ranges[cropType];
}

function calculateSoilScore(soilData, optimalRanges) {
  const parameters = ['pH', 'nitrogen', 'phosphorus', 'potassium', 'organicMatter', 'moisture'];
  let totalScore = 0;
  
  parameters.forEach(param => {
    const value = soilData[param];
    const range = optimalRanges[param];
    
    if (value >= range.min && value <= range.max) {
      totalScore += 1;
    } else {
      const midPoint = (range.max + range.min) / 2;
      const maxDiff = range.max - range.min;
      const actualDiff = Math.abs(value - midPoint);
      totalScore += Math.max(0, 1 - (actualDiff / maxDiff));
    }
  });
  
  return totalScore / parameters.length;
}