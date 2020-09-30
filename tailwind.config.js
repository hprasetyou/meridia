// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      medium: ['Epilogue-Medium', 'sans-serif'],
      'extra-light': ['Epilogue-ExtraLight', 'sans-serif'],
      light: ['Epilogue-Light', 'sans-serif'],
      body: ['Epilogue-Regular', 'sans-serif']
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1300px'
      }
    },
    extend: {
      colors: {
        indigo: {
          ...colors.indigo,
          600: '#575ce3',
          800: '#2C2E72'
        },
        gray: {
          ...colors.gray,
          900: '#1d1d24'
        }
      },
      borderRadius: {
        '3rem': '3rem'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem',
        subheader: '76px',
        200: '200px'
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
