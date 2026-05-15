import { useState } from 'react';
import { educationTopics } from '@/data/education';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NeonButton } from '@/components/ui/NeonButton';
import { BookOpen, Code, Telescope, Atom, FlaskConical, Cpu, Brain, Globe, Rocket, Search } from 'lucide-react';

const iconComponents: Record<string, React.ElementType> = {
  Code, Telescope, Atom, FlaskConical, Cpu, Brain, Globe, Rocket,
};

export function EducationPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(educationTopics.map(t => t.name))];

  const filtered = educationTopics.filter(topic => {
    const matchSearch = topic.name.toLowerCase().includes(search.toLowerCase()) ||
      topic.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !selectedCategory || topic.name === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="EDUCATION ECOSYSTEM"
          subtitle="Explore knowledge across programming, astronomy, physics, AI, and more with AI-powered learning paths"
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses, topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg glass border border-white/[0.08] text-sm font-space text-silver placeholder:text-text-muted/50 outline-none focus:border-cyan-neon/30 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <NeonButton
            variant={selectedCategory === null ? 'cyan' : 'ghost'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </NeonButton>
          {categories.map(cat => (
            <NeonButton
              key={cat}
              variant={selectedCategory === cat ? 'cyan' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
            >
              {cat}
            </NeonButton>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map(topic => {
            const Icon = iconComponents[topic.icon] || BookOpen;
            return (
              <GlassCard key={topic.id} hover glow="cyan" className="group cursor-pointer">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${topic.color}15`, border: `1px solid ${topic.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: topic.color }} />
                    </div>
                    <span className="text-xs font-mono text-text-muted">{topic.courses} courses</span>
                  </div>
                  <h3 className="font-space font-semibold text-silver group-hover:text-cyan-neon transition-colors">
                    {topic.name}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted line-clamp-2">{topic.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-neon">{topic.courses} Modules</span>
                    <span className="text-[10px] font-mono text-text-muted">AI-Powered</span>
                  </div>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </GlassCard>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted font-space">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
