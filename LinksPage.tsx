import { socialLinks } from '@/data/socials';
import { networkSites } from '@/data/network';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import {
  Github, Youtube, Music, Instagram, MessageCircle, Twitter,
  Facebook, Send, AtSign, Linkedin, Radio, Headphones, Users,
  BookOpen, Code2, Image, Palette, Gamepad2, Heart, Coffee,
  Phone, Ghost, Mail, Globe, ExternalLink, Link2, Search
} from 'lucide-react';
import { useState } from 'react';

const iconComponents: Record<string, React.ElementType> = {
  Github, Youtube, Music, Instagram, MessageCircle, Twitter,
  Facebook, Send, AtSign, Linkedin, Radio, Headphones, Users,
  BookOpen, Code2, Image, Palette, Gamepad2, Heart, Coffee,
  Phone, Ghost, Mail, Globe,
};

export function LinksPage() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'social' | 'network'>('social');

  const filteredSocials = socialLinks.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredNetworks = networkSites.filter(n =>
    n.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="SMART LINKS"
          subtitle="25+ social media links and 20 digital network sites in one place"
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 py-2 rounded-lg text-sm font-space transition-all ${
                activeTab === 'social'
                  ? 'bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/30'
                  : 'text-text-muted hover:text-silver border border-transparent'
              }`}
            >
              Social Links ({socialLinks.length})
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`px-4 py-2 rounded-lg text-sm font-space transition-all ${
                activeTab === 'network'
                  ? 'bg-purple-neon/10 text-purple-neon border border-purple-neon/30'
                  : 'text-text-muted hover:text-silver border border-transparent'
              }`}
            >
              Network Sites ({networkSites.length})
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg glass border border-white/[0.08] text-sm font-space text-silver placeholder:text-text-muted/50 outline-none focus:border-cyan-neon/30 transition-colors"
            />
          </div>
        </div>

        {activeTab === 'social' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredSocials.map(link => {
              const Icon = iconComponents[link.icon] || Globe;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl glass border border-white/[0.06] hover:border-cyan-neon/30 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${link.color}15`, border: `1px solid ${link.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: link.color }} />
                  </div>
                  <span className="text-xs font-space text-silver group-hover:text-cyan-neon transition-colors text-center">
                    {link.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </div>
        )}

        {activeTab === 'network' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNetworks.map(site => (
              <GlassCard key={site.id} hover className="cursor-pointer">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Link2 className="w-4 h-4 text-cyan-neon" />
                      <h4 className="font-space font-semibold text-sm text-silver">{site.name}</h4>
                    </div>
                    <StatusIndicator status={site.status} showLabel={false} />
                  </div>
                  <p className="text-xs text-text-muted line-clamp-1">{site.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-mono text-text-muted">{site.category}</span>
                    <ExternalLink className="w-3 h-3 text-text-muted" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        )}

        {activeTab === 'social' && filteredSocials.length === 0 && (
          <div className="text-center py-16">
            <Globe className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted font-space">No social links found.</p>
          </div>
        )}

        {activeTab === 'network' && filteredNetworks.length === 0 && (
          <div className="text-center py-16">
            <Link2 className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted font-space">No network sites found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
