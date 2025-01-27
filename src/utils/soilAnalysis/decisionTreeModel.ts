import { DecisionTree } from '../decisionTree/DecisionTree';
import { UDUPI_SOIL_DATA } from '../../data/cropSpecificData';
import { SoilData } from '../../types/soil';

const models: Record<string, DecisionTree> = {};

export async function getTrainedModel(cropType: 'coconut' | 'areca'): Promise<DecisionTree> {
  if (!models[cropType]) {
    const model = new DecisionTree(5, 2);
    const dataset = UDUPI_SOIL_DATA[cropType];
    
    // Prepare training data
    const features = dataset.samples;
    const labels = features.map(sample => {
      // Calculate health score based on optimal ranges
      let score = 0;
      const ranges = dataset.optimalRanges;
      
      // pH
      if (sample[0] >= ranges.pH.min && sample[0] <= ranges.pH.max) score++;
      // Nitrogen
      if (sample[1] >= ranges.nitrogen.min && sample[1] <= ranges.nitrogen.max) score++;
      // Phosphorus
      if (sample[2] >= ranges.phosphorus.min && sample[2] <= ranges.phosphorus.max) score++;
      // Potassium
      if (sample[3] >= ranges.potassium.min && sample[3] <= ranges.potassium.max) score++;
      // Organic Matter
      if (sample[4] >= ranges.organicMatter.min && sample[4] <= ranges.organicMatter.max) score++;
      // Moisture
      if (sample[5] >= ranges.moisture.min && sample[5] <= ranges.moisture.max) score++;
      
      return score / 6; // Normalize score to 0-1 range
    });

    // Train model
    model.train(features, labels);
    models[cropType] = model;
  }

  return models[cropType];
}

export async function predictSoilHealth(soilData: SoilData, cropType: 'coconut' | 'areca'): Promise<number> {
  const model = await getTrainedModel(cropType);
  const features = [
    soilData.pH,
    soilData.nitrogen,
    soilData.phosphorus,
    soilData.potassium,
    soilData.organicMatter,
    soilData.moisture
  ];
  
  return model.predict(features);
}