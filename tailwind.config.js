/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    exdend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}

