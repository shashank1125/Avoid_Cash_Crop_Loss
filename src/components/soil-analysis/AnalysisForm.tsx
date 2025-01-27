import React from 'react';
import { Beaker, Droplets, Gauge } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { SoilData } from '../../types/soil';

interface AnalysisFormProps {
  soilData: SoilData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const AnalysisForm: React.FC<AnalysisFormProps> = ({ 
  soilData, 
  onChange, 
  onSubmit, 
  isLoading 
}) => {
  const { t } = useLanguage();

  return (
    <form onSubmit={onSubmit} className="space-y-6 p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Gauge className="h-4 w-4 mr-2" />
            {t('soilAnalysis.parameters.pH')}
          </label>
          <input
            type="number"
            name="pH"
            step="0.1"
            min="0"
            max="14"
            required
            value={soilData.pH || ''}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Beaker className="h-4 w-4 mr-2" />
            {t('soilAnalysis.parameters.nitrogen')}
          </label>
          <input
            type="number"
            name="nitrogen"
            min="0"
            required
            value={soilData.nitrogen || ''}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Beaker className="h-4 w-4 mr-2" />
            {t('soilAnalysis.parameters.phosphorus')}
          </label>
          <input
            type="number"
            name="phosphorus"
            min="0"
            required
            value={soilData.phosphorus || ''}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Beaker className="h-4 w-4 mr-2" />
            {t('soilAnalysis.parameters.potassium')}
          </label>
          <input
            type="number"
            name="potassium"
            min="0"
            required
            value={soilData.potassium || ''}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Beaker className="h-4 w-4 mr-2" />
            {t('soilAnalysis.parameters.organicMatter')}
          </label>
          <input
            type="number"
            name="organicMatter"
            step="0.1"
            min="0"
            required
            value={soilData.organicMatter || ''}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Droplets className="h-4 w-4 mr-2" />
            {t('soilAnalysis.parameters.moisture')}
          </label>
          <input
            type="number"
            name="moisture"
            min="0"
            max="100"
            required
            value={soilData.moisture || ''}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-green-400"
      >
        {isLoading ? t('soilAnalysis.analyzing') : t('soilAnalysis.analyze')}
      </button>
    </form>
  );
};

export default AnalysisForm;