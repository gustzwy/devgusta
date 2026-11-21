/**
 * Interface para dados de projeto do portfólio.
 * Centralizada na camada de tipos para respeitar o fluxo de dependência:
 * types → data → components (sem inversão).
 */
export interface ProjectImpact {
  problem: string;
  solution: string;
  result: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  /** Imagem de preview — opcional (projetos internos/sem screenshot público) */
  image?: string;
  technologies: string[];
  previewUrl?: string;
  repositoryUrl?: string;
  /** Badge principal de destaque (ex: "Aplicado no trabalho") */
  badge?: string;
  /** Badge secundário de versão/status (ex: "v2.0 em Produção") */
  versionBadge?: string;
  /** Destaques de engenharia/arquitetura */
  highlights?: ProjectHighlight[];
  /** Bloco Problema → Solução → Impacto */
  impact?: ProjectImpact;
  /** Destaques rápidos de funcionalidades */
  features?: string[];
}

