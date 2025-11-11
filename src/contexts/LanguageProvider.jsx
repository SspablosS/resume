import React, { useState, useEffect } from 'react';
import { LanguageContext } from './language-context.js';
import en from '../locales/en.json';
import ru from '../locales/ru.json';

const languages = { en, ru };

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    const saved = localStorage.getItem('language');
    if (saved && ['en', 'ru'].includes(saved)) return saved;
    return navigator.language.startsWith('ru') ? 'ru' : 'en';
  };

  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  const t = (key) => {
    return key.split('.').reduce((obj, i) => obj?.[i], languages[lang]) || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};