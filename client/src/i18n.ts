import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar os recursos de tradução
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

// Recursos de tradução
const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};

i18n
  // Detectar idioma do navegador
  .use(LanguageDetector)
  // Passar o módulo i18n para react-i18next
  .use(initReactI18next)
  // Inicializar i18next
  .init({
    resources,
    fallbackLng: 'pt', // Idioma padrão
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // Não escapar HTML
    },
    
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    }
  });

export default i18n;