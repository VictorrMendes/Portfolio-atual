"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  linkDeploy: string;
  linkGithub: string;
};

export function ProjectCard({
  title,
  description,
  techStack,
  linkDeploy,
  linkGithub,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="pixel-border h-full rounded-xl bg-panel p-5"
    >
      <h3 className="font-pixel text-sm text-foreground sm:text-base">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-panel-border/90 bg-black/30 px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-cyan"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-2">
        <a
          href={linkDeploy}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-panel-border px-3 py-2 text-xs text-foreground transition-colors hover:bg-black/30"
        >
          Deploy
          <ExternalLink size={14} />
        </a>
        <a
          href={linkGithub}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-panel-border px-3 py-2 text-xs text-foreground transition-colors hover:bg-black/30"
        >
          Codigo
          <Code2 size={14} />
        </a>
      </div>
    </motion.article>
  );
}
