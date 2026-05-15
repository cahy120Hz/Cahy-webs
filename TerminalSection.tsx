import { useState, useEffect, useRef } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Terminal as TerminalIcon } from 'lucide-react';

export function TerminalSection() {
  const { lines, executeCommand, navigateHistory } = useTerminal();
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = navigateHistory('up');
      if (prev !== null) setInput(prev);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = navigateHistory('down');
      if (next !== null) setInput(next);
    }
  };

  return (
    <section className="relative py-24 px-4">
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader
          title="SYSTEM TERMINAL"
          subtitle="Interactive command-line interface. Type 'help' to see available commands."
        />

        <div className="rounded-xl overflow-hidden glass border border-cyan-neon/20 shadow-glow-cyan">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-neon" />
              <span className="text-xs font-mono text-cyan-neon">cahy@education:~</span>
            </div>
          </div>

          <div
            className="p-4 h-80 overflow-y-auto font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div key={i} className="mb-0.5">
                {line.type === 'input' && (
                  <span className="text-cyan-neon">{line.text}</span>
                )}
                {line.type === 'output' && (
                  <span className="text-text-muted">{line.text}</span>
                )}
                {line.type === 'error' && (
                  <span className="text-red-400">{line.text}</span>
                )}
                {line.type === 'system' && (
                  <span className="text-purple-neon font-semibold">{line.text}</span>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 border-t border-white/[0.06] bg-surface/50">
            <span className="text-cyan-neon mr-2 font-mono">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-silver placeholder:text-text-muted/50"
              placeholder="Type a command..."
              autoComplete="off"
              spellCheck={false}
            />
            <span className="w-2 h-4 bg-cyan-neon animate-blink ml-1" />
          </form>
        </div>
      </div>
    </section>
  );
}
