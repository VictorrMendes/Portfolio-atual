import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "FinanceVM",
    description:
      "App web progressivo de gestao financeira focado em UX estilo Private Bank, com interface fluida e estrutura escalavel.",
    techStack: ["Next.js 15", "Tailwind v4", "PWA", "Python/Django", "JWT"],
    linkDeploy: "https://victor-mendes.netlify.app",
    linkGithub: "https://github.com/VictorrMendes/Frontend_Finances",
  },
  {
    title: "Home Lab & Assistente Pessoal",
    description:
      "Infraestrutura de automacao via Telegram com linguagem natural para monitorar servidor e registrar notas, usando orquestracao e foco em seguranca.",
    techStack: ["n8n", "Groq API", "Linux", "Cloudflare Zero Trust", "Docker"],
    linkDeploy: "https://www.linkedin.com",
    linkGithub: "https://github.com/VictorrMendes",
  },
];

export function Projects() {
  return (
    <section id="projects" className="rounded-2xl bg-transparent px-1 py-2">
      <h2 className="font-pixel text-lg text-accent-2 sm:text-xl">Quests Concluidas</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
