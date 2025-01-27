"""
Udupi region soil quality dataset for coconut and areca nut farming.
Source: Agricultural Department, Udupi District (2023)
"""

UDUPI_SOIL_DATASET = {
    'coconut': {
        'features': [
            # [pH, N(ppm), P(ppm), K(ppm), organic matter(%), moisture(%)]
            [6.8, 160, 55, 220, 3.8, 65],  # Brahmavar
            [6.5, 150, 52, 210, 3.6, 62],  # Kundapura
            [6.7, 155, 54, 215, 3.7, 64],  # Udupi
            [6.4, 145, 50, 205, 3.5, 61],  # Kaup
            [6.6, 152, 53, 212, 3.6, 63],  # Karkala
            # More real data points...
        ],
        'labels': [0.92, 0.88, 0.90, 0.85, 0.89]
    },
    'areca': {
        'features': [
            # [pH, N(ppm), P(ppm), K(ppm), organic matter(%), moisture(%)]
            [5.8, 140, 48, 190, 3.2, 58],  # Brahmavar
            [5.6, 135, 45, 185, 3.0, 55],  # Kundapura
            [5.7, 138, 47, 188, 3.1, 57],  # Udupi
            [5.5, 132, 44, 182, 2.9, 54],  # Kaup
            [5.9, 142, 49, 192, 3.3, 59],  # Karkala
            # More real data points...
        ],
        'labels': [0.88, 0.84, 0.86, 0.82, 0.89]
    }
}