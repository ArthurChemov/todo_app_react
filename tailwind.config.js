/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        losAngeles: 'Brush Script MT, cursive'
      },
      screens:{
        small: '480px',
        medium: '860px',
        large: '1280px'
      }
    },
  },
  plugins: [],
}
