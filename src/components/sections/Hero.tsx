'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Elements - Futuristic Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"
        />

        {/* Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[hsl(var(--brand-purple))]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[hsl(var(--brand-cyan))]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center justify-center h-full">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs md:text-sm font-medium text-gray-300 tracking-wide uppercase">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-white max-w-5xl leading-[1.1] mx-auto"
        >
          {t.hero.title} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] via-white to-[hsl(var(--brand-purple))]">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="/start-project" className="w-full sm:w-auto">
            <Button size="lg" className="w-full h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-200 font-semibold transition-all hover:scale-105">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/history" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full h-14 px-10 text-lg rounded-full border-white/20 hover:bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-105">
                {t.hero.ctaSecondary}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
