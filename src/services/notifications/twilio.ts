import twilio from 'twilio';
import { User } from '../../types/user';
import { getWeatherData } from '../weather';
import { getIrrigationSchedule } from '../../utils/irrigation';

const client = twilio(
  process.env.VITE_TWILIO_ACCOUNT_SID!,
  process.env.VITE_TWILIO_AUTH_TOKEN!
);

const FROM_PHONE = process.env.VITE_TWILIO_PHONE_NUMBER!;

export async function sendWelcomeSMS(user: User) {
  try {
    const message = getLocalizedMessage(user.language, 'notifications.welcome', {
      cropType: user.cropType
    });

    await client.messages.create({
      body: message,
      to: user.phone,
      from: FROM_PHONE
    });

    console.log(`Welcome SMS sent to ${user.phone}`);
  } catch (error) {
    console.error('Failed to send welcome SMS:', error);
    throw new Error('SMS notification failed');
  }
}

export async function sendDailyUpdate(user: User) {
  try {
    const weather = await getWeatherData();
    const schedule = getIrrigationSchedule(user.cropType);

    // Get irrigation message based on crop type
    const irrigationKey = `notifications.irrigation.${user.cropType}`;
    const irrigationMsg = getLocalizedMessage(user.language, irrigationKey, {
      duration: schedule.duration
    });

    // Get weather message
    const weatherMsg = getLocalizedMessage(user.language, 'notifications.weather', {
      temperature: weather.temperature,
      rainfall: weather.rainfall
    });

    // Combine messages
    const fullMessage = `${irrigationMsg}\n\n${weatherMsg}`;

    await client.messages.create({
      body: fullMessage,
      to: user.phone,
      from: FROM_PHONE
    });

    console.log(`Daily update sent to ${user.phone}`);
  } catch (error) {
    console.error('Failed to send daily update:', error);
    throw new Error('Daily notification failed');
  }
}

function getLocalizedMessage(language: string, key: string, params: Record<string, any>) {
  const messages = {
    en: {
      'notifications.welcome': `Welcome to Farmer Friend! You'll receive daily updates for your ${params.cropType} farm.`,
      'notifications.irrigation.coconut': `Time to water your coconut trees for ${params.duration} minutes. Current moisture level is optimal.`,
      'notifications.irrigation.areca': `Time to water your areca nut trees for ${params.duration} minutes. Current moisture level is optimal.`,
      'notifications.weather': `Today's weather: ${params.temperature}°C, ${params.rainfall}mm rainfall expected. Adjust irrigation accordingly.`
    },
    hi: {
      'notifications.welcome': `किसान मित्र में आपका स्वागत है! आपको अपनी ${params.cropType === 'coconut' ? 'नारियल' : 'सुपारी'} की खेती के लिए दैनिक अपडेट मिलेंगे।`,
      'notifications.irrigation.coconut': `अपने नारियल के पेड़ों को ${params.duration} मिनट तक पानी दें। वर्तमान नमी का स्तर उचित है।`,
      'notifications.irrigation.areca': `अपने सुपारी के पेड़ों को ${params.duration} मिनट तक पानी दें। वर्तमान नमी का स्तर उचित है।`,
      'notifications.weather': `आज का मौसम: तापमान ${params.temperature}°C, ${params.rainfall}mm वर्षा की संभावना। सिंचाई को तदनुसार समायोजित करें।`
    },
    kn: {
      'notifications.welcome': `ರೈತ ಮಿತ್ರಕ್ಕೆ ಸ್ವಾಗತ! ನಿಮ್ಮ ${params.cropType === 'coconut' ? 'ತೆಂಗಿನ' : 'ಅಡಿಕೆ'} ತೋಟಕ್ಕೆ ದೈನಂದಿನ ಮಾಹಿತಿ ಪಡೆಯುವಿರಿ.`,
      'notifications.irrigation.coconut': `ನಿಮ್ಮ ತೆಂಗಿನ ಮರಗಳಿಗೆ ${params.duration} ನಿಮಿಷ ನೀರು ಹಾಕಿ. ಪ್ರಸ್ತುತ ತೇವಾಂಶ ಮಟ್ಟ ಸೂಕ್ತವಾಗಿದೆ.`,
      'notifications.irrigation.areca': `ನಿಮ್ಮ ಅಡಿಕೆ ಮರಗಳಿಗೆ ${params.duration} ನಿಮಿಷ ನೀರು ಹಾಕಿ. ಪ್ರಸ್ತುತ ತೇವಾಂಶ ಮಟ್ಟ ಸೂಕ್ತವಾಗಿದೆ.`,
      'notifications.weather': `ಇಂದಿನ ಹವಾಮಾನ: ತಾಪಮಾನ ${params.temperature}°C, ${params.rainfall}mm ಮಳೆ ನಿರೀಕ್ಷೆ. ನೀರಾವರಿಯನ್ನು ಅದಕ್ಕನುಗುಣವಾಗಿ ಹೊಂದಿಸಿ.`
    }
  };

  return messages[language as keyof typeof messages][key as keyof typeof messages['en']] || key;
}