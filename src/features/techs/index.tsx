"use client";

import { memo, useState, useCallback, useId } from "react";
import { m as motion } from "framer-motion";
import { techGroups, TechGroup, TechItem } from "./tech-groups";
import clsx from "clsx";

/* ─── Variantes de Animação com Fade + 8px translateY ─── */
const headerVariants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06, // ~60ms entre cards
      delayChildren: 0.05,
    },
  },
};

const cardMotionVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const chipListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02, // ~20ms entre chips
    },
  },
};

const chipMotionVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* ─── Subcomponente de Chip Individual ─── */
const TechBadge = memo(({ tech }: { tech: TechItem }) => {
  const Icon = tech.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      variants={chipMotionVariants}
      role="listitem"
      className="list-none"
    >
      <div
        tabIndex={0}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className={clsx(
          "flex items-center gap-2.5 px-3.5 h-11 rounded-xl w-full select-none",
          "bg-white/[0.04] dark:bg-white/[0.03]",
          "border border-white/[0.08] dark:border-white/[0.08]",
          "hover:bg-brand/[0.08] hover:border-brand/40 hover:-translate-y-px",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:border-brand/40",
          "transition-all duration-200 cursor-default group/chip",
          "motion-reduce:transition-none motion-reduce:hover:transform-none",
        )}
      >
        <span
          className="shrink-0 transition-colors duration-200 text-text-muted"
          style={{
            color: isHovered ? tech.color : undefined,
          }}
          aria-hidden="true"
        >
          <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/chip:scale-105" />
        </span>
        <span className="text-[14px] sm:text-[15px] font-medium text-text-muted group-hover/chip:text-text-main whitespace-nowrap transition-colors duration-200">
          {tech.name}
        </span>
      </div>
    </motion.li>
  );
});

TechBadge.displayName = "TechBadge";

/* ─── Subcomponente de Card de Grupo ─── */
const TechCard = memo(({ group }: { group: TechGroup }) => {
  const GroupIcon = group.icon;
  const isPrimary = Boolean(group.isPrimary);
  const cardHeadingId = useId();

  // Spotlight sutil que segue o cursor (apenas desktop)
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
  }, []);

  return (
    <motion.div
      variants={cardMotionVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden",
        "bg-white/[0.03] dark:bg-white/[0.025]",
        isPrimary
          ? "border border-brand/30 hover:border-brand/50 shadow-[0_0_24px_rgba(0,255,157,0.04)]"
          : "border border-white/[0.08] dark:border-white/[0.08] hover:border-white/20",
        "transition-colors duration-300 group",
        group.colSpan,
        group.rowSpan,
      )}
    >
      {/* Spotlight no hover (somente desktop, sem glassmorphism) */}
      {mousePos && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 opacity-100 hidden lg:block"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 157, 0.05), transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Cabeçalho do Card */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-5">
            {/* Ícone em tile padronizado verde a ~10% */}
            <div
              className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0"
              aria-hidden="true"
            >
              <GroupIcon size={20} />
            </div>

            {/* Indicador no cabeçalho para o card principal */}
            {isPrimary && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-brand/10 text-brand border border-brand/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Foco Principal
              </span>
            )}
          </div>

          <h3
            id={cardHeadingId}
            className="text-xl sm:text-[22px] font-semibold text-text-main tracking-tight"
          >
            {group.title}
          </h3>

          <p className="text-sm sm:text-[15px] text-text-muted leading-relaxed mt-1.5 max-w-xl">
            {group.description}
          </p>
        </div>

        {/* Lista Semântica de Chips de Tecnologias */}
        <motion.ul
          variants={chipListVariants}
          role="list"
          aria-labelledby={cardHeadingId}
          className={clsx(
            "mt-6 sm:mt-7",
            // Layout dos chips: Frontend e Tools em 4 colunas no desktop; Mobile e Backend em 2 colunas
            group.id === "frontend"
              ? "grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3"
              : group.id === "tools"
                ? "grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3"
                : "grid grid-cols-2 gap-2.5 sm:gap-3",
          )}
        >
          {group.techs.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
});

TechCard.displayName = "TechCard";

/* ─── Componente Principal da Seção ─── */
export default function Techs() {
  return (
    <section
      id="techs"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-transparent"
      aria-label="Tecnologias e Ferramentas"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* HEADER DA SEÇÃO — 64–80px de respiro até o grid */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Badge Discreto */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-5 backdrop-blur-xs">
            <span className="text-brand text-xs sm:text-sm font-medium tracking-wide">
              Stack Tecnológico
            </span>
          </div>

          {/* Título com Tracking Levemente Fechado */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-text-main max-w-2xl mx-auto">
            Tecnologias &{" "}
            <span className="bg-linear-to-r from-brand to-[#00ffcc] bg-clip-text text-transparent">
              Ferramentas
            </span>
          </h2>

          {/* Subtítulo com Contraste AA */}
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Organização da minha stack por responsabilidade e contexto de uso.
          </p>
        </motion.div>

        {/* BENTO GRID PRINCIPAL: 1 coluna no mobile, 2 colunas no tablet, 3 colunas no desktop */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techGroups.map((group) => (
            <TechCard key={group.id} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
