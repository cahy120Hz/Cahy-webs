import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home, BookOpen, Bot, Rocket, Telescope, LayoutDashboard,
  Terminal, Users, Link2, Mail, Settings, Menu, X
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/education', label: 'Education', icon: BookOpen },
  { path: '/ai-tools', label: 'AI Tools', icon: Bot },
  { path: '/projects', label: 'Projects', icon: Rocket },
  { path: '/astronomy', label: 'Astronomy', icon: Telescope },
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/terminal', label: 'Terminal', icon: Terminal },
  { path: '/community', label: 'Community', icon: Users },
  { path: '/links', label: 'Links', icon: Link2 },
  { path: '/contact', label: 'Contact', icon: Mail },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[rgba(5,5,7,0.85)] backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-lg font-syncopate font-bold text-cyan-neon text-glow-cyan tracking-wider">
                CAHY&apos;EDUCATION`WEBS
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-space font-medium transition-all duration-300',
                      isActive
                        ? 'text-cyan-neon bg-cyan-neon/10 border border-cyan-neon/30 shadow-glow-cyan'
                        : 'text-text-muted hover:text-silver hover:bg-white/5'
                    )}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                SYS.OPTIMAL
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-silver hover:bg-white/5 transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-void/95 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 right-0 p-4">
            <div className="glass rounded-xl p-4 space-y-1">
              {navItems.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-space transition-all duration-300',
                      isActive
                        ? 'text-cyan-neon bg-cyan-neon/10 border border-cyan-neon/30'
                        : 'text-text-muted hover:text-silver hover:bg-white/5'
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
