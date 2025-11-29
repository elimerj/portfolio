import { useLanguage } from '@/contexts/LanguageContext';

import { ContactForm } from './ui/ContactForm';
import { ContactInfo } from './ui/ContactInfo';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id='contact' className='py-24 md:py-32'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Título + subtítulo */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
            {t('contact.title')}
          </h2>
          <div className='mt-3 flex justify-center'>
            <div className='h-1 w-20 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_30px_rgba(56,189,248,0.7)]' />
          </div>
          <p className='mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground'>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className='grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] items-start'>
          {/* Columna izquierda: info */}
          <ContactInfo />
          {/* Columna derecha: formulario */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
