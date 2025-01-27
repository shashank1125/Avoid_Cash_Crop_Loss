# Avoid Cash Crop Loss

**Avoid Cash Crop Loss** is a project aimed at helping farmers mitigate cash crop losses by providing timely and relevant solutions for diseases affecting coconut and areca nut crops. The project focuses on creating a dataset that contains disease details, precautions, cures, and both natural and inorganic solutions based on soil content during different seasons.

---

## Features

- **Dataset Creation**:
  - Detailed information about coconut and areca nut crop diseases.
  - Includes disease-specific data for different seasons in Udupi.
  - Provides solutions, both natural and inorganic, based on monthly soil content.

- **AI-Powered Recommendations**:
  - Utilizes a Decision Tree model for disease prediction.
  - Suggests actionable solutions for farmers.

- **Interactive UI**:
  - User-friendly interface for farmers to input data and get suggestions.
  - Supports analysis and visualization of disease trends.

---

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML, CSS, JavaScript
- **Database**: CSV files and/or relational databases
- **Machine Learning**: 
  - Decision Tree Classifier from scikit-learn
  - pandas for data handling
- **Visualization**: matplotlib, seaborn

---
## Snapshots
![Screenshot 2025-01-27 103600](https://github.com/user-attachments/assets/0703597f-e6e2-48c1-ae29-66d799c5570b)
![Screenshot 2025-01-27 103608](https://github.com/user-attachments/assets/b1e7d437-02ed-41ab-8528-9539b342f387)
![Screenshot 2025-01-27 103621](https://github.com/user-attachments/assets/b1c920fc-9bed-4acc-a840-45bc92c3e287)
![Screenshot 2025-01-27 103911](https://github.com/user-attachments/assets/96124c59-8ba9-4f66-a248-5781d3d03391)
![Screenshot 2025-01-27 104011](https://github.com/user-attachments/assets/4e5d808d-49f8-4ffd-87fe-46e51267beb9)
![Screenshot 2025-01-27 104537](https://github.com/user-attachments/assets/d02604de-1352-46e0-8133-c9d23db894b6)

## Machine Learning Model

The project leverages a **Decision Tree Classifier** to predict crop diseases based on farmer input data. 

### Steps for Training the Model:
```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pandas as pd

# Load the dataset
data = pd.read_csv('crop_diseases.csv')

# Split the dataset
X = data[['soil_condition', 'symptoms', 'season', 'crop_type']]
y = data['disease']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the Decision Tree model
model = DecisionTreeClassifier()
model.fit(X_train, y_train)

# Test the model
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Model Accuracy: {accuracy:.2f}")





