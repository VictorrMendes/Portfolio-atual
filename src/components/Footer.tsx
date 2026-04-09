import { Heart, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-4 border-t border-panel-border/70 bg-black/25 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-muted sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-pixel text-[10px] text-cyan">VICTOR.EXE - LEVELING UP DAILY</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/VictorrMendes" target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/victor-mendes-de-souza" target="_blank" rel="noreferrer" className="hover:text-foreground">
              LinkedIn
            </a>
            <a href="https://api.whatsapp.com/send?phone=5531998186472" target="_blank" rel="noreferrer" className="hover:text-foreground">
              WhatsApp
            </a>
          </div>
        </div>

        <p className="inline-flex items-center gap-2 text-xs text-muted">
          Feito com Next.js, TypeScript e foco em UX
          <Heart size={14} className="text-accent-2" />
          <Send size={14} className="text-cyan" />
        </p>
      </div>
    </footer>
  );
}
