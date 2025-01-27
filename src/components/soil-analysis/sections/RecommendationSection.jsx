import React from 'react';

function RecommendationSection({ recommendation, t }) {
  if (!recommendation) return null;
  
  return (
    <div>
      <h4 className="font-semibold text-green-700 mb-2">
        {t('soilAnalysis.results.recommendations')}:
      </h4>
      <p className="text-gray-700">{recommendation}</p>
    </div>
  );
}

export default RecommendationSection;