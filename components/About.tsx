"use client";

import { profile, aboutHighlights } from "@/lib/data";
import { Scan, Brain, Bot, Cloud, Terminal, CheckCircle2, MapPin, GraduationCap, Laptop, Sparkles } from "lucide-react";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Scan: <Scan className="w-5 h-5 text-amber-400" />,
    Brain: <Brain className="w-5 h-5 text-purple-400" />,
    Bot: <Bot className="w-5 h-5 text-pink-400" />,
    Cloud: <Cloud className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="about" className="scroll-mt-24 py-24 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            01 // About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Engineering intelligent systems that move from research to production.
          </h2>
        </div>

        {/* Story & Snapshot Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            <p className="glass-card p-6 rounded-2xl border border-white/[0.08] text-white font-medium leading-relaxed">
              {profile.statement}
            </p>

            <p>
              My primary focus lies at the intersection of <strong className="text-white">Computer Vision</strong> and <strong className="text-white">Generative AI systems</strong>. During my research internship at the <strong className="text-white">Indian Institute of Technology (IIT) Indore</strong>, I formulated pixel-level semantic segmentation pipelines, training custom U-Net architectures to isolate 6 distinct land-cover classes from complex multispectral aerial tiles.
            </p>

            <p>
              In parallel, through my cloud engineering training with <strong className="text-white">IBM</strong>, I mastered the art of taking raw AI models and containerizing them with <strong className="text-white">Docker</strong> and <strong className="text-white">Kubernetes</strong>, wrapping them in clean <strong className="text-white">FastAPI</strong> microservices and automating deployment via CI/CD pipelines.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                B.Tech Final Year (AKTU)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                Open to Full-Time & Research Roles
              </span>
            </div>
          </div>

          {/* Quick Pillars Snapshot Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-card p-6 rounded-2xl border border-white/[0.08]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  Core Engineering Principles
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold">
                  v2.0
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Grounded & Hallucination-Resistant</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      RAG pipelines with strict document attribution and history-aware query reformulation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">High Spatial Precision</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Skip-connection encoder-decoder networks capturing fine morphological boundaries in imagery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Containerized & Cloud-Native</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Dockerized reproducible environments with fast REST APIs ready for horizontal scaling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Agentic & Tool-Augmented</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Multi-agent orchestration with Model Context Protocol (MCP) and safety guardrails.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Status: <strong className="text-emerald-400">Ready to Ship</strong></span>
              <a href="#contact" className="text-amber-400 hover:text-white transition-colors underline">
                Get in touch &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* 4 Bento Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between group hover:border-amber-400/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[highlight.icon] || <Sparkles className="w-5 h-5 text-amber-400" />}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400">
                    {highlight.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                  {highlight.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06] font-mono text-[10px] text-zinc-500">
                Pillar 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
