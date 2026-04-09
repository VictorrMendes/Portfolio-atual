"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <motion.section
      id="co-op"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pixel-border rounded-2xl bg-panel p-6 sm:p-8"
    >
      <h2 className="font-pixel text-lg text-accent-2 sm:text-xl">Multiplayer Mode</h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="space-y-3">
          <a
            href="https://github.com/VictorrMendes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-between rounded-lg border border-panel-border/90 bg-black/35 px-4 py-3 text-sm text-foreground transition-colors hover:bg-black/50"
          >
            GitHub
            <Code2 size={16} className="text-cyan" />
          </a>

          <a
            href="https://www.linkedin.com/in/victor-mendes-de-souza"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-between rounded-lg border border-panel-border/90 bg-black/35 px-4 py-3 text-sm text-foreground transition-colors hover:bg-black/50"
          >
            LinkedIn
            <ExternalLink size={16} className="text-cyan" />
          </a>
        </div>

        <form className="space-y-3 rounded-lg border border-panel-border/90 bg-black/35 p-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full rounded-md border border-panel-border/70 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md border border-panel-border/70 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Mensagem"
            className="w-full resize-none rounded-md border border-panel-border/70 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
          />
          <button type="submit" className="arcade-button rounded-md px-4 py-2 font-pixel text-[10px]">
            Enviar
          </button>
        </form>
      </div>
    </motion.section>
  );
}
