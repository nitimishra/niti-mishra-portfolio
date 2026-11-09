"use client";

import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing neural kernel...");
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const statuses = [
      { at: 10, text: "Booting AI environment..." },
      { at: 35, text: "Loading computer vision & U-Net weights..." },
      { at: 65, text: "Configuring RAG retrieval pipelines..." },
      { at: 85, text: "Optimizing neural tensors..." },
      { at: 100, text: "System ready." },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsDone(true);
              if (onComplete) onComplete();
            }, 800);
          }, 350);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentProgress = next > 100 ? 100 : next;

        const matched = statuses.filter((s) => currentProgress >= s.at);
        if (matched.length > 0) {
          setStatusText(matched[matched.length - 1].text);
        }

        return currentProgress;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090D] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isExiting ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Paymark dual-spotlight ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[35%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute right-[35%] top-[50%] w-[450px] h-[450px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm px-6">
        {/* Full Name in Loading Screen */}
        <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6 font-sans flex items-center justify-center gap-2.5">
          <span>Niti</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#fbbf24]">
            Mishra
          </span>
          <span className="text-[#fbbf24]">.</span>
        </div>

        {/* Percentage Counter */}
        <div className="font-mono text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] mb-3">
          {progress}%
        </div>

        {/* Progress Bar Container */}
        <div className="w-56 h-1 bg-white/[0.08] rounded-full overflow-hidden mb-4 relative">
          <div
            className="h-full bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f59e0b] transition-all duration-100 ease-out rounded-full shadow-[0_0_14px_rgba(245,158,11,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text terminal style */}
        <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 h-4">
          {statusText}
        </p>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-8 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
        Niti Mishra &bull; AI Engineer
      </div>
    </div>
  );
}
