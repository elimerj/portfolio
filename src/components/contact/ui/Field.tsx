interface FieldProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
}

export const Field = ({ label, type, name, placeholder }: FieldProps) => {
  return (
    <div className='space-y-1.5'>
      <label htmlFor={name} className='text-sm font-medium text-foreground'>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className='w-full rounded-2xl border border-border/70 bg-background/60
                   px-3.5 py-2.5 text-sm md:text-base
                   shadow-[0_0_0_1px_rgba(15,23,42,0.35)]
                   outline-none transition
                   focus:border-cyan-400 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.8)]
                   placeholder:text-muted-foreground/70'
      />
    </div>
  );
};
