// Layout Principal da Aplicação
// Define a estrutura base de todas as páginas: HTML, Body, Fontes e Provedores de Contexto.
// Também configura metadados de SEO e renderiza o cabeçalho (Header) globalmente.

import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from "@/contexts/LanguageContext";

// Configuração de Fontes do Google
// Outfit: usada para títulos e elementos de destaque
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Inter: usada para corpo de texto e legibilidade
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3G1B | Startup",
  description: "Grupo de jovens empreendedores criando soluções inovadoras. Desenvolvimento Web, Apps e Estratégia Digital.",
  icons: {
    icon: '/logo-symbol.png',
    apple: '/logo-symbol.png',
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-[hsl(var(--brand-purple))]/30 selection:text-white`}
      >
        <LanguageProvider>
          <Header />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
