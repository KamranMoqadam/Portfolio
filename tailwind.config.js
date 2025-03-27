/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./**/**/*.html",
    "./src/scripts/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': '#001020',
        'second-dark': '#073575',
        'three-dark': '#DC086A',
        'fourth-dark': '#3392EF',
        'fifth-dark': '#CA397B',
        'sixth-dark': '#00ff88',
      }
    }
  },
  plugins: [],
}
