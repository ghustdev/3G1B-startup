'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Code, Smartphone, Palette, Lightbulb, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Blueprint() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Animation Stages
  const titleOpacity = useTransform(smoothProgress, [0, 0.05], [0, 1]);
  const titleY = useTransform(smoothProgress, [0, 0.05], [20, 0]);

  const coreScale = useTransform(smoothProgress, [0.05, 0.2], [0.5, 1]);
  const coreOpacity = useTransform(smoothProgress, [0.05, 0.15], [0, 1]);
  const coreRotate = useTransform(smoothProgress, [0.05, 0.2], [-45, 0]);

  const wiresProgress = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);
  
  const servicesOpacity = useTransform(smoothProgress, [0.5, 0.8], [0, 1]);
  const servicesScale = useTransform(smoothProgress, [0.5, 0.8], [0.8, 1]);

  // Mobile check for responsive layout
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden py-4 md:py-8">
        
        {/* Background - PCB Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#111,transparent)]" />
        </div>

        {/* Title Section - Compact and visible */}
        <motion.div 
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-30 text-center w-full px-4 mb-4 md:mb-8 shrink-0"
        >
          <div className="inline-block px-3 py-0.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/5 text-[#FFD700] text-[10px] md:text-xs font-mono mb-2 tracking-widest uppercase">
            System Architecture
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {t.blueprint.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[hsl(var(--brand-purple))]">{t.blueprint.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-[10px] md:text-base max-w-xl mx-auto font-mono">
            {t.blueprint.subtitle}
          </p>
        </motion.div>

        {/* Main Processor Unit Container - Scaled to fit */}
        <div className="relative w-full max-w-[95vw] md:max-w-6xl aspect-square md:aspect-video flex items-center justify-center shrink-0 max-h-[70vh]">
            
            {/* Connecting Wires (SVG) - Orthogonal Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                <defs>
                    <linearGradient id="goldFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
                        <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Circuit Paths - Orthogonal (Manhattan) Routing */}
                {[
                    // Top Left (Web)
                    { 
                        path: isMobile 
                            ? "M50 50 V 20 H 50" // Vertical up
                            : "M50 50 H 20 V 20", // Left then Up
                        color: "#06b6d4" 
                    },
                    // Top Right (Mobile)
                    { 
                        path: isMobile 
                            ? "M50 50 V 35 H 80" // Vertical up then right (adjusted) -> actually just vertical for mobile layout usually
                            : "M50 50 H 80 V 20", // Right then Up
                        color: "#a855f7" 
                    },
                    // Bottom Left (Design)
                    { 
                        path: isMobile 
                            ? "M50 50 V 65" // Vertical down
                            : "M50 50 H 20 V 80", // Left then Down
                        color: "#a855f7" 
                    },
                    // Bottom Right (Consulting)
                    { 
                        path: isMobile 
                            ? "M50 50 V 80" // Vertical down
                            : "M50 50 H 80 V 80", // Right then Down
                        color: "#06b6d4" 
                    },
                ].map((item, i) => {
                    // Custom path generation for orthogonal lines based on percentage coordinates
                    // We need to construct the 'd' attribute dynamically based on the abstract path description above
                    // The above strings are just placeholders for logic below
                    
                    let d = "";
                    if (isMobile) {
                        // Mobile Layout: Vertical Spine
                        // Center is 50% 50%
                        if (i === 0) d = "M500 500 V 150"; // Top 1
                        if (i === 1) d = "M500 500 V 380"; // Top 2
                        if (i === 2) d = "M500 500 V 620"; // Bottom 1
                        if (i === 3) d = "M500 500 V 850"; // Bottom 2
                    } else {
                        // Desktop Layout: Orthogonal Sprawl
                        // Center is 500 500 (in 1000x1000 coordinate space)
                        if (i === 0) d = "M500 500 H 200 V 200"; // Top Left
                        if (i === 1) d = "M500 500 H 800 V 200"; // Top Right
                        if (i === 2) d = "M500 500 H 200 V 800"; // Bottom Left
                        if (i === 3) d = "M500 500 H 800 V 800"; // Bottom Right
                    }

                    return (
                        <g key={i}>
                            {/* Base Trace */}
                            <motion.path
                                d={d}
                                stroke={item.color}
                                strokeWidth="2"
                                strokeOpacity="0.2"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                            {/* Active Flow */}
                            <motion.path
                                d={d}
                                stroke={`url(#goldFlow)`}
                                strokeWidth="4"
                                fill="none"
                                style={{ pathLength: wiresProgress }}
                                className="drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                                vectorEffect="non-scaling-stroke"
                            />
                            {/* Data Packets */}
                            <motion.circle r="4" fill="#FFD700" filter="url(#glow)">
                                <animateMotion 
                                    dur={`${2 + i * 0.5}s`}
                                    repeatCount="indefinite"
                                    path={d}
                                    keyPoints="0;1"
                                    keyTimes="0;1"
                                />
                            </motion.circle>
                            
                            {/* Connection Dots (Joints) */}
                            {!isMobile && (
                                <circle cx={i % 2 === 0 ? 200 : 800} cy={500} r="3" fill={item.color} opacity="0.5" />
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Central Processor (Core) */}
            <motion.div 
                style={{ scale: coreScale, opacity: coreOpacity, rotate: coreRotate }}
                className="absolute z-20 w-24 h-24 md:w-48 md:h-48 bg-[#111] rounded-2xl border border-[#333] shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center group"
            >
                {/* Gold Pins */}
                <div className="absolute -inset-1 border-2 border-[#FFD700]/30 rounded-2xl opacity-50" />
                <div className="absolute -inset-2 border border-[#FFD700]/10 rounded-3xl opacity-30" />
                
                {/* Inner Chip */}
                <div className="relative w-16 h-16 md:w-36 md:h-36 bg-gradient-to-br from-[#222] to-[#000] rounded-xl border border-[#444] flex flex-col items-center justify-center overflow-hidden">
                    {/* Chip Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    
                    {/* Logo / Core Symbol */}
                    <div className="relative z-10 flex flex-col items-center">
                        <Zap className="w-6 h-6 md:w-12 md:h-12 text-[#FFD700] mb-1 md:mb-2 fill-[#FFD700]/10 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                        <span className="text-white font-bold text-sm md:text-2xl tracking-widest font-mono">3G1B</span>
                        <span className="text-[#FFD700] text-[6px] md:text-[10px] font-mono mt-0.5 tracking-[0.2em]">PROCESSOR</span>
                    </div>

                    {/* Animated Glint */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                </div>

                {/* Corner Screws */}
                <div className="absolute top-1.5 left-1.5 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#333] border border-[#555]" />
                <div className="absolute top-1.5 right-1.5 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#333] border border-[#555]" />
                <div className="absolute bottom-1.5 left-1.5 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#333] border border-[#555]" />
                <div className="absolute bottom-1.5 right-1.5 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#333] border border-[#555]" />
            </motion.div>

            {/* Service Modules (Peripheral Chips) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                
                {/* Web Development Module */}
                <ServiceChip 
                    icon={<Code />} 
                    label={t.blueprint.nodes.web} 
                    color="cyan" 
                    position={isMobile ? "top-[5%] left-1/2 -translate-x-1/2" : "top-[10%] left-[10%]"}
                    delay={0}
                    opacity={servicesOpacity}
                    scale={servicesScale}
                    isMobile={isMobile}
                />

                {/* Mobile Apps Module */}
                <ServiceChip 
                    icon={<Smartphone />} 
                    label={t.blueprint.nodes.mobile} 
                    color="purple" 
                    position={isMobile ? "top-[28%] left-1/2 -translate-x-1/2" : "top-[10%] right-[10%]"}
                    delay={0.2}
                    opacity={servicesOpacity}
                    scale={servicesScale}
                    isMobile={isMobile}
                />

                {/* UI/UX Design Module */}
                <ServiceChip 
                    icon={<Palette />} 
                    label={t.blueprint.nodes.design} 
                    color="purple" 
                    position={isMobile ? "bottom-[28%] left-1/2 -translate-x-1/2" : "bottom-[10%] left-[10%]"}
                    delay={0.4}
                    opacity={servicesOpacity}
                    scale={servicesScale}
                    isMobile={isMobile}
                />

                {/* Tech Consulting Module */}
                <ServiceChip 
                    icon={<Lightbulb />} 
                    label={t.blueprint.nodes.consulting} 
                    color="cyan" 
                    position={isMobile ? "bottom-[5%] left-1/2 -translate-x-1/2" : "bottom-[10%] right-[10%]"}
                    delay={0.6}
                    opacity={servicesOpacity}
                    scale={servicesScale}
                    isMobile={isMobile}
                />

            </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for Service Chips
function ServiceChip({ icon, label, color, position, delay, opacity, scale, isMobile }: any) {
    const borderColor = color === 'cyan' ? 'border-cyan-500/50' : 'border-purple-500/50';
    const glowColor = color === 'cyan' ? 'shadow-[0_0_20px_rgba(6,182,212,0.2)]' : 'shadow-[0_0_20px_rgba(168,85,247,0.2)]';
    const textColor = color === 'cyan' ? 'text-cyan-400' : 'text-purple-400';
    const iconColor = color === 'cyan' ? 'text-cyan-300' : 'text-purple-300';

    return (
        <motion.div 
            style={{ opacity, scale }}
            className={`absolute ${position} pointer-events-auto ${isMobile ? 'w-28' : 'w-36 md:w-48'} p-1 bg-[#111] rounded-lg border ${borderColor} ${glowColor} backdrop-blur-md`}
        >
            <div className="relative bg-[#0a0a0a] rounded border border-white/5 p-1.5 md:p-3 flex flex-col items-center text-center overflow-hidden">
                {/* Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] animate-[scan_3s_infinite]" />
                
                <div className={`mb-1.5 md:mb-2 p-1 md:p-1.5 rounded bg-white/5 ${iconColor}`}>
                    {React.cloneElement(icon, { size: isMobile ? 14 : 20 })}
                </div>
                
                <h3 className="text-white font-bold text-[10px] md:text-sm mb-0.5 font-mono uppercase tracking-wider leading-tight">{label}</h3>
                
                {/* Status Indicator */}
                <div className="flex items-center gap-1.5 mt-1">
                    <span className={`w-1 h-1 rounded-full ${color === 'cyan' ? 'bg-cyan-500' : 'bg-purple-500'} animate-pulse`} />
                    <span className={`text-[8px] ${textColor} font-mono`}>ONLINE</span>
                </div>
            </div>
        </motion.div>
    );
}
