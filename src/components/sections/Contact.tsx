'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container px-8 md:px-12 mx-auto">
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {t.contact.title} <span className="text-[hsl(var(--brand-purple))]">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 h-full"
            >
                <h3 className="text-2xl font-semibold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-[hsl(var(--brand-cyan))]/20 transition-colors">
                        <Mail className="text-[hsl(var(--brand-cyan))]" />
                    </div>
                    <span>contato@3g1b.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-[hsl(var(--brand-cyan))]/20 transition-colors">
                        <Phone className="text-[hsl(var(--brand-cyan))]" />
                    </div>
                    <span>+55 (62) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-[hsl(var(--brand-cyan))]/20 transition-colors">
                        <MapPin className="text-[hsl(var(--brand-cyan))]" />
                    </div>
                    <span>Goiânia, GO - Brasil</span>
                  </div>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">{t.contact.form.name}</label>
                    <Input placeholder={t.contact.form.namePlaceholder} className="bg-black/50 border-white/10 text-white focus:border-[hsl(var(--brand-purple))]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">{t.contact.form.email}</label>
                    <Input placeholder={t.contact.form.emailPlaceholder} className="bg-black/50 border-white/10 text-white focus:border-[hsl(var(--brand-purple))]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">{t.contact.form.message}</label>
                  <Textarea placeholder={t.contact.form.messagePlaceholder} className="bg-black/50 border-white/10 text-white min-h-[150px] focus:border-[hsl(var(--brand-purple))]" />
                </div>
                <Button className="w-full bg-gradient-to-r from-[hsl(var(--brand-purple))] to-[hsl(var(--brand-cyan))] text-white font-bold py-6 hover:opacity-90 transition-opacity">
                  {t.contact.form.submit} <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
