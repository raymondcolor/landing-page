/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        green: '#4DAB4D',
        NBlue: '#1D3B6B',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      height: {
        '400': '25rem',
      }
    },
  },
  plugins: [],
};
