import { useState } from 'react';
import { projects } from '@/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NeonButton } from '@/components/ui/NeonButton';
import { ExternalLink, Github, Search, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const statusConfig = {
  live: { color: 'bg-green-500', label: 'LIVE' },
  development: { color: 'bg-yellow-500', label: 'IN DEV' },
  archived: { color: 'bg-red-500', label: 'ARCHIVED' },
};

export function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const statuses = [...new Set(projects.map(p => p.status))];

  const filtered = projects.filter(project => {
    const matchSearch = project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !selectedStatus || project.status === selectedStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="PROJECT SHOWCASE"
          subtitle="Complete portfolio of 10 active projects spanning education, astronomy, AI, and community platforms"
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg glass border border-white/[0.08] text-sm font-space text-silver placeholder:text-text-muted/50 outline-none focus:border-cyan-neon/30 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <NeonButton
            variant={selectedStatus === null ? 'cyan' : 'ghost'}
            size="sm"
            onClick={() => setSelectedStatus(null)}
          >
            All
          </NeonButton>
          {statuses.map(status => (
            <NeonButton
              key={status}
              variant={selectedStatus === status ? 'cyan' : 'ghost'}
              size="sm"
              onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
            >
              {statusConfig[status as keyof typeof statusConfig]?.label || status}
            </NeonButton>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(project => {
            const status = statusConfig[project.status as keyof typeof statusConfig];
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl glass border border-white/[0.08] hover:border-cyan-neon/30 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className={cn('w-2 h-2 rounded-full', status?.color)} />
                    <span className="text-[10px] font-mono text-text-muted uppercase">{status?.label}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-void/80 text-cyan-neon border border-cyan-neon/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-space font-semibold text-lg text-silver group-hover:text-cyan-neon transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-neon/10 text-purple-neon border border-purple-neon/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-1.5 text-xs font-space text-cyan-neon hover:text-glow-cyan transition-all">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Preview
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-space text-text-muted hover:text-silver transition-all">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-neon/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Rocket className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted font-space">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
