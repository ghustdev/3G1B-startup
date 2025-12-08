// Dados dos Projetos
// Contém a lista de projetos exibidos na seção Portfólio.
// Centraliza as informações para fácil manutenção e adição de novos itens.

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
  }
];
