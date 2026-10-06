"use client";

import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-blueLight mb-4 font-semibold">
            01 / About
          </p>
          <p className="max-w-4xl text-2xl sm:text-3xl md:text-[34px] font-medium leading-[1.35] tracking-tight text-white">
            {profile.statement}
          </p>
        </div>

        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            {profile.location} &bull; {profile.role}
          </p>
        </div>
      </div>
    </section>
  );
}
