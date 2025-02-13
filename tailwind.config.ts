/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primaryBg: '#FFFCFD',
        secondaryBg: '#F5EDF0',
        borderBg: '#FAF5F7',
        grey: '#595657',
        nonActiveGrey: '#A69FA1',
        black: '#33292C',
        brand: '#FF005C',
      },
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
      fontFamily: {
        'GothicA1-SemiBold': ['GothicA1-SemiBold'],
        'GothicA1-Bold': ['GothicA1-Bold'],
        'GothicA1-Medium': ['GothicA1-Medium'],
        'GothicA1-Regular': ['GothicA1-Regular'],
        'GothicA1-Light': ['GothicA1-Light'],
        MinSansVF: ['MinSansVF'],
      },
    },
  },
  plugins: [],
};
