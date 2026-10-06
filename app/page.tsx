import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background-primary text-text-muted selection:bg-accent-blue selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
    </div>
  );
}
