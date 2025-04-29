import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Importar traduções
import ptTranslations from '../translations/pt.json';
import enTranslations from '../translations/en.json';

// Tipo para os idiomas suportados
type Language = 'pt' | 'en';

// Mapeando idiomas para seus arquivos de tradução
const translations: Record<Language, Record<string, any>> = {
  pt: ptTranslations,
  en: enTranslations
};

// Interface para o contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Criar o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provedor que encapsula a aplicação
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Estado para o idioma atual (com preferência salva ou padrão)
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'pt'; // Padrão é português
  });

  // Salvar idioma escolhido no localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Função para obter traduções
  const t = (key: string): string => {
    // Dividir chave em partes para navegação de objeto (ex: "nav.about")
    const keys = key.split('.');
    let current: any = translations[language];
    
    // Navegar pela estrutura de objeto para encontrar a tradução
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        // Fallback para a chave original se não encontrar tradução
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof current === 'string' ? current : String(current);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook para uso em componentes
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}