// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      medium: ['Epilogue-Medium', 'sans-serif'],
      light: ['Epilogue-ExtraLight', 'sans-serif'],
      body: ['Epilogue-Regular', 'sans-serif']
    },
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        indigo: {
          ...colors.indigo,
          600: '#575ce3'
        },
        gray: {
          ...colors.gray,
          900: '#1d1d24'
        }
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem'
      },
      letterSpacing: {
        widest: '.12em'
      }
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
