import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { networkSites } from '@/data/network';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { SectionHeader } from '@/components/ui/SectionHeader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function NetworkGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);
    
    items.forEach((item, i) => {
      if (!item) return;
      
      gsap.set(item, { opacity: 0, y: 60, scale: 0.95 });
      
      gsap.to(item, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        },
        delay: (i % 4) * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          title="MY DIGITAL NETWORK"
          subtitle="Connected ecosystem of 20 digital platforms spanning education, astronomy, AI, and technology"
        />

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {networkSites.map((site, i) => (
            <div
              key={site.id}
              ref={el => { itemRefs.current[i] = el; }}
              className="group relative overflow-hidden rounded-xl glass hover:border-cyan-neon/30 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                <div className="absolute top-3 right-3">
                  <StatusIndicator status={site.status} />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-void/80 text-cyan-neon border border-cyan-neon/20">
                    {site.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-space font-semibold text-silver group-hover:text-cyan-neon transition-colors">
                    {site.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-cyan-neon transition-colors" />
                </div>
                <p className="mt-1 text-xs text-text-muted font-space line-clamp-2">
                  {site.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/links"
            className="inline-flex items-center gap-2 text-sm font-space text-cyan-neon hover:text-glow-cyan transition-all"
          >
            View All Network Sites
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
