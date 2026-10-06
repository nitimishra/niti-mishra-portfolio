"use client";

import { profile, navLinks } from "@/lib/data";
import { ArrowUp, Sparkles, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05060A] py-12 text-text-subdued font-sans">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-blue/15 border border-accent-blue/30 text-accent-blueLight">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold text-white tracking-tight">
                {profile.name}
              </span>
              <span className="text-[11px] text-text-subdued font-medium">
                {profile.role}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="datalumina-secondary-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-text-muted hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent-blueLight" />
          </button>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. Inspired by Datalumina Academy design architecture.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-text-subdued hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-text-subdued hover:text-[#0A66C2] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-text-subdued hover:text-accent-blueTint transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
