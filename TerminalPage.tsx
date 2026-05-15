import { useState, useEffect, useRef } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { Terminal as TerminalIcon, Trash2 } from 'lucide-react';

export function TerminalPage() {
  const { lines, executeCommand, navigateHistory, clear } = useTerminal();
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      clear();
    }
  };

  return (
    <div className="pt-16 pb-0 px-0 h-[calc(100vh-0px)] flex flex-col" ref={containerRef}>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-neon" />
            <span className="text-xs font-mono text-cyan-neon">cahy@education:~</span>
            <span className="text-[10px] font-mono text-text-muted ml-2">(Ctrl+L to clear)</span>
          </div>
          <button
            onClick={clear}
            className="flex items-center gap-1 text-xs font-mono text-text-muted hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto p-4 font-mono text-sm"
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

        <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 border-t border-white/[0.06] bg-surface">
          <span className="text-cyan-neon mr-2 font-mono">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-silver placeholder:text-text-muted/50"
            placeholder="Type a command (try 'help')..."
            autoComplete="off"
            spellCheck={false}
          />
          <span className="w-2 h-4 bg-cyan-neon animate-blink ml-1" />
        </form>
      </div>
    </div>
  );
}
