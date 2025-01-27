import React from 'react';
import { Disease } from '../../types/crops';

interface DiseaseCardProps {
  disease: Disease;
}

const DiseaseCard = ({ disease }: DiseaseCardProps) => (
  <div className="border-b border-gray-200 pb-6 last:border-0">
    <h3 className="text-2xl font-semibold mb-4 text-green-700">{disease.name}</h3>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">Causes:</h4>
        <p className="text-gray-700">{disease.causes}</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Precautions:</h4>
        <p className="text-gray-700">{disease.precautions}</p>
      </div>
      <div className="bg-amber-50 p-4 rounded-lg">
        <h4 className="font-semibold text-amber-800 mb-2">Solutions:</h4>
        <p className="text-gray-700">{disease.solutions}</p>
      </div>
    </div>
  </div>
);

export default DiseaseCard;