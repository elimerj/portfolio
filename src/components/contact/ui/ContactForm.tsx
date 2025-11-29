import { Button } from '@/components/ui/button';
import { Field } from './Field';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    setTimeout(() => {
      toast.success(t('toast.message'), {
        position: 'top-right',
      });
      setIsSending(false);
    }, 2000);
  };

  return (
    <div className='group relative  '>
      <div
        className='
      pointer-events-none absolute -inset-1 rounded-3xl
      bg-linear-to-r from-cyan-400/40 via-blue-600/30
      opacity-0 blur-2xl transition-all duration-500
      group-hover:opacity-100 group-hover:blur-3xl
    '
      />
      <div
        className='pointer-events-none absolute -inset-1px rounded-3xl
                         bg-linear-to-r from-cyan-500/35 via-blue-500/25 to-purple-500/35
                         opacity-0 blur-2xl transition duration-500
                         group-hover:opacity-100'
      />
      <div
        className='relative rounded-3xl border border-border/60 bg-card/95
  shadow-[0_18px_60px_rgba(15,23,42,0.55)]
  p-6 md:p-8

  transition-all duration-300
  group-hover:scale-[1.03]
  group-hover:-translate-y-1
  hover:border-blue-500/70'
      >
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='grid gap-4 md:grid-cols-2'>
            <Field
              label={t('contact.name')}
              type='text'
              name='name'
              placeholder='Elimer Duarte'
            />
            <Field
              label={t('contact.email')}
              type='email'
              name='email'
              placeholder={t('placeholder.email')}
            />
          </div>

          <div className='space-y-1.5'>
            <label
              htmlFor='message'
              className='text-sm font-medium text-foreground'
            >
              {t('contact.message')}
            </label>
            <textarea
              id='message'
              name='message'
              rows={5}
              required
              className='w-full rounded-2xl border border-border/70 bg-background/60
                               px-3.5 py-2.5 text-sm md:text-base
                               shadow-[0_0_0_1px_rgba(15,23,42,0.35)]
                               outline-none transition
                               focus:border-cyan-400 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.8)]
                               placeholder:text-muted-foreground/70'
              placeholder={t('placeholder.message')}
            />
          </div>

          <Button
            disabled={isSending}
            type='submit'
            size='lg'
            className='w-full md:w-auto bg-linear-to-r from-cyan-400 to-blue-600
                             hover:from-cyan-300 hover:to-blue-500
                             text-white font-semibold px-8 py-2.5 rounded-full
                             shadow-[0_12px_35px_rgba(56,189,248,0.55)]
                             transition-transform hover:-translate-y-1px'
          >
            {isSending ? t('contact.sending') : t('contact.send')}
          </Button>
        </form>
      </div>
    </div>
  );
};
