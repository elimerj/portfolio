import { translations } from '@/data/translation.data';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type Language = 'en' | 'es';
type TranslationKey = keyof (typeof translations)['en']; // las claves de en/es
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const getBrowserLang = (): 'es' | 'en' => {
    if (typeof window === 'undefined') return 'en'; // SSR safety

    const lang = navigator.language.toLowerCase();
    return lang.startsWith('es') ? 'es' : 'en';
  };

  const [language, setLanguage] = useState<'es' | 'en'>(() => {
    if (typeof window === 'undefined') return 'en';

    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;

    return getBrowserLang();
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const t = (key: TranslationKey): string => {
    return translations[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
