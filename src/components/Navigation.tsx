import { useLanguage } from '@/contexts/LanguageContext';
import { Moon, Sun, Languages, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import type { translations } from '@/data/translation.data';

type TranslationKey = keyof (typeof translations)['en'];

const NAV_LINKS: { id: string; key: TranslationKey }[] = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
];

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth' });
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const file =
      language === 'en'
        ? '/Elimer_Duarte_Full_Stack_Web_Developer.pdf'
        : '/Elimer_Duarte_Desarrollador_Web_Full_Stack.pdf';

    const link = document.createElement('a');
    link.href = file;
    link.download =
      language === 'en'
        ? '/Elimer_Duarte_Full_Stack_Web_Developer.pdf'
        : '/Elimer_Duarte_Desarrollador_Web_Full_Stack.pdf';
    link.click();
  };

  return (
    <>
      <header className='sticky top-0 z-50 border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-black/80 backdrop-blur-xl'>
        <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-8'>
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className='cursor-pointer flex items-center gap-2 outline-none'
          >
            <div className='flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 text-xs font-bold text-white shadow-[0_0_18px_rgba(56,189,248,0.6)]'>
              ED
            </div>
            <span className='hidden text-lg font-semibold tracking-tight text-sky-600 dark:text-sky-400 sm:inline'>
              Portfolio
            </span>
          </button>

          {/* Links + controles */}
          <div className='flex items-center gap-4 sm:gap-6'>
            {/* Links de navegación */}
            <div className='hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex'>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className=' cursor-pointer relative transition-colors hover:text-sky-500 dark:hover:text-sky-400'
                >
                  <span>{t(link.key)}</span>
                  {/* subrayado suave con glow */}
                  <span className='pointer-events-none absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-0 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 transition-all duration-200 group-hover:w-full group-hover:opacity-100' />
                </button>
              ))}
            </div>

            {/* Controles: tema, idioma, CV */}
            <div className='flex items-center gap-2 sm:gap-3'>
              {/* Tema */}
              <Button
                variant='outline'
                size='icon-sm'
                onClick={toggleTheme}
                className='border-slate-200 bg-white/70 text-slate-700 shadow-xs hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800/80'
              >
                {isDark ? (
                  <Sun className='size-4' />
                ) : (
                  <Moon className='size-4' />
                )}
              </Button>

              {/* Idioma */}
              <Button
                variant='outline'
                size='sm'
                onClick={toggleLanguage}
                className='flex items-center gap-2 border-slate-200 bg-white/70 text-xs font-medium text-slate-700 shadow-xs hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800/80'
              >
                <Languages className='size-4' />
                <span className='tracking-wide'>{language.toUpperCase()}</span>
              </Button>

              {/* CV / Resume */}
              <Button
                onClick={downloadResume}
                size='sm'
                className='bg-linear-to-br from-cyan-400 to-blue-600 px-5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,189,248,0.65)] hover:shadow-[0_0_30px_rgba(56,189,248,0.85)] hover:brightness-110'
              >
                {t('nav.resume')}
              </Button>
            </div>
            {/* Hamburguesa / X */}
            <button
              type='button'
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label='Toggle menu'
              className='cursor-pointer inline-flex items-center justify-center rounded-xl border border-border bg-card px-2 py-1 md:hidden'
            >
              {isMobileMenuOpen ? (
                <X className='h-5 w-5 text-foreground' />
              ) : (
                <Menu className='h-5 w-5 text-foreground' />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`
    fixed inset-x-0 top-16 z-40 md:hidden
    border-t border-border
    bg-background/95 backdrop-blur
    transition-all duration-200 ease-in-out
    ${
      isMobileMenuOpen
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 -translate-y-4 pointer-events-none'
    }
  `}
      >
        <nav className='px-4 py-4 space-y-3 text-sm text-slate-800 dark:text-neutral-200'>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className='cursor-pointer block py-1
  text-slate-800 dark:text-neutral-200
  hover:text-sky-500 dark:hover:text-sky-400
  transition-colors
'
            >
              <span>{t(link.key)}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
