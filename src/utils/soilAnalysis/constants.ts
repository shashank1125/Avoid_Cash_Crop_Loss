export const SOIL_THRESHOLDS = {
  pH: {
    min: 6.0,
    max: 7.5
  },
  nitrogen: {
    min: 140
  },
  phosphorus: {
    min: 50
  },
  potassium: {
    min: 200
  },
  organicMatter: {
    min: 3.0
  },
  moisture: {
    min: 50,
    max: 70
  }
} as const;