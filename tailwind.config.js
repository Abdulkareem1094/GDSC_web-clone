/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textGray:'#5f6368',
        borderGray:'#c6c8cb'
      },
      borderWidth: {
        1: '1px'
      }
    },
  },
  plugins: [],
}