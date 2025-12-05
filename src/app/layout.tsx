import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3G1B Startup | Inovação e Tecnologia",
  description: "Grupo de jovens empreendedores criando soluções inovadoras. Desenvolvimento Web, Apps e Estratégia Digital.",
  icons: {
    icon: '/logo-symbol.png',
    apple: '/logo-symbol.png',
  }
};

import { LanguageProvider } from "@/contexts/LanguageContext";

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
      </body>
    </html>
  );
}
