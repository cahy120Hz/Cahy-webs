import { Link } from 'react-router-dom';
import { communityMembers } from '@/data/community';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Crown, Code2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const statusColors = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
  coding: 'bg-cyan-neon',
  studying: 'bg-purple-neon',
};

const statusLabels = {
  online: 'Online',
  offline: 'Offline',
  coding: 'Coding',
  studying: 'Studying',
};

export function CommunityPreview() {
  const topMembers = communityMembers.slice(0, 6);

  return (
    <section className="relative py-24 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          title="CREATOR COMMUNITY"
          subtitle="Top contributors in our digital ecosystem ranked by contributions and activity"
        />

        <div className="space-y-3">
          {topMembers.map((member, idx) => (
            <div
              key={member.id}
              className="group flex items-center gap-4 p-3 rounded-xl glass border border-white/[0.06] hover:border-cyan-neon/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center w-8">
                {idx === 0 && <Crown className="w-5 h-5 text-yellow-400" />}
                {idx === 1 && <span className="text-sm font-bold text-silver">2</span>}
                {idx === 2 && <span className="text-sm font-bold text-silver">3</span>}
                {idx > 2 && <span className="text-sm text-text-muted font-mono">{idx + 1}</span>}
              </div>

              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: `${member.color}20`, color: member.color, border: `1px solid ${member.color}40` }}
              >
                {member.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-space font-semibold text-sm text-silver group-hover:text-cyan-neon transition-colors truncate">
                    {member.name}
                  </h4>
                  <span className={cn('w-2 h-2 rounded-full', statusColors[member.status])} />
                  <span className="text-[10px] font-mono text-text-muted">{statusLabels[member.status]}</span>
                </div>
                <p className="text-xs text-text-muted">{member.role}</p>
              </div>

              <div className="hidden sm:flex items-center gap-1">
                <Code2 className="w-3 h-3 text-text-muted" />
                <span className="text-xs font-mono text-text-muted">{member.contributions}</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {member.skills.slice(0, 2).map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface text-text-muted border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-sm font-space text-cyan-neon hover:text-glow-cyan transition-all"
          >
            View Full Community
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
