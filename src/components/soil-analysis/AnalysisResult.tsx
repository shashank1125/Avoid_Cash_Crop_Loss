import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Recommendation } from '../../types/soil';

interface AnalysisResultProps {
  recommendation: Recommendation;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ recommendation }) => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-8 space-y-4 p-6">
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-4">
          {t('soilAnalysis.results.healthScore')}: {(recommendation.score * 100).toFixed(1)}%
        </h3>
        <div className="space-y-4">
          {recommendation.recommendation && (
            <div>
              <h4 className="font-semibold text-green-700 mb-2">
                {t('soilAnalysis.results.recommendations')}:
              </h4>
              <p className="text-gray-700">{t(recommendation.recommendation)}</p>
            </div>
          )}
          {recommendation.fertilizers.length > 0 && (
            <div>
              <h4 className="font-semibold text-green-700 mb-2">
                {t('soilAnalysis.results.fertilizers')}:
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                {recommendation.fertilizers.map((fertilizer, index) => (
                  <li key={index}>{t(`soilAnalysis.fertilizers.${fertilizer}`)}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-green-700 mb-2">
              {t('soilAnalysis.results.irrigation')}:
            </h4>
            <p className="text-gray-700">{t(`soilAnalysis.irrigation.${recommendation.irrigation}`)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;