import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ResultSection from './sections/ResultSection';
import RecommendationSection from './sections/RecommendationSection';
import FertilizerSection from './sections/FertilizerSection';
import IrrigationSection from './sections/IrrigationSection';

function AnalysisResult({ recommendation }) {
  const { t } = useLanguage();
  
  return (
    <div className="mt-8 space-y-4">
      <div className="bg-green-50 p-4 md:p-6 rounded-lg">
        <ResultSection score={recommendation.score} t={t} />
        <div className="space-y-4">
          <RecommendationSection recommendation={recommendation.recommendation} t={t} />
          <FertilizerSection fertilizers={recommendation.fertilizers} t={t} />
          <IrrigationSection irrigation={recommendation.irrigation} t={t} />
        </div>
      </div>
    </div>
  );
}

export default AnalysisResult;