"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Container,
  FileCode2,
  FileJson2,
  Layers,
  MonitorCog,
  ServerCog,
  Wind,
  Wrench,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: FileJson2 },
  { name: "TypeScript", icon: FileCode2 },
  { name: "React", icon: Layers },
  { name: "Next.js", icon: MonitorCog },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Python", icon: Braces },
  { name: "Django", icon: ServerCog },
  { name: "Docker", icon: Container },
  { name: "Linux", icon: Wrench },
];

export function Skills() {
  return (
    <motion.section
      id="inventory"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pixel-border rounded-2xl bg-panel p-6 sm:p-8"
    >
      <h2 className="font-pixel text-lg text-accent-2 sm:text-xl">Inventario</h2>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="rounded-lg border border-panel-border/90 bg-black/30 px-4 py-3 text-xs"
          >
            <Icon size={16} className="text-cyan" />
            <p className="mt-2 font-pixel text-[10px] text-foreground">{name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
