const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/index.html',
    './src/Genuary.jsx',
    './src/components/**/*.jsx',
    './src/sketches/**/*.tsx',
    './src/views/**/*.jsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
