"use client";

import { useState, useRef } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Ambient sound synthesis toggle (Web Audio API)
  const toggleSound = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;

    if (isPlayingSound) {
      if (gainNodeRef.current && ctx) {
        gainNodeRef.current.gain.setTargetAtTime(0, ctx.currentTime, 0.2);
        setTimeout(() => {
          oscillatorRef.current?.stop();
          oscillatorRef.current?.disconnect();
          setIsPlayingSound(false);
        }, 200);
      }
    } else {
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(130.81, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
      setIsPlayingSound(true);
    }
  };

  return (
    <section id="top" className="relative min-h-[95svh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Paymark Dark Fintech Dual-Spotlight Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left violet spotlight bloom */}
        <div
          className="absolute left-[15%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.75) 0%, rgba(217, 70, 239, 0.35) 45%, transparent 70%)",
          }}
        />
        {/* Right warm amber / champagne bronze glow */}
        <div
          className="absolute right-[12%] top-[35%] w-[600px] h-[600px] rounded-full opacity-25 blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.7) 0%, rgba(251, 146, 60, 0.35) 45%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean pre-title with warm amber accent */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[1.5px] bg-[#f59e0b]" />
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#fbbf24]">
                AI ENGINEER
              </span>
            </div>

            {/* Single-Line Two-Tone Name Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[74px] font-black tracking-tight leading-[1.05] mb-6 font-sans flex items-baseline gap-3 sm:gap-4 whitespace-nowrap">
              <span className="text-white">Niti</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#fbbf24] drop-shadow-sm">
                Mishra
              </span>
            </h1>

            {/* Tagline Headline */}
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-white tracking-tight mb-4">
              Transforming Data into Intelligent Solutions.
            </h2>

            {/* Subtitle Bio */}
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl mb-9">
              I am an <strong className="text-white font-semibold">AI Engineer</strong> specializing in intelligent systems and high-performance applications. From research papers to production-ready code, I turn complex data into seamless digital experiences.
            </p>

            {/* Action Buttons: Pearl-White "Get Started" style */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="primary-cta-button inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold shadow-lg"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.25] transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column: Framed Portrait Card + Static Title */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Card Frame with warm titanium border */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2.2rem] p-[1.5px] bg-gradient-to-b from-white/[0.18] via-white/[0.06] to-amber-500/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
              <div className="w-full h-full rounded-[2.1rem] bg-[#111118]/90 backdrop-blur-xl overflow-hidden relative flex flex-col items-center justify-center border border-white/[0.06]">
                {/* Subtle internal warm gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/10 via-transparent to-[#f59e0b]/15 pointer-events-none" />

                {/* Portrait Image */}
                <div className="relative w-full h-full p-2.5 flex items-center justify-center">
                  <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative bg-[#09090D] border border-white/[0.08] flex items-center justify-center">
                    <img
                      src="/profile.jpg?v=5"
                      alt="Niti Mishra - AI Engineer"
                      className="w-full h-full object-cover object-[38%_25%] hover:scale-[1.02] transition-transform duration-500"
                    />
                    {/* Subtle gradient overlay at bottom for seamless dark fintech polish */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090D]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Static Role Title & Open to work pill under the card */}
            <div className="mt-6 flex flex-col items-center text-center">
              <div className="h-10 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#fbbf24] font-sans">
                  AI Engineer
                </span>
              </div>

              {/* Status pill • Open to Work */}
              <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sound Toggle Button (Bottom Right) */}
      <button
        onClick={toggleSound}
        aria-label="Toggle ambient audio"
        title={isPlayingSound ? "Mute ambient audio" : "Play ambient audio"}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#111118]/85 backdrop-blur-md border border-white/[0.1] text-zinc-300 hover:text-white hover:border-[#fbbf24]/50 flex items-center justify-center shadow-lg transition-all"
      >
        {isPlayingSound ? (
          <Volume2 className="w-4 h-4 text-[#fbbf24]" />
        ) : (
          <VolumeX className="w-4 h-4 text-zinc-400" />
        )}
      </button>
    </section>
  );
}
