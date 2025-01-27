import { Node } from './Node';

export class DecisionTree {
  constructor(maxDepth = 5, minSamplesSplit = 2) {
    this.root = null;
    this.maxDepth = maxDepth;
    this.minSamplesSplit = minSamplesSplit;
  }

  calculateGini(y) {
    const classes = new Map();
    for (const label of y) {
      classes.set(label, (classes.get(label) || 0) + 1);
    }
    
    let gini = 1;
    const n = y.length;
    for (const count of classes.values()) {
      const p = count / n;
      gini -= p * p;
    }
    return gini;
  }

  findBestSplit(X, y, features) {
    let bestSplit = {
      feature: 0,
      threshold: 0,
      leftIndices: [],
      rightIndices: [],
      gain: -1
    };

    const n = y.length;
    const parentGini = this.calculateGini(y);

    for (const feature of features) {
      const values = X.map(row => row[feature]);
      const uniqueValues = [...new Set(values)].sort((a, b) => a - b);

      for (let i = 0; i < uniqueValues.length - 1; i++) {
        const threshold = (uniqueValues[i] + uniqueValues[i + 1]) / 2;
        const leftIndices = [];
        const rightIndices = [];

        for (let j = 0; j < n; j++) {
          if (X[j][feature] <= threshold) {
            leftIndices.push(j);
          } else {
            rightIndices.push(j);
          }
        }

        if (leftIndices.length < this.minSamplesSplit || rightIndices.length < this.minSamplesSplit) {
          continue;
        }

        const leftGini = this.calculateGini(leftIndices.map(idx => y[idx]));
        const rightGini = this.calculateGini(rightIndices.map(idx => y[idx]));
        
        const leftWeight = leftIndices.length / n;
        const rightWeight = rightIndices.length / n;
        const weightedGini = leftWeight * leftGini + rightWeight * rightGini;
        const gain = parentGini - weightedGini;

        if (gain > bestSplit.gain) {
          bestSplit = { feature, threshold, leftIndices, rightIndices, gain };
        }
      }
    }

    return bestSplit;
  }

  buildTree(X, y, depth = 0) {
    const n = y.length;
    const features = Array.from({ length: X[0].length }, (_, i) => i);
    
    if (depth >= this.maxDepth || n < this.minSamplesSplit || new Set(y).size === 1) {
      const node = new Node();
      node.value = y.reduce((a, b) => a + b, 0) / n;
      return node;
    }

    const bestSplit = this.findBestSplit(X, y, features);
    if (bestSplit.gain <= 0) {
      const node = new Node();
      node.value = y.reduce((a, b) => a + b, 0) / n;
      return node;
    }

    const node = new Node(bestSplit.feature, bestSplit.threshold);
    
    const leftX = bestSplit.leftIndices.map(idx => X[idx]);
    const leftY = bestSplit.leftIndices.map(idx => y[idx]);
    node.left = this.buildTree(leftX, leftY, depth + 1);

    const rightX = bestSplit.rightIndices.map(idx => X[idx]);
    const rightY = bestSplit.rightIndices.map(idx => y[idx]);
    node.right = this.buildTree(rightX, rightY, depth + 1);

    return node;
  }

  train(X, y) {
    this.root = this.buildTree(X, y);
  }

  predict(features) {
    if (!this.root) throw new Error('Model not trained');
    
    let node = this.root;
    while (node.value === null) {
      if (features[node.feature] <= node.threshold) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return node.value;
  }
}