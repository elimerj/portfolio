import { useLanguage } from '@/contexts/LanguageContext';
import { skillsData } from '@/data/skills.data';

export const Skills = () => {
  const { language, t } = useLanguage();
  const categories = skillsData[language];

  return (
    <section id='skills' className='py-24 bg-background text-foreground'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Título */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight'>
            {t('skills.title') /* ej. "Habilidades & Tecnologías" */}
          </h2>

          <div className='h-1 w-24 bg-linear-to-r from-cyan-400 to-blue-600 rounded-full mt-4 mx-auto' />

          <p className='mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Tarjetas */}
        <div className='grid gap-8 md:grid-cols-3'>
          {categories.map((cat) => (
            <div
              key={cat.title}
              className='rounded-3xl border border-border/60 bg-card/70 backdrop-blur-md shadow-sm
                          hover:border-blue-400/70 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(37,99,235,0.5)]
                         transition-all duration-300
                         '
            >
              <div className='p-6 sm:p-7'>
                {/* Título de la tarjeta */}
                <h3 className='text-lg sm:text-xl font-semibold mb-4 text-foreground'>
                  {cat.title}
                </h3>

                {/* Lista de skills como pills */}
                <ul className='flex flex-wrap gap-2'>
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className='px-3 py-1.5 text-sm rounded-full
                                 bg-muted/70 text-foreground/90
                                 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
                                 hover:bg-linear-to-r hover:from-cyan-400 hover:to-blue-600
                                 hover:text-white transition-colors duration-200'
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
