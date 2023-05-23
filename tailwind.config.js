/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        green: '#4DAB4D',
        NBlue: '#1D3B6B',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      height: {
        '400': '25rem',
      }
    },
  },
  plugins: [],
};
