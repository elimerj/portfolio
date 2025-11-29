import { Code2, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectsData } from '@/data/projects.data';

export const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id='projects'
      className='relative py-24 md:py-28 lg:py-32 bg-background'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
        {/* Título */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight text-foreground'>
            {t('projects.title')}
          </h2>
          <div className='h-1 w-24 bg-linear-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-4' />
          <p className='mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className='grid gap-8 md:grid-cols-2'>
          {ProjectsData.map((project) => {
            return (
              <article
                key={project.id}
                className={[
                  // base card
                  'group relative flex flex-col rounded-3xl bg-card/90 dark:bg-card/60',
                  'border hover:border-blue-500/70 bg-card/90 shadow-[0_0_0px_rgba(56,189,248,0.0)]',
                  'transition-all duration-300',

                  'hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(37,99,235,0.5)]',
                  'hover:shadow-[0_0_45px_rgba(56,189,248,0.45)]',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <div className='relative overflow-hidden rounded-t-3xl bg-linear-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-400/15 dark:via-blue-500/15 dark:to-purple-500/15'>
                  <div className='absolute inset-0 bg-linear-to-br from-white/10 to-transparent dark:from-white/5' />
                  <div className='relative flex h-40 sm:h-48 items-center justify-center'>
                    <img src={project.image} alt='image-project' />
                  </div>
                </div>

                {/* Contenido */}
                <div className='flex flex-1 flex-col justify-between rounded-b-3xl bg-linear-to-b from-background/80 to-background px-6 py-5 sm:px-7 sm:py-6'>
                  <div>
                    <h3 className='text-lg sm:text-xl font-semibold tracking-tight text-foreground'>
                      {project.name}
                    </h3>
                    <p className='mt-2 text-sm sm:text-[15px] leading-relaxed text-muted-foreground'>
                      {project.description[language]}
                    </p>

                    {/* Tech badges */}
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className='inline-flex items-center rounded-full bg-muted/70 px-2.5 py-1 text-xs font-medium text-muted-foreground shadow-sm'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botones */}
                  <div className='mt-5 flex flex-wrap gap-3'>
                    {project.codeUrl && (
                      <Button
                        variant='outline'
                        size='sm'
                        asChild
                        className='border-border/70 bg-background/80 hover:bg-accent/70'
                      >
                        <a
                          href={project.codeUrl}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <Code2 className='mr-2 size-4' />
                          {t('projects.code')}
                        </a>
                      </Button>
                    )}

                    {project.liveUrl && (
                      <Button
                        size='sm'
                        asChild
                        className='bg-linear-to-r from-cyan-400 to-blue-600 text-white shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 hover:brightness-110'
                      >
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <Globe2 className='mr-2 size-4' />
                          {t('projects.demo')}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
