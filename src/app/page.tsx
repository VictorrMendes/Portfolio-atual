import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import Story from "@/components/Story";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Story />
        <Projects />
        <Journey />
        <Highlights />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
