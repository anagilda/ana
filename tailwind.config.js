const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray: colors.coolGray,
      white: colors.white,
      orange: colors.amber,
      purple: {
        lightest: '#D6C1EB',
        light: '#C2A3E1',
        DEFAULT: '#84719B',
        dark: '#2A1541',
        darkest: '#1E0F2E',
      },
    },
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
