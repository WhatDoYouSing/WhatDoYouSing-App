/** @type {import('tailwindcss').Config} */
import colors from 'styles/colors';

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontSize: {
        20: '20px',
        18: '18px',
        16: '16px',
        14: '14px',
        12: '12px',
      },
      fontWeight: {
        SB: 600,
        B: 700,
        M: 500,
        R: 400,
        L: 300,
      },
    },
  },
  plugins: [],
};
