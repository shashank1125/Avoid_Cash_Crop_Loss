import React from 'react';

function IrrigationSection({ irrigation, t }) {
  if (!irrigation) return null;
  
  return (
    <div>
      <h4 className="font-semibold text-green-700 mb-2">
        {t('soilAnalysis.results.irrigation')}:
      </h4>
      <p className="text-gray-700">{t(`irrigation.${irrigation}`)}</p>
    </div>
  );
}

export default IrrigationSection;