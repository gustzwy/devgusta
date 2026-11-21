# devGusta — Portfólio Frontend

> Portfólio moderno, minimalista e de alta performance desenvolvido com **Next.js 15 (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS v4**. Projetado com foco em arquitetura modular, tipografia editorial, acessibilidade e microinterações fluidas com scroll inercial.

Deploy: **[gusttazy.vercel.app](https://gusttazy.vercel.app)**

---

## ⚡ Tecnologias

- **[Next.js 15](https://nextjs.org/)** — App Router, Server Components e lazy loading
- **[React 19](https://react.dev/)** — Base reativa moderna e hooks concorrentes
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática estrita em toda a aplicação
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilização moderna baseada em `@theme` e variáveis semânticas
- **[Framer Motion](https://www.framer.com/motion/)** — Animações declarativas otimizadas com `LazyMotion`
- **[Lenis](https://lenis.darkroom.engineering/)** — Scroll suave inercial sincronizado globalmente
- **[Shiki](https://shiki.style/)** — Realce de sintaxe de código tipado no servidor
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Alternância fluida entre tema claro e escuro

---

## 🎯 Seções e Destaques

### 1. Hero Minimalista
- Layout arejado com tipografia forte e respiro visual.
- Frase de impacto direta e sem redundâncias.
- Botões de ação duplos: download direto do currículo atualizado e atalho *"Ver Projetos"* com transição suave via Lenis.

### 2. Projetos em Destaque
- **Jira Automação (v2.0):** Automação em ambiente real de produção (TypeScript + Playwright). Conta com layout técnico especial para projetos sem screenshots públicas, detalhando **Problema → Solução → Impacto**, métricas de resiliência e badges de status.
- **Frostify:** Sistema de gerenciamento de ordens de serviço (OS) com dashboard por status, gestão de clientes com validação de CPF/CNPJ e dark mode adaptativo.
- **Charts2u:** Dashboard moderno com visualização de dados eficiente, gráficos interativos via Recharts e arquitetura mobile-first.

### 3. Stack Tecnológico (Design Editorial)
- Bento grid de 3 colunas balanceado, com o card de **Frontend** em destaque de 2 linhas (*"Foco Principal"*).
- Logos SVG vetorizados fiéis para todas as 18 ferramentas da stack, exibindo suas cores oficiais no hover.
- Nomes sem truncamento em qualquer breakpoint e spotlight sutil no cursor (desktop).

### 4. Contato Dinâmico
- Cards primários para **E-mail** (com botão interativo de cópia rápida em 1 clique) e **WhatsApp** direto.
- Subgrid social de 3 colunas perfeitamente alinhado com links oficiais (**LinkedIn**, **GitHub** e **Instagram**).

---

## 🏗️ Arquitetura do Projeto

O código é estruturado por domínios de negócio (**Feature-Sliced / Vertical Slice**), garantindo isolamento e facilidade de manutenção:

```
src/
├── app/                  # Rotas do App Router, layout raiz, SEO/metadata e globals.css
├── core/                 # Infraestrutura compartilhada e design system base
│   ├── components/       # Componentes transversais (Navbar, Footer, SmoothScroll, ThemeToggle)
│   ├── data/             # Dados estáticos auxiliares
│   ├── lib/              # Variantes de animação do Framer Motion
│   └── types/            # Tipos e contratos TypeScript (Project, etc.)
└── features/             # Módulos verticais independentes
    ├── hero/             # Apresentação principal e CTAs
    ├── about/            # Bento grid sobre trajetória e snippet de código Shiki
    ├── techs/            # Stack tecnológico, bento grid e ícones SVG oficiais
    ├── projects/         # Listagem e cards dinâmicos (com/sem preview)
    └── contact/          # Canais de contato direto e redes sociais
```

---

## 👨‍💻 Autor

Desenvolvido por **Gustavo Rodrigues de Aguiar**

- **GitHub:** [@gustzwy](https://github.com/gustzwy)
- **LinkedIn:** [in/gustaguiar](https://www.linkedin.com/in/gustaguiar/)
- **Instagram:** [@gustzwy](https://www.instagram.com/gustzwy/)
