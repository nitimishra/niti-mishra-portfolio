"use client";

import { useState } from "react";
import { experience, education } from "@/lib/data";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, ArrowUpRight, Terminal, Building2 } from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="internships" className="scroll-mt-24 py-24 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              02 // Experience & Education
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Professional Journey & Background
            </h2>
          </div>

          {/* Switcher Tabs with Paymark Pearl-White active style */}
          <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] w-fit">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === "experience"
                  ? "bg-white text-zinc-950 font-bold shadow-md shadow-white/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-white text-zinc-950 font-bold shadow-md shadow-white/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Work Experience Tab Content */}
        {activeTab === "experience" && (
          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] group hover:border-amber-400/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                          {item.role}
                        </h3>
                        <span className="text-zinc-400 font-medium">@ {item.org}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold">
                      {item.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Key Accomplishments */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Key Engineering Contributions:
                  </h4>
                  <ul className="space-y-2.5">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-zinc-500 mr-2">Technologies:</span>
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab Content */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] flex flex-col justify-between group hover:border-purple-400/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {edu.program}
                  </h3>
                  <div className="text-sm font-semibold text-zinc-300 mb-1">
                    {edu.school}
                  </div>
                  <div className="text-xs font-mono text-zinc-500 mb-4">
                    {edu.institution} &bull; {edu.location}
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {edu.note}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-amber-400">
                  {idx === 0 ? "Undergraduate Degree" : "Higher Secondary Education"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
