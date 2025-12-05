'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Flag, Rocket, Zap, Hammer, Globe2, Sparkles, History as HistoryIcon } from 'lucide-react';
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
      icon: <Sparkles className="text-white" />,
      align: "center"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-24 md:py-32 pb-32 md:pb-48">
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
            {/* Central Progress Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
                <motion.div 
                    className="w-full bg-gradient-to-b from-[hsl(var(--brand-cyan))] via-[hsl(var(--brand-purple))] to-[hsl(var(--brand-cyan))]"
                    style={{ scaleY, transformOrigin: "top" }}
                />
            </div>

            <div className="space-y-24 md:space-y-32 pb-32">
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
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${isCenter ? 'justify-center text-center md:flex-col' : (isRight ? 'md:flex-row-reverse' : '')}`}
        >
            {/* Content Card */}
            <div className={`flex-1 w-full pl-12 md:pl-0 ${isCenter ? 'md:max-w-2xl mx-auto pl-0' : (isRight ? 'md:text-right' : 'md:text-left')}`}>
                <div className={`group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[hsl(var(--brand-purple))]/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(124,93,234,0.3)] ${isCenter ? 'text-center' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-purple))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                    
                    <span className="relative text-[hsl(var(--brand-cyan))] font-mono text-sm tracking-widest mb-2 block font-bold">{event.year}</span>
                    <h3 className="relative text-3xl font-bold text-white mb-1">{event.title}</h3>
                    <h4 className="relative text-lg text-[hsl(var(--brand-purple))] mb-4">{event.subtitle}</h4>
                    <p className="relative text-gray-400 leading-relaxed text-lg">{event.description}</p>
                </div>
            </div>

            {/* Center Icon Node */}
            <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-black flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)] ${isCenter ? 'top-[-60px] md:top-[-80px] left-1/2' : ''}`}>
                <div className="w-full h-full rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-[hsl(var(--brand-cyan))] transition-colors">
                    <div className="scale-75 transition-transform duration-300">
                        {event.icon}
                    </div>
                </div>
            </div>

            {/* Spacer for Balance */}
            {!isCenter && <div className="flex-1 hidden md:block" />}
        </motion.div>
    );
}
