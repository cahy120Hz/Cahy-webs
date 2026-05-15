export interface CommunityMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'coding' | 'studying';
  contributions: number;
  rank: number;
  skills: string[];
  color: string;
}

export const communityMembers: CommunityMember[] = [
  { id: 1, name: "Alex Chen", role: "Lead Developer", avatar: "AC", status: "online", contributions: 1247, rank: 1, skills: ["React", "Node.js", "AI"], color: "#00F0FF" },
  { id: 2, name: "Sarah Kim", role: "UI Designer", avatar: "SK", status: "coding", contributions: 983, rank: 2, skills: ["Figma", "CSS", "Three.js"], color: "#9D4EDD" },
  { id: 3, name: "Miguel Torres", role: "Data Scientist", avatar: "MT", status: "studying", contributions: 856, rank: 3, skills: ["Python", "ML", "Data"], color: "#FF006E" },
  { id: 4, name: "Yuki Tanaka", role: "Frontend Dev", avatar: "YT", status: "online", contributions: 742, rank: 4, skills: ["TypeScript", "Vue", "Tailwind"], color: "#06FFB4" },
  { id: 5, name: "Emma Wilson", role: "Backend Dev", avatar: "EW", status: "offline", contributions: 698, rank: 5, skills: ["Go", "Rust", "PostgreSQL"], color: "#FB5607" },
  { id: 6, name: "Lucas Silva", role: "DevOps", avatar: "LS", status: "online", contributions: 621, rank: 6, skills: ["Docker", "K8s", "AWS"], color: "#8338EC" },
  { id: 7, name: "Aisha Patel", role: "AI Researcher", avatar: "AP", status: "coding", contributions: 534, rank: 7, skills: ["PyTorch", "NLP", "LLM"], color: "#3A86FF" },
  { id: 8, name: "Noah Brown", role: "Fullstack Dev", avatar: "NB", status: "online", contributions: 489, rank: 8, skills: ["Next.js", "Prisma", "GraphQL"], color: "#FF6B35" },
  { id: 9, name: "Mia Johnson", role: "Mobile Dev", avatar: "MJ", status: "studying", contributions: 412, rank: 9, skills: ["React Native", "Swift", "Kotlin"], color: "#00F0FF" },
  { id: 10, name: "Oliver Lee", role: "Security Engineer", avatar: "OL", status: "offline", contributions: 367, rank: 10, skills: ["Security", "Rust", "Blockchain"], color: "#9D4EDD" },
];
