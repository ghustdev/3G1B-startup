'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Footer } from '@/components/sections/Footer';

export default function StartProject() {
  const { t } = useLanguage();

  const processSteps = [
    { number: "01", title: t.startProject.process.step1.title, description: t.startProject.process.step1.description },
    { number: "02", title: t.startProject.process.step2.title, description: t.startProject.process.step2.description },
    { number: "03", title: t.startProject.process.step3.title, description: t.startProject.process.step3.description },
    { number: "04", title: t.startProject.process.step4.title, description: t.startProject.process.step4.description }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-24 md:py-32 pb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white gap-2 pl-0">
              <ArrowLeft size={20} /> {t.projectsPage.backHome}
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Left Column: Text & Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--brand-purple))]/10 border border-[hsl(var(--brand-purple))]/20 text-[hsl(var(--brand-purple))] text-xs font-mono mb-6">
              <Sparkles size={12} />
              <span>{t.startProject.badge}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t.startProject.title} <span className="text-[hsl(var(--brand-purple))]">{t.startProject.titleHighlight}</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
              {t.startProject.subtitle}
            </p>

            {/* Decorative Elements - Project Builder Animation */}
            <ProjectBuilderAnimation />
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const company = formData.get('company');
                const budget = formData.get('budget');
                const message = formData.get('message');
                
                const subject = `Novo Projeto: ${name} - ${company}`;
                const body = `Nome: ${name}%0D%0AEmail: ${email}%0D%0AEmpresa: ${company}%0D%0AOrçamento: ${budget}%0D%0ADetalhes do Projeto:%0D%0A${message}`;
                
                window.location.href = `mailto:3g1bempreendedores@gmail.com?subject=${subject}&body=${body}`;
            }}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">{t.startProject.form.name}</label>
                <Input name="name" className="bg-black/50 border-white/10 h-12 text-white focus:border-[hsl(var(--brand-purple))] focus:ring-1 focus:ring-[hsl(var(--brand-purple))]" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">{t.startProject.form.email}</label>
                    <Input name="email" type="email" className="bg-black/50 border-white/10 h-12 text-white focus:border-[hsl(var(--brand-purple))] focus:ring-1 focus:ring-[hsl(var(--brand-purple))]" required />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">{t.startProject.form.company}</label>
                    <Input name="company" className="bg-black/50 border-white/10 h-12 text-white focus:border-[hsl(var(--brand-purple))] focus:ring-1 focus:ring-[hsl(var(--brand-purple))]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">{t.startProject.form.budget}</label>
                <Input name="budget" className="bg-black/50 border-white/10 h-12 text-white focus:border-[hsl(var(--brand-purple))] focus:ring-1 focus:ring-[hsl(var(--brand-purple))]" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">{t.startProject.form.message}</label>
                <Textarea name="message" className="bg-black/50 border-white/10 min-h-[150px] text-white focus:border-[hsl(var(--brand-purple))] focus:ring-1 focus:ring-[hsl(var(--brand-purple))]" required />
              </div>

              <Button type="submit" size="lg" className="w-full bg-black/50 border border-[hsl(var(--brand-purple))] text-white font-bold h-14 text-lg hover:bg-[hsl(var(--brand-purple))] hover:shadow-[0_0_20px_hsl(var(--brand-purple)/0.5)] transition-all duration-300 rounded-xl group">
                {t.startProject.form.submit} <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Our Process Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t.startProject.process.title} <span className="text-[hsl(var(--brand-cyan))]">{t.startProject.process.titleHighlight}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <div key={index} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[hsl(var(--brand-purple))]/50 transition-colors group">
                        <div className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[hsl(var(--brand-purple))]/10 transition-colors">{step.number}</div>
                        <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>

      </main>
      <Footer />
    </div>
  );
}

function ProjectBuilderAnimation() {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm hidden lg:block">
       {/* Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
       
       {/* Dashboard UI Container */}
       <div className="absolute inset-4 md:inset-8 bg-black/60 border border-white/10 rounded-xl overflow-hidden flex shadow-2xl">
          {/* Sidebar */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 md:w-20 border-r border-white/10 flex flex-col items-center py-4 gap-4"
          >
             <div className="w-8 h-8 rounded-full bg-[hsl(var(--brand-purple))] mb-4" />
             {[1,2,3,4].map(i => (
                <div key={i} className="w-6 h-6 rounded-md bg-white/10" />
             ))}
          </motion.div>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
             {/* Header */}
             <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="h-12 border-b border-white/10 flex items-center px-4 justify-between"
             >
                <div className="w-32 h-3 rounded-full bg-white/10" />
                <div className="flex gap-2">
                   <div className="w-6 h-6 rounded-full bg-white/10" />
                   <div className="w-6 h-6 rounded-full bg-white/10" />
                </div>
             </motion.div>
             
             {/* Dashboard Grid */}
             <div className="p-4 grid grid-cols-2 gap-4 h-full">
                {/* Card 1: Chart */}
                <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 0.4, delay: 0.6 }}
                   className="col-span-2 md:col-span-1 bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col"
                >
                   <div className="w-20 h-2 rounded-full bg-white/10 mb-auto" />
                   <div className="flex items-end gap-2 h-20 mt-4">
                      {[40, 70, 50, 90, 60].map((h, i) => (
                         <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                            className="flex-1 bg-[hsl(var(--brand-cyan))]/50 rounded-t-sm"
                         />
                      ))}
                   </div>
                </motion.div>
                
                {/* Card 2: Code */}
                <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 0.4, delay: 0.8 }}
                   className="col-span-2 md:col-span-1 bg-white/5 rounded-lg p-3 border border-white/5 font-mono text-[8px] md:text-[10px] text-gray-400"
                >
                   <div className="flex gap-1 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                   </div>
                   <div className="space-y-1">
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 1.2 }} className="h-2 bg-white/10 rounded w-3/4" />
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 1.4 }} className="h-2 bg-white/10 rounded w-1/2" />
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 1.6 }} className="h-2 bg-[hsl(var(--brand-purple))]/30 rounded w-5/6" />
                   </div>
                </motion.div>

                 {/* Card 3: Activity */}
                 <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 0.4, delay: 1.0 }}
                   className="col-span-2 bg-white/5 rounded-lg p-3 border border-white/5 flex items-center gap-3"
                >
                   <div className="w-8 h-8 rounded-full bg-white/10" />
                   <div className="flex-1 space-y-2">
                      <div className="w-1/3 h-2 rounded-full bg-white/10" />
                      <div className="w-1/2 h-2 rounded-full bg-white/5" />
                   </div>
                   <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-[hsl(var(--brand-purple))] border-t-transparent rounded-full" 
                   />
                </motion.div>
             </div>
          </div>
       </div>
    </div>
  );
}
