import React, { useState } from 'react';
import { PalmtreeIcon, TreePine } from 'lucide-react'; // Changed to correct icon names
import Card from './ui/Card';
import CropCard from './solutions/CropCard';
import DiseaseInfo from './solutions/DiseaseInfo';
import { cropData } from '../data/cropData';

const Solutions = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Crop Solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select your crop to get expert solutions for common diseases and problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <CropCard
            icon={PalmtreeIcon}
            title="Coconut Solutions"
            isSelected={selectedCrop === 'coconut'}
            onClick={() => setSelectedCrop('coconut')}
          />
          <CropCard
            icon={TreePine}
            title="Areca Nut Solutions"
            isSelected={selectedCrop === 'areca'}
            onClick={() => setSelectedCrop('areca')}
          />
        </div>

        {selectedCrop && (
          <DiseaseInfo 
            cropType={selectedCrop} 
            diseases={cropData[selectedCrop].diseases} 
          />
        )}
      </div>
    </div>
  );
};

export default Solutions;