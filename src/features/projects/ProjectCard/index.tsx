"use client";

import { FC, memo } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Zap,
  ShieldCheck,
  RefreshCw,
  Bot,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { m as motion } from "framer-motion";
import type { Project } from "@/core/types/project";

export type { Project };

interface ProjectCardProps {
  project: Project;
}

/* ── Card para projetos COM imagem (Frostify & Charts2u) ── */
const ProjectCardWithImage: FC<{ project: Project }> = ({ project }) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:items-center w-full">
    {/* Preview Visual */}
    <div className="lg:w-7/12 relative aspect-16/10 sm:aspect-video rounded-2xl overflow-hidden bg-black/50 border border-border shadow-lg group-hover:shadow-[0_0_25px_var(--glow)] transition-shadow duration-500">
      <Image
        src={project.image!}
        alt={project.title}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>

    {/* Conteúdo */}
    <div className="lg:w-5/12 flex flex-col gap-4">
      {/* Título & Subtítulo */}
      <div>
        {project.subtitle && (
          <span className="text-xs font-semibold text-brand tracking-wider uppercase mb-1 block">
            {project.subtitle}
          </span>
        )}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-main group-hover:text-brand transition-colors">
            {project.title}
          </h3>

          <div className="flex items-center gap-2">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-main hover:bg-surface rounded-full transition-all border border-transparent hover:border-border"
                aria-label="Repositório GitHub"
                title="Ver repositório no GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-brand hover:bg-brand/10 rounded-full transition-all border border-transparent hover:border-brand/20"
                aria-label="Ver Projeto Online"
                title="Acessar projeto online"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Descrição */}
      <p className="text-text-muted text-sm sm:text-base leading-relaxed">
        {project.description}
      </p>

      {/* Destaques de Funcionalidades */}
      {project.features && project.features.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {project.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs text-text-muted">
              <CheckCircle2 size={13} className="text-brand shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tags de Tecnologias */}
      <div className="pt-2">
        <TechBadges techs={project.technologies} />
      </div>

      {/* Botões de Ação */}
      <div className="flex items-center gap-3 pt-2">
        {project.previewUrl && (
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand text-white dark:text-black font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-md shadow-brand/20"
          >
            <span>Ver Deploy</span>
            <ArrowUpRight size={14} />
          </a>
        )}
        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-text-main font-medium text-xs sm:text-sm hover:border-brand/30 hover:bg-surface-hover transition-all"
          >
            <Github size={14} />
            <span>Repositório</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

/* ── Card especial para projetos SEM imagem (Jira Automação) ── */
const ProjectCardNoImage: FC<{ project: Project }> = ({ project }) => {
  const highlightIcons = [
    <ShieldCheck key="shield" size={18} className="text-brand" />,
    <RefreshCw key="refresh" size={18} className="text-brand" />,
    <Bot key="bot" size={18} className="text-brand" />,
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Topo: Badges de Destaque + Header + Link do GitHub */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-2 border-b border-border/50">
        <div className="flex flex-col gap-3">
          {/* Badges de Destaque de Produção */}
          <div className="flex flex-wrap items-center gap-2.5">
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand/10 border border-brand/30 text-brand shadow-sm shadow-brand/10">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                {project.badge}
              </span>
            )}
            {project.versionBadge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-surface border border-border text-text-muted">
                <Zap size={12} className="text-amber-400" />
                {project.versionBadge}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-main group-hover:text-brand transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm sm:text-base font-medium text-brand/90 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Link direto para o Repositório GitHub */}
        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start lg:self-center inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-surface border border-brand/30 hover:border-brand hover:bg-brand/10 text-text-main font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm group/btn"
          >
            <Github size={18} className="text-brand transition-transform group-hover/btn:scale-110" />
            <span>Ver no GitHub</span>
            <ArrowUpRight size={14} className="text-text-muted group-hover/btn:text-brand group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>

      {/* Descrição Principal */}
      <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-4xl">
        {project.description}
      </p>

      {/* Destaques Técnicos de Engenharia (Resiliência, Retry, Anti-Bot) */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {project.highlights.map((hl, idx) => (
            <div
              key={hl.title}
              className="p-4 rounded-2xl bg-surface/70 border border-border hover:border-brand/30 transition-colors flex flex-col gap-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-brand/10 border border-brand/20">
                  {highlightIcons[idx % highlightIcons.length]}
                </div>
                <h4 className="text-sm font-bold text-text-main">{hl.title}</h4>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {hl.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Seção Problema → Solução → Impacto */}
      {project.impact && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <ImpactBlock
            icon={<AlertCircle size={18} className="text-rose-400" />}
            label="Problema"
            color="rose"
            text={project.impact.problem}
          />
          <ImpactBlock
            icon={<Lightbulb size={18} className="text-amber-400" />}
            label="Solução"
            color="amber"
            text={project.impact.solution}
          />
          <ImpactBlock
            icon={<TrendingUp size={18} className="text-brand" />}
            label="Impacto & Resultado"
            color="brand"
            text={project.impact.result}
          />
        </div>
      )}

      {/* Rodapé do Card: Tags de Tecnologias */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border/40">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
            Stack:
          </span>
          <TechBadges techs={project.technologies} />
        </div>
      </div>
    </div>
  );
};

/* ── Bloco de Impacto (Problema / Solução / Resultado) ── */
const ImpactBlock = ({
  icon,
  label,
  color,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  color: "rose" | "amber" | "brand";
  text: string;
}) => {
  const borderMap = {
    rose: "border-rose-400/25",
    amber: "border-amber-400/25",
    brand: "border-brand/25",
  };
  const bgMap = {
    rose: "bg-rose-400/5",
    amber: "bg-amber-400/5",
    brand: "bg-brand/5",
  };

  return (
    <div
      className={`flex flex-col gap-2.5 p-4 sm:p-5 rounded-2xl border ${borderMap[color]} ${bgMap[color]} transition-colors`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs font-bold uppercase tracking-wider text-text-main">
          {label}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
        {text}
      </p>
    </div>
  );
};

/* ── Tags de Tecnologia ── */
const TechBadges: FC<{ techs: string[] }> = ({ techs }) => (
  <div className="flex flex-wrap gap-2">
    {techs.map((tech) => (
      <span
        key={tech}
        className="px-3 py-1 text-xs font-medium text-brand bg-brand/5 border border-brand/15 rounded-full"
      >
        {tech}
      </span>
    ))}
  </div>
);

/* ── Card Principal ── */
const ProjectCard: FC<ProjectCardProps> = memo(({ project }) => {
  const hasImage = Boolean(project.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col p-6 sm:p-8 md:p-10 rounded-3xl border bg-surface
        hover:bg-surface-hover transition-[border-color,box-shadow] duration-500
        hover:shadow-[0_8px_35px_var(--glow)]
        ${
          hasImage
            ? "border-border hover:border-brand/30"
            : "border-brand/30 hover:border-brand/60 shadow-[0_0_20px_var(--glow)]"
        }`}
    >
      {/* Background Decorativo para o card sem imagem */}
      {!hasImage && (
        <>
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-[90px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-linear-to-br from-brand/[0.04] via-transparent to-brand/[0.02]" />
        </>
      )}

      {hasImage ? (
        <ProjectCardWithImage project={project} />
      ) : (
        <ProjectCardNoImage project={project} />
      )}
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;

