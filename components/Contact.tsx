"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Mail, Copy, Check, ArrowUpRight, Download, Github, Linkedin, MapPin, Terminal, Phone, Clock } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 border-t border-white/[0.08] relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            06 // Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Let&apos;s build something impactful together.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            I am currently available for <strong className="text-white">AI Engineering roles</strong>, research collaborations, and production software projects. Whether you have an exciting opportunity or just want to discuss deep learning, my inbox is open.
          </p>
        </div>

        {/* Contact Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Main Action Box */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Typical Response Time: &lt; 24 Hours</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Have a project or role in mind?
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
                Drop me an email directly or copy my address to your clipboard. Let&apos;s talk about how I can bring value to your engineering team.
              </p>

              {/* Email Box with One-Click Copy matching Paymark dark input style */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 rounded-2xl bg-black/60 border border-white/[0.1] mb-6">
                <div className="flex items-center gap-3 px-4 py-2 text-zinc-200 font-mono text-sm sm:text-base truncate flex-1">
                  <Mail className="w-4 h-4 text-[#fbbf24] shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono font-semibold text-white border border-white/[0.08] transition-all"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profile.email}`}
                    className="primary-cta-button flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-mono font-bold shadow-lg"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Resume Download Banner */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400">
                Want a copy of my curriculum vitae?
              </span>
              <a
                href={profile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                download="Niti_Mishra_Resume.pdf"
                className="glass-pill inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-white hover:border-[#fbbf24]/50"
              >
                <Download className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social & Contact Channels Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-6 block">
                Connect Directly
              </span>

              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#fbbf24]/40 hover:bg-[#fbbf24]/5 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-[#fbbf24]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">LinkedIn</div>
                      <div className="text-xs font-mono text-zinc-500">/in/niti-mishra21</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-white">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">GitHub</div>
                      <div className="text-xs font-mono text-zinc-500">@nitimishra</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-zinc-300">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Phone</div>
                      <div className="text-xs font-mono text-zinc-400">{profile.phone}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    Direct
                  </span>
                </div>
              </div>
            </div>

            {/* Location & Timezone info */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Clock className="w-3.5 h-3.5" />
                IST (UTC+5:30)
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#fbbf24]" />
            <span>&copy; {new Date().getFullYear()} Niti Mishra. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Built with Next.js &bull; Tailwind CSS &bull; TypeScript</span>
            <a href="#top" className="text-zinc-400 hover:text-white transition-colors">
              Back to Top &uarr;
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
