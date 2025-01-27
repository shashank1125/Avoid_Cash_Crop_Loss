export class Node {
  constructor(feature = 0, threshold = 0) {
    this.value = null;
    this.feature = feature;
    this.threshold = threshold;
    this.left = null;
    this.right = null;
  }
}