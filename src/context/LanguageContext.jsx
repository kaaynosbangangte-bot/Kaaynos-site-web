import { createContext, useContext, useState, useCallback } from 'react';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

const translations = { en, fr };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('kaaynos-lang');
    return saved || 'en';
  });

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'fr' : 'en';
      localStorage.setItem('kaaynos-lang', next);
      return next;
    });
  }, []);

  const setLanguage = useCallback((newLang) => {
    setLang(newLang);
    localStorage.setItem('kaaynos-lang', newLang);
  }, []);

  const t = useCallback(
    (section, key) => {
      try {
        const value = translations[lang]?.[section]?.[key];
        return value !== undefined ? value : `[${section}.${key}]`;
      } catch {
        return `[${section}.${key}]`;
      }
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
