import React from 'react';
import { Menu, Home, Bell, Languages, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-green-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Menu className="h-8 w-8" />
          <span className="text-2xl font-bold">{t('Farmer Friend')}</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-1 hover:text-green-200">
            <Home className="h-5 w-5" />
            <span>{t('Home')}</span>
          </Link>
          <Link to="/solutions" className="flex items-center space-x-1 hover:text-green-200">
            <Bell className="h-5 w-5" />
            <span>{t('Solutions')}</span>
          </Link>
          <Link to="/soil-analysis" className="flex items-center space-x-1 hover:text-green-200">
            <TestTube className="h-5 w-5" />
            <span>{t('SoilAnalysis')}</span>
          </Link>
          <div className="flex items-center space-x-1">
            <Languages className="h-5 w-5" />
            <select 
              className="bg-green-600 text-white border-none outline-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'kn' | 'hi')}
            >
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;