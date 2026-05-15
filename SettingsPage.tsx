import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Switch } from '@/components/ui/switch';
import { Palette, Monitor, Sparkles, Save, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

const accentColors = [
  { name: 'Cyan', value: 'cyan' as const, color: '#00F0FF' },
  { name: 'Purple', value: 'purple' as const, color: '#9D4EDD' },
  { name: 'Green', value: 'green' as const, color: '#06FFB4' },
  { name: 'Pink', value: 'pink' as const, color: '#FF006E' },
];

const themes = [
  { name: 'Dark', value: 'dark' as const, icon: Monitor, desc: 'Deep space dark theme' },
  { name: 'Matrix', value: 'matrix' as const, icon: Sparkles, desc: 'Green matrix aesthetic' },
  { name: 'Cyber', value: 'cyber' as const, icon: Palette, desc: 'Neon cyberpunk style' },
];

export function SettingsPage() {
  const { theme, setMode, setAccentColor, toggleParticles, toggleSound, setTheme } = useTheme();
  const [saved, setSaved] = useState(false);

  const handleReset = () => {
    setTheme({ mode: 'dark', accentColor: 'cyan', particles: true, sound: false });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="SYSTEM SETTINGS"
          subtitle="Customize your experience with themes, colors, and preferences"
        />

        <div className="space-y-6">
          <GlassCard>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-5 h-5 text-cyan-neon" />
                <h3 className="font-space font-semibold text-silver">Theme Mode</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {themes.map(t => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.value}
                      onClick={() => setMode(t.value)}
                      className={cn(
                        'p-4 rounded-xl border transition-all duration-300 text-left',
                        theme.mode === t.value
                          ? 'border-cyan-neon/40 bg-cyan-neon/5 shadow-glow-cyan'
                          : 'border-white/[0.06] hover:border-white/[0.12]'
                      )}
                    >
                      <Icon className={cn('w-5 h-5 mb-2', theme.mode === t.value ? 'text-cyan-neon' : 'text-text-muted')} />
                      <div className={cn('text-sm font-space', theme.mode === t.value ? 'text-silver' : 'text-text-muted')}>
                        {t.name}
                      </div>
                      <div className="text-[10px] text-text-muted mt-0.5">{t.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-purple-neon" />
                <h3 className="font-space font-semibold text-silver">Accent Color</h3>
              </div>
              <div className="flex items-center gap-3">
                {accentColors.map(ac => (
                  <button
                    key={ac.value}
                    onClick={() => setAccentColor(ac.value)}
                    className={cn(
                      'w-12 h-12 rounded-xl border-2 transition-all duration-300 flex items-center justify-center',
                      theme.accentColor === ac.value
                        ? 'border-white scale-110 shadow-lg'
                        : 'border-transparent hover:scale-105'
                    )}
                    style={{
                      backgroundColor: `${ac.color}20`,
                      boxShadow: theme.accentColor === ac.value ? `0 0 15px ${ac.color}40` : 'none',
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: ac.color }}
                    />
                  </button>
                ))}
              </div>
              <div className="mt-3 text-xs text-text-muted font-space">
                Selected: {accentColors.find(a => a.value === theme.accentColor)?.name}
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-cyan-neon" />
                <h3 className="font-space font-semibold text-silver">Effects</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02]">
                  <div>
                    <div className="text-sm text-silver">Particle Effects</div>
                    <div className="text-xs text-text-muted">Animated background particles</div>
                  </div>
                  <Switch checked={theme.particles} onCheckedChange={toggleParticles} />
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02]">
                  <div>
                    <div className="text-sm text-silver">Sound Effects</div>
                    <div className="text-xs text-text-muted">UI interaction sounds</div>
                  </div>
                  <Switch checked={theme.sound} onCheckedChange={toggleSound} />
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/30 hover:bg-cyan-neon/20 transition-all font-space text-sm"
            >
              <Save className="w-4 h-4" />
              {saved ? 'Saved!' : 'Save Settings'}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-text-muted border border-white/[0.08] hover:bg-white/5 transition-all font-space text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
