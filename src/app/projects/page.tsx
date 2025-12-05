'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
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
                    {t.projectsPage.title} <span className="text-[hsl(var(--brand-purple))]">{t.projectsPage.titleHighlight}</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                    {t.projectsPage.subtitle}
                </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
