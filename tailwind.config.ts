import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
        "press-start": ["Press Start 2P", "monospace"],
        pixel: ["Press Start 2P", "monospace"],
        orbitron: ["Orbitron", "monospace"],
        vt323: ["VT323", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
