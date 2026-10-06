"use client";

import { profile } from "@/lib/data";
import { ArrowUpRight, Download, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-36 border-t border-white/[0.06] relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-blueLight mb-2 font-semibold">
            05 / Contact
          </p>
          <h2 className="max-w-3xl text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.02] tracking-tight text-white">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-zinc-400 text-base">
            Open to AI/ML engineering roles, research opportunities, and platform collaborations. Email is the fastest way to reach me.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="datalumina-pill-cta inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-bold text-white shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>Say hello</span>
          </a>

          <a
            href={profile.resumeHref}
            download
            className="datalumina-secondary-pill inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-semibold text-zinc-300 hover:text-white"
          >
            <Download className="w-4 h-4 text-accent-blueLight" />
            <span>Download r&eacute;sum&eacute;</span>
          </a>
        </div>

        {/* Contact Links List */}
        <div className="mt-16 space-y-1">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between py-5 border-t border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 group-hover:text-accent-blueLight transition-colors">
              Email
            </span>
            <span className="text-base sm:text-lg font-medium">
              {profile.email}
            </span>
          </a>

          {/* Phone */}
          <div className="group flex items-center justify-between py-5 border-t border-white/[0.08] text-zinc-300">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Phone
            </span>
            <span className="text-base sm:text-lg font-medium">
              {profile.phone}
            </span>
          </div>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-5 border-t border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 group-hover:text-accent-blueLight transition-colors">
              GitHub
            </span>
            <span className="text-base sm:text-lg font-medium flex items-center gap-1">
              /nitimishra
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-5 border-t border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 group-hover:text-accent-blueLight transition-colors">
              LinkedIn
            </span>
            <span className="text-base sm:text-lg font-medium flex items-center gap-1">
              /in/niti-mishra21
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Niti Mishra</span>
          <span>Next.js &bull; Tailwind CSS</span>
        </footer>
      </div>
    </section>
  );
}
