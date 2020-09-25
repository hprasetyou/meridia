// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      medium: ['Epilogue-Medium', 'sans-serif'],
      light: ['Epilogue-ExtraLight', 'sans-serif'],
      body: ['Epilogue-Regular', 'sans-serif']
    },
    extend: {
      colors: {
        indigo: {
          ...colors.indigo,
          600: '#575ce3'
        }
      }
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
