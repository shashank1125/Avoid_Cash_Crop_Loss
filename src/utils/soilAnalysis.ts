import { DecisionTree } from './decisionTree/DecisionTree';
import { soilDataset } from '../data/soilDataset';
import { SoilData, Recommendation } from '../types/soil';

let model: DecisionTree | null = null;

export async function initializeModel(): Promise<void> {
  if (!model) {
    model = new DecisionTree(5, 2);
    model.train(soilDataset.inputs, soilDataset.labels.map(l => l[0]));
  }
}

export async function analyzeSoil(soilData: SoilData): Promise<Recommendation> {
  try {
    await initializeModel();
    if (!model) throw new Error('Failed to initialize model');

    const features = [
      soilData.pH,
      soilData.nitrogen,
      soilData.phosphorus,
      soilData.potassium,
      soilData.organicMatter,
      soilData.moisture
    ];

    const score = model.predict(features);
    return generateRecommendation(soilData, score);
  } catch (error) {
    console.error('Soil analysis failed:', error);
    throw new Error('Failed to analyze soil data');
  }
}

function generateRecommendation(soilData: SoilData, score: number): Recommendation {
  const recommendations: string[] = [];
  const fertilizers: string[] = [];

  // pH recommendations
  if (soilData.pH < 6.0) {
    recommendations.push("Apply agricultural lime to increase soil pH");
    fertilizers.push("Dolomitic Lime");
  } else if (soilData.pH > 7.5) {
    recommendations.push("Apply elemental sulfur to decrease soil pH");
    fertilizers.push("Elemental Sulfur");
  }

  // NPK recommendations
  if (soilData.nitrogen < 140) {
    recommendations.push("Nitrogen levels are low");
    fertilizers.push("Urea (46-0-0)", "Ammonium Sulfate (21-0-0)");
  }

  if (soilData.phosphorus < 50) {
    recommendations.push("Phosphorus levels need improvement");
    fertilizers.push("Triple Super Phosphate (0-46-0)");
  }

  if (soilData.potassium < 200) {
    recommendations.push("Increase potassium levels");
    fertilizers.push("Muriate of Potash (0-0-60)");
  }

  // Organic matter recommendations
  if (soilData.organicMatter < 3.0) {
    recommendations.push("Add organic matter to improve soil structure");
    fertilizers.push("Composted Manure", "Green Manure");
  }

  // Irrigation advice based on moisture and score
  let irrigation = "Maintain current irrigation schedule";
  if (soilData.moisture < 50) {
    irrigation = "Increase irrigation frequency. Consider installing a drip irrigation system";
  } else if (soilData.moisture > 70) {
    irrigation = "Reduce irrigation frequency. Ensure proper drainage to prevent waterlogging";
  }

  return {
    score,
    recommendation: recommendations.join(". "),
    fertilizers: [...new Set(fertilizers)],
    irrigation
  };
}