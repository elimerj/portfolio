interface ContactItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}

export const ContactItem = ({ icon: Icon, label, value }: ContactItemProps) => (
  <div className='flex items-start gap-3'>
    <div
      className='mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl
                 bg-linear-to-br from-cyan-500/80 to-blue-600/80
                 text-white shadow-[0_0_25px_rgba(56,189,248,0.7)]'
    >
      <Icon className='size-4' />
    </div>
    <div>
      <p className='text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'>
        {label}
      </p>
      <p className='text-sm md:text-base text-foreground'>{value}</p>
    </div>
  </div>
);
