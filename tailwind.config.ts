import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0FA958",
        navy: "#0B2545",
        softGray: "#F5F5F5"
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        "circuit-grid": "radial-gradient(circle at 1px 1px, rgba(15,169,88,0.4) 1px, transparent 0)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(4px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(15,169,88,0.4)" },
          "50%": { boxShadow: "0 0 35px rgba(15,169,88,0.7)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
