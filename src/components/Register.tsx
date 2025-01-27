import React, { useState } from 'react';
import { Sprout } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { registerUser } from '../services/api';
import Card from './ui/Card';
import RegisterForm from './register/RegisterForm';
import { RegisterFormData } from '../types/register';

const Register = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    phone: '',
    language: 'en',
    cropType: 'coconut',
    notificationTime: '08:00'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert(t('register.success'));
    } catch (error) {
      console.error('Registration failed:', error);
      alert(t('register.error'));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center mb-8">
          <Sprout className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            {t('Registration')}
          </h1>
          <p className="text-xl text-green-700">
            {t('Friend in Need')}
          </p>
        </div>
        
        <Card className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('register.title')}
            </h2>
            <p className="text-gray-600">{t('Continuous Improvements')}</p>
          </div>
          
          <RegisterForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Card>
      </div>
    </div>
  );
};

export default Register;