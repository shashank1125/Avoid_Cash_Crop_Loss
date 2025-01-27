export async function getPythonPrediction(soilData) {
  try {
    const process = new Promise((resolve) => {
      // Simulate Python prediction
      const mockScore = 0.85;
      resolve(mockScore);
    });

    return await process;
  } catch (error) {
    console.error('Python prediction failed:', error);
    throw new Error('Failed to get prediction from Python model');
  }
}