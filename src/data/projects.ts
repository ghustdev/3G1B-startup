export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  video?: string;
  projectUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "zen",
    title: "Projeto Zen",
    description: "Participação no Hackathon Gemini - Google. Uma Plataforma de Saúde Mental e Desempenho Acadêmico para Estudantes do Ensino Médio.",
    tags: ["Vite", "React", "Tailwind", "Node.js", "Figma"],
    gradient: "from-blue-500 to-cyan-500",
    image: "/projects/zen.png",
    projectUrl: "https://projeto-zen.vercel.app/",
    githubUrl: "https://github.com/ghustdev/projeto-zen"
  },
  {
    id: "guardian",
    title: "Guardian 60+",
    description: "Projeto submetito no Ideathon Campus Party Goiás 5. Sistema de acompanhamemnto de pessoas 60+.",
    tags: ["Figma", "React"],
    gradient: "from-green-500 to-emerald-500",
    image: "/projects/guardian.png",
    projectUrl: "https://strong-wagon-58287860.figma.site/",
    githubUrl: "https://github.com/ghustdev/guardian-60"
  },
  {
    id: "eduverse",
    title: "EduVerse",
    description: "Plataforma de ensino adaptativo usando Realidade Aumentada. Finalista do Global EdTech Awards.",
    tags: ["Unity", "C#", "WebXR"],
    gradient: "from-purple-500 to-pink-500",
    image: "/projects/ghust.png",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: "fintech",
    title: "Fintech Revolution",
    description: "Vencedor do Hackathon XP 2024. Uma plataforma de investimentos gamificada para a Geração Z.",
    tags: ["Next.js", "Tailwind", "Node.js"],
    gradient: "from-blue-500 to-cyan-500",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: "agrodrone",
    title: "AgroDrone Monitor",
    description: "Sistema de monitoramento de lavouras com IA e drones autônomos. Redução de 30% em perdas.",
    tags: ["Python", "AI/ML", "React"],
    gradient: "from-green-500 to-emerald-500",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: "healthtrack",
    title: "HealthTrack AI",
    description: "Assistente de saúde pessoal que prevê anomalias cardíacas usando dados de wearables.",
    tags: ["TensorFlow", "React Native", "FastAPI"],
    gradient: "from-red-500 to-orange-500",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: "ecochain",
    title: "EcoChain",
    description: "Marketplace de créditos de carbono baseado em Blockchain para pequenas empresas.",
    tags: ["Solidity", "Web3.js", "Next.js"],
    gradient: "from-teal-500 to-green-400",
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: "smartcity",
    title: "SmartCity Go",
    description: "Sistema de gestão de tráfego inteligente implementado em Goiânia.",
    tags: ["IoT", "Go", "Vue.js"],
    gradient: "from-indigo-500 to-blue-600",
    projectUrl: "#",
    githubUrl: "#"
  }
];
