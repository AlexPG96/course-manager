module.exports = {
  theme: {
    extend: {
      backgroundColor: theme => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.blue-main.900'),
      }),
      colors: {
        'gray-main': {
          300: '#EAEDF2',
        },
        'blue-main': {
          800: '#1C1C24',
          900: '#131419',
        },
      }
    }
  },
  darkMode: 'class'
}