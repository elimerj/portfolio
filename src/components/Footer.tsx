import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='py-8 px-4 border-t border-border'>
      <div className='container mx-auto text-center'>
        <p className='text-muted-foreground'>
          © {new Date().getFullYear()} Elimer Duarte. {t('footer.text')}
        </p>
      </div>
    </footer>
  );
};
