/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: "#2E3239",
  white: twColors.white,
  gray: '#CDCDCD',
  secondary: "#161D25",
  primary: "#FF9902",
  'bg-color': "F2F2F5",
  "tr-white": "rgba(255,255,255, 0.6)",
  aqua: "#268697",
  red: twColors.red[400]
}

module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: '300px',
      // => @media (min-width: 300px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '2xl-custom': { 'max': '1536px' },
      // => @media (max-width: 1536px) { ... }
      '1.5-custom': { 'max': '1440px' },
      // => @media (max-width: 1280px) { ... }
      'xl-custom': { 'max': '1280px' },
      // => @media (max-width: 1280px) { ... }
      'lg-custom': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }
      'md-custom': { 'max': '768px' },
      // => @media (max-width: 768px) { ... }
      'sm-custom': { 'max': '640px' },
      '500-custom': { 'max': '500px' },
      // => @media (max-width: 640px) { ... }
      'xs-custom': { 'max': '420px' }
    },
    colors,
    keyframes: {
      animationOpacity: {
        from: { opacity: 0.2 },
        to: { opacity: 1 }
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)'
        },
        '50%': {
          opacity: 0.3
        },
        '100%': {
          opasity: 1,
          transform: 'scale(1)'
        }
      }
    },
    animation: {
      opacity: 'animationOpasity .5s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out'
    }
  },
  plugins: [],
}
