import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='hero'
      className='
        relative flex min-h-screen items-center justify-center
        bg-linear-to-b from-slate-50 to-sky-100
        dark:from-slate-950 dark:to-slate-900
      '
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center text-center gap-8'>
          {/* Avatar / Logo */}
          <div
            className='
              flex size-24 items-center justify-center
              rounded-full border border-sky-300
              bg-white/80 text-sky-500 text-3xl font-bold shadow-sm
              dark:bg-slate-900/70 dark:border-sky-500/60
            '
          >
            ED
          </div>

          {/* Textos principales */}
          <div className='space-y-4'>
            <h1
              className='
                text-4xl sm:text-5xl md:text-6xl
                font-bold tracking-tight
                text-slate-900 dark:text-white
              '
            >
              {/* saludo + nombre con gradiente */}
              {t('hero.greeting')}{' '}
              <span
                className='
                  bg-linear-to-r from-sky-500 to-violet-500
                  bg-clip-text text-transparent
                '
              >
                Elimer Duarte
              </span>
            </h1>

            <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300'>
              {t('hero.title') /* Ej: "Full-Stack Developer" */}
            </p>

            <p className='mx-auto max-w-2xl text-sm md:text-base text-slate-500 dark:text-slate-400'>
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Botones */}
          <div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
            <Button
              size='lg'
              className='
                px-7
                bg-linear-to-r from-sky-500 to-blue-600 text-white
                hover:from-sky-600 hover:to-blue-700
                shadow-md
              '
              onClick={() => scrollTo('projects')}
            >
              {t('hero.cta') /* Ej: "View My Work" / "Ver mi trabajo" */}
            </Button>

            <Button
              size='lg'
              variant='outline'
              className='
                px-7
                border-slate-300 bg-white/80 text-slate-800
                hover:bg-slate-100
                dark:bg-slate-900/60 dark:border-slate-700 dark:text-slate-100
              '
              onClick={() => scrollTo('contact')}
            >
              {t('hero.contact') /* Ej: "Get In Touch" / "Contáctame" */}
            </Button>
          </div>

          <button
            type='button'
            onClick={() => scrollTo('about')}
            className='
              mt-10 inline-flex h-10 w-10 items-center justify-center
              rounded-full border border-slate-300/70
              bg-white/80 text-slate-500 shadow-sm
              transition
              hover:border-sky-400 hover:text-sky-500
              dark:bg-slate-900/70 dark:border-slate-700
            '
            aria-label='Scroll down'
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
};
