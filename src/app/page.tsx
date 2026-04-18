import { Hero1 } from "@/components/ui/hero-1";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Values } from "@/components/sections/values";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero1 />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}
