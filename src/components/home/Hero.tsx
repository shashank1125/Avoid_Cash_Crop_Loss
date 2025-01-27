import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import Button from '../ui/Button';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[600px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80")'
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-green-400 font-semibold">{t('smartFarmingAssistant')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('betterFarmingBetterYield')}
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {t('aiPoweredFarmingDescription')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/solutions">
                <Button variant="primary" className="w-full sm:w-auto">
                  <span>{t('exploreSolutions')}</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" className="w-full sm:w-auto">
                  {t('registerForUpdates')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-50 to-transparent" />
    </div>
  );
};

export default Hero;