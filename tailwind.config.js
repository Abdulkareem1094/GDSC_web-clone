/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto:'Roboto-Regular'
      },
      colors:{
        textGray:'#5f6368',
        borderGray:'#c6c8cb',
        blue:"#1364ce",
        lightBlue:"#d8eef9",
      },
      borderWidth: {
        1: '1px'
      },    
      screens:{
        xm:'900px',
        w1: '1290px',
        w2: '1230px',
        w3: '1160px',
        w4: '1060px',
        w5: '960px',
        w6: '860px',
      }
    },
  },
  plugins: [],
}