import { LanguageProvider } from '@/contexts/LanguageContext';
import { HomePage } from './pages/HomePage';

export const Portfolio = () => {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
};
