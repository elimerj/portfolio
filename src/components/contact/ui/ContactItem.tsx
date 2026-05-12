interface ContactItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
  interactive?: boolean;
}

export const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
  interactive,
}: ContactItemProps) => {
  const Wrapper = href ? 'a' : 'div';

  return (
    <div className='flex items-start gap-3 group'>
      <Wrapper
        href={href}
        className={`
  mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl transition
  bg-gray-800 text-white
  ${
    interactive &&
    `
    group-hover:bg-linear-to-br
    group-hover:from-cyan-500/80
    group-hover:to-blue-600/80
    group-hover:shadow-[0_0_25px_rgba(56,189,248,0.7)]
  `
  }
`}
      >
        <Icon
          className={`
            size-4 transition
            ${interactive ? 'group-hover:text-white' : 'text-gray-400'}
          `}
        />
      </Wrapper>

      <div>
        <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
          {label}
        </p>
        <p className='text-sm md:text-base text-foreground'>{value}</p>
      </div>
    </div>
  );
};
