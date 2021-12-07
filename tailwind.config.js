module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
