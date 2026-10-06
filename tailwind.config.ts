import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#07080C",
          secondary: "#0D0F17",
          tertiary: "#131622",
          card: "rgba(16, 20, 31, 0.75)",
          cardHover: "rgba(22, 28, 44, 0.85)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.07)",
          default: "rgba(255, 255, 255, 0.12)",
          strong: "rgba(255, 255, 255, 0.20)",
          blueGlow: "rgba(59, 130, 246, 0.4)",
        },
        accent: {
          blue: "#2563EB",
          blueDeep: "#1D4ED8",
          blueLight: "#60A5FA",
          blueTint: "#93C5FD",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
        },
        text: {
          primary: "#FFFFFF",
          muted: "#94A3B8",
          subdued: "#64748B",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "cta-inset": "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 10px 30px -5px rgba(37, 99, 235, 0.4)",
        "card-glow": "0 0 40px -10px rgba(37, 99, 235, 0.15)",
        "card-hover": "0 10px 40px -10px rgba(37, 99, 235, 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "eclipse-breathe": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.06)", opacity: "0.9" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "ring-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "eclipse-breathe": "eclipse-breathe 8s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "ring-spin": "ring-spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
