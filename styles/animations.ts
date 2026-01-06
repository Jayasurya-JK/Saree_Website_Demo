/**
 * Animation Presets
 * Calm and elegant animations for premium feel
 */

export const animations = {
  // Transition Durations (in milliseconds)
  transition: {
    fast: 200,
    base: 350,   // Base transition - calm and unhurried
    slow: 600,
  },
  
  // Easing Functions
  easing: {
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    softSpring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    easeInOut: 'cubic-bezier(0.45, 0, 0.55, 1)',
  },
  
  // Animation Keyframes
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    slideUp: {
      from: { 
        opacity: 0, 
        transform: 'translateY(20px)' 
      },
      to: { 
        opacity: 1, 
        transform: 'translateY(0)' 
      },
    },
    slideDown: {
      from: { 
        opacity: 0, 
        transform: 'translateY(-20px)' 
      },
      to: { 
        opacity: 1, 
        transform: 'translateY(0)' 
      },
    },
    slideLeft: {
      from: { 
        opacity: 0, 
        transform: 'translateX(20px)' 
      },
      to: { 
        opacity: 1, 
        transform: 'translateX(0)' 
      },
    },
    slideRight: {
      from: { 
        opacity: 0, 
        transform: 'translateX(-20px)' 
      },
      to: { 
        opacity: 1, 
        transform: 'translateX(0)' 
      },
    },
    scaleIn: {
      from: { 
        opacity: 0, 
        transform: 'scale(0.95)' 
      },
      to: { 
        opacity: 1, 
        transform: 'scale(1)' 
      },
    },
    scaleOut: {
      from: { 
        opacity: 1, 
        transform: 'scale(1)' 
      },
      to: { 
        opacity: 0, 
        transform: 'scale(0.95)' 
      },
    },
  },
};

export default animations;
