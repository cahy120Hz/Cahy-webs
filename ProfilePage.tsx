import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NeonButton } from '@/components/ui/NeonButton';
import { Cpu, Code2, Globe, Brain, Palette, Terminal, Rocket, BookOpen, Star, Award, Zap, TrendingUp } from 'lucide-react';

const skills = [
  { name: 'React', level: 95, icon: Code2, color: '#00F0FF' },
  { name: 'TypeScript', level: 90, icon: Terminal, color: '#9D4EDD' },
  { name: 'Three.js', level: 85, icon: Globe, color: '#06FFB4' },
  { name: 'Node.js', level: 88, icon: Cpu, color: '#FF006E' },
  { name: 'Python', level: 82, icon: Brain, color: '#FB5607' },
  { name: 'AI/ML', level: 78, icon: Zap, color: '#8338EC' },
  { name: 'UI Design', level: 92, icon: Palette, color: '#3A86FF' },
  { name: 'Space Tech', level: 80, icon: Rocket, color: '#FF6B35' },
];

const achievements = [
  { icon: Star, label: 'Top Contributor', desc: 'Rank #1 in community' },
  { icon: Award, label: 'AI Master', desc: 'Built 5 AI tools' },
  { icon: BookOpen, label: 'Educator', desc: 'Created 50+ courses' },
  { icon: TrendingUp, label: 'Rising Star', desc: '10K+ contributions' },
];

export function ProfilePage() {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    skills.forEach((_, i) => {
      setTimeout(() => {
        setAnimatedSkills(prev => [...prev, i]);
      }, i * 150);
    });
  }, []);

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="SYSTEM PROFILE"
          subtitle="Creator profile with skills, achievements, and activity stats"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <GlassCard glow="cyan" className="text-center">
              <div className="p-6">
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-neon to-purple-neon animate-pulse opacity-30" />
                  <div
                    className="relative w-full h-full rounded-full flex items-center justify-center text-3xl font-bold font-syncopate"
                    style={{ background: 'linear-gradient(135deg, rgba(0,240,255,0.2), rgba(157,78,221,0.2))', border: '2px solid rgba(0,240,255,0.3)' }}
                  >
                    <span className="bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">CE</span>
                  </div>
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-void" />
                </div>

                <h3 className="font-syncopate font-bold text-lg text-silver">CAHY&apos;EDUCATION</h3>
                <p className="text-xs text-cyan-neon font-mono mt-1">Fullstack Developer & Creator</p>

                <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                  {['React', 'TypeScript', 'Three.js', 'AI', 'Space'].map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Level</span>
                    <span className="text-cyan-neon font-mono">42</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">XP</span>
                    <span className="text-purple-neon font-mono">84,320</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Rank</span>
                    <span className="text-yellow-400 font-mono">#1</span>
                  </div>
                </div>

                <div className="mt-6">
                  <NeonButton variant="cyan" size="sm" className="w-full">
                    Edit Profile
                  </NeonButton>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <GlassCard>
              <div className="p-5">
                <h3 className="font-space font-semibold text-silver mb-4">Skills</h3>
                <div className="space-y-3">
                  {skills.map((skill, i) => {
                    const Icon = skill.icon;
                    const isAnimated = animatedSkills.includes(i);
                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" style={{ color: skill.color }} />
                            <span className="text-sm text-silver">{skill.name}</span>
                          </div>
                          <span className="text-xs font-mono" style={{ color: skill.color }}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isAnimated ? `${skill.level}%` : '0%',
                              backgroundColor: skill.color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map(achievement => {
                const Icon = achievement.icon;
                return (
                  <GlassCard key={achievement.label} className="group hover:border-purple-neon/30 transition-all">
                    <div className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-neon/10 flex items-center justify-center group-hover:bg-purple-neon/20 transition-colors">
                        <Icon className="w-5 h-5 text-purple-neon" />
                      </div>
                      <div>
                        <div className="text-sm font-space font-semibold text-silver">{achievement.label}</div>
                        <div className="text-[10px] text-text-muted">{achievement.desc}</div>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>

        <GlassCard>
          <div className="p-5">
            <h3 className="font-space font-semibold text-silver mb-4">Activity Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Contributions', value: '1,247', color: 'text-cyan-neon' },
                { label: 'Repositories', value: '48', color: 'text-purple-neon' },
                { label: 'Followers', value: '2.3K', color: 'text-green-400' },
                { label: 'Streak', value: '365 days', color: 'text-yellow-400' },
              ].map(stat => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-white/[0.02]">
                  <div className={`text-2xl font-bold font-space ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
