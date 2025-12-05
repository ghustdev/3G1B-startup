'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();

  const projectData = t.projectsData?.[project.id as keyof typeof t.projectsData];
  const title = projectData?.title || project.title;
  const description = projectData?.description || project.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-white/10 bg-white/5 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300 h-full flex flex-col">
        <Link href={project.projectUrl || '#'} target={project.projectUrl !== '#' ? "_blank" : undefined} className={`block h-48 w-full relative overflow-hidden ${project.projectUrl !== '#' ? 'cursor-pointer' : 'cursor-default'}`}>
            {/* Media Rendering Logic */}
            {project.image ? (
                <Image 
                    src={project.image} 
                    alt={title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            ) : project.video ? (
                <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <Button variant="secondary" size="sm" className="gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                    {t.portfolio.viewDetails} <ExternalLink size={16} />
                </Button>
            </div>
        </Link>
        <CardHeader>
          <CardTitle className="text-xl text-white group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
            {project.projectUrl && project.projectUrl !== '#' ? (
                <Link href={project.projectUrl} target="_blank">{title}</Link>
            ) : (
                title
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {description}
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
            {project.githubUrl !== '#' ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="ghost" size="sm" className="w-full text-gray-400 hover:text-white hover:bg-white/5">
                        <Github className="mr-2 h-4 w-4" /> {t.portfolio.viewCode}
                    </Button>
                </a>
            ) : (
                <Button variant="ghost" size="sm" className="w-full text-gray-400 hover:text-white hover:bg-white/5" disabled>
                    <Github className="mr-2 h-4 w-4" /> {t.portfolio.viewCode}
                </Button>
            )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
