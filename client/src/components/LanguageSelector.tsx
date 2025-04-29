import React from 'react';
import { useLanguage } from '../hooks/use-language';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative group">
      <button 
        className="flex items-center gap-1 text-sm font-medium rounded-md transition-colors"
        aria-label="Selecione o idioma"
      >
        <Globe className="h-4 w-4" />
        <span>{t(`language.${language}`)}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          <button
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'pt' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => setLanguage('pt')}
          >
            {t('language.pt')}
          </button>
          <button
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => setLanguage('en')}
          >
            {t('language.en')}
          </button>
        </div>
      </div>
    </div>
  );
}