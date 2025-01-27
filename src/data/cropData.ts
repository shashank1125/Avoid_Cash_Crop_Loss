import { CropsData } from '../types/crops';

export const cropData: CropsData = {
  coconut: {
    diseases: [
      {
        name: { en: 'Root Wilt', hi: 'जड़ विल्ट', kn: 'ಮೂಲ ತುರಬು' },
        causes: {
          en: 'Phytoplasma infection spread by plant hoppers',
          hi: 'प्लांट होपर्स के माध्यम से फैलने वाला फाइटोप्लाज्मा संक्रमण',
          kn: 'ಸಸ್ಯ ಹಾಪ್ಪರ್ಸ್ ಮೂಲಕ ಹರಡುವ ಫೈಟೋಪ್ಲಾಸ್ಮಾ ಸೋಂಕು',
        },
        precautions: {
          en: 'Regular monitoring, Remove infected palms, Control vector population',
          hi: 'नियमित निगरानी, संक्रमित पेड़ों को हटाएं, वेक्टर आबादी को नियंत्रित करें',
          kn: 'ನಿಯಮಿತ ಮೇಲ್ವಿಚಾರಣೆ, ಸೋಂಕಿತ ತಾಳೆ ಮರಗಳನ್ನು ತೆಗೆದುಹಾಕಿ, ವೇಕ್ಟರ್ ಜನಸಂಖ್ಯೆಯನ್ನು ನಿಯಂತ್ರಿಸಿ',
        },
        solutions: {
          en: 'Apply recommended doses of fertilizers, Maintain proper drainage',
          hi: 'अनुशंसित उर्वरकों की मात्रा लगाएं, उचित जल निकासी बनाए रखें',
          kn: 'ಶಿಫಾರಸು ಮಾಡಿದ ಸಾಸುವಳಿಗಳ ಪ್ರಮಾಣವನ್ನು ಅನ್ವಯಿಸಿ, ಸೂಕ್ತ ನೀರುಬಿಡುವಿಕೆ ರಕ್ಷಿಸಿ',
        },
      },
      // Additional diseases...
    ],
  },
  areca: {
    diseases: [
      {
        name: { en: 'Yellow Leaf Disease', hi: 'पीला पत्ता रोग', kn: 'ಹಳದಿ ಎಲೆ ರೋಗ' },
        causes: {
          en: 'Phytoplasma infection',
          hi: 'फाइटोप्लाज्मा संक्रमण',
          kn: 'ಫೈಟೋಪ್ಲಾಸ್ಮಾ ಸೋಂಕು',
        },
        precautions: {
          en: 'Use disease-free seedlings, Regular monitoring',
          hi: 'रोग-मुक्त बीजों का उपयोग करें, नियमित निगरानी',
          kn: 'ರೋಗ-ರಹಿತ ಮಡಿಕೆಗಳನ್ನು ಬಳಸಿರಿ, ನಿಯಮಿತ ಮೇಲ್ವಿಚಾರಣೆ',
        },
        solutions: {
          en: 'Remove infected plants, Apply recommended antibiotics',
          hi: 'संक्रमित पौधों को हटाएं, अनुशंसित एंटीबायोटिक्स लगाएं',
          kn: 'ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ, ಶಿಫಾರಸು ಮಾಡಿದ ಔಷಧಿಗಳನ್ನು ಅನ್ವಯಿಸಿ',
        },
      },
      // Additional diseases...
    ],
  },
};
