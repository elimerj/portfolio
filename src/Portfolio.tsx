import { LanguageProvider } from '@/contexts/LanguageContext';
import { HomePage } from './pages/HomePage';
import { Toaster } from 'sonner';

export const Portfolio = () => {
  return (
    <LanguageProvider>
      <HomePage />
      <Toaster />
    </LanguageProvider>
  );
};
