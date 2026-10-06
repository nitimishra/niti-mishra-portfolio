"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080C]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Monospace Logo */}
        <a href="#top" className="font-mono text-base font-bold tracking-tight text-white group">
          niti<span className="text-accent-blueLight group-hover:text-white transition-colors">.</span>
        </a>

        {/* Numbered Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] text-zinc-400">
          <a href="#about" className="transition-colors hover:text-white flex items-center gap-1.5">
            <span className="text-accent-blueLight font-semibold">01</span>
            <span>About</span>
          </a>
          <a href="#experience" className="transition-colors hover:text-white flex items-center gap-1.5">
            <span className="text-accent-blueLight font-semibold">02</span>
            <span>Work</span>
          </a>
          <a href="#projects" className="transition-colors hover:text-white flex items-center gap-1.5">
            <span className="text-accent-blueLight font-semibold">03</span>
            <span>Projects</span>
          </a>
          <a href="#skills" className="transition-colors hover:text-white flex items-center gap-1.5">
            <span className="text-accent-blueLight font-semibold">04</span>
            <span>Skills</span>
          </a>
          <a href="#contact" className="transition-colors hover:text-white flex items-center gap-1.5">
            <span className="text-accent-blueLight font-semibold">05</span>
            <span>Contact</span>
          </a>
        </nav>

        {/* Resume CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            download="Niti_Mishra_Resume.pdf"
            className="datalumina-secondary-pill inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[13px] font-semibold text-white hover:border-accent-blue/50"
          >
            <Download className="w-3.5 h-3.5 text-accent-blueLight" />
            <span>R&eacute;sum&eacute;</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-zinc-300 hover:text-white"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0A0D15]/95 backdrop-blur-2xl px-6 py-6 space-y-4 font-mono text-sm">
          <div className="flex flex-col space-y-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white flex items-center gap-2">
              <span className="text-accent-blueLight">01</span> About
            </a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white flex items-center gap-2">
              <span className="text-accent-blueLight">02</span> Work
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white flex items-center gap-2">
              <span className="text-accent-blueLight">03</span> Projects
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white flex items-center gap-2">
              <span className="text-accent-blueLight">04</span> Skills
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white flex items-center gap-2">
              <span className="text-accent-blueLight">05</span> Contact
            </a>
          </div>
          <div className="pt-4 border-t border-white/[0.08]">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              download="Niti_Mishra_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="datalumina-pill-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white w-full justify-center"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download R&eacute;sum&eacute;</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
