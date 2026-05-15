import { communityMembers } from '@/data/community';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Crown, Code2, Search, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

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

export function CommunityPage() {
  const [search, setSearch] = useState('');

  const filtered = communityMembers.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase()) ||
    m.skills.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="CREATOR COMMUNITY"
          subtitle="Top contributors ranked by contributions, activity, and impact in our digital ecosystem"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Members', value: communityMembers.length, color: 'text-cyan-neon' },
            { label: 'Online Now', value: communityMembers.filter(m => m.status === 'online').length, color: 'text-green-400' },
            { label: 'Total Contributions', value: communityMembers.reduce((a, b) => a + b.contributions, 0).toLocaleString(), color: 'text-purple-neon' },
            { label: 'Active Projects', value: '12', color: 'text-yellow-400' },
          ].map(stat => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <div className={`text-2xl font-bold font-space ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search members, roles, skills..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg glass border border-white/[0.08] text-sm font-space text-silver placeholder:text-text-muted/50 outline-none focus:border-cyan-neon/30 transition-colors"
          />
        </div>

        <div className="space-y-2">
          {filtered.map((member, idx) => (
            <div
              key={member.id}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl glass border border-white/[0.06] hover:border-cyan-neon/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 min-w-[40px]">
                {idx === 0 && <Crown className="w-5 h-5 text-yellow-400" />}
                {idx === 1 && <span className="text-sm font-bold text-silver w-5 text-center">2</span>}
                {idx === 2 && <span className="text-sm font-bold text-silver w-5 text-center">3</span>}
                {idx > 2 && <span className="text-sm text-text-muted font-mono w-5 text-center">{idx + 1}</span>}
              </div>

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
                style={{ backgroundColor: `${member.color}20`, color: member.color, border: `1px solid ${member.color}40` }}
              >
                {member.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-space font-semibold text-silver group-hover:text-cyan-neon transition-colors">
                    {member.name}
                  </h4>
                  <span className={cn('w-2 h-2 rounded-full', statusColors[member.status])} />
                  <span className="text-[10px] font-mono text-text-muted">{statusLabels[member.status]}</span>
                </div>
                <p className="text-xs text-text-muted">{member.role}</p>
              </div>

              <div className="flex items-center gap-1 min-w-[80px]">
                <Code2 className="w-4 h-4 text-text-muted" />
                <span className="text-sm font-mono text-cyan-neon">{member.contributions.toLocaleString()}</span>
                <span className="text-[10px] text-text-muted">commits</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {member.skills.map(skill => (
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

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted font-space">No members found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
