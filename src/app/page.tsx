import Hero from "@/components/hero";
import Project from "@/components/project";
import About from "@/components/about";
import Skill from "@/components/skills";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-500">
      <Hero />
      <About />
      <Skill />
      <Project />
    </div>
  );
}
