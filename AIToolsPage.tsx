import { aiTools } from '@/data/ai-tools';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NeonButton } from '@/components/ui/NeonButton';
import { Bot, MessageSquare, Sparkles, Brain, Code, Zap, Wand2, Terminal, Atom, GraduationCap, Globe, Telescope, FileText, Search } from 'lucide-react';
import { useState } from 'react';

const iconComponents: Record<string, React.ElementType> = {
  MessageSquare, Sparkles, Brain, Code, Zap, Wand2, Terminal, Atom, GraduationCap, Globe, Telescope, FileText, Bot,
};

export function AIToolsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(aiTools.map(t => t.category))];

  const filtered = aiTools.filter(tool => {
    const matchSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !selectedCategory || tool.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="AI TOOLS ECOSYSTEM"
          subtitle="12 cutting-edge AI tools for education, coding, astronomy, and productivity"
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search AI tools..."
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(tool => {
            const Icon = iconComponents[tool.icon] || Bot;
            return (
              <GlassCard key={tool.id} hover glow="purple" className="group cursor-pointer">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${tool.color}15`, border: `1px solid ${tool.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: tool.color }} />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface text-text-muted border border-white/10">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="font-space font-semibold text-silver group-hover:text-purple-neon transition-colors">
                    {tool.name}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted line-clamp-2">{tool.description}</p>
                  <div className="mt-4">
                    <NeonButton variant="ghost" size="sm" className="w-full">
                      <Bot className="w-3.5 h-3.5 mr-2" />
                      Launch Tool
                    </NeonButton>
                  </div>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-neon/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </GlassCard>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Bot className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted font-space">No AI tools found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
