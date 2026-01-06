import type { Config } from "tailwindcss";
import { tokens } from "./styles/tokens";
import { animations } from "./styles/animations";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        ivory: tokens.colors.background.ivory,
        warmBeige: tokens.colors.background.warmBeige,
        paperTexture: tokens.colors.background.paperTexture,
        
        // Primary colors
        maroon: tokens.colors.maroon,
        deepGreen: tokens.colors.deepGreen,
        indigo: tokens.colors.indigo,
        
        // Accent colors
        softGold: tokens.colors.accent.softGold,
        rust: tokens.colors.accent.rust,
        sandalwood: tokens.colors.accent.sandalwood,
        
        // Text colors
        text: tokens.colors.text,
        
        // Border colors
        border: tokens.colors.border,
      },
      fontFamily: {
        serif: ['var(--font-crimson)', ...tokens.typography.fontFamily.serif],
        sans: ['var(--font-inter)', ...tokens.typography.fontFamily.sans],
        tamil: tokens.typography.fontFamily.tamil,
      },
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
      screens: {
        mobile: tokens.breakpoints.mobile,
        tablet: tokens.breakpoints.tablet,
        desktop: tokens.breakpoints.desktop,
        wide: tokens.breakpoints.wide,
      },
      transitionDuration: {
        fast: `${animations.transition.fast}ms`,
        base: `${animations.transition.base}ms`,
        slow: `${animations.transition.slow}ms`,
      },
      transitionTimingFunction: {
        'ease-out-custom': animations.easing.easeOut,
        'soft-spring': animations.easing.softSpring,
        'ease-in-out-custom': animations.easing.easeInOut,
      },
      keyframes: animations.keyframes,
      animation: {
        'fade-in': 'fadeIn 350ms ease-out-custom',
        'slide-up': 'slideUp 350ms ease-out-custom',
        'slide-down': 'slideDown 350ms ease-out-custom',
        'slide-left': 'slideLeft 350ms ease-out-custom',
        'slide-right': 'slideRight 350ms ease-out-custom',
        'scale-in': 'scaleIn 350ms ease-out-custom',
        'scale-out': 'scaleOut 350ms ease-out-custom',
      },
    },
  },
  plugins: [],
};

export default config;
