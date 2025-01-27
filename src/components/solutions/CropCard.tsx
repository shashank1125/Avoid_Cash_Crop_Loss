import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../ui/Card';

interface CropCardProps {
  icon: LucideIcon;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const CropCard = ({ icon: Icon, title, isSelected, onClick }: CropCardProps) => (
  <button
    onClick={onClick}
    className="w-full"
  >
    <Card className={`p-6 text-center transition-all duration-300 transform hover:scale-105 ${
      isSelected ? 'bg-green-600 text-white' : 'hover:bg-green-50'
    }`}>
      <Icon className={`h-16 w-16 mx-auto mb-4 transition-transform duration-300 ${
        isSelected ? 'text-white' : 'text-green-600'
      }`} />
      <h2 className="text-xl font-semibold">{title}</h2>
    </Card>
  </button>
)

export default CropCard;