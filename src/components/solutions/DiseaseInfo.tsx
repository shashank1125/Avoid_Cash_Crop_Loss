import React from 'react';
import Card from '../ui/Card';
import { Disease } from '../../types/crops';
import DiseaseCard from './DiseaseCard';

interface DiseaseInfoProps {
  cropType: 'coconut' | 'areca';
  diseases: Disease[];
}

const DiseaseInfo = ({ cropType, diseases }: DiseaseInfoProps) => (
  <Card className="p-8">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
      {cropType === 'coconut' ? 'Coconut' : 'Areca Nut'} Diseases
    </h2>
    <div className="space-y-8">
      {diseases.map((disease, index) => (
        <DiseaseCard key={index} disease={disease} />
      ))}
    </div>
  </Card>
);

export default DiseaseInfo;