import { useState, useRef, useEffect } from 'react';
import { sendGeminiMessage } from '@/api/gemini';
import type { Message } from '@/types';
import { Bot, Send, User, Loader2, Minimize2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AIChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I'm CAHY AI, your futuristic education assistant. I can help with programming, astronomy, physics, and more. What would you like to explore?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await sendGeminiMessage(input.trim());

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <>
      {minimized && (
        <button
          onClick={() => setMinimized(false)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass border border-cyan-neon/30 shadow-glow-cyan flex items-center justify-center group hover:scale-110 transition-transform"
        >
          <Sparkles className="w-6 h-6 text-cyan-neon group-hover:animate-spin" />
        </button>
      )}

      {!minimized && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-xl overflow-hidden glass-strong border border-cyan-neon/20 shadow-glow-cyan-lg">
          <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-neon" />
              <span className="font-space font-semibold text-sm text-silver">CAHY AI</span>
              {loading && <Loader2 className="w-3.5 h-3.5 text-cyan-neon animate-spin" />}
              {!loading && (
                <span className="flex items-center gap-1 text-[10px] font-mono text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  ONLINE
                </span>
              )}
            </div>
            <button
              onClick={() => setMinimized(true)}
              className="p-1 rounded-lg text-text-muted hover:text-silver hover:bg-white/5 transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={cn(
                  'flex gap-2',
                  msg.role === 'user' && 'flex-row-reverse'
                )}
              >
                <div className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0',
                  msg.role === 'assistant' ? 'bg-cyan-neon/10' : 'bg-purple-neon/10'
                )}>
                  {msg.role === 'assistant' ? (
                    <Bot className="w-4 h-4 text-cyan-neon" />
                  ) : (
                    <User className="w-4 h-4 text-purple-neon" />
                  )}
                </div>
                <div className={cn(
                  'max-w-[80%] px-3 py-2 rounded-xl text-sm font-space',
                  msg.role === 'assistant'
                    ? 'bg-surface border border-white/[0.06] text-silver'
                    : 'bg-cyan-neon/10 border border-cyan-neon/20 text-silver'
                )}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-cyan-neon/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-neon" />
                </div>
                <div className="flex items-center gap-1 px-3 py-2 rounded-xl bg-surface border border-white/[0.06]">
                  <Loader2 className="w-3 h-3 text-cyan-neon animate-spin" />
                  <span className="text-xs text-text-muted font-mono">Processing...</span>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-2 border-t border-white/[0.06] bg-surface/50">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask CAHY AI anything..."
              className="flex-1 bg-transparent border-none outline-none text-sm font-space text-silver placeholder:text-text-muted/50 px-2 py-1.5"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-lg bg-cyan-neon/10 text-cyan-neon hover:bg-cyan-neon/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
