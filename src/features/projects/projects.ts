import type { Project } from "@/core/types/project";

// Lista de projetos exibidos na seção — ordenada por prioridade/destaque
export const projects: Project[] = [
  {
    title: "Jira Automação",
    subtitle: "Automação Inteligente de Triagem de Tickets",
    description:
      "Automação inteligente desenvolvida para triagem e tratamento contínuo de tickets em boards Kanban do Jira Service Management, utilizada em ambiente real de produção. Monitora chamados em tempo real com base em planilha de referência, eliminando tarefas repetitivas e acelerando o fluxo de suporte técnico.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Playwright",
      "Jira API",
      "Automação",
      "CSV",
      "Sessão Persistente",
    ],
    badge: "Aplicado no trabalho",
    versionBadge: "v2.0 em Produção · 95% Confiabilidade",
    repositoryUrl: "https://github.com/gustzwy/jira-automacao",
    highlights: [
      {
        title: "Race Conditions Eliminadas",
        description:
          "Network Idle Detection, Explicit Waits e validação de estado dos componentes antes de qualquer interação.",
      },
      {
        title: "Retry Inteligente & Backoff",
        description:
          "Mecanismo de auto-recuperação de falhas transitórias com backoff exponencial escalonado (2s, 4s, 8s).",
      },
      {
        title: "Humanização & Logs de Timing",
        description:
          "Delays simulados anti-bot, digitação natural, sessão persistente e logs de timing de performance por ação.",
      },
    ],
    impact: {
      problem:
        "Triagem e atualização manual de dezenas de tickets diários consumiam horas de trabalho repetitivo e geravam gargalos operacionais no suporte.",
      solution:
        "Bot autônomo com sessão persistente que valida tickets elegíveis, transiciona status, preenche formulários e registra comentários automaticamente.",
      result:
        "Eliminação do retrabalho operacional, 95% de confiabilidade em produção e tempo liberado para foco em chamados complexos.",
    },
    features: [
      "Monitoramento Contínuo 24/7",
      "Validação Inteligente",
      "Transição de Status",
      "Logs de Performance",
    ],
  },
  {
    title: "Frostify",
    subtitle: "Sistema de Gerenciamento de Ordens de Serviço",
    description:
      "Sistema completo de gerenciamento de ordens de serviço para refrigeração e climatização. Conta com dashboard inteligente por status em colunas Kanban, gestão completa de clientes com validação em tempo real de CPF/CNPJ, timeline automática de serviços, busca instantânea, dark mode adaptativo e interface totalmente responsiva.",
    image: "/images/frostify.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Shadcn/UI",
      "Lucide React",
    ],
    previewUrl: "https://frostify-sys.vercel.app/",
    repositoryUrl: "https://github.com/gustzwy/frostify",
    features: [
      "Dashboard Kanban por Status",
      "Validação CPF/CNPJ em Tempo Real",
      "Timeline Automática de Serviços",
      "Tema Adaptativo Claro & Escuro",
    ],
  },
  {
    title: "Charts2u",
    subtitle: "Dashboard de Visualização de Dados",
    description:
      "Dashboard frontend moderno e de alta performance com foco em visualização de dados clara e eficiente. Desenvolvido com gráficos interativos utilizando Recharts, dark mode nativo com cores neon de alto contraste, arquitetura Next.js App Router e layout fluido 100% responsivo mobile-first.",
    image: "/images/charts2u.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Recharts",
      "TailwindCSS",
      "Shadcn/UI",
    ],
    previewUrl: "https://charts2u.vercel.app/",
    repositoryUrl: "https://github.com/gustzwy/charts2u",
    features: [
      "Gráficos Interativos (Recharts)",
      "Dark Mode Neon Nativo",
      "Mobile-First Responsivo",
      "Next.js App Router",
    ],
  },
];

