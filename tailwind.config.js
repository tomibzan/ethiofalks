/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ethioGreen: '#078930',
        ethioYellow: '#FCDD09',
        ethioRed: '#DA121A',
        brandNavy: '#0f172a',   // Dark blue background
        brandBlue: '#3b82f6',   // Electric blue accents
        brandLight: '#f8fafc'   // Clean light background
      }
    },
  },
  plugins: [],
}