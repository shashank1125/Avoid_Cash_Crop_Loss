import React from 'react';

function FertilizerSection({ fertilizers, t }) {
  if (!fertilizers?.length) return null;
  
  return (
    <div>
      <h4 className="font-semibold text-green-700 mb-2">
        {t('soilAnalysis.results.fertilizers')}:
      </h4>
      <ul className="list-disc list-inside text-gray-700">
        {fertilizers.map((fertilizer, index) => (
          <li key={index}>{t(`fertilizers.${fertilizer}`)}</li>
        ))}
      </ul>
    </div>
  );
}

export default FertilizerSection;