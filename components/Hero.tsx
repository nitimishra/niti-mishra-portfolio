"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-16">
      {/* Background Datalumina Eclipse Aura */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full opacity-40 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(29,78,216,0.2) 40%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07080C]/40 to-[#07080C]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10 w-full">
        {/* Location & Availability Status */}
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-blueLight mb-6">
          {profile.location} &mdash; Available for AI/ML roles
        </p>

        {/* Hero Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-white leading-[0.95] mb-6">
          {profile.name}
        </h1>

        {/* Intro Subtitle */}
        <p className="max-w-2xl text-base sm:text-xl text-zinc-300 leading-relaxed font-normal mb-10">
          <span className="text-white font-semibold">{profile.role}</span>. I build production-ready AI applications &mdash; computer vision models, retrieval systems (RAG), and LLM tooling, built to be reliable and fast.
        </p>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm text-zinc-400">
          <a
            href="#projects"
            className="text-white hover:text-accent-blueLight transition-colors flex items-center gap-1.5 underline decoration-zinc-700 underline-offset-4 hover:decoration-accent-blueLight"
          >
            <span>View work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
          >
            Get in touch
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-max flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 hover:text-white transition-colors"
      >
        <span>Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent-blueLight" />
      </a>
    </section>
  );
}
