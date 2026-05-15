import { forwardRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'cyan' | 'purple' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ children, variant = 'cyan', size = 'md', className, onClick, disabled, type = 'button' }, ref) => {
    const variants = {
      cyan: 'border-cyan-neon/40 text-cyan-neon hover:bg-cyan-neon/10 hover:shadow-glow-cyan hover:border-cyan-neon/60',
      purple: 'border-purple-neon/40 text-purple-neon hover:bg-purple-neon/10 hover:shadow-glow-purple hover:border-purple-neon/60',
      ghost: 'border-white/10 text-silver hover:bg-white/5 hover:border-white/20',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-8 py-3.5 text-base',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          'relative font-space font-medium rounded-lg border transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-void',
          variant === 'cyan' && 'focus:ring-cyan-neon/50',
          variant === 'purple' && 'focus:ring-purple-neon/50',
          variant === 'ghost' && 'focus:ring-white/30',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          sizes[size],
          variants[variant],
          className
        )}
      >
        {children}
      </button>
    );
  }
);

NeonButton.displayName = 'NeonButton';
