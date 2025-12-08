// Componente: Header (Cabeçalho de Navegação)
// Descrição: Barra de navegação fixa com efeito de vidro (blur).
// Comporta-se de forma responsiva (Menu Hamburger no mobile) e esconde ao rolar para baixo.

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, Globe } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const { scrollY } = useScroll();
  const { t, language, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t.header.about, href: '#about' },
    { name: t.header.portfolio, href: '#portfolio' },
    { name: t.header.team, href: '#team' },
    { name: t.header.contact, href: '#contact' },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setIsScrolled(currentScrollY > 20);
    setLastScrollY(currentScrollY);
  });

  return (
    <motion.header
      className={`fixed z-50 transition-all duration-500 top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-5xl rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] py-3 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md'
          : 'bg-black/50 backdrop-blur-sm'
      }`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110 duration-300">
                <Image 
                    src="/favicon.png" 
                    alt="3G1B Logo" 
                    fill 
                    className="object-contain"
                    priority
                />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                3G1B
            </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[hsl(var(--brand-cyan))] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="text-gray-300 hover:text-white gap-2"
          >
            <Globe size={16} />
            {language === 'pt' ? 'EN' : 'PT'}
          </Button>

          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-semibold transition-all hover:scale-105">
            {t.header.cta}
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
            <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-white"
            >
                <Globe size={20} />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <Menu className="w-6 h-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-l border-white/10 text-white w-[300px]">
                    <div className="flex flex-col gap-8 mt-10">
                        <div className="flex justify-center mb-8">
                             <div className="relative w-24 h-24">
                                <Image 
                                    src="/favicon.png" 
                                    alt="3G1B Logo" 
                                    fill 
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium hover:text-[hsl(var(--brand-cyan))] transition-colors text-center"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full bg-[hsl(var(--brand-purple))] hover:bg-[hsl(var(--brand-purple))]/90 text-white rounded-full">
                            {t.header.cta}
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
