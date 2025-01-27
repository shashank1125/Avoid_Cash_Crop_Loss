"""
Decision Tree model for soil analysis.
"""

import numpy as np
from sklearn.tree import DecisionTreeRegressor
import joblib

class SoilAnalysisModel:
    def __init__(self, max_depth=5, min_samples_split=2):
        """Initialize the soil analysis model."""
        self.model = DecisionTreeRegressor(
            max_depth=max_depth,
            min_samples_split=min_samples_split,
            random_state=42
        )
        
    def train(self, X, y):
        """Train the model with the given data."""
        self.model.fit(X, y)
        
    def predict(self, features):
        """Predict soil health score for given features."""
        features_array = np.array(features).reshape(1, -1)
        return float(self.model.predict(features_array)[0])
    
    def save(self, filepath):
        """Save the trained model to a file."""
        joblib.dump(self.model, filepath)
    
    @classmethod
    def load(cls, filepath):
        """Load a trained model from a file."""
        instance = cls()
        instance.model = joblib.load(filepath)
        return instance