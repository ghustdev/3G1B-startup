'use client';

// Página: History (Nossa História)
// Descrição: Timeline interativa contando a trajetória da empresa.
// Inclui animações fluidas e um efeito especial "Horizonte" para o futuro.

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Rocket, Zap, Hammer, Globe2, Sparkles, History as HistoryIcon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Footer } from '@/components/sections/Footer';

export default function History() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timelineEvents = [
    {
      year: t.history.timeline.spark.year,
      title: t.history.timeline.spark.title,
      subtitle: t.history.timeline.spark.subtitle,
      description: t.history.timeline.spark.description,
      icon: <Zap className="text-[hsl(var(--brand-cyan))]" />,
      align: "left"
    },
    {
      year: t.history.timeline.foundation.year,
      title: t.history.timeline.foundation.title,
      subtitle: t.history.timeline.foundation.subtitle,
      description: t.history.timeline.foundation.description,
      icon: <Hammer className="text-[hsl(var(--brand-purple))]" />,
      align: "right"
    },
    {
      year: t.history.timeline.pivot.year,
      title: t.history.timeline.pivot.title,
      subtitle: t.history.timeline.pivot.subtitle,
      description: t.history.timeline.pivot.description,
      icon: <Rocket className="text-[hsl(var(--brand-cyan))]" />,
      align: "left"
    },
    {
      year: t.history.timeline.expansion.year,
      title: t.history.timeline.expansion.title,
      subtitle: t.history.timeline.expansion.subtitle,
      description: t.history.timeline.expansion.description,
      icon: <Globe2 className="text-[hsl(var(--brand-purple))]" />,
      align: "right"
    },
    {
      year: t.history.timeline.vision.year,
      title: t.history.timeline.vision.title,
      subtitle: t.history.timeline.vision.subtitle,
      description: t.history.timeline.vision.description,
      icon: <Sun className="text-[#FFD700]" />, // Ícone de Sol para esperança
      align: "center",
      isFuture: true // Flag especial para o futuro
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      
      {/* Background Fluido e Colorido */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[hsl(var(--brand-purple))]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[hsl(var(--brand-cyan))]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px]" />
      </div>

      <main className="flex-grow container mx-auto px-4 py-24 md:py-32 pb-32 md:pb-48 relative z-10">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
        >
            <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white gap-2 pl-0">
                <ArrowLeft size={20} /> {t.projectsPage.backHome}
            </Button>
            </Link>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-32"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--brand-purple))]/10 border border-[hsl(var(--brand-purple))]/20 text-[hsl(var(--brand-purple))] text-xs font-mono mb-6">
                <HistoryIcon size={12} />
                <span>{t.history.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t.history.title} <span className="text-[hsl(var(--brand-purple))]">{t.history.titleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-400">
                {t.history.subtitle}
            </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
            {/* Linha Central de Progresso (Fica atrás dos cards) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden z-0">
                <motion.div 
                    className="w-full bg-gradient-to-b from-[hsl(var(--brand-cyan))] via-[hsl(var(--brand-purple))] to-[#FFD700]"
                    style={{ scaleY, transformOrigin: "top" }}
                />
            </div>

            <div className="space-y-24 md:space-y-32 pb-32 relative z-10">
                {timelineEvents.map((event, index) => (
                    <TimelineItem key={index} event={event} index={index} />
                ))}
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

function TimelineItem({ event, index }: { event: any, index: number }) {
    const isCenter = event.align === 'center';
    const isRight = event.align === 'right' || (index % 2 !== 0 && !isCenter);
    const isFuture = event.isFuture;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${isCenter ? 'justify-center text-center md:flex-col' : (isRight ? 'md:flex-row-reverse' : '')}`}
        >
            {/* Conteúdo do Card */}
            <div className={`flex-1 w-full pl-12 md:pl-0 ${isCenter ? 'md:max-w-2xl mx-auto pl-0' : (isRight ? 'md:text-right' : 'md:text-left')}`}>
                <div className={`
                    group relative p-8 rounded-3xl transition-all duration-500
                    ${isFuture 
                        ? 'bg-gradient-to-b from-[#FFD700]/10 to-[#FFD700]/5 border border-[#FFD700]/30 shadow-[0_0_50px_rgba(255,215,0,0.1)] hover:shadow-[0_0_80px_rgba(255,215,0,0.2)]'
                        : 'bg-white/5 border border-white/10 hover:border-[hsl(var(--brand-purple))]/50 hover:shadow-[0_0_30px_-10px_rgba(124,93,234,0.3)]'
                    }
                    ${isCenter ? 'text-center' : ''}
                `}>
                    {/* Background Shine para o Futuro */}
                    {isFuture && (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,215,0,0.2),transparent_70%)] rounded-3xl pointer-events-none" />
                    )}

                    {/* Gradient Overlay Geral */}
                    {!isFuture && (
                        <div className={`absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-purple))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                    )}
                    
                    <span className={`relative font-mono text-sm tracking-widest mb-2 block font-bold ${isFuture ? 'text-[#FFD700]' : 'text-[hsl(var(--brand-cyan))]'}`}>
                        {event.year}
                    </span>
                    <h3 className={`relative text-3xl font-bold mb-1 ${isFuture ? 'text-white drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]' : 'text-white'}`}>
                        {event.title}
                    </h3>
                    <h4 className={`relative text-lg mb-4 ${isFuture ? 'text-[#FFD700]' : 'text-[hsl(var(--brand-purple))]'}`}>
                        {event.subtitle}
                    </h4>
                    <p className={`relative leading-relaxed text-lg ${isFuture ? 'text-gray-200' : 'text-gray-400'}`}>
                        {event.description}
                    </p>

                    {/* Brilho pulsante para o Futuro */}
                    {isFuture && (
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#FFD700]/20 rounded-full blur-[50px] animate-pulse z-[-1]" />
                    )}
                </div>
            </div>

            {/* Nó Central (Ícone) */}
            <div className={`
                absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.8)]
                ${isCenter ? 'top-[-60px] md:top-[-80px] left-1/2' : ''}
                ${isFuture ? 'bg-black border-4 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.4)]' : 'bg-black border-4 border-black'}
            `}>
                <div className={`
                    w-full h-full rounded-full flex items-center justify-center transition-colors
                    ${isFuture ? 'bg-[#FFD700]/10' : 'bg-white/10 border border-white/20 group-hover:border-[hsl(var(--brand-cyan))]'}
                `}>
                    <div className={`transition-transform duration-300 ${isFuture ? 'scale-100 animate-[spin_10s_linear_infinite]' : 'scale-75'}`}>
                        {event.icon}
                    </div>
                </div>
            </div>

            {/* Spacer para Balanço */}
            {!isCenter && <div className="flex-1 hidden md:block" />}
        </motion.div>
    );
}
