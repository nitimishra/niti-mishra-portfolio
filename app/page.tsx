"use client";

import Preloader from "@/components/Preloader";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090D] text-zinc-300 selection:bg-[#f59e0b] selection:text-black flex flex-col justify-between overflow-x-hidden font-sans">
      {/* Opening Intro Preloader */}
      <Preloader />

      {/* Interactive Constellation / Plexus Particle Background */}
      <ParticleBackground />

      {/* Top Navbar */}
      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
