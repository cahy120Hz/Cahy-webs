import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NeonButton } from '@/components/ui/NeonButton';
import { Mail, Send, MessageSquare, Globe, Clock, CheckCircle } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="CONTACT"
          subtitle="Get in touch for collaborations, questions, or just to say hello"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <GlassCard glow="cyan">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-neon/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-neon" />
                  </div>
                  <div>
                    <h4 className="font-space font-semibold text-silver text-sm">Email</h4>
                    <p className="text-xs text-text-muted">contact@cahy-education.dev</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-neon/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-neon" />
                  </div>
                  <div>
                    <h4 className="font-space font-semibold text-silver text-sm">Website</h4>
                    <p className="text-xs text-text-muted">cahy-education.dev</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-neon/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-cyan-neon" />
                  </div>
                  <div>
                    <h4 className="font-space font-semibold text-silver text-sm">Response Time</h4>
                    <p className="text-xs text-text-muted">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard glow="purple">
              <div className="p-5">
                <h4 className="font-space font-semibold text-silver text-sm mb-3">Connect</h4>
                <div className="flex items-center gap-2">
                  {['GitHub', 'Twitter', 'Discord', 'LinkedIn'].map(platform => (
                    <button
                      key={platform}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-surface text-text-muted border border-white/10 hover:border-cyan-neon/30 hover:text-cyan-neon transition-all"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-2">
            <GlassCard glow="cyan">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-cyan-neon" />
                  <h3 className="font-space font-semibold text-silver">Send Message</h3>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16">
                    <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                    <h4 className="font-space font-semibold text-silver text-lg">Message Sent!</h4>
                    <p className="text-sm text-text-muted mt-1">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-text-muted mb-1">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/[0.08] text-sm font-space text-silver placeholder:text-text-muted/50 outline-none focus:border-cyan-neon/30 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-text-muted mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/[0.08] text-sm font-space text-silver placeholder:text-text-muted/50 outline-none focus:border-cyan-neon/30 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-text-muted mb-1">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/[0.08] text-sm font-space text-silver placeholder:text-text-muted/50 outline-none focus:border-cyan-neon/30 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-text-muted mb-1">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/[0.08] text-sm font-space text-silver placeholder:text-text-muted/50 outline-none focus:border-cyan-neon/30 transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <NeonButton variant="cyan" type="submit" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </NeonButton>
                  </form>
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
