'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Database, Layout, Server, Smartphone, Lock, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

export function Blueprint() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Transform scroll progress into animation stages
  const gridOpacity = useTransform(smoothProgress, [0, 0.2], [0, 0.8]);
  const blueprintScale = useTransform(smoothProgress, [0, 0.5], [0.8, 1]);
  const blueprintRotateX = useTransform(smoothProgress, [0, 0.5], [20, 0]);
  const linesPathLength = useTransform(smoothProgress, [0.1, 0.6], [0, 1]);
  const nodesOpacity = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);
  const nodesScale = useTransform(smoothProgress, [0.3, 0.6], [0.5, 1]);
  const finalGlowOpacity = useTransform(smoothProgress, [0.7, 1], [0, 1]);
  
  // Scanning effect
  const scanLineTop = useTransform(smoothProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-black perspective-1000">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Title */}
        <motion.div 
            style={{ opacity: gridOpacity, y: useTransform(smoothProgress, [0, 0.2], [-50, 0]) }}
            className="absolute top-10 z-20 text-center w-full px-4"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                {t.blueprint.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-purple))] filter drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">{t.blueprint.titleHighlight}</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">{t.blueprint.subtitle}</p>
        </motion.div>

        {/* Background Grid (Active Cyberpunk Grid) */}
        <motion.div 
            style={{ opacity: gridOpacity }}
            className="absolute inset-0 z-0"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
            
            {/* Moving background particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[hsl(var(--brand-cyan))] rounded-full"
                    initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
                    animate={{ 
                        y: [null, Math.random() * 100 + "%"],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </motion.div>

        {/* The Blueprint Diagram */}
        <motion.div 
            style={{ 
                scale: blueprintScale,
                rotateX: blueprintRotateX,
                transformPerspective: 1000
            }}
            className="relative z-10 w-full max-w-6xl aspect-video bg-black/80 border border-white/10 rounded-2xl backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group"
        >
            {/* Scanning Line Effect */}
            <motion.div 
                style={{ top: scanLineTop }}
                className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--brand-cyan))] to-transparent z-20 opacity-50 shadow-[0_0_20px_hsl(var(--brand-cyan))]"
            />

            {/* Connecting Lines (SVG) with Data Flow - Desktop Only */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--brand-cyan))" stopOpacity="0" />
                        <stop offset="50%" stopColor="hsl(var(--brand-cyan))" stopOpacity="1" />
                        <stop offset="100%" stopColor="hsl(var(--brand-purple))" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Central Hub to Nodes Paths */}
                {[
                    "M50% 50% L20% 20%", // Top Left
                    "M50% 50% L80% 20%", // Top Right
                    "M50% 50% L20% 80%", // Bottom Left
                    "M50% 50% L80% 80%", // Bottom Right
                    "M50% 50% L50% 20%", // Top Center
                    "M50% 50% L50% 80%", // Bottom Center
                ].map((path, i) => (
                    <g key={i}>
                        {/* Base Line */}
                        <motion.path 
                            d={i === 0 ? "M500 300 L200 150" : 
                               i === 1 ? "M500 300 L800 150" :
                               i === 2 ? "M500 300 L200 450" :
                               i === 3 ? "M500 300 L800 450" :
                               i === 4 ? "M500 300 L500 100" :
                                         "M500 300 L500 500"}
                            stroke="url(#lineGradient)" 
                            strokeWidth="2" 
                            fill="none"
                            style={{ pathLength: linesPathLength, opacity: 0.3 }} 
                        />
                        {/* Data Packet */}
                        <motion.circle r="3" fill="white" className="filter drop-shadow-[0_0_5px_white]">
                            <animateMotion 
                                dur={`${2 + i * 0.5}s`} 
                                repeatCount="indefinite"
                                path={i === 0 ? "M500 300 L200 150" : 
                                      i === 1 ? "M500 300 L800 150" :
                                      i === 2 ? "M500 300 L200 450" :
                                      i === 3 ? "M500 300 L800 450" :
                                      i === 4 ? "M500 300 L500 100" :
                                                "M500 300 L500 500"}
                            />
                        </motion.circle>
                    </g>
                ))}
            </svg>

            {/* Mobile Connecting Lines (Vertical Flow) */}
            <div className="absolute inset-0 pointer-events-none md:hidden flex flex-col items-center justify-center">
                <div className="w-[2px] h-full bg-gradient-to-b from-[hsl(var(--brand-cyan))] via-[hsl(var(--brand-purple))] to-[hsl(var(--brand-cyan))] opacity-30" />
            </div>

            {/* Nodes Grid */}
            <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 md:gap-8 p-6 md:p-12 items-center">
                
                {/* Top Left: Frontend */}
                <motion.div style={{ opacity: nodesOpacity, scale: nodesScale }} className="md:col-start-1 md:row-start-1 flex flex-col items-center justify-center p-6 border border-cyan-500/30 bg-black/60 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow duration-500">
                    <div className="p-3 bg-cyan-500/10 rounded-full mb-3 animate-pulse">
                        <Layout className="w-8 h-8 text-[hsl(var(--brand-cyan))]" />
                    </div>
                    <span className="text-sm text-cyan-200 font-mono font-bold tracking-wider">{t.blueprint.nodes.frontend}</span>
                    <div className="mt-2 h-1 w-12 bg-cyan-900/50 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-cyan-500" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} />
                    </div>
                </motion.div>

                {/* Top Center: Cloud/Globe */}
                <motion.div style={{ opacity: nodesOpacity, scale: nodesScale }} className="md:col-start-2 md:row-start-1 flex flex-col items-center justify-center order-first md:order-none mb-4 md:mb-0">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse" />
                        <Globe className="w-12 h-12 text-blue-400 relative z-10" />
                    </div>
                    <span className="text-xs text-blue-300 font-mono mt-2">Global CDN</span>
                </motion.div>

                {/* Top Right: Mobile */}
                <motion.div style={{ opacity: nodesOpacity, scale: nodesScale }} className="md:col-start-3 md:row-start-1 flex flex-col items-center justify-center p-6 border border-cyan-500/30 bg-black/60 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow duration-500">
                    <div className="p-3 bg-cyan-500/10 rounded-full mb-3 animate-pulse">
                        <Smartphone className="w-8 h-8 text-[hsl(var(--brand-cyan))]" />
                    </div>
                    <span className="text-sm text-cyan-200 font-mono font-bold tracking-wider">{t.blueprint.nodes.mobile}</span>
                    <div className="mt-2 h-1 w-12 bg-cyan-900/50 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-cyan-500" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2.5, repeat: Infinity }} />
                    </div>
                </motion.div>

                {/* Center: Core API (The Heart) */}
                <div className="md:col-start-2 md:row-start-2 flex flex-col items-center justify-center relative my-4 md:my-0">
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-purple))] rounded-full blur-[50px] opacity-20"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <div className="relative z-10 p-8 border-2 border-white/20 bg-black/80 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] flex flex-col items-center">
                        <div className="relative">
                            <Server className="w-16 h-16 text-white mb-4" />
                            <motion.div 
                                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </div>
                        <span className="text-lg text-white font-bold font-mono tracking-widest">{t.blueprint.nodes.api}</span>
                        <div className="flex gap-2 mt-4">
                            <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0s" }} />
                            <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0.2s" }} />
                            <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0.4s" }} />
                        </div>
                    </div>
                </div>

                {/* Bottom Left: Database */}
                <motion.div style={{ opacity: nodesOpacity, scale: nodesScale }} className="md:col-start-1 md:row-start-3 flex flex-col items-center justify-center p-6 border border-purple-500/30 bg-black/60 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-shadow duration-500">
                    <div className="p-3 bg-purple-500/10 rounded-full mb-3">
                        <Database className="w-8 h-8 text-[hsl(var(--brand-purple))]" />
                    </div>
                    <span className="text-sm text-purple-200 font-mono font-bold tracking-wider">{t.blueprint.nodes.db}</span>
                    <div className="mt-2 flex gap-1">
                        {[...Array(3)].map((_, i) => (
                            <motion.div 
                                key={i}
                                className="w-1 h-3 bg-purple-500/50 rounded-sm"
                                animate={{ height: ["12px", "20px", "12px"] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Center: AI/Processing */}
                <motion.div style={{ opacity: nodesOpacity, scale: nodesScale }} className="md:col-start-2 md:row-start-3 flex flex-col items-center justify-center my-4 md:my-0">
                    <div className="relative">
                        <Cpu className="w-10 h-10 text-pink-400 mb-2" />
                        <motion.div 
                            className="absolute inset-0 border-2 border-pink-500/50 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <span className="text-xs text-pink-300 font-mono">AI Engine</span>
                </motion.div>

                {/* Bottom Right: Security */}
                <motion.div style={{ opacity: nodesOpacity, scale: nodesScale }} className="md:col-start-3 md:row-start-3 flex flex-col items-center justify-center p-6 border border-purple-500/30 bg-black/60 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-shadow duration-500">
                    <div className="p-3 bg-purple-500/10 rounded-full mb-3">
                        <ShieldCheck className="w-8 h-8 text-[hsl(var(--brand-purple))]" />
                    </div>
                    <span className="text-sm text-purple-200 font-mono font-bold tracking-wider">{t.blueprint.nodes.security}</span>
                    <div className="mt-2 px-2 py-0.5 bg-purple-900/50 rounded text-[10px] text-purple-200 border border-purple-500/30">
                        ENCRYPTED
                    </div>
                </motion.div>
            </div>

            {/* Final Glow Overlay */}
            <motion.div 
                style={{ opacity: finalGlowOpacity }}
                className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--brand-purple))]/20 to-[hsl(var(--brand-cyan))]/20 pointer-events-none rounded-2xl mix-blend-screen"
            />
        </motion.div>
      </div>
    </section>
  );
}
