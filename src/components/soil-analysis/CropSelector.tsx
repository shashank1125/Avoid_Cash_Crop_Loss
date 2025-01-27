import React from 'react';
import { PalmtreeIcon, TreePine } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface CropSelectorProps {
  selectedCrop: 'coconut' | 'areca' | null;
  onSelect: (crop: 'coconut' | 'areca') => void;
}

const CropSelector: React.FC<CropSelectorProps> = ({ selectedCrop, onSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      <button
        onClick={() => onSelect('coconut')}
        className={`p-4 rounded-lg flex flex-col items-center ${
          selectedCrop === 'coconut'
            ? 'bg-green-600 text-white'
            : 'bg-white hover:bg-green-50'
        }`}
      >
        <PalmtreeIcon className={`h-8 w-8 mb-2 ${
          selectedCrop === 'coconut' ? 'text-white' : 'text-green-600'
        }`} />
        <span className="font-medium">{t('crops.coconut')}</span>
      </button>

      <button
        onClick={() => onSelect('areca')}
        className={`p-4 rounded-lg flex flex-col items-center ${
          selectedCrop === 'areca'
            ? 'bg-green-600 text-white'
            : 'bg-white hover:bg-green-50'
        }`}
      >
        <TreePine className={`h-8 w-8 mb-2 ${
          selectedCrop === 'areca' ? 'text-white' : 'text-green-600'
        }`} />
        <span className="font-medium">{t('crops.areca')}</span>
      </button>
    </div>
  );
};

export default CropSelector;