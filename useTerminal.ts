import { useState, useCallback, useRef } from 'react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'system';
}

const BOOT_SEQUENCE = [
  { text: "CAHY'EDUCATION`WEBS v5.0 - SYSTEM BOOT", type: 'system' as const },
  { text: "========================================", type: 'system' as const },
  { text: "[OK] Initializing core modules...", type: 'output' as const },
  { text: "[OK] Loading neural network interface...", type: 'output' as const },
  { text: "[OK] Connecting to NASA data streams...", type: 'output' as const },
  { text: "[OK] Gemini AI engine loaded", type: 'output' as const },
  { text: "[OK] Solar system visualization ready", type: 'output' as const },
  { text: "[OK] Terminal command interface active", type: 'output' as const },
  { text: "", type: 'output' as const },
  { text: "Type 'help' to see available commands", type: 'system' as const },
];

const COMMANDS: Record<string, { desc: string; handler: () => string[] }> = {
  help: {
    desc: "Show all available commands",
    handler: () => [
      "AVAILABLE COMMANDS:",
      "  about      - About this system",
      "  skills     - Display technical skills",
      "  projects   - List active projects",
      "  contact    - Contact information",
      "  socials    - Social media links",
      "  education  - Education categories",
      "  network    - Digital network status",
      "  astronomy  - Space exploration data",
      "  ai         - AI tools overview",
      "  status     - System status report",
      "  clear      - Clear terminal screen",
    ],
  },
  about: {
    desc: "About this system",
    handler: () => [
      "CAHY'EDUCATION`WEBS v5.0",
      "Next Generation Digital Ecosystem",
      "",
      "Built with: React, TypeScript, Three.js, GSAP",
      "Features: AI Chat, NASA API, Solar System, Terminal",
      "Status: OPERATIONAL",
    ],
  },
  skills: {
    desc: "Display technical skills",
    handler: () => [
      "TECHNICAL SKILLS:",
      "  Frontend: React, Vue, Next.js, TypeScript, Tailwind",
      "  Backend: Node.js, Python, Go, PostgreSQL",
      "  AI/ML: TensorFlow, PyTorch, LangChain, OpenAI",
      "  Design: Figma, Three.js, WebGL, GSAP",
      "  DevOps: Docker, AWS, CI/CD, Linux",
    ],
  },
  projects: {
    desc: "List active projects",
    handler: () => [
      "ACTIVE PROJECTS:",
      "  1. Portal TEA - Education portal",
      "  2. ASTRA Web - Astronomy archive",
      "  3. AI Laboratory - AI research",
      "  4. Nova Dashboard - Analytics",
      "  5. Education Core - Learning system",
      "  6. Cyber Nexus - Security platform",
      "  7. Quantum Hub - Research platform",
    ],
  },
  contact: {
    desc: "Contact information",
    handler: () => [
      "CONTACT INFORMATION:",
      "  Email: contact@cahy-education.dev",
      "  GitHub: github.com/cahy-education",
      "  Discord: discord.gg/cahy-education",
      "  Status: Available for collaboration",
    ],
  },
  socials: {
    desc: "Social media links",
    handler: () => [
      "SOCIAL LINKS:",
      "  GitHub    - github.com/cahy-education",
      "  Twitter   - twitter.com/cahy_education",
      "  Discord   - discord.gg/cahy-education",
      "  YouTube   - youtube.com/@cahy-education",
      "  Instagram - instagram.com/cahy.education",
    ],
  },
  education: {
    desc: "Education categories",
    handler: () => [
      "EDUCATION CATEGORIES:",
      "  Programming         - 24 courses",
      "  Astronomy           - 18 courses",
      "  Physics             - 15 courses",
      "  Chemistry           - 12 courses",
      "  Technology          - 20 courses",
      "  AI & ML             - 16 courses",
      "  Web Development     - 22 courses",
      "  Space Exploration   - 14 courses",
    ],
  },
  network: {
    desc: "Digital network status",
    handler: () => [
      "NETWORK STATUS:",
      "  TEA Portal        [ONLINE]     12ms",
      "  Cyber Nexus       [ONLINE]     24ms",
      "  AI Laboratory     [ONLINE]     18ms",
      "  Galaxy Archive    [ONLINE]     31ms",
      "  Quantum Hub       [BETA]       45ms",
      "  Neural Core       [ONLINE]     22ms",
    ],
  },
  astronomy: {
    desc: "Space exploration data",
    handler: () => [
      "ASTRONOMY DATA:",
      "  Solar System: 8 planets, 5 dwarf planets",
      "  Active Missions: 24 NASA missions",
      "  Exoplanets Discovered: 5,500+",
      "  Near-Earth Objects Tracked: 32,000+",
      "  Deep Space Probes: 4 active",
      "  ISS Crew: 7 astronauts",
    ],
  },
  ai: {
    desc: "AI tools overview",
    handler: () => [
      "AI TOOLS ECOSYSTEM:",
      "  ChatGPT       - Conversational AI",
      "  Gemini        - Multimodal AI",
      "  Claude        - Analysis AI",
      "  DeepSeek      - Coding AI",
      "  Grok          - Real-time AI",
      "  AI Lab        - Custom models",
      "  Status: All systems operational",
    ],
  },
  status: {
    desc: "System status report",
    handler: () => [
      `SYSTEM STATUS REPORT - ${new Date().toLocaleString()}`,
      "",
      "  CPU Usage:        23%",
      "  Memory:           4.2GB / 16GB",
      "  Uptime:           99.97%",
      "  API Latency:      45ms avg",
      "  Active Sessions:  142",
      "  Data Processed:   2.4TB",
      "  Status:           ALL SYSTEMS NOMINAL",
    ],
  },
};

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>(BOOT_SEQUENCE);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = useCallback((input: string) => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    setHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [
      { text: `> ${input}`, type: 'input' },
    ];

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    const command = COMMANDS[trimmed];
    if (command) {
      command.handler().forEach(line => {
        newLines.push({ text: line, type: 'output' });
      });
    } else {
      newLines.push({ text: `Command not found: '${trimmed}'. Type 'help' for available commands.`, type: 'error' });
    }

    setLines(prev => [...prev, ...newLines]);
  }, []);

  const navigateHistory = useCallback((direction: 'up' | 'down') => {
    if (history.length === 0) return null;
    
    let newIndex: number;
    if (direction === 'up') {
      newIndex = historyIndex >= 0 ? Math.max(0, historyIndex - 1) : history.length - 1;
    } else {
      newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : -1;
    }
    
    setHistoryIndex(newIndex);
    return newIndex >= 0 ? history[newIndex] : '';
  }, [history, historyIndex]);

  const focus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const clear = useCallback(() => {
    setLines([]);
  }, []);

  const addLine = useCallback((text: string, type: TerminalLine['type'] = 'output') => {
    setLines(prev => [...prev, { text, type }]);
  }, []);

  return {
    lines,
    history,
    historyIndex,
    inputRef,
    executeCommand,
    navigateHistory,
    focus,
    clear,
    addLine,
    setLines,
  };
}
