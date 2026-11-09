"use client";

import { skillCategories } from "@/lib/data";
import { Bot, Sparkles, Cpu, Boxes, Cloud, Code2, Terminal } from "lucide-react";

export default function Capabilities() {
  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-purple-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Cpu: <Cpu className="w-5 h-5 text-yellow-400" />,
    Boxes: <Boxes className="w-5 h-5 text-orange-400" />,
    Cloud: <Cloud className="w-5 h-5 text-emerald-400" />,
    Code2: <Code2 className="w-5 h-5 text-pink-400" />,
  };

  return (
    <section id="toolkit" className="scroll-mt-24 py-24 border-t border-white/[0.08] relative">
      <span id="skills" className="absolute -top-24" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            04 // Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Tools, Technologies & Architectures
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A comprehensive overview of my technical stack across deep learning, generative AI, cloud infrastructure, and software engineering.
          </p>
        </div>

        {/* 6 Bento Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-white/[0.08] flex flex-col justify-between group hover:border-amber-400/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[cat.icon] || <Cpu className="w-5 h-5 text-amber-400" />}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400 font-semibold">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-4">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-white/[0.03] text-zinc-300 border border-white/[0.08] hover:border-amber-400/40 hover:text-white hover:bg-amber-500/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Domain 0{idx + 1}</span>
                <span className="text-emerald-400">&bull; Verified in Projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
