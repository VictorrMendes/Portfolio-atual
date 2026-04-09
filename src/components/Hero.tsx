"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

export function Hero() {
  return (
    <motion.section
      id="start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pixel-border relative rounded-2xl bg-panel p-6 sm:p-10"
    >
      <p className="font-pixel text-[10px] text-cyan sm:text-xs">PLAYER 1 READY</p>

      <h1 className="mt-6 font-pixel text-3xl leading-tight text-foreground sm:text-5xl">
        Victor Mendes
      </h1>

      <p className="terminal-caret mt-5 max-w-xl text-sm text-muted sm:text-base">
        Desenvolvedor Front-End || React || Next.js || Python
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="arcade-button animate-pulse rounded-lg px-5 py-3 font-pixel text-[10px] text-foreground sm:text-xs"
        >
          [ PRESS START ]
        </a>

        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-lg border border-panel-border/90 px-4 py-2 text-xs text-muted transition-colors hover:text-foreground"
        >
          Ver Status
          <ArrowDownCircle size={14} />
        </a>
      </div>
    </motion.section>
  );
}
