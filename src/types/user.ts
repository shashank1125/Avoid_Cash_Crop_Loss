export interface User {
  id: string;
  name: string;
  phone: string;
  language: 'en' | 'hi' | 'kn';
  cropType: 'coconut' | 'areca';
  notificationTime: string; // 24-hour format "HH:mm"
  createdAt: Date;
}

export interface IrrigationSchedule {
  cropType: 'coconut' | 'areca';
  duration: number; // minutes
  frequency: number; // times per day
  timeOfDay: string[]; // array of "HH:mm" strings
}