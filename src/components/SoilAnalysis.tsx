import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Card from './ui/Card';
import { SoilData, Recommendation } from '../types/soil';
import { analyzeSoil } from '../utils/soilAnalysis';
import CropSelector from './soil-analysis/CropSelector';
import AnalysisForm from './soil-analysis/AnalysisForm';
import AnalysisResult from './soil-analysis/AnalysisResult';

const SoilAnalysis = () => {
  const { t } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState<'coconut' | 'areca' | null>(null);
  const [soilData, setSoilData] = useState<SoilData>({
    pH: 6.5,
    nitrogen: 140,
    phosphorus: 50,
    potassium: 200,
    organicMatter: 3.5,
    moisture: 60
  });

  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCropSelect = (crop: 'coconut' | 'areca') => {
    setSelectedCrop(crop);
    setRecommendation(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setSoilData(prev => ({
      ...prev,
      [e.target.name]: isNaN(value) ? 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCrop) return;

    setLoading(true);
    setError(null);
    
    try {
      const result = await analyzeSoil(soilData);
      setRecommendation(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setRecommendation(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t('soilAnalysis.title')}
          </h1>
          <p className="text-gray-600">
            {t('SoilAnalysis')}
          </p>
        </div>

        <Card>
          <CropSelector
            selectedCrop={selectedCrop}
            onSelect={handleCropSelect}
          />

          {selectedCrop && (
            <AnalysisForm
              soilData={soilData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              isLoading={loading}
            />
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {recommendation && (
            <AnalysisResult recommendation={recommendation} />
          )}
        </Card>
      </div>
    </div>
  );
};

export default SoilAnalysis;