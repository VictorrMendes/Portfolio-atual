"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Repositorios", value: "54+" },
  { label: "Commits no FinanceVM", value: "58" },
  { label: "Commits no Backend", value: "38" },
  { label: "Contribuicoes recentes", value: "250" },
];

export function Highlights() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pixel-border rounded-2xl bg-panel p-6 sm:p-8"
    >
      <h2 className="font-pixel text-lg text-accent-2 sm:text-xl">Conquistas Recentes</h2>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {highlights.map((item) => (
          <article key={item.label} className="rounded-lg border border-panel-border/80 bg-black/35 p-4 text-center">
            <p className="font-pixel text-lg text-foreground">{item.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">{item.label}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
