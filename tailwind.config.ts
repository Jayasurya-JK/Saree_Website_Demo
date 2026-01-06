import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-maroon": "#6B2E2E",
        "brand-green": "#2E4F3E",
        "brand-gold": "#C5A059",
        "brand-ivory": "#F9F7F2",
        "brand-charcoal": "#2C2C2C",
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};

export default config;
