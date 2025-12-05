'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const allProjects = [
  {
    title: "Fintech Revolution",
    description: "Vencedor do Hackathon XP 2024. Uma plataforma de investimentos gamificada para a Geração Z.",
    tags: ["Next.js", "Tailwind", "Node.js"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AgroDrone Monitor",
    description: "Sistema de monitoramento de lavouras com IA e drones autônomos. Redução de 30% em perdas.",
    tags: ["Python", "AI/ML", "React"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "EduVerse",
    description: "Plataforma de ensino adaptativo usando Realidade Aumentada. Finalista do Global EdTech Awards.",
    tags: ["Unity", "C#", "WebXR"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "HealthTrack AI",
    description: "Assistente de saúde pessoal que prevê anomalias cardíacas usando dados de wearables.",
    tags: ["TensorFlow", "React Native", "FastAPI"],
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "EcoChain",
    description: "Marketplace de créditos de carbono baseado em Blockchain para pequenas empresas.",
    tags: ["Solidity", "Web3.js", "Next.js"],
    gradient: "from-teal-500 to-green-400"
  },
  {
    title: "SmartCity Go",
    description: "Sistema de gestão de tráfego inteligente implementado em Goiânia.",
    tags: ["IoT", "Go", "Vue.js"],
    gradient: "from-indigo-500 to-blue-600"
  }
];

import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container px-4 mx-auto">
        <div className="mb-12">
            <Link href="/">
                <Button variant="ghost" className="mb-6 text-gray-400 hover:text-white pl-0">
                    <ArrowLeft className="mr-2 h-4 w-4" /> {t.projectsPage.backHome}
                </Button>
            </Link>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                    {t.projectsPage.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-purple))]">{t.projectsPage.titleHighlight}</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                    {t.projectsPage.subtitle}
                </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-white/10 bg-white/5 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300 h-full flex flex-col">
                <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity relative`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                        <Button variant="secondary" size="sm" className="gap-2">
                            Ver Detalhes <ExternalLink size={16} />
                        </Button>
                    </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/5 pt-4">
                    <Button variant="ghost" size="sm" className="w-full text-gray-400 hover:text-white">
                        <Github className="mr-2 h-4 w-4" /> Ver Código
                    </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
