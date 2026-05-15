export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tech: string[];
  status: 'live' | 'development' | 'archived';
  category: string;
}

export const projects: Project[] = [
  { id: 1, name: "Portal TEA", description: "Technology Education Access - Complete learning portal with course management", image: "/images/project-4.jpg", tech: ["React", "Node.js", "MongoDB"], status: "live", category: "Education" },
  { id: 2, name: "Seleksi TEA", description: "Student selection system with AI-powered assessment", image: "/images/project-1.jpg", tech: ["Python", "TensorFlow", "FastAPI"], status: "live", category: "Education" },
  { id: 3, name: "Portal TC", description: "Tech Community portal for developer collaboration", image: "/images/network-2.jpg", tech: ["Next.js", "TypeScript", "PostgreSQL"], status: "live", category: "Community" },
  { id: 4, name: "Portal EAC", description: "Education and Community integrated platform", image: "/images/project-4.jpg", tech: ["Vue.js", "Firebase", "Tailwind"], status: "development", category: "Education" },
  { id: 5, name: "ASTRA Web", description: "Astronomy Space Technology Resource Archive", image: "/images/astronomy.jpg", tech: ["React", "Three.js", "NASA API"], status: "live", category: "Astronomy" },
  { id: 6, name: "HA Web", description: "Holographic Archive with 3D visualization", image: "/images/network-3.jpg", tech: ["Three.js", "WebGL", "React"], status: "development", category: "Archive" },
  { id: 7, name: "Galaxy Archive", description: "Comprehensive space and galaxy data archive", image: "/images/nebula.jpg", tech: ["Python", "Django", "AWS"], status: "live", category: "Astronomy" },
  { id: 8, name: "AI Laboratory", description: "AI research lab with experiment tracking", image: "/images/project-3.jpg", tech: ["Python", "PyTorch", "React"], status: "live", category: "AI" },
  { id: 9, name: "Nova Dashboard", description: "Next-gen analytics dashboard with real-time data", image: "/images/project-1.jpg", tech: ["React", "D3.js", "WebSocket"], status: "development", category: "Dashboard" },
  { id: 10, name: "Education Core", description: "Core education system with AI tutoring", image: "/images/project-4.jpg", tech: ["Next.js", "OpenAI", "Prisma"], status: "development", category: "Education" },
];
