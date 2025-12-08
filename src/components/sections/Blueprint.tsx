'use client';

// Componente: Blueprint (Arquitetura de Software)
// Descrição: Exibe uma animação interativa de circuito que demonstra a arquitetura do sistema.
// Usa Framer Motion para animações baseadas em scroll e SVG para os fios de conexão.

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Code, Smartphone, Palette, Lightbulb, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Blueprint() {
  const { t } = useLanguage();
  // Ref para o container principal que controla o scroll
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Hook de Scroll do Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Suavização do progresso do scroll
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Estágios da Animação (transformações baseadas no scroll)
  // 1. Título aparece
  const titleOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const titleY = useTransform(smoothProgress, [0, 0.1], [20, 0]);

  // 2. Núcleo (Core) se expande e gira
  const coreScale = useTransform(smoothProgress, [0.1, 0.3], [0.5, 1]);
  const coreOpacity = useTransform(smoothProgress, [0.1, 0.2], [0, 1]);
  const coreRotate = useTransform(smoothProgress, [0.1, 0.3], [-45, 0]);

  // 3. Fios se conectam
  const wiresProgress = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);
  
  // 4. Serviços periféricos aparecem
  const servicesOpacity = useTransform(smoothProgress, [0.5, 0.8], [0, 1]);
  const servicesScale = useTransform(smoothProgress, [0.5, 0.8], [0.8, 1]);

  // Verificação de Dispositivo Móvel para Responsividade
  const [isMobile, setIsMobile] = useState(false); 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    // Seção principal com altura de 200vh para permitir scroll longo
    <section ref={containerRef} className={`relative h-[200vh] bg-[#050505] ${isMobile ? 'hidden' : 'block'}`}>
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden py-8">
        
        {/* Background - PCB Pattern + Hero Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
             {/* Hero Grid Pattern */}
             <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"
            />
            {/* PCB Texture Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#111,transparent)]" />
            </div>
        </div>

        {/* Title Section */}
        <motion.div 
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-30 text-center w-full px-4 mb-8 shrink-0"
        >
          <div className="inline-block px-3 py-0.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/5 text-[#FFD700] text-xs font-mono mb-2 tracking-widest uppercase">
            System Architecture
          </div>
          <h2 className="text-5xl font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {t.blueprint.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[hsl(var(--brand-purple))]">{t.blueprint.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto font-mono">
            {t.blueprint.subtitle}
          </p>
        </motion.div>

        {/* Main Processor Unit Container - Scaled to fit */}
        <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center shrink-0 max-h-[70vh]">
            
            {/* Connecting Wires (SVG) - Precise Coordinate System 1000x1000 */}
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                <defs>
                    <linearGradient id="infiniteFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                    <mask id="fadeCenter">
                        <linearGradient id="fadeGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="white" stopOpacity="0"/>
                            <stop offset="1" stopColor="white" stopOpacity="1"/>
                        </linearGradient>
                    </mask>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Circuit Paths - Orthogonal (Manhattan) Routing 
                    Center is 500, 500
                    Web (Top Left): 200, 200
                    Mobile (Top Right): 800, 200
                    Design (Bottom Left): 200, 800
                    Consulting (Bottom Right): 800, 800
                */}
                {[
                    // Top Left (Web)
                    { d: "M500 500 H 200 V 200", color: "#FFFFFF" },
                    // Top Right (Mobile)
                    { d: "M500 500 H 800 V 200", color: "#FFFFFF" },
                    // Bottom Left (Design)
                    { d: "M500 500 H 200 V 800", color: "#FFFFFF" },
                    // Bottom Right (Consulting)
                    { d: "M500 500 H 800 V 800", color: "#FFFFFF" },
                ].map((item, i) => (
                    <g key={i}>
                        {/* Base Trace (Static Dark Line) */}
                        <motion.path
                            d={item.d}
                            stroke="#333333"
                            strokeWidth="4"
                            strokeOpacity="1"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                        />
                        {/* Active Infinite Flow (White Gradient) */}
                        <motion.path
                            d={item.d}
                            stroke="url(#infiniteFlow)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                                pathLength: [0, 1, 0], 
                                opacity: [0, 1, 0],
                                strokeDashoffset: [0, -100] // Illustrative, frame motion handles pathLength
                            }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "linear",
                                delay: i * 0.5 
                            }}
                            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                            vectorEffect="non-scaling-stroke"
                        />
                        
                        {/* Connection Dots (Joints at turns) */}
                        <circle cx={i % 2 === 0 ? 200 : 800} cy={500} r="4" fill="#FFFFFF" />
                    </g>
                ))}
            </svg>

            {/* Central Processor (Core) - Centered at 50% 50% */}
            <motion.div 
                style={{ scale: coreScale, opacity: coreOpacity, rotate: coreRotate }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 bg-[#111] rounded-2xl border border-[#333] shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center group"
            >
                {/* Gold Pins */}
                <div className="absolute -inset-1 border-2 border-[#FFD700]/30 rounded-2xl opacity-50" />
                <div className="absolute -inset-2 border border-[#FFD700]/10 rounded-3xl opacity-30" />
                
                {/* Inner Chip */}
                <div className="relative w-36 h-36 bg-gradient-to-br from-[#222] to-[#000] rounded-xl border border-[#444] flex flex-col items-center justify-center overflow-hidden">
                    {/* Chip Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    
                    {/* Logo / Core Symbol */}
                    <div className="relative z-10 flex flex-col items-center">
                        <Zap className="w-12 h-12 text-[#FFD700] mb-2 fill-[#FFD700]/10 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                        <span className="text-white font-bold text-2xl tracking-widest font-mono">3G1B</span>
                        <span className="text-[#FFD700] text-[10px] font-mono mt-0.5 tracking-[0.2em]">PROCESSOR</span>
                    </div>

                    {/* Animated Glint */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                </div>

                {/* Corner Screws */}
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#333] border border-[#555]" />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#333] border border-[#555]" />
                <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#333] border border-[#555]" />
                <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#333] border border-[#555]" />
            </motion.div>

            {/* Service Modules (Peripheral Chips) 
                Positioned using % to match SVG coordinates (20% and 80%)
                Note: 200/1000 = 20%, 800/1000 = 80%.
                 We center the chips on these coordinates.
            */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                
                {/* Módulo Web Development (20%, 20%) */}
                <ServiceChip 
                    icon={<Code />} 
                    label={t.blueprint.nodes.web} 
                    color="cyan" 
                    style={{ top: '20%', left: '20%' }}
                    delay={0}
                    opacity={servicesOpacity}
                    scale={servicesScale}
                />

                {/* Módulo Mobile Apps (80%, 20%) */}
                <ServiceChip 
                    icon={<Smartphone />} 
                    label={t.blueprint.nodes.mobile} 
                    color="purple" 
                    style={{ top: '20%', left: '80%' }}
                    delay={0.2}
                    opacity={servicesOpacity}
                    scale={servicesScale}
                />

                {/* Módulo UI/UX Design (20%, 80%) */}
                <ServiceChip 
                    icon={<Palette />} 
                    label={t.blueprint.nodes.design} 
                    color="purple" 
                    style={{ top: '80%', left: '20%' }}
                    delay={0.4}
                    opacity={servicesOpacity}
                    scale={servicesScale}
                />

                {/* Módulo Tech Consulting (80%, 80%) */}
                <ServiceChip 
                    icon={<Lightbulb />} 
                    label={t.blueprint.nodes.consulting} 
                    color="cyan" 
                    style={{ top: '80%', left: '80%' }}
                    delay={0.6}
                    opacity={servicesOpacity}
                    scale={servicesScale}
                />

            </div>
        </div>
      </div>
    </section>
  );
}

// Componente Auxiliar para os Chips de Serviço
function ServiceChip({ icon, label, color, style, delay, opacity, scale }: any) {
    // Definição de cores baseada no prop 'color'
    const borderColor = color === 'cyan' ? 'border-cyan-500/50' : 'border-purple-500/50';
    const glowColor = color === 'cyan' ? 'shadow-[0_0_20px_rgba(6,182,212,0.2)]' : 'shadow-[0_0_20px_rgba(168,85,247,0.2)]';
    const textColor = color === 'cyan' ? 'text-cyan-400' : 'text-purple-400';
    const iconColor = color === 'cyan' ? 'text-cyan-300' : 'text-purple-300';

    return (
        <motion.div 
            // IMPORTANTE: Usamos x e y do Framer Motion para centralizar (-50%)
            // Isso garante que o 'scale' funcione junto com o 'translate' sem conflitos.
            style={{ 
                ...style, 
                x: "-50%", 
                y: "-50%", 
                opacity, 
                scale 
            }}
            className={`absolute z-30 pointer-events-auto w-48 p-1 bg-[#111] rounded-lg border ${borderColor} ${glowColor} backdrop-blur-md`}
        >
            <div className="relative bg-[#0a0a0a] rounded border border-white/5 p-3 flex flex-col items-center text-center overflow-hidden">
                {/* Efeito de Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] animate-[scan_3s_infinite]" />
                
                <div className={`mb-2 p-1.5 rounded bg-white/5 ${iconColor}`}>
                    {React.cloneElement(icon, { size: 20 })}
                </div>
                
                <h3 className="text-white font-bold text-sm mb-0.5 font-mono uppercase tracking-wider leading-tight">{label}</h3>
                
                {/* Indicador de Status */}
                <div className="flex items-center gap-1.5 mt-1">
                    <span className={`w-1 h-1 rounded-full ${color === 'cyan' ? 'bg-cyan-500' : 'bg-purple-500'} animate-pulse`} />
                    <span className={`text-[8px] ${textColor} font-mono`}>ONLINE</span>
                </div>
            </div>
        </motion.div>
    );
}
