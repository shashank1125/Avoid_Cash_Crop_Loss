export class Node {
  value: number | null;
  feature: number;
  threshold: number;
  left: Node | null;
  right: Node | null;

  constructor(feature: number = 0, threshold: number = 0) {
    this.value = null;
    this.feature = feature;
    this.threshold = threshold;
    this.left = null;
    this.right = null;
  }
}

export interface Split {
  feature: number;
  threshold: number;
  leftIndices: number[];
  rightIndices: number[];
  gain: number;
}