import { Language } from '../../types/language';
import { CropType } from '../../types/crops';

interface NotificationMessages {
  irrigation: (duration: number, cropType: CropType) => string;
  weather: (temp: number, rainfall: number) => string;
}

export const messages: Record<Language, NotificationMessages> = {
  en: {
    irrigation: (duration, cropType) => 
      `Time to water your ${cropType} plants! Water for ${duration} minutes to maintain optimal soil moisture.`,
    weather: (temp, rainfall) =>
      `Today's forecast: Temperature ${temp}°C, Rainfall probability ${rainfall}%`
  },
  hi: {
    irrigation: (duration, cropType) =>
      `आपके ${cropType === 'coconut' ? 'नारियल' : 'सुपारी'} के पौधों को पानी देने का समय! ${duration} मिनट तक पानी दें।`,
    weather: (temp, rainfall) =>
      `आज का मौसम: तापमान ${temp}°C, वर्षा की संभावना ${rainfall}%`
  },
  kn: {
    irrigation: (duration, cropType) =>
      `ನಿಮ್ಮ ${cropType === 'coconut' ? 'ತೆಂಗಿನ' : 'ಅಡಿಕೆ'} ಗಿಡಗಳಿಗೆ ನೀರು ಹಾಕುವ ಸಮಯ! ${duration} ನಿಮಿಷಗಳ ಕಾಲ ನೀರು ಹಾಕಿ.`,
    weather: (temp, rainfall) =>
      `ಇಂದಿನ ಹವಾಮಾನ: ತಾಪಮಾನ ${temp}°C, ಮಳೆಯ ಸಾಧ್ಯತೆ ${rainfall}%`
  }
};