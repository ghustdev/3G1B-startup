'use client';

import React from 'react';
import { Building2, GraduationCap, Rocket, Code2, Globe2, Cpu } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

const partners = [
  { name: "UFG", icon: <GraduationCap size={40} />, type: "Universidade" },
  { name: "HubGoiás", icon: <Rocket size={40} />, type: "Aceleradora" },
  { name: "GDC", icon: <Code2 size={40} />, type: "Parceiro Tech - Google" },
  { name: "AKCIT", icon: <Globe2 size={40} />, type: "Aceleradora - AKCIT" },
  { name: "Inova Goiás", icon: <Building2 size={40} />, type: "Governo" },
  { name: "GovTech", icon: <Cpu size={40} />, type: "Governo" },
];

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
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {/* First Loop */}
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
          
          {/* Duplicate for infinite scroll */}
          {partners.map((partner, index) => (
            <PartnerCard key={`dup-${index}`} partner={partner} />
          ))}

           {/* Triplicate for safety on wide screens and seamlessness */}
           {partners.map((partner, index) => (
            <PartnerCard key={`tri-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Partner {
    name: string;
    icon: React.ReactNode;
    type: string;
}

function PartnerCard({ partner }: { partner: Partner }) {
    // Assign specific colors for each partner type or name to make it vibrant
    const getIconColor = (name: string) => {
        if (name === "UFG") return "text-red-500";
        if (name === "HubGoiás") return "text-orange-500";
        if (name === "GDC") return "text-blue-500";
        if (name === "AKCIT") return "text-green-500";
        if (name === "Inova Goiás") return "text-yellow-500";
        if (name === "GovTech") return "text-cyan-500";
        return "text-[hsl(var(--brand-purple))]";
    };

    return (
        <div className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group/item w-32 md:w-40 shrink-0">
            <div className="p-4 md:p-6 rounded-xl bg-white/5 border border-white/10 group-hover/item:border-[hsl(var(--brand-purple))] transition-colors w-full flex justify-center aspect-square items-center">
                <div className={`${getIconColor(partner.name)} transition-colors transform group-hover/item:scale-110 duration-300`}>
                    {React.cloneElement(partner.icon as React.ReactElement, { size: 48 } as any)}  
                </div>
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover/item:text-white transition-colors text-wrap text-center">{partner.name}</span>
        </div>
    )
}


