import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../ui/Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <Card className="p-6 group hover:bg-green-50 transition-colors duration-300">
    <div className="text-center">
      <Icon className="h-12 w-12 mx-auto text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Card>
)

export default FeatureCard;