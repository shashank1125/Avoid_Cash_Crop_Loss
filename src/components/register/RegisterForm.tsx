import React from 'react';
import { Send, User, Phone, Clock, Sprout } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import Button from '../ui/Button';
import { RegisterFormData } from '../../types/register';

interface RegisterFormProps {
  formData: RegisterFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ formData, onChange, onSubmit }) => {
  const { t } = useLanguage();

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <User className="h-4 w-4 mr-2" />
          {t('Name')}
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Phone className="h-4 w-4 mr-2" />
          {t('PhoneNumber')}
        </label>
        <input
          type="tel"
          name="phone"
          required
          pattern="[0-9]{10}"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={formData.phone}
          onChange={onChange}
        />
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Sprout className="h-4 w-4 mr-2" />
          {t('CropType')}
        </label>
        <select
          name="cropType"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={formData.cropType}
          onChange={onChange}
        >
          <option value="coconut">{t('Coconut')}</option>
          <option value="areca">{t('Areca')}</option>
        </select>
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Clock className="h-4 w-4 mr-2" />
          {t('PreferredTime')}
        </label>
        <input
          type="time"
          name="notificationTime"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={formData.notificationTime}
          onChange={onChange}
        />
      </div>

      <Button type="submit" className="w-full">
        <Send className="h-5 w-5 mr-2" />
        <span>{t('Submit')}</span>
      </Button>
    </form>
  );
};

export default RegisterForm;