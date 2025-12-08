'use client';

// Contexto de Idioma
// Gerencia o estado global do idioma (Português/Inglês) da aplicação.
// Permite que qualquer componente acesse e modifique o idioma atual.

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Language } from '@/lib/i18n';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: typeof dictionary['pt'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  // Alterna entre 'pt' e 'en'
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const value = {
    language,
    toggleLanguage,
    t: dictionary[language], // Fornece o dicionário traduzido atual
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para consumir o contexto
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

