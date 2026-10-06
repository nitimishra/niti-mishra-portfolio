"use client";

import { Project } from "@/lib/data";
import { X, Github, ArrowUpRight, CheckCircle, Target, Compass, Sparkles, Calendar } from "lucide-react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-2xl border border-white/[0.12] bg-[#0E121F] shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-[#121727]/90">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-accent-blue/20 text-accent-blueTint text-[11px] font-bold uppercase tracking-wider">
              {project.badge}
            </span>
            <span className="text-xs text-text-subdued font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-text-muted hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-accent-blueTint mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-white/[0.08]">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <span className="text-[11px] text-text-subdued uppercase font-semibold block">
                  {m.label}
                </span>
                <span className="text-sm sm:text-base font-extrabold text-white block mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem Formulation */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
              <Target className="w-4 h-4 text-rose-400" />
              <span>Project Context &amp; Objective</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Implementation Approach */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Technical Implementation</span>
            </div>
            <ul className="space-y-2 text-sm text-text-muted">
              {project.approach.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blueLight text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Key Features</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-zinc-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="p-5 rounded-xl bg-accent-blue/[0.07] border border-accent-blue/20">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-1.5">
              <CheckCircle className="w-4 h-4 text-accent-blueLight" />
              <span>Results &amp; Impact</span>
            </div>
            <p className="text-sm text-blue-100/90 leading-relaxed font-medium">
              {project.result}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <span className="text-xs font-bold text-text-subdued uppercase tracking-wider block mb-2">
              Technologies &amp; Libraries:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-semibold bg-white/[0.05] text-zinc-200 border border-white/[0.08]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-[#0B0E19]">
          <span className="text-xs text-text-subdued">
            Status: <span className="text-emerald-400 font-semibold">{project.status}</span>
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="datalumina-pill-cta inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
