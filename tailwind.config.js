/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2c5e9d',
        customPink: '#efb7bd',
        customYellow: '#fcbd34',
        customOrange: '#ff9a00',
        customWhite: '#FFF6E9',
        customBlack: '#2c2c2c',
      },
    },
  },
  plugins: [],
}