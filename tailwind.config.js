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
        light: '#D6C1EB',
        DEFAULT: '#84719B',
        dark: '#1E0F2E',
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
