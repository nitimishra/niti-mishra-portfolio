"use client";

import { techMarquee } from "@/lib/data";

export default function Marquee() {
  return (
    <section className="relative py-12 border-y border-white/[0.06] bg-[#090C14]/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mb-8 text-center">
        <h4 className="text-xs uppercase tracking-widest text-text-subdued font-bold">
          Researched, Developed &amp; Benchmarked With
        </h4>
      </div>

      {/* Marquee Container with Gradient Edge Masking */}
      <div
        className="relative w-full overflow-hidden flex items-center"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="flex w-max shrink-0 animate-marquee items-center gap-6 md:gap-10 hover:[animation-play-state:paused]">
          {/* Double list for seamless infinite loop */}
          {[...techMarquee, ...techMarquee].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.07] hover:border-accent-blue/40 transition-all duration-300 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-accent-blue opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
              <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] font-medium text-text-subdued px-2 py-0.5 rounded bg-white/[0.04]">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
