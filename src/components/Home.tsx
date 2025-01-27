import React from 'react';
import { Sprout, Bell, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Hero from './home/Hero';
import FeatureCard from './features/FeatureCard';

const features = [
  {
    icon: Sprout,
    titleKey: 'SoilAnalysis',
    descriptionKey: 'Unlock the potential of your land with precise soil analysis – tailor your farming practices for healthier crops and higher yields'
  },
  {
    icon: Bell,
    titleKey: 'WeatherAlerts',
    descriptionKey: 'Stay ahead with real-time weather alerts – personalized guidance to protect your crops and optimize irrigation'
  },
  {
    icon: MapPin,
    titleKey: 'ExpertGuidance',
    descriptionKey: 'Gain valuable insights with expert guidance – customized solutions to nurture your crops and boost productivity.'
  }
];

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Hero />
      
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('Empowering Farmers with Innovative Solutions')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;