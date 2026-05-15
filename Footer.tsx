import { Link } from 'react-router-dom';
import { Github, Twitter, Youtube, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-void">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-lg font-syncopate font-bold text-cyan-neon text-glow-cyan tracking-wider">
              CAHY&apos;EDUCATION`WEBS
            </Link>
            <p className="mt-3 text-text-muted text-sm font-space">
              Next Generation Digital Ecosystem for Education, AI, Astronomy, and Technology.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="p-2 rounded-lg text-text-muted hover:text-cyan-neon hover:bg-cyan-neon/10 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-text-muted hover:text-cyan-neon hover:bg-cyan-neon/10 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-text-muted hover:text-cyan-neon hover:bg-cyan-neon/10 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-text-muted hover:text-cyan-neon hover:bg-cyan-neon/10 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-space font-semibold text-silver text-sm mb-4">Platform</h4>
            <div className="space-y-2">
              <Link to="/education" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Education</Link>
              <Link to="/ai-tools" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">AI Tools</Link>
              <Link to="/astronomy" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Astronomy</Link>
              <Link to="/projects" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Projects</Link>
            </div>
          </div>

          <div>
            <h4 className="font-space font-semibold text-silver text-sm mb-4">Community</h4>
            <div className="space-y-2">
              <Link to="/community" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Members</Link>
              <Link to="/links" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Smart Links</Link>
              <Link to="/dashboard" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Dashboard</Link>
              <Link to="/terminal" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Terminal</Link>
            </div>
          </div>

          <div>
            <h4 className="font-space font-semibold text-silver text-sm mb-4">System</h4>
            <div className="space-y-2">
              <Link to="/settings" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Settings</Link>
              <Link to="/contact" className="block text-text-muted hover:text-cyan-neon text-sm transition-colors">Contact</Link>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                All Systems Online
              </div>
              <p className="text-text-muted text-xs font-mono">v5.0.0</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-space">
            &copy; 2025 CAHY&apos;EDUCATION`WEBS. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-space flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-purple-neon" /> using React, Three.js, GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
