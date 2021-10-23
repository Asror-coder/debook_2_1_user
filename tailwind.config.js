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
            book: '#7A8AFF',
            background: '#1E1E1E',
            dashBtnBlue: '#52AFFF',
            dbGray: '#AAAAAA'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
