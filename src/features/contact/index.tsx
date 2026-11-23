"use client";

import { useState, useCallback, memo } from "react";
import type { CSSProperties } from "react";
import { m as motion } from "framer-motion";
import { Mail, Sparkles, ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";
import {
  headerVariants,
  cardVariants,
  containerVariants,
} from "@/core/lib/animation-variants";

/* ─── SVG Icons Oficiais ─── */

const WhatsAppIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedInIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
  </svg>
);

const GitHubIcon = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

/* ─── Redes Sociais Atualizadas ─── */
const SOCIAL_NETWORKS = [
  {
    name: "LinkedIn",
    handle: "/in/gustaguiar",
    description: "Conexões profissionais e carreira",
    href: "https://www.linkedin.com/in/gustaguiar/",
    icon: LinkedInIcon,
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    handle: "@gustzwy",
    description: "Repositórios e código aberto",
    href: "https://github.com/gustzwy",
    icon: GitHubIcon,
    color: "#00ff9d",
  },
  {
    name: "Instagram",
    handle: "@gustzwy",
    description: "Acompanhe meu dia a dia",
    href: "https://www.instagram.com/gustzwy/",
    icon: InstagramIcon,
    color: "#E4405F",
  },
];

/* ─── Card de Email Interativo com Cópia Rápida ─── */
const EmailCard = memo(() => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "gustavoaguiar0916@gmail.com";

  const handleCopy = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }, [emailAddress]);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-3xl p-7 sm:p-8 border border-border bg-surface overflow-hidden flex flex-col justify-between min-h-[250px] hover:border-brand/40 transition-[border-color,box-shadow] duration-500"
    >
      {/* Glow de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10">
        {/* Topo: Ícone + Status */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand transition-transform duration-300 group-hover:scale-105 shadow-sm shadow-brand/10">
            <Mail size={24} />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Resposta rápida
          </span>
        </div>

        {/* Textos */}
        <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-1.5 group-hover:text-brand transition-colors">
          E-mail Profissional
        </h3>
        <p className="text-xs sm:text-sm font-mono text-brand/90 mb-3 select-all">
          {emailAddress}
        </p>
        <p className="text-sm text-text-muted leading-relaxed max-w-md">
          Disponível para oportunidades como Frontend Júnior, colaborações em projetos e propostas de trabalho.
        </p>
      </div>

      {/* Ações: Enviar e Copiar */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 pt-6 mt-2 border-t border-border/40">
        <a
          href={`mailto:${emailAddress}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-black font-bold text-xs sm:text-sm shadow-md shadow-brand/20 hover:opacity-90 transition-opacity"
        >
          <span>Enviar e-mail</span>
          <ArrowUpRight size={14} />
        </a>

        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border hover:border-brand/30 text-text-muted hover:text-text-main text-xs sm:text-sm font-medium transition-[border-color,color] duration-300 cursor-pointer"
          aria-label="Copiar endereço de e-mail"
        >
          {copied ? (
            <>
              <Check size={14} className="text-brand" />
              <span className="text-brand font-semibold">Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copiar e-mail</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
});

EmailCard.displayName = "EmailCard";

/* ─── Card de WhatsApp ─── */
const WhatsAppCard = memo(() => {
  const whatsappHref = "https://wa.me/5592992279956";

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      className="group relative rounded-3xl p-7 sm:p-8 border border-border bg-surface overflow-hidden flex flex-col justify-between min-h-[250px] hover:border-[#25D366]/40 transition-[border-color,box-shadow] duration-500"
    >
      {/* Glow de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        {/* Topo: Ícone + Status */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] transition-transform duration-300 group-hover:scale-105 shadow-sm shadow-[#25D366]/10">
            <WhatsAppIcon className="w-6 h-6" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Online
          </span>
        </div>

        {/* Textos */}
        <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-1.5 group-hover:text-[#25D366] transition-colors">
          WhatsApp Direto
        </h3>
        <p className="text-xs sm:text-sm font-mono text-text-muted mb-3">
          (92) 99227-9956
        </p>
        <p className="text-sm text-text-muted leading-relaxed max-w-md">
          Conversa rápida e objetiva sobre projetos, demandas imediatas ou alinhamento de oportunidades.
        </p>
      </div>

      {/* CTA Pill */}
      <div className="relative z-10 pt-6 mt-2 border-t border-border/40">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide px-4 py-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/25 group-hover:bg-[#25D366] group-hover:text-black transition-colors duration-300">
          <MessageSquare size={14} />
          <span>Iniciar conversa</span>
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.a>
  );
});

WhatsAppCard.displayName = "WhatsAppCard";

/* ─── Card Individual de Rede Social ─── */
const SocialCard = memo(({ network }: { network: typeof SOCIAL_NETWORKS[number] }) => {
  const Icon = network.icon;

  return (
    <a
      href={network.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl p-5 sm:p-6 border border-border bg-surface overflow-hidden flex flex-col justify-between hover:border-brand/40 transition-[border-color,box-shadow] duration-500"
    >
      {/* Glow e Borda Accent no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 20%, ${network.color}15, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${network.color}40`,
        }}
      />

      <div className="relative z-10">
        {/* Topo com Ícone e Arrow */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: `${network.color}15` }}
          >
            <Icon
              className="w-5 h-5 transition-colors duration-300"
              style={{ color: network.color }}
            />
          </div>

          <ArrowUpRight
            size={16}
            className="text-text-muted/40 group-hover:text-text-main transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        {/* Informações da Rede */}
        <h4 className="text-base font-bold text-text-main mb-0.5 group-hover:text-brand transition-colors">
          {network.name}
        </h4>
        <p className="text-xs font-mono text-brand font-medium mb-1.5">
          {network.handle}
        </p>
        <p className="text-xs text-text-muted leading-relaxed">
          {network.description}
        </p>
      </div>
    </a>
  );
});

SocialCard.displayName = "SocialCard";

/* ─── Componente Principal de Contato ─── */
export default function Contact() {
  return (
    <section id="contato" className="relative py-20 sm:py-32 px-4 sm:px-6">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-14 sm:mb-18"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-5 backdrop-blur-xs">
            <Sparkles size={13} className="text-brand" />
            <span className="text-brand text-xs sm:text-sm font-medium tracking-wide">
              Contato
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-text-main">
            Vamos trabalhar{" "}
            <span className="bg-linear-to-r from-brand to-[#00ffcc] bg-clip-text text-transparent">
              juntos?
            </span>
          </h2>

          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Estou disponível para novas oportunidades, projetos e networking. Escolha seu canal preferido e vamos conversar.
          </p>
        </motion.div>

        {/* Bento Grid de Contatos — Seguindo a mesma arquitetura do About */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {/* Canais Primários (E-mail com Cópia Rápida + WhatsApp) */}
          <EmailCard />
          <WhatsAppCard />

          {/* Subgrid de Redes Sociais animado com cardVariants como linha única do Bento Grid */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
          >
            {SOCIAL_NETWORKS.map((network) => (
              <SocialCard key={network.name} network={network} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
