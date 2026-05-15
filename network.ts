export interface NetworkSite {
  id: number;
  name: string;
  description: string;
  image: string;
  status: 'online' | 'maintenance' | 'beta';
  category: string;
}

export const networkSites: NetworkSite[] = [
  { id: 1, name: "TEA Portal", description: "Technology Education Access portal for learning resources", image: "/images/network-1.jpg", status: "online", category: "Education" },
  { id: 2, name: "TEA Omega Portal", description: "Advanced education portal with premium features", image: "/images/network-2.jpg", status: "online", category: "Education" },
  { id: 3, name: "EAC Portal", description: "Education and Community access hub", image: "/images/network-3.jpg", status: "beta", category: "Community" },
  { id: 4, name: "TC Community Portal", description: "Tech Community collaboration space", image: "/images/network-1.jpg", status: "online", category: "Community" },
  { id: 5, name: "ASTRA Web", description: "Astronomy and Space Technology Resource Archive", image: "/images/astronomy.jpg", status: "online", category: "Astronomy" },
  { id: 6, name: "HA Web", description: "Holographic Archive Web interface", image: "/images/network-2.jpg", status: "online", category: "Archive" },
  { id: 7, name: "All Universe", description: "Universal knowledge database", image: "/images/nebula.jpg", status: "online", category: "Knowledge" },
  { id: 8, name: "Cyber Nexus", description: "Cybersecurity and tech nexus platform", image: "/images/network-3.jpg", status: "maintenance", category: "Security" },
  { id: 9, name: "Education Core", description: "Core education management system", image: "/images/project-4.jpg", status: "online", category: "Education" },
  { id: 10, name: "AI Laboratory", description: "AI research and experimentation lab", image: "/images/project-3.jpg", status: "online", category: "AI" },
  { id: 11, name: "Nova System", description: "Next-generation system dashboard", image: "/images/project-1.jpg", status: "beta", category: "Dashboard" },
  { id: 12, name: "Galaxy Archive", description: "Space data and astronomical archive", image: "/images/astronomy.jpg", status: "online", category: "Astronomy" },
  { id: 13, name: "Quantum Hub", description: "Quantum computing research platform", image: "/images/network-1.jpg", status: "beta", category: "Research" },
  { id: 14, name: "Creator Network", description: "Creator ecosystem and collaboration", image: "/images/network-2.jpg", status: "online", category: "Community" },
  { id: 15, name: "Space Dashboard", description: "Real-time space data dashboard", image: "/images/project-2.jpg", status: "online", category: "Dashboard" },
  { id: 16, name: "Neural Core", description: "Neural network processing center", image: "/images/project-3.jpg", status: "online", category: "AI" },
  { id: 17, name: "Orion Platform", description: "Orion constellation data platform", image: "/images/astronomy.jpg", status: "beta", category: "Astronomy" },
  { id: 18, name: "Infinity Panel", description: "Infinite possibilities control panel", image: "/images/network-3.jpg", status: "online", category: "Dashboard" },
  { id: 19, name: "Lunar System", description: "Lunar exploration data system", image: "/images/nebula.jpg", status: "online", category: "Astronomy" },
  { id: 20, name: "Project Alpha", description: "Alpha stage experimental project", image: "/images/project-1.jpg", status: "beta", category: "Experimental" },
];
