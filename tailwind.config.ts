import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      transitionDuration: {
        custom: '250ms', // Equivalent to 0.25s
      },
      fontFamily: {
        sans: [...fontFamily.sans], // Keep existing sans fonts
        fira: ['var(--font-fira-code)', ...fontFamily.mono], // Add Fira Code
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          'dark-navy': '#020c1b',
          navy: '#0a192f',
          'light-navy': '#112240',
          'lightest-navy': '#233554',
          'navy-shadow': 'rgba(2, 12, 27, 0.7)',
        },
        secondary: {
          green: '#64ffda',
          'green-tint': 'rgba(100, 255, 218, 0.1)',
        },
        tertiary: {
          'lightest-slate': '#ccd6f6',
          'light-slate': '#a8b2d1',
          slate: '#8892b0',
          'dark-slate': '#495670',
          'darkest-slate': '#333f4f',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
