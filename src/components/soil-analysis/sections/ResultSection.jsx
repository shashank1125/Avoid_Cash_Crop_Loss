import React from 'react';

function ResultSection({ score, t }) {
  return (
    <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-4">
      {t('soilAnalysis.results.soilHealth')}: {(score * 100).toFixed(1)}%
    </h3>
  );
}

export default ResultSection;