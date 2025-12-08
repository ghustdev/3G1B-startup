// Componente: Contact (Seção de Contato)
// Descrição: Formulário de contato e informações diretas (email, telefone, mapa).
// Integração com mailto para envio simples.

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
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
        {/* Background Elements - Futuristic Grid (Shared with Hero/Blueprint) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
             {/* Grid Pattern */}
             <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"
            />
            {/* Gradient Orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[hsl(var(--brand-purple))]/10 rounded-full blur-[150px]" />
        </div>
      <div className="container px-8 md:px-12 lg:px-20 mx-auto relative z-10">
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
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-[hsl(var(--brand-cyan))]/20 transition-colors shrink-0">
                        <Mail className="text-[hsl(var(--brand-cyan))]" />
                    </div>
                    <span className="break-all">3g1bempreendedores@gmail.com</span>
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
                    <span>UFG - Goiânia, GO - Brasil</span>
                  </div>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10"
            >
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                const subject = `Novo Contato via Site: ${name}`;
                const body = `Nome: ${name}%0D%0AEmail: ${email}%0D%0AMensagem:%0D%0A${message}`;
                
                window.location.href = `mailto:3g1bempreendedores@gmail.com?subject=${subject}&body=${body}`;
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">{t.contact.form.name}</label>
                    <Input name="name" placeholder={t.contact.form.namePlaceholder} className="bg-black/50 border-white/10 text-white focus:border-[hsl(var(--brand-purple))]" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">{t.contact.form.email}</label>
                    <Input name="email" type="email" placeholder={t.contact.form.emailPlaceholder} className="bg-black/50 border-white/10 text-white focus:border-[hsl(var(--brand-purple))]" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">{t.contact.form.message}</label>
                  <Textarea name="message" placeholder={t.contact.form.messagePlaceholder} className="bg-black/50 border-white/10 text-white min-h-[150px] focus:border-[hsl(var(--brand-purple))]" required />
                </div>
                <Button type="submit" className="w-full bg-black/50 border border-[hsl(var(--brand-purple))] text-white font-bold py-6 hover:bg-[hsl(var(--brand-purple))] hover:shadow-[0_0_20px_hsl(var(--brand-purple)/0.5)] transition-all duration-300 group">
                  {t.contact.form.submit} <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
