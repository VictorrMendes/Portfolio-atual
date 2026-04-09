"use client";

import { useState } from "react";
import { Menu, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "start", label: "Start" },
  { id: "about", label: "Stats" },
  { id: "story", label: "Story" },
  { id: "projects", label: "Quests" },
  { id: "journey", label: "Journey" },
  { id: "inventory", label: "Inventory" },
  { id: "co-op", label: "Co-op" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-3 flex w-[min(96%,68rem)] items-center justify-between rounded-xl border border-panel-border/70 bg-panel/70 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <a href="#start" className="font-pixel text-[10px] text-cyan sm:text-xs">
          <span className="inline-flex items-center gap-2">
            <Rocket size={14} />
            VICTOR.EXE
          </span>
        </a>

        <nav className="hidden items-center gap-5 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-panel-border/80 bg-black/30 p-2 text-muted sm:hidden"
        >
          <Menu size={16} />
        </button>
      </div>

      {open && (
        <nav className="mx-auto mt-2 grid w-[min(96%,68rem)] grid-cols-2 gap-2 rounded-xl border border-panel-border/70 bg-panel/95 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="rounded-md border border-panel-border/60 bg-black/25 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
