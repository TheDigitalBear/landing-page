module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      background: 'var(--color-background)',
      white: '#ffffff',
    },
    fontFamily: {
     'sans': ['Lato','sans-serif','ui-sans-serif','system-ui'],
    }
  },
  variants: {
    extend: {
     animation: ['hover', 'focus'],
    }
  },
  plugins: [],
}
