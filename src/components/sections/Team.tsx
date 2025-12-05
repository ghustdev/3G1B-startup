'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter, Github } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

export function Team() {
  const { t } = useLanguage();
  
  const team = [
    {
      name: "Gustavo",
      role: t.team.roles.gustavo,
      bio: t.team.bios.gustavo,
      initials: "GU",
      color: "bg-blue-500"
    },
    {
      name: "Arthur",
      role: t.team.roles.arthur,
      bio: t.team.bios.arthur,
      initials: "AR",
      color: "bg-purple-500"
    },
    {
      name: "Felipe",
      role: t.team.roles.felipe,
      bio: t.team.bios.felipe,
      initials: "FE",
      color: "bg-green-500"
    },
    {
      name: "Heitor",
      role: t.team.roles.heitor,
      bio: t.team.bios.heitor,
      initials: "HE",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="team" className="py-32 bg-black relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--brand-purple))]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            {t.team.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-purple))]">{t.team.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group h-full">
                <CardContent className="flex flex-col items-center pt-8 pb-8">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[hsl(var(--brand-cyan))] transition-colors duration-300">
                        {/* Using UI Avatars for consistent placeholders */}
                        <Avatar className="w-full h-full">
                            <AvatarImage src={`https://ui-avatars.com/api/?name=${member.name}&background=random&color=fff&size=256`} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-[hsl(var(--brand-purple))] rounded-full flex items-center justify-center border-4 border-black">
                        <span className="text-xs text-white">🚀</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-[hsl(var(--brand-cyan))] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-400 mb-6 px-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="text-white hover:text-[hsl(var(--brand-cyan))] transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="text-white hover:text-[hsl(var(--brand-cyan))] transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="text-white hover:text-[hsl(var(--brand-cyan))] transition-colors"><Github size={18} /></a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
