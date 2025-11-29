import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Palette, Zap, Server } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();
  return (
    <section id='about' className='py-24 bg-background text-foreground'>
      <div className='max-w-6xl mx-auto px-4 md:px-8'>
        {/* Título */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
            {t('about.title')}
          </h2>
          <div className='mt-3 h-1 w-20 mx-auto rounded-full bg-linear-to-r from-cyan-400 to-blue-600' />

          <p className='mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground'>
            {t('about.text')}
          </p>
        </div>

        {/* Contenido: texto + tarjetas */}
        <div className='grid gap-10 md:grid-cols-4 items-start'>
          {/* Tarjetas tipo “feature” */}

          {/* Card 1 */}
          <div
            className='
              group relative flex flex-col justify-between rounded-2xl border
              border-border bg-card/80 p-6 shadow-lg backdrop-blur-sm
              transition-all hover:-translate-y-1 hover:border-blue-500/60
              hover:shadow-[0_22px_70px_rgba(37,99,235,0.35)]
            '
          >
            <div
              className='mb-4 inline-flex items-center justify-center rounded-xl
                              bg-linear-to-br from-cyan-400/10 to-blue-600/10
                              text-blue-500 group-hover:from-cyan-400 group-hover:to-blue-600
                              group-hover:text-white transition-all size-11'
            >
              <Code2 className='size-5' />
            </div>

            <h3 className='text-lg font-semibold mb-2'>
              {t('about.cardCodeTitle')}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {t('about.cardCodeDesc')}
            </p>
          </div>

          {/* Card 2 */}
          <div
            className='
              group relative flex flex-col justify-between rounded-2xl border
              border-border bg-card/80 p-6 shadow-lg backdrop-blur-sm
              transition-all hover:-translate-y-1 hover:border-blue-500/60
              hover:shadow-[0_22px_70px_rgba(37,99,235,0.35)]
            '
          >
            <div
              className='mb-4 inline-flex items-center justify-center rounded-xl
                              bg-muted/40 text-blue-500 group-hover:bg-linear-to-br
                              group-hover:from-cyan-400 group-hover:to-blue-600
                              group-hover:text-white transition-all size-11'
            >
              <Palette className='size-5' />
            </div>

            <h3 className='text-lg font-semibold mb-2'>
              {t('about.cardDesignTitle')}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {t('about.cardDesignDesc')}
            </p>
          </div>

          {/* Card 3 */}
          <div
            className='
              group relative flex flex-col justify-between rounded-2xl border
              border-border bg-card/80 p-6 shadow-lg backdrop-blur-sm
              transition-all hover:-translate-y-1 hover:border-blue-500/60
              hover:shadow-[0_22px_70px_rgba(37,99,235,0.35)]
            '
          >
            <div
              className='mb-4 inline-flex items-center justify-center rounded-xl
                              bg-muted/40 text-blue-500 group-hover:bg-linear-to-br
                              group-hover:from-cyan-400 group-hover:to-blue-600
                              group-hover:text-white transition-all size-11'
            >
              <Server className='size-5' />
            </div>

            <h3 className='text-lg font-semibold mb-2'>
              {t('about.cardFullStackTitle')}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {t('about.cardFullStackDesc')}
            </p>
          </div>

          {/* Card 4 */}
          <div
            className='
              group relative flex flex-col justify-between rounded-2xl border
              border-border bg-card/80 p-6 shadow-lg backdrop-blur-sm
              transition-all hover:-translate-y-1 hover:border-blue-500/60
              hover:shadow-[0_22px_70px_rgba(37,99,235,0.35)]
            '
          >
            <div
              className='mb-4 inline-flex items-center justify-center rounded-xl
                              bg-muted/40 text-blue-500 group-hover:bg-linear-to-br
                              group-hover:from-cyan-400 group-hover:to-blue-600
                              group-hover:text-white transition-all size-11'
            >
              <Zap className='size-5' />
            </div>

            <h3 className='text-lg font-semibold mb-2'>
              {t('about.cardPerformanceTitle')}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {t('about.cardPerformanceDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
