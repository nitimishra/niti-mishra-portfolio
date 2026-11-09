"use client";

import { certifications } from "@/lib/data";
import { Award, Sparkles, Compass, Trophy, Terminal, Calendar } from "lucide-react";

export default function Certifications() {
  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-5 h-5 text-amber-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
    Compass: <Compass className="w-5 h-5 text-yellow-400" />,
    Trophy: <Trophy className="w-5 h-5 text-amber-500" />,
  };

  return (
    <section id="certifications" className="scroll-mt-24 py-24 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            05 // Honors & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Validated Credentials & Achievements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Professional certifications in Generative AI, competitive hackathons, and aerial systems research.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((item, idx) => (
            <div
              key={item.name}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-white/[0.08] flex flex-col justify-between group hover:border-amber-400/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Award className="w-5 h-5 text-amber-400" />}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                  {item.name}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mb-3">
                  Issued by <span className="text-white font-medium">{item.issuer}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="text-emerald-400">&bull; Credential Verified</span>
                <span className="text-zinc-500">ID: CERT-0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
