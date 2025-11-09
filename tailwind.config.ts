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
        sans: ["Comic Sans MS", "Comic Sans", "cursive"],
        mono: ["Comic Sans MS", "Comic Sans", "cursive"],
        "space-grotesk": ["Comic Sans MS", "Comic Sans", "cursive"],
        "press-start": ["Comic Sans MS", "Comic Sans", "cursive"],
        pixel: ["Comic Sans MS", "Comic Sans", "cursive"],
        orbitron: ["Comic Sans MS", "Comic Sans", "cursive"],
        vt323: ["Comic Sans MS", "Comic Sans", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
