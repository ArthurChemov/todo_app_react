/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        losAngeles: 'Brush Script MT, cursive'
      },
      screens:{
        small: '0px',
        middle: '430px'
      }
    },
  },
  plugins: [],
}
