import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, className, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className={cn(
        'font-syncopate text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider',
        'bg-gradient-to-r from-cyan-neon via-purple-neon to-cyan-neon bg-clip-text text-transparent',
        'bg-[length:200%_auto] animate-shimmer',
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-muted font-space text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'mt-4 h-px w-24 bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent',
        align === 'center' && 'mx-auto'
      )} />
    </div>
  );
}
