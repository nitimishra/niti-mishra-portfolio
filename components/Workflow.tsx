"use client";

import { workflowRoadmap } from "@/lib/data";
import { GitCommit, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#080A10]/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-semibold text-accent-blueLight uppercase tracking-widest mb-4">
            <GitCommit className="w-3.5 h-3.5" />
            Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 5-step engineering <em className="font-serif-italic">workflow</em>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed">
            From raw multispectral tiles and unstructured text to production-ready containerized microservices.
          </p>
        </div>

        {/* Roadmap Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {workflowRoadmap.map((item, index) => (
            <div
              key={item.step}
              className="datalumina-card relative p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 text-accent-blueLight text-sm font-extrabold flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-text-subdued tracking-widest">
                    Phase {index + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-white tracking-tight mb-2.5 group-hover:text-accent-blueTint transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-text-subdued font-mono">
                <span>STAGE {item.step}</span>
                <span className="text-emerald-400 font-bold">&check; Validated</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
