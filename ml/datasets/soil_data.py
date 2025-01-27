"""
Soil quality dataset for training the model.
Features: pH, Nitrogen (ppm), Phosphorus (ppm), Potassium (ppm), Organic Matter (%), Moisture (%)
Label: Soil Health Score (0-1)
"""

SOIL_DATASET = {
    'features': [
        # [pH, N, P, K, organic matter, moisture]
        [6.5, 140, 50, 200, 3.5, 60],  # Optimal
        [6.2, 130, 45, 190, 3.2, 58],  # Good
        [5.8, 110, 35, 170, 2.8, 52],  # Sub-optimal
        [7.0, 150, 55, 210, 3.8, 62],  # Good
        [5.5, 100, 30, 160, 2.5, 48],  # Poor
        [6.8, 145, 52, 205, 3.6, 61],  # Optimal
        [7.2, 160, 58, 220, 4.0, 65],  # Good
        [5.2, 90, 25, 150, 2.2, 45],   # Poor
        [6.4, 135, 48, 195, 3.3, 59],  # Good
        [6.6, 142, 51, 202, 3.4, 60]   # Optimal
    ],
    'labels': [
        1.0,   # Optimal
        0.85,  # Good
        0.65,  # Sub-optimal
        0.9,   # Good
        0.4,   # Poor
        0.95,  # Optimal
        0.88,  # Good
        0.35,  # Poor
        0.82,  # Good
        0.98   # Optimal
    ]
}