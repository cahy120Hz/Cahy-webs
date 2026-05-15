import { forwardRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'cyan' | 'purple' | 'none';
  onClick?: () => void;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hover = true, glow = 'none', onClick }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          'relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/[0.08] bg-[rgba(18,18,26,0.7)]',
          hover && 'transition-all duration-300 hover:border-white/[0.15] hover:shadow-glass',
          glow === 'cyan' && 'hover:shadow-glow-cyan hover:border-cyan-neon/30',
          glow === 'purple' && 'hover:shadow-glow-purple hover:border-purple-neon/30',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
