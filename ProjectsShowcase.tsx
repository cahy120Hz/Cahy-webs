import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const statusColors = {
  live: 'bg-green-500',
  development: 'bg-yellow-500',
  archived: 'bg-red-500',
};

export function ProjectsShowcase() {
  return (
    <section className="relative py-24 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          title="PROJECT SHOWCASE"
          subtitle="Active projects spanning education, astronomy, AI, and community platforms"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map(project => (
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
                  <span className={cn('w-2 h-2 rounded-full', statusColors[project.status])} />
                  <span className="text-[10px] font-mono text-text-muted uppercase">{project.status}</span>
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
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-space text-cyan-neon hover:text-glow-cyan transition-all"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
