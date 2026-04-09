"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pixel-border rounded-2xl bg-panel p-6 sm:p-8"
    >
      <h2 className="font-pixel text-lg text-accent-2 sm:text-xl">Player Stats</h2>

      <p className="mt-5 max-w-3xl leading-relaxed text-muted">
        Desenvolvedor Frontend e Analista de Operacoes com foco em otimizar processos e
        criar experiencias digitais. Fascinado por automacao, infraestrutura e por
        transformar ideias em solucoes reais de alta performance, do codigo limpo no
        frontend ate a orquestracao de servidores.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <article className="rounded-lg border border-panel-border/80 bg-black/35 p-4">
          <h3 className="font-pixel text-[10px] text-cyan">Classe</h3>
          <p className="mt-2 text-sm text-muted">Frontend Engineer com mindset de produto.</p>
        </article>

        <article className="rounded-lg border border-panel-border/80 bg-black/35 p-4">
          <h3 className="font-pixel text-[10px] text-cyan">Especialidade</h3>
          <p className="mt-2 text-sm text-muted">React, Next.js e interfaces orientadas a UX.</p>
        </article>

        <article className="rounded-lg border border-panel-border/80 bg-black/35 p-4">
          <h3 className="font-pixel text-[10px] text-cyan">Mindset</h3>
          <p className="mt-2 text-sm text-muted">Build in public, melhoria continua e ownership tecnico.</p>
        </article>
      </div>
    </motion.section>
  );
}
