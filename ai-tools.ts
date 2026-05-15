export interface AITool {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
  color: string;
}

export const aiTools: AITool[] = [
  { id: 1, name: "ChatGPT", description: "Advanced conversational AI by OpenAI for natural language understanding and generation", icon: "MessageSquare", category: "Chat", color: "#10A37F" },
  { id: 2, name: "Gemini", description: "Google's multimodal AI model with reasoning and code generation capabilities", icon: "Sparkles", category: "Chat", color: "#4285F4" },
  { id: 3, name: "Claude", description: "Anthropic's AI assistant with long context and analysis capabilities", icon: "Brain", category: "Chat", color: "#CC785C" },
  { id: 4, name: "DeepSeek", description: "Advanced coding and reasoning AI with deep technical knowledge", icon: "Code", category: "Coding", color: "#4D6BFA" },
  { id: 5, name: "Grok", description: "xAI's conversational AI with real-time knowledge and wit", icon: "Zap", category: "Chat", color: "#FF6B35" },
  { id: 6, name: "AI Prompt Generator", description: "Generate optimized prompts for any AI model with context awareness", icon: "Wand2", category: "Productivity", color: "#9D4EDD" },
  { id: 7, name: "AI Coding Assistant", description: "Intelligent code completion, review, and generation assistant", icon: "Terminal", category: "Coding", color: "#00F0FF" },
  { id: 8, name: "AI Physics Helper", description: "Solve physics problems with step-by-step explanations", icon: "Atom", category: "Education", color: "#FF006E" },
  { id: 9, name: "AI Learning Assistant", description: "Personalized learning path and tutoring system", icon: "GraduationCap", category: "Education", color: "#8338EC" },
  { id: 10, name: "AI Web Builder", description: "Generate complete websites from natural language descriptions", icon: "Globe", category: "Development", color: "#06FFB4" },
  { id: 11, name: "AI Astronomy Assistant", description: "Explore space data, identify celestial objects, and learn astronomy", icon: "Telescope", category: "Astronomy", color: "#3A86FF" },
  { id: 12, name: "AI Note Generator", description: "Transform lectures and readings into structured notes", icon: "FileText", category: "Productivity", color: "#FB5607" },
];
