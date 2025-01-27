export interface RegisterFormData {
  name: string;
  phone: string;
  language: 'en' | 'hi' | 'kn';
  cropType: 'coconut' | 'areca';
  notificationTime: string;
}