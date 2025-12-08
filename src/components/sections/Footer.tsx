// Componente: Footer (Rodapé)
// Descrição: Informações finais, links úteis, redes sociais e direitos autorais.

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-10 bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-purple))] to-transparent opacity-50" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="relative w-10 h-10">
                    <Image src="/favicon.png" alt="3G1B" fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white tracking-tighter">3G1B</span>
                    <span className="text-xs text-[hsl(var(--brand-cyan))] tracking-widest uppercase">{t.footer.slogan}</span>
                </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-[hsl(var(--brand-cyan))] transition-colors">{t.footer.links.about}</Link></li>
              <li><Link href="#team" className="hover:text-[hsl(var(--brand-cyan))] transition-colors">{t.footer.links.team}</Link></li>
              <li><Link href="#" className="hover:text-[hsl(var(--brand-cyan))] transition-colors">{t.footer.links.careers}</Link></li>
              <li><Link href="#" className="hover:text-[hsl(var(--brand-cyan))] transition-colors">{t.footer.links.press}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t.footer.services}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[hsl(var(--brand-purple))] transition-colors">{t.footer.links.webDev}</Link></li>
              <li><Link href="#" className="hover:text-[hsl(var(--brand-purple))] transition-colors">{t.footer.links.mobileApps}</Link></li>
              <li><Link href="#" className="hover:text-[hsl(var(--brand-purple))] transition-colors">{t.footer.links.uiUx}</Link></li>
              <li><Link href="#" className="hover:text-[hsl(var(--brand-purple))] transition-colors">{t.footer.links.consulting}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t.footer.legal}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">{t.footer.links.terms}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t.footer.links.cookies}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> 3G1B Startup. {t.footer.rights}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            {t.footer.madeWith} <span className="text-[hsl(var(--brand-purple))] font-bold">3G1B</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
