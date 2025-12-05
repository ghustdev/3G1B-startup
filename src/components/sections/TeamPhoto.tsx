'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function TeamPhoto() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Futuristic Frame */}
          <div className="relative p-1 bg-gradient-to-r from-[hsl(var(--brand-cyan))] via-[hsl(var(--brand-purple))] to-[hsl(var(--brand-cyan))] rounded-2xl">
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-[hsl(var(--brand-cyan))] via-[hsl(var(--brand-purple))] to-[hsl(var(--brand-cyan))] opacity-40" />
            
            <div className="relative bg-black rounded-xl overflow-hidden border border-white/10">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[hsl(var(--brand-cyan))] rounded-tl-xl z-20" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[hsl(var(--brand-purple))] rounded-tr-xl z-20" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[hsl(var(--brand-purple))] rounded-bl-xl z-20" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[hsl(var(--brand-cyan))] rounded-br-xl z-20" />

              {/* Image Container */}
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/team.jpg"
                  alt="3G1B Team"
                  fill
                  quality={100}
                  priority
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Tech Lines Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[hsl(var(--brand-cyan))]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[hsl(var(--brand-purple))]/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
