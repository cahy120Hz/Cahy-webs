import { useEffect, useRef, useState } from 'react';
import { BookOpen, Brain, Globe, Users, Zap, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { icon: BookOpen, label: 'Education Courses', value: 141, suffix: '+', color: 'text-cyan-neon' },
  { icon: Brain, label: 'AI Tools', value: 12, suffix: '', color: 'text-purple-neon' },
  { icon: Globe, label: 'Network Sites', value: 20, suffix: '', color: 'text-cyan-neon' },
  { icon: Users, label: 'Community Members', value: 150, suffix: '+', color: 'text-purple-neon' },
  { icon: Zap, label: 'Active Projects', value: 10, suffix: '', color: 'text-cyan-neon' },
  { icon: Rocket, label: 'Technologies', value: 50, suffix: '+', color: 'text-purple-neon' },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);

  return <span>{count}{suffix}</span>;
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 border-y border-white/[0.06] bg-surface/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <stat.icon className={cn('w-6 h-6 mx-auto mb-2', stat.color, 'group-hover:scale-110 transition-transform')} />
              <div className={cn('text-2xl font-bold font-space', stat.color)}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-xs text-text-muted font-space mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
