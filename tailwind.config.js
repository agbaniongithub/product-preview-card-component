/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bermuda': '#78dcca',
        'darkCyan' : '#3c8067',
        'cream' : '#f2ebe3',
        'veryDarkBlue' : '#1c232b',
        'darkGrayishBlue' : 	'#6c7289'
      },
      fontFamily: {
        mont: ['Montserrat'],
        fr: ['Fraunces']
      }
    },
  },
  plugins: [],
}

