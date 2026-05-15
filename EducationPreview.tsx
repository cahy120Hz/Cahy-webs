import { Link } from 'react-router-dom';
import { educationTopics } from '@/data/education';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

export function EducationPreview() {
  return (
    <section className="relative py-24 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          title="EDUCATION ECOSYSTEM"
          subtitle="Explore knowledge across 8 categories with AI-powered learning paths"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {educationTopics.map(topic => (
            <GlassCard key={topic.id} hover glow="cyan" className="group cursor-pointer">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${topic.color}15`, border: `1px solid ${topic.color}30` }}
                  >
                    <span className="text-lg" style={{ color: topic.color }}>
                      {topic.icon === 'Code' && '</>'}
                      {topic.icon === 'Telescope' && '🔭'}
                      {topic.icon === 'Atom' && '⚛'}
                      {topic.icon === 'FlaskConical' && '🧪'}
                      {topic.icon === 'Cpu' && '💻'}
                      {topic.icon === 'Brain' && '🧠'}
                      {topic.icon === 'Globe' && '🌐'}
                      {topic.icon === 'Rocket' && '🚀'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">{topic.courses} courses</span>
                </div>
                <h3 className="font-space font-semibold text-silver group-hover:text-cyan-neon transition-colors">
                  {topic.name}
                </h3>
                <p className="mt-1 text-xs text-text-muted line-clamp-2">{topic.description}</p>
              </div>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/education"
            className="inline-flex items-center gap-2 text-sm font-space text-cyan-neon hover:text-glow-cyan transition-all"
          >
            Explore All Education
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
