'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
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
  }
];

import { useLanguage } from '@/contexts/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {t.portfolio.title} <span className="text-[hsl(var(--brand-purple))]">{t.portfolio.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg">
                {t.portfolio.subtitle}
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-white/10 gap-2 rounded-full px-6">
                {t.portfolio.viewAll} <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden border-white/10 bg-white/5 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300 h-full flex flex-col">
                <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity relative`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                        <Button variant="secondary" size="sm" className="gap-2">
                            {t.portfolio.viewDetails} <ExternalLink size={16} />
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
                        <Github className="mr-2 h-4 w-4" /> {t.portfolio.viewCode}
                    </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center md:hidden">
            <Link href="/projects">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2 rounded-full px-8 w-full">
                    {t.portfolio.viewAll} <ArrowRight size={16} />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
