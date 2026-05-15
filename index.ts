export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ThemeState {
  mode: 'dark' | 'matrix' | 'cyber';
  accentColor: 'cyan' | 'purple' | 'green' | 'pink';
  particles: boolean;
  sound: boolean;
}

export interface TerminalCommand {
  name: string;
  description: string;
  handler: (args: string[]) => string[];
}

export interface NetworkStatus {
  site: string;
  status: 'online' | 'offline' | 'maintenance';
  latency: number;
  lastChecked: Date;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tech: string[];
  status: 'live' | 'development' | 'archived';
  category: string;
}
