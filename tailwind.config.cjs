const colors = require('tailwindcss/colors')

// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      slate: colors.slate,
      emerald: colors.emerald,
      indigo: colors.indigo,
      sky: colors.sky,
      rose: colors.rose,
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  },
  variants: {},
  plugins: [],
}
