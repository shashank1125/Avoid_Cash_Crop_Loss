import * as tf from '@tensorflow/tfjs';
import { SoilData } from '../types/soil';

export class SoilAnalysisModel {
  private model: tf.LayersModel;
  private isInitialized: boolean = false;

  constructor() {
    this.model = this.createModel();
  }

  private createModel(): tf.LayersModel {
    const model = tf.sequential();
    
    model.add(tf.layers.dense({
      units: 12,
      activation: 'relu',
      inputShape: [6]
    }));
    
    model.add(tf.layers.dense({
      units: 8,
      activation: 'relu'
    }));
    
    model.add(tf.layers.dense({
      units: 1,
      activation: 'sigmoid'
    }));

    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy']
    });

    return model;
  }

  async train(inputs: number[][], labels: number[][]): Promise<void> {
    try {
      const xs = tf.tensor2d(inputs);
      const ys = tf.tensor2d(labels);

      await this.model.fit(xs, ys, {
        epochs: 50,
        batchSize: 32,
        validationSplit: 0.2,
        shuffle: true
      });

      this.isInitialized = true;

      xs.dispose();
      ys.dispose();
    } catch (error) {
      console.error('Training failed:', error);
      throw new Error('Model training failed');
    }
  }

  async predict(soilData: SoilData): Promise<number> {
    if (!this.isInitialized) {
      throw new Error('Model not trained');
    }

    try {
      const input = tf.tensor2d([[
        soilData.pH,
        soilData.nitrogen,
        soilData.phosphorus,
        soilData.potassium,
        soilData.organicMatter,
        soilData.moisture
      ]]);

      const prediction = this.model.predict(input) as tf.Tensor;
      const result = prediction.dataSync()[0];

      input.dispose();
      prediction.dispose();

      return result;
    } catch (error) {
      console.error('Prediction failed:', error);
      throw new Error('Prediction failed');
    }
  }
}