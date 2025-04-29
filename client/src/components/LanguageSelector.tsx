import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/use-language';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Fechar o menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative language-selector">
      <button 
        className="flex items-center gap-1 text-sm font-medium rounded-md transition-colors hover:opacity-80"
        aria-label="Selecione o idioma"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <Globe className="h-4 w-4" />
        <span>{t(`language.${language}`)}</span>
      </button>
      
      <div className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="py-1">
          <button
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'pt' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => {
              setLanguage('pt');
              setIsOpen(false);
            }}
          >
            {t('language.pt')}
          </button>
          <button
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => {
              setLanguage('en');
              setIsOpen(false);
            }}
          >
            {t('language.en')}
          </button>
        </div>
      </div>
    </div>
  );
}