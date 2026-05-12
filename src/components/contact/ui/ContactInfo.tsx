import { ContactItem } from './ContactItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { GlowButton } from './GlowButton';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from 'lucide-react';

const email = 'elimerduarte@outlook.com';
const whatsapp = 'https://wa.me/5215637036171?text=Hola%20vi%20tu%20portafolio';
const github = 'https://github.com/elimerj';
const linkedln = 'https://linkedin.com/in/elimerduarte';
const phone = '+52 (156) 3703 6171 ';

export const ContactInfo = () => {
  const { t } = useLanguage();
  return (
    <div className='space-y-6'>
      {/* Card principal */}
      <div className='group relative'>
        <div
          className='
      pointer-events-none absolute -inset-1 rounded-3xl
      bg-linear-to-r from-cyan-500/40 via-blue-500/30 to-indigo-500/40
      opacity-0 blur-2xl transition-all duration-500
      group-hover:opacity-100 group-hover:blur-3xl
      
    '
        />
        <div
          className='pointer-events-none absolute -inset-1px rounded-3xl
                           bg-linear-to-br from-cyan-500/40 via-blue-500/25 to-purple-500/35
                           
                           opacity-0 blur-2xl transition duration-500
                           group-hover:opacity-100'
        />
        <div
          className='relative rounded-3xl border border-border/60 bg-card/95
            shadow-[0_18px_60px_rgba(15,23,42,0.55)]
            p-6 md:p-8

            transition-all duration-300
            group-hover:scale-[1.03]
          group-hover:-translate-y-1 hover:border-blue-500/70'
        >
          <h3 className='text-lg md:text-xl font-semibold mb-3'>
            {t('contact.info')}
          </h3>

          <div className='space-y-4 text-sm md:text-base'>
            <ContactItem
              icon={Mail}
              label={t('contact.emailinfo')}
              value={email}
              href={`mailto:${email}`}
              interactive
            />
            <ContactItem
              icon={Phone}
              label={t('contact.phoneinfo')}
              value={phone}
              href={`callto:${phone}`}
              interactive
            />
            <ContactItem
              icon={MapPin}
              label={t('contact.locationinfo')}
              value={t('contact.city')}
            />
          </div>
        </div>
      </div>

      {/* CTA rápida: enlaces sociales / llamada */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
        <GlowButton
          className='
    hover:border-gray-500/70
  '
          iconClassName='
    text-gray-400
  '
          glowClassName='
    bg-linear-to-r from-gray-500/40 to-emerald-500/40
  '
          icon={Github}
          label='GitHub'
          href={github}
        />

        <GlowButton
          className='
    hover:border-blue-500/70
  '
          iconClassName='
    text-blue-400
  '
          glowClassName='
    bg-linear-to-r from-blue-500/40 to-emerald-500/40
  '
          icon={Linkedin}
          label='LinkedIn'
          href={linkedln}
        />
      </div>

      <GlowButton
        icon={MessageCircle}
        label='WhatsApp'
        href={whatsapp}
        className='
    hover:border-green-500/70
  '
        iconClassName='
    text-green-400
  '
        glowClassName='
    bg-linear-to-r from-green-500/40 to-emerald-500/40
  '
      />
    </div>
  );
};
