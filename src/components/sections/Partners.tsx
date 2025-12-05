'use client';

import React from 'react';
import { Building2, GraduationCap, Rocket, Code2, Globe2, Cpu } from 'lucide-react';

const partners = [
  { name: "UFG", icon: <GraduationCap size={40} />, type: "Universidade" },
  { name: "HubGoiás", icon: <Rocket size={40} />, type: "Aceleradora" },
  { name: "GDC", icon: <Code2 size={40} />, type: "Parceiro Tech - Google" },
  { name: "AKCIT", icon: <Globe2 size={40} />, type: "Aceleradora - AKCIT" },
  { name: "Inova Goiás", icon: <Building2 size={40} />, type: "Governo" },
  { name: "GovTech", icon: <Cpu size={40} />, type: "Governo" },
];

import { useLanguage } from '@/contexts/LanguageContext';

export function Partners() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-black/50 border-y border-white/5 overflow-hidden">
      <div className="container px-4 mx-auto mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t.partners.title} <span className="text-[hsl(var(--brand-cyan))]">3G1B</span>
        </h2>
        <p className="text-gray-400">
            {t.partners.subtitle}
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* First Loop */}
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group/item">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover/item:border-[hsl(var(--brand-purple))] transition-colors">
                    <div className="text-white group-hover/item:text-[hsl(var(--brand-purple))] transition-colors">
                        {partner.icon}
                    </div>
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover/item:text-white transition-colors">{partner.name}</span>
            </div>
          ))}
          
          {/* Duplicate for infinite scroll */}
          {partners.map((partner, index) => (
            <div key={`dup-${index}`} className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group/item">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover/item:border-[hsl(var(--brand-purple))] transition-colors">
                    <div className="text-white group-hover/item:text-[hsl(var(--brand-purple))] transition-colors">
                        {partner.icon}
                    </div>
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover/item:text-white transition-colors">{partner.name}</span>
            </div>
          ))}
           {/* Triplicate for safety on wide screens */}
           {partners.map((partner, index) => (
            <div key={`tri-${index}`} className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group/item">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover/item:border-[hsl(var(--brand-purple))] transition-colors">
                    <div className="text-white group-hover/item:text-[hsl(var(--brand-purple))] transition-colors">
                        {partner.icon}
                    </div>
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover/item:text-white transition-colors">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
