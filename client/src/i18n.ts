import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar os arquivos de tradução
import translationEN from './locales/en/translation.json';

// Configurar recursos
const resources = {
  en: {
    translation: translationEN
  }
};

i18n
  // detectar o idioma do usuário
  .use(LanguageDetector)
  // passar o i18n para react-i18next
  .use(initReactI18next)
  // inicializar i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // não é necessário para React
    }
  });

export default i18n;