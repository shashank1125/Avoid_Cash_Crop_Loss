"""
Script to make predictions using the trained model.
"""

import json
import sys
from models.decision_tree import SoilAnalysisModel

def predict(input_data):
    """Make prediction using the trained model."""
    try:
        # Load trained model
        model = SoilAnalysisModel.load('models/trained/soil_model.joblib')
        
        # Extract features
        features = [
            input_data['pH'],
            input_data['nitrogen'],
            input_data['phosphorus'],
            input_data['potassium'],
            input_data['organicMatter'],
            input_data['moisture']
        ]
        
        # Make prediction
        score = model.predict(features)
        
        return {'score': score}
        
    except Exception as e:
        return {'error': str(e)}

if __name__ == '__main__':
    # Read input from stdin
    input_data = json.loads(sys.stdin.read())
    
    # Make prediction
    result = predict(input_data)
    
    # Output result as JSON
    print(json.dumps(result))