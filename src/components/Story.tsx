"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Inicio da Jornada",
    text: "Comecei a focar em desenvolvimento frontend, praticando JavaScript moderno e construindo interfaces reais.",
  },
  {
    year: "2025",
    title: "Consolidacao Tecnica",
    text: "Evolucao com React, TypeScript e projetos publicados, incluindo apps de automacao e dashboards web.",
  },
  {
    year: "2026",
    title: "Projetos de Alto Impacto",
    text: "FinanceVM e Home Lab elevaram meu nivel em arquitetura, UX e infraestrutura orientada a resultados.",
  },
];

export default function Story() {
  return (
    <motion.section
      id="story"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pixel-border rounded-2xl bg-panel p-6 sm:p-8"
    >
      <h2 className="font-pixel text-lg text-accent-2 sm:text-xl">Historia do Player</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
        Minha trajetoria mistura construcao visual no frontend com automacao de processos no mundo real. Cada projeto nasce com foco em clareza, performance e utilidade.
      </p>

      <div className="mt-6 space-y-4">
        {timeline.map((item) => (
          <article
            key={item.year}
            className="rounded-lg border border-panel-border/80 bg-black/35 p-4"
          >
            <p className="font-pixel text-[10px] text-cyan">{item.year}</p>
            <h3 className="mt-2 text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
