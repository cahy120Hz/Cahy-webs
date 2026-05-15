import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'maintenance' | 'beta';
  className?: string;
  showLabel?: boolean;
}

export function StatusIndicator({ status, className, showLabel = true }: StatusIndicatorProps) {
  const colors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    maintenance: 'bg-yellow-500',
    beta: 'bg-blue-500',
  };

  const labels = {
    online: 'ONLINE',
    offline: 'OFFLINE',
    maintenance: 'MAINTENANCE',
    beta: 'BETA',
  };

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <span className={cn('relative w-2 h-2 rounded-full', colors[status])}>
        <span className={cn('absolute inset-0 rounded-full animate-pulse', colors[status], 'opacity-50')} />
      </span>
      {showLabel && (
        <span className="text-[10px] font-mono tracking-wider text-text-muted">{labels[status]}</span>
      )}
    </div>
  );
}
