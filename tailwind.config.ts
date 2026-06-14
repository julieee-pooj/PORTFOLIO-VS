import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        slate: '#1e293b',
        indigo: '#6366f1',
        accent: '#4f46e5',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 8s ease-in-out infinite',
      },
      keyframes: {
        'glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
