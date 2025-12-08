// Componente: About (Sobre Nós)
// Descrição: Apresenta a missão e os valores da empresa.
// Utiliza cards animados para destacar pontos chave.

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Rocket, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[hsl(var(--brand-purple))]" />,
      title: t.about.card1Title,
      description: t.about.card1Desc
    },
    {
      icon: <Rocket className="w-8 h-8 text-[hsl(var(--brand-cyan))]" />,
      title: t.about.card2Title,
      description: t.about.card2Desc
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: t.about.card3Title,
      description: t.about.card3Desc
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container px-8 md:px-12 mx-auto">
        <div className="flex flex-col gap-16 items-center">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              {t.about.title} <span className="text-[hsl(var(--brand-purple))]">{t.about.titleHighlight}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              {t.about.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full">
                  <CardContent className="flex flex-col items-center text-center gap-4 p-8">
                    <div className="p-4 rounded-full bg-white/5 mb-2">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
