module.exports = {
  purge: [
    './resources/views/app.blade.php',
    './resources/js/app.js',
    './resources/js/views/app.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            de: '#e01b84',
            book: '#283592',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
