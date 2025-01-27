// Simulated weather data service
// In production, this would connect to a real weather API
export async function getWeatherData() {
  return {
    temperature: 28, // °C
    rainfall: 15,    // mm
    humidity: 75     // %
  };
}