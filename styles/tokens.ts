/**
 * Design Tokens
 * Comprehensive design system tokens for the premium South Indian saree boutique
 */

export const tokens = {
  // Color Palette
  colors: {
    // Background Colors
    background: {
      ivory: '#FAF8F3',
      warmBeige: '#F5F1E8',
      paperTexture: '#FEFCF7',
    },
    
    // Primary Colors - Maroon
    maroon: {
      50: '#FAF5F5',
      100: '#F5E6E6',
      200: '#E8C7C7',
      300: '#D9A3A3',
      400: '#B46B6B',
      500: '#7D3C3C', // Base
      600: '#6B3333',
      700: '#582929',
      800: '#3D1C1C',
      900: '#2B1414',
    },
    
    // Primary Colors - Deep Green
    deepGreen: {
      50: '#F2F7F4',
      100: '#E0EEE5',
      200: '#C1DCC9',
      300: '#9BC7AA',
      400: '#6BA881',
      500: '#2F5C45', // Base
      600: '#284E3A',
      700: '#214030',
      800: '#1A3326',
      900: '#12231A',
    },
    
    // Primary Colors - Indigo
    indigo: {
      50: '#F4F5F8',
      100: '#E7E9F0',
      200: '#CDD2E0',
      300: '#ABB3CA',
      400: '#7D89A8',
      500: '#3E4A6B', // Base
      600: '#363F5C',
      700: '#2D344D',
      800: '#222740',
      900: '#181C2E',
    },
    
    // Accent Colors
    accent: {
      softGold: '#C9A961',
      rust: '#A65C3F',
      sandalwood: '#D4A574',
    },
    
    // Text Colors
    text: {
      primary: '#2D2D2D',
      secondary: '#6B6B6B',
      tertiary: '#9CA3AF',
    },
    
    // Border Colors
    border: {
      light: '#E8E4DC',
      default: '#D4CFBD',
      dark: '#B8B0A0',
    },
  },
  
  // Typography
  typography: {
    // Font Families
    fontFamily: {
      serif: ['Crimson Pro', 'Georgia', 'serif'],
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      tamil: ['Noto Sans Tamil', 'sans-serif'],
    },
    
    // Font Sizes
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
    },
    
    // Font Weights
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Line Heights
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    
    // Letter Spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Spacing Scale (rem units)
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },
  
  // Breakpoints
  breakpoints: {
    mobile: '0px',
    tablet: '640px',
    desktop: '1024px',
    wide: '1440px',
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    base: '0.25rem',   // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
};

export default tokens;
