module.exports = {
  theme: {
    extend: {
      backgroundColor: theme => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.blue-main.900'),
      }),
      colors: {
        'red-main': {
          600: #F43D35,
        },
        'gray-main': {
          300: '#EAEDF2',
        },
        'blue-main': {
          800: '#0D1131',
          900: '#070919',
        },
      }
    }
  },
  darkMode: 'class'
}