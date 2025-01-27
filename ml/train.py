"""
Script to train the soil analysis model.
"""

from models.decision_tree import SoilAnalysisModel
from datasets.soil_data import SOIL_DATASET

def train_model():
    """Train and save the soil analysis model."""
    # Initialize model
    model = SoilAnalysisModel(max_depth=5, min_samples_split=2)
    
    # Train model
    model.train(SOIL_DATASET['features'], SOIL_DATASET['labels'])
    
    # Save trained model
    model.save('models/trained/soil_model.joblib')
    
if __name__ == '__main__':
    train_model()
    print("Model training completed successfully!")