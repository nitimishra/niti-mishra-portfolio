"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Linkedin, Github } from "lucide-react";
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

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Dashboards", href: "#dashboards" },
    { label: "Featured", href: "#featured" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Internships", href: "#internships" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090D]/85 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Left: SK.-style Logo with warm amber dot */}
        <a href="#top" className="flex items-center gap-1 group">
          <span className="text-2xl font-black tracking-tighter text-white font-sans group-hover:text-[#fbbf24] transition-colors">
            NM<span className="text-[#fbbf24]">.</span>
          </span>
        </a>

        {/* Center: Clean Text Navigation Bar */}
        <nav className="hidden xl:flex items-center gap-7 text-[13px] font-medium text-zinc-400">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Social Action Icons */}
        <div className="hidden sm:flex items-center gap-3.5 text-zinc-400">
          <a
            href={`tel:${profile.phone}`}
            title="Call"
            className="p-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            title="Email"
            className="p-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="p-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="p-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Active status indicator dot */}
          <div className="flex items-center gap-1.5 pl-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Available for AI Engineer Roles" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          className="xl:hidden p-2 text-zinc-300 hover:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#09090D]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-zinc-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-zinc-400">
            <div className="flex items-center gap-4">
              <a href={`tel:${profile.phone}`} className="hover:text-white">
                <Phone className="w-4 h-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="hover:text-white">
                <Mail className="w-4 h-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
                <Github className="w-4 h-4" />
              </a>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              AI Engineer
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
