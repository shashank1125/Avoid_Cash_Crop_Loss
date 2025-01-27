interface IrrigationParams {
  duration: number;
  cropType: 'coconut' | 'areca';
}

const notifications = {
  en: {
    irrigation: (params: IrrigationParams) => 
      `Time to water your ${params.cropType} plants! Water for ${params.duration} minutes to maintain optimal soil moisture.`,
  },
  hi: {
    irrigation: (params: IrrigationParams) => 
      `अपने ${params.cropType === 'coconut' ? 'नारियल' : 'सुपारी'} के पौधों को पानी देने का समय! अनुकूलतम मिट्टी की नमी बनाए रखने के लिए ${params.duration} मिनट तक पानी दें।`,
  },
  kn: {
    irrigation: (params: IrrigationParams) => 
      `ನಿಮ್ಮ ${params.cropType === 'coconut' ? 'ತೆಂಗಿನ' : 'ಅಡಿಕೆ'} ಗಿಡಗಳಿಗೆ ನೀರು ಹಾಕುವ ಸಮಯ! ಸೂಕ್ತ ಮಣ್ಣಿನ ತೇವಾಂಶ ಕಾಪಾಡಿಕೊಳ್ಳಲು ${params.duration} ನಿಮಿಷಗಳ ಕಾಲ ನೀರು ಹಾಕಿ.`,
  }
};

export function getIrrigationMessage(
  language: 'en' | 'hi' | 'kn',
  params: IrrigationParams
): string {
  return notifications[language].irrigation(params);
}