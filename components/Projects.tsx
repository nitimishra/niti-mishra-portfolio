"use client";

import { useState } from "react";
import { projects, Project } from "@/lib/data";
import { ArrowUpRight, Github, Terminal, CheckCircle2, Layers, Cpu, Database, ShieldCheck, Sparkles } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Computer Vision", "Generative AI", "Natural Language Processing", "Security & Tools"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="scroll-mt-24 py-24 border-t border-white/[0.08] relative">
      <span id="featured" className="absolute -top-24" />
      <span id="dashboards" className="absolute -top-24" />
      <span id="projects" className="absolute -top-24" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              03 // Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Selected AI & Engineering Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Architecting production-ready applications, custom deep learning models, and contextual retrieval systems.
            </p>
          </div>

          {/* Filter Pills in Paymark Style */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-white text-zinc-950 font-bold shadow-md shadow-white/10"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card rounded-3xl border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-400/30 transition-all duration-300"
            >
              <div>
                {/* Top Badge & Links */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-amber-500/15 border border-amber-500/30 text-amber-300">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                      {project.period}
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs font-mono font-semibold text-zinc-300 hover:text-white hover:border-[#fbbf24]/50 hover:bg-white/[0.08] transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-6 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 gap-2.5 mb-6 p-3.5 rounded-2xl bg-black/40 border border-white/[0.06] font-mono">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="text-[10px] uppercase text-zinc-500 tracking-wider">
                        {metric.label}
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Problem & Solution Accordion-like text */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <p className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <strong className="text-white font-semibold">The Problem: </strong>
                    {project.problem}
                  </p>
                  <p className="p-3.5 rounded-xl bg-amber-500/[0.05] border border-amber-500/15">
                    <strong className="text-amber-300 font-semibold">Engineering Solution: </strong>
                    {project.solution}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Core Technical Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Stack Tags */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:border-amber-400/30 hover:text-white transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
