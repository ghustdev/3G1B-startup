# Documentação do Sistema - 3G1B Startup

**Versão:** 1.0.0
**Data:** 07/12/2025
**Autor:** Antigravity (Google Deepmind) / Gustavo

---

## 1. Visão Geral
Este projeto é a landing page oficial e institucional da **3G1B**, uma startup de inovação tecnológica. O sistema foi desenvolvido com foco em performance, design premium, animações fluidas e internacionalização completa (Português/Inglês).

A arquitetura é baseada em **Next.js 14** (App Router), utilizando **TypeScript** para tipagem robusta e **Tailwind CSS** para estilização. Animações complexas são gerenciadas via **Framer Motion**.

---

## 2. Tecnologias e Ferramentas (Stack Tecnológica)

### Core
*   **Next.js 14**: Framework React para produção. Utilizado o novo *App Router* para roteamento e otimização de renderização (Server Components por padrão).
*   **React 18**: Biblioteca base para construção de interfaces.
*   **TypeScript**: Superset JavaScript que adiciona tipagem estática, garantindo maior segurança e manutenibilidade do código.

### Estilização e Design
*   **Tailwind CSS**: Framework CSS *utility-first* para estilização rápida e responsiva.
*   **Framer Motion**: Biblioteca poderosa para animações declarativas, gestos e transições de layout (usada na Hero, Blueprint e History).
*   **Lucide React**: Biblioteca de ícones leve e consistente.
*   **Shadcn UI**: Coleção de componentes reutilizáveis baseados em Radix UI (usado para Botões, etc).

### Ferramentas de Desenvolvimento
*   **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript/TypeScript.
*   **PostCSS / Autoprefixer**: Processamento de CSS moderno.

---

## 3. Estrutura de Pastas e Arquitetura

A estrutura segue o padrão recomendado pelo Next.js App Router:

```
src/
├── app/                  # Rotas e Páginas da aplicação
│   ├── history/          # Rota secundária "/history"
│   ├── layout.tsx        # Layout raiz (Root Layout)
│   ├── page.tsx          # Página principal (Home)
│   └── globals.css       # Estilos globais e variáveis CSS
│
├── components/           # Componentes React reutilizáveis
│   ├── layout/           # Componentes estruturais (Header, etc.)
│   ├── sections/         # Seções da Landing Page (Hero, About, Blueprint...)
│   └── ui/               # Componentes de UI genéricos (Button, etc.)
│
├── contexts/             # Context API (Gerenciamento de Estado Global)
│   └── LanguageContext.tsx # Provider de Internacionalização
│
├── data/                 # Dados estáticos
│   └── projects.ts       # Lista de projetos do portfólio
│
└── lib/                  # Utilitários e Bibliotecas auxiliares
    ├── i18n.ts           # Dicionário de tradução (pt/en)
    └── utils.ts          # Helpers (cn, clsx)
```

---

## 4. Funcionalidades Principais

### 4.1. Internacionalização (i18n)
O sistema possui suporte nativo a múltiplos idiomas.
*   **Implementação**: Via `LanguageContext.tsx`.
*   **Uso**: O hook `useLanguage()` fornece o objeto `t` (tradutor) e a função `toggleLanguage`.
*   **Dicionário**: Todo o texto reside em `src/lib/i18n.ts`, facilitando alterações sem tocar na lógica dos componentes.

### 4.2. Animações e UX
*   **Hero Section**: Efeito de digitação (Typewriter) e background dinâmico.
*   **Blueprint (Arquitetura)**: Animação complexa baseada em scroll, simulando o fluxo de dados em uma placa de circuito. Utiliza SVG responsivo e coordenadas precisas.
*   **History**: Linha do tempo animada com efeitos de "paralaxe" e cards interativos.

### 4.3. Responsividade
Todo o layout é *Mobile-First*. Breakpoints do Tailwind (`md:`, `lg:`) são usados extensivamente para adaptar o design a celulares, tablets e desktops.

---

## 5. Componentes Detalhados

### `Blueprint.tsx`
Uma das seções mais complexas.
*   **Desafio**: Alinhar fios (SVG) com chips (HTML/CSS) perfeitamente em qualquer tela.
*   **Solução**: Uso de `viewBox` fixo no SVG e posicionamento percentual (%) nos elementos HTML, com ajuste de z-index para camadas (Fios < Core < Chips).

### `History/Page.tsx`
Página dedicada à história da empresa.
*   **Visual**: Fundo fluido com "orbs" de cor.
*   **Lógica**: Renderiza a lista de eventos de `i18n.ts`. O último item ("Future") recebe tratamento visual especial (Dourado/Sol).

---

## 6. Guia de Instalação e Execução

### Pré-requisitos
*   Node.js 18+ instalado.

### Instalação
```bash
npm install
```

### Desenvolvimento Local
Para rodar o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse `http://localhost:3000`.

### Build de Produção
```bash
npm run build
npm start
```

### Linting (Verificação de Código)
```bash
npm run lint
```

---

## 7. Manutenção e Boas Práticas

*   **Adicionar Texto**: Sempre adicione novas strings em `src/lib/i18n.ts` antes de usar nos componentes.
*   **Novos Componentes**: Crie em `src/components`, preferencialmente dentro de pastas semânticas (`ui` para genéricos, `sections` para blocos de página).
*   **Estilização**: Use classes utilitárias do Tailwind. Evite CSS global excessivo em `globals.css` a menos que necessário para animações keyframe.

---
*Documentação gerada automaticamente por Antigravity AI.*
