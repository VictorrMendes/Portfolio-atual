"use client";

import { motion } from "framer-motion";

const journeyBlocks = [
  {
    title: "Experiencia",
    items: [
      "Analista de Operacoes na Next Rental com foco em automacoes e interfaces internas.",
      "Construcao de fluxos para reduzir tempo operacional e aumentar previsibilidade.",
      "Colaboracao entre times tecnico e negocio para entrega de valor continuo.",
    ],
  },
  {
    title: "Formacao e Certificacoes",
    items: [
      "Ciencias da Computacao - Universidade Anhembi Morumbi (2024-2028).",
      "React e JavaScript - Alura (2025).",
      "Django Templates e Boas Praticas - Alura (2025).",
    ],
  },
];

export function Journey() {
  return (
    <motion.section
      id="journey"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pixel-border rounded-2xl bg-panel p-6 sm:p-8"
    >
      <h2 className="font-pixel text-lg text-accent-2 sm:text-xl">Jornada e Progresso</h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {journeyBlocks.map((block) => (
          <article key={block.title} className="rounded-lg border border-panel-border/80 bg-black/35 p-4">
            <h3 className="font-pixel text-[10px] text-cyan">{block.title}</h3>
            <ul className="mt-3 space-y-2">
              {block.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  - {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
