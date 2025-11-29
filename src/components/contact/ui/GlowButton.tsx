interface GlowButtonProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
}

export const GlowButton = ({ icon: Icon, label, href }: GlowButtonProps) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noreferrer' : undefined}
    className='group relative block'
  >
    <div
      className='
          pointer-events-none absolute -inset-1 rounded-full
          bg-linear-to-r from-cyan-500/40 to-blue-500/40
          blur-xl opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        '
    />
    <div
      className='relative flex items-center justify-center gap-2 rounded-2xl
                 border border-border/60 bg-card/70 px-4 py-2.5 text-sm md:text-base
                 shadow-[0_10px_30px_rgba(15,23,42,0.55)]
                  transition-transform duration-300
          group-hover:scale-[1.06]
          hover:border-blue-500/70'
    >
      <Icon className='size-4 text-cyan-500' />
      <span>{label}</span>
    </div>
  </a>
);
