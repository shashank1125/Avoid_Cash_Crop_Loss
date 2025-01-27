import twilio from 'twilio';
import { User } from '../types/user';
import { getIrrigationSchedule } from '../utils/irrigation';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const messages = {
  en: {
    irrigation: (duration: number, cropType: string) => 
      `Time to water your ${cropType} plants! Water for ${duration} minutes to maintain optimal soil moisture.`
  },
  kn: {
    irrigation: (duration: number, cropType: string) => 
      `ನಿಮ್ಮ ${cropType === 'coconut' ? 'ತೆಂಗಿನ' : 'ಅಡಿಕೆ'} ಗಿಡಗಳಿಗೆ ನೀರು ಹಾಕುವ ಸಮಯ! ${duration} ನಿಮಿಷಗಳ ಕಾಲ ನೀರು ಹಾಕಿ.`
  },
  hi: {
    irrigation: (duration: number, cropType: string) => 
      `आपके ${cropType === 'coconut' ? 'नारियल' : 'सुपारी'} के पौधों को पानी देने का समय! ${duration} मिनट तक पानी दें।`
  }
};

export async function sendIrrigationNotification(user: User) {
  const schedule = getIrrigationSchedule(user.cropType);
  const message = messages[user.language].irrigation(schedule.duration, user.cropType);

  try {
    await client.messages.create({
      body: message,
      to: user.phone,
      from: process.env.TWILIO_PHONE_NUMBER
    });
  } catch (error) {
    console.error('Failed to send notification:', error);
    throw new Error('Notification failed');
  }
}