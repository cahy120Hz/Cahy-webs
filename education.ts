export interface EducationTopic {
  id: number;
  name: string;
  icon: string;
  description: string;
  courses: number;
  color: string;
}

export const educationTopics: EducationTopic[] = [
  { id: 1, name: "Programming", icon: "Code", description: "Learn programming from basics to advanced concepts", courses: 24, color: "#00F0FF" },
  { id: 2, name: "Astronomy", icon: "Telescope", description: "Explore the universe, stars, planets, and galaxies", courses: 18, color: "#9D4EDD" },
  { id: 3, name: "Physics", icon: "Atom", description: "Understand the laws that govern our universe", courses: 15, color: "#FF006E" },
  { id: 4, name: "Chemistry", icon: "FlaskConical", description: "Discover chemical reactions and molecular structures", courses: 12, color: "#06FFB4" },
  { id: 5, name: "Technology", icon: "Cpu", description: "Latest tech trends, AI, and emerging technologies", courses: 20, color: "#FB5607" },
  { id: 6, name: "Artificial Intelligence", icon: "Brain", description: "Machine learning, deep learning, and AI applications", courses: 16, color: "#8338EC" },
  { id: 7, name: "Web Development", icon: "Globe", description: "Build modern web applications with cutting-edge tools", courses: 22, color: "#3A86FF" },
  { id: 8, name: "Space Exploration", icon: "Rocket", description: "Journey through space exploration history and future", courses: 14, color: "#FF6B35" },
];
