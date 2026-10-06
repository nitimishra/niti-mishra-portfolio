"use client";

import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const labelMap = ["Featured", "Project 02", "Project 03", "Project 04"];

  return (
    <section id="projects" className="scroll-mt-20 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-blueLight mb-2 font-semibold">
            03 / Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
            Selected work
          </h2>
        </div>

        <div className="mt-14 space-y-12">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="grid gap-x-8 gap-y-4 py-10 border-t border-white/[0.08] md:grid-cols-[200px_1fr] group"
            >
              {/* Left Label */}
              <div className="font-mono text-xs uppercase tracking-wide text-zinc-500">
                {labelMap[idx] || `Project 0${idx + 1}`}
              </div>

              {/* Right Details */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-accent-blueTint transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="shrink-0 rounded-full border border-white/[0.12] p-2 text-zinc-400 hover:border-white hover:text-white hover:bg-white/[0.05] transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="mt-3 max-w-3xl leading-relaxed text-zinc-300 text-base">
                  {project.subtitle}
                </p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2">
                  {project.approach.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blueLight" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
