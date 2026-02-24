import About from "@/components/about";
import Contacts from "@/components/contacts";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}
