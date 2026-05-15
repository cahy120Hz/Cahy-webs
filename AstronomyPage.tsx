import { useState, useEffect } from 'react';
import { fetchApod } from '@/api/nasa';
import type { NasaApodData } from '@/api/nasa';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NeonButton } from '@/components/ui/NeonButton';
import { Telescope, Calendar, Info, Loader2, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const planets = [
  { name: 'Mercury', distance: '57.9M km', color: '#A0522D', size: 20 },
  { name: 'Venus', distance: '108.2M km', color: '#E6BC2F', size: 32 },
  { name: 'Earth', distance: '149.6M km', color: '#2E86C1', size: 34 },
  { name: 'Mars', distance: '227.9M km', color: '#C0392B', size: 26 },
  { name: 'Jupiter', distance: '778.5M km', color: '#D4A373', size: 60 },
  { name: 'Saturn', distance: '1.43B km', color: '#F5DEB3', size: 52 },
  { name: 'Uranus', distance: '2.87B km', color: '#76D7C4', size: 40 },
  { name: 'Neptune', distance: '4.50B km', color: '#5B7CFF', size: 38 },
];

const facts = [
  'The Sun accounts for 99.86% of the mass in our solar system.',
  'A day on Venus is longer than a year on Venus.',
  'Jupiter has 95 known moons.',
  'Neptune has the strongest winds in the solar system, reaching 2,100 km/h.',
  'The Milky Way galaxy contains 100-400 billion stars.',
  'Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.',
];

export function AstronomyPage() {
  const [apod, setApod] = useState<NasaApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    loadApod();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % facts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const loadApod = async () => {
    try {
      setLoading(true);
      const data = await fetchApod();
      setApod(data);
      setError('');
    } catch {
      setError('Failed to load NASA APOD. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="ASTRONOMY DASHBOARD"
          subtitle="Explore the cosmos with NASA data, solar system visualization, and space facts"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <GlassCard className="lg:col-span-2" glow="cyan">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Telescope className="w-5 h-5 text-cyan-neon" />
                  <h3 className="font-space font-semibold text-silver">NASA Picture of the Day</h3>
                </div>
                <NeonButton variant="ghost" size="sm" onClick={loadApod}>
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  Refresh
                </NeonButton>
              </div>

              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <Loader2 className="w-8 h-8 text-cyan-neon animate-spin" />
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-64 text-text-muted">
                  <p>{error}</p>
                </div>
              ) : apod ? (
                <div>
                  <div className="relative rounded-lg overflow-hidden mb-4">
                    {apod.media_type === 'image' ? (
                      <img src={apod.url} alt={apod.title} className="w-full h-64 md:h-80 object-cover" />
                    ) : (
                      <iframe src={apod.url} className="w-full h-64 md:h-80" allowFullScreen />
                    )}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-void/80 text-cyan-neon border border-cyan-neon/20">
                        {apod.media_type.toUpperCase()}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-void/80 text-purple-neon border border-purple-neon/20">
                        {apod.date}
                      </span>
                    </div>
                    {apod.copyright && (
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-void/80 text-text-muted">
                          &copy; {apod.copyright}
                        </span>
                      </div>
                    )}
                  </div>
                  <h4 className="font-space font-semibold text-silver">{apod.title}</h4>
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="flex items-center gap-1 mt-2 text-xs text-cyan-neon hover:text-glow-cyan transition-all"
                  >
                    <Info className="w-3.5 h-3.5" />
                    {showExplanation ? 'Hide' : 'Show'} Explanation
                  </button>
                  {showExplanation && (
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">{apod.explanation}</p>
                  )}
                </div>
              ) : null}
            </div>
          </GlassCard>

          <div className="space-y-4">
            <GlassCard glow="purple">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-purple-neon" />
                  <h3 className="font-space font-semibold text-silver">Space Fact</h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed min-h-[60px]">
                  {facts[currentFact]}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <button
                    onClick={() => setCurrentFact(prev => (prev - 1 + facts.length) % facts.length)}
                    className="p-1 rounded text-text-muted hover:text-cyan-neon transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono text-text-muted">
                    {currentFact + 1} / {facts.length}
                  </span>
                  <button
                    onClick={() => setCurrentFact(prev => (prev + 1) % facts.length)}
                    className="p-1 rounded text-text-muted hover:text-cyan-neon transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-5">
                <h3 className="font-space font-semibold text-silver mb-3">Quick Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Exoplanets</span>
                    <span className="text-cyan-neon font-mono">5,500+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">NEOs Tracked</span>
                    <span className="text-cyan-neon font-mono">32,000+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Active Missions</span>
                    <span className="text-cyan-neon font-mono">24</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">ISS Crew</span>
                    <span className="text-cyan-neon font-mono">7</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <GlassCard glow="cyan">
          <div className="p-5">
            <h3 className="font-space font-semibold text-silver mb-6">Solar System</h3>
            <div className="overflow-x-auto">
              <div className="flex items-center gap-4 min-w-max px-4 py-2">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-2" style={{ background: 'radial-gradient(circle at 30% 30%, #FFF7E0, #FDB813, #F39C12)', boxShadow: '0 0 30px rgba(253, 184, 19, 0.4)' }} />
                  <span className="text-xs font-mono text-yellow-400">Sun</span>
                </div>
                {planets.map(planet => (
                  <div key={planet.name} className="text-center group">
                    <div
                      className="rounded-full mx-auto mb-2 transition-transform group-hover:scale-110"
                      style={{
                        width: planet.size,
                        height: planet.size,
                        backgroundColor: planet.color,
                        boxShadow: `0 0 15px ${planet.color}40`,
                      }}
                    />
                    <span className="text-xs font-mono text-silver">{planet.name}</span>
                    <span className="block text-[10px] font-mono text-text-muted">{planet.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
