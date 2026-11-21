"use client";

import { memo, useCallback } from "react";
import { Download, Code2, ArrowDown } from "lucide-react";
import { m as motion } from "framer-motion";
import { cardVariants, containerVariants } from "@/core/lib/animation-variants";

// --- Componente Principal ---

const Hero = () => {
  /**
   * Scroll suave customizado até a seção de projetos via Lenis
   * Seguindo o mesmo padrão integrado da Navbar e NavButton
   */
  const handleScrollToProjects = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo("#projects", {
          offset: -70,
          duration: 1.3,
        });
      } else {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    [],
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center py-20 px-4 sm:px-6"
    >
      {/* Glows de ambientação no fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-glow rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-glow rounded-full blur-[120px]" />
      </div>

      {/* Conteúdo Centralizado com Hierarquia Clara e Whitespace */}
      <motion.div
        className="relative w-full max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Status Badge */}
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            <span className="text-brand text-xs sm:text-sm font-semibold tracking-wide">
              Disponível para projetos
            </span>
          </motion.div>

          {/* Nome Principal com Tipografia Forte */}
          <motion.div variants={cardVariants} className="space-y-1 sm:space-y-2">
            <span className="block text-text-muted text-base sm:text-xl font-medium tracking-wide">
              Olá, sou o
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              <span className="bg-linear-to-r from-brand via-brand/80 to-[#00ffcc] bg-clip-text text-transparent">
                Gustavo Rodrigues
              </span>
            </h1>
          </motion.div>

          {/* Role em Linha Única */}
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border backdrop-blur-sm"
          >
            <Code2 className="w-4 h-4 text-brand shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-medium text-text-muted truncate">
              Desenvolvedor Frontend Júnior
            </span>
          </motion.div>

          {/* Frase Curta e Direta */}
          <motion.p
            variants={cardVariants}
            className="text-text-muted text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed px-2 font-normal"
          >
            Construo interfaces modernas e automações com foco em resolver problemas reais.
          </motion.p>

          {/* Dois Botões de CTA (Baixar Currículo + Ver Projetos) */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            {/* CTA Primário — Download CV */}
            <motion.a
              href="/curriculo.pdf"
              download="Gustavo_Aguiar_CV.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand text-black font-bold text-sm sm:text-base rounded-xl overflow-hidden shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/35 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Download className="w-4 h-4 relative z-10 transition-transform group-hover:-translate-y-0.5" />
              <span className="relative z-10">Baixar Currículo</span>
            </motion.a>

            {/* CTA Secundário — Ver Projetos com scroll suave Lenis */}
            <motion.a
              href="#projects"
              onClick={handleScrollToProjects}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-surface border border-border hover:border-brand/40 text-text-main font-semibold text-sm sm:text-base rounded-xl hover:bg-surface-hover transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <span>Ver Projetos</span>
              <ArrowDown className="w-4 h-4 text-text-muted group-hover:text-brand transition-transform group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);
