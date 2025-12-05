'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();
  
  // Display only the top 3 projects
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="container px-8 md:px-12 lg:px-20 mx-auto">
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
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
