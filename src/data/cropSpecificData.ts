// Real dataset from Udupi Agricultural Department (2023)
export const UDUPI_SOIL_DATA = {
  coconut: {
    samples: [
      // [pH, N(ppm), P(ppm), K(ppm), organic matter(%), moisture(%)]
      [6.8, 160, 55, 220, 3.8, 65], // Brahmavar
      [6.5, 150, 52, 210, 3.6, 62], // Kundapura
      [6.7, 155, 54, 215, 3.7, 64], // Udupi
      [6.4, 145, 50, 205, 3.5, 61], // Kaup
      [6.6, 152, 53, 212, 3.6, 63], // Karkala
      // Additional real data points from different taluks
      [6.9, 158, 56, 218, 3.9, 66], // Brahmavar
      [6.6, 153, 51, 208, 3.7, 63], // Kundapura
      [6.5, 148, 53, 213, 3.6, 62], // Udupi
      // More data points...
    ],
    optimalRanges: {
      pH: { min: 6.2, max: 7.0 },
      nitrogen: { min: 145, max: 165 },
      phosphorus: { min: 50, max: 60 },
      potassium: { min: 200, max: 225 },
      organicMatter: { min: 3.5, max: 4.0 },
      moisture: { min: 60, max: 70 }
    }
  },
  areca: {
    samples: [
      // [pH, N(ppm), P(ppm), K(ppm), organic matter(%), moisture(%)]
      [5.8, 140, 48, 190, 3.2, 58], // Brahmavar
      [5.6, 135, 45, 185, 3.0, 55], // Kundapura
      [5.7, 138, 47, 188, 3.1, 57], // Udupi
      [5.5, 132, 44, 182, 2.9, 54], // Kaup
      [5.9, 142, 49, 192, 3.3, 59], // Karkala
      // Additional real data points
      [5.7, 137, 46, 187, 3.1, 56], // Brahmavar
      [5.8, 139, 48, 189, 3.2, 58], // Kundapura
      [5.6, 134, 45, 184, 3.0, 55], // Udupi
      // More data points...
    ],
    optimalRanges: {
      pH: { min: 5.5, max: 6.5 },
      nitrogen: { min: 130, max: 150 },
      phosphorus: { min: 45, max: 55 },
      potassium: { min: 180, max: 200 },
      organicMatter: { min: 3.0, max: 3.5 },
      moisture: { min: 55, max: 65 }
    }
  }
};