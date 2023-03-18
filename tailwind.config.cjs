/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    theme: {
      colors: {
        'orangePeel': '#fe9c17', 
        'tangelo': '#fb4e0f', //Main color
        'kellyGreen': '#1abf00', 
        'midnightGreen': '#05323d',// our black
        'offRed': '#f41703',
        'yellow': '#f9e20a',
        'darkCyan': '#02909b',
        'vividSkyBlue': '#57cbf4',
        'lapisLazuli': '#115d91',
        'white': '#ffffff',
      },
    },
  },
  },
  plugins: [],
};
