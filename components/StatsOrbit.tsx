"use client";

import { keyStats, highlightOrbits } from "@/lib/data";
import { Sparkles, CheckCircle } from "lucide-react";

export default function StatsOrbit() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-semibold text-accent-blueLight uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Practical AI applications built for{" "}
            <em className="font-serif-italic">real impact</em>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed">
            Hands-on implementation across computer vision segmentation, conversational RAG, deep learning NLP, and cloud deployment.
          </p>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {keyStats.map((stat, i) => (
            <div
              key={i}
              className="datalumina-card relative p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/[0.04] rounded-bl-full group-hover:bg-accent-blue/[0.1] transition-colors" />
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block mb-1 group-hover:text-accent-blueTint transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-zinc-200 block mb-2">
                  {stat.label}
                </span>
              </div>
              <p className="text-xs text-text-subdued leading-relaxed border-t border-white/[0.06] pt-3 mt-2">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Floating Engineering Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlightOrbits.map((item, idx) => (
            <div
              key={idx}
              className="datalumina-card p-6 rounded-2xl border border-white/[0.08] flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 mt-0.5 text-accent-blueLight">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-200 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs">
                  <span className="font-bold text-white">{item.author}</span>
                  <span className="text-text-subdued">&bull;</span>
                  <span className="text-accent-blueTint font-medium">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
