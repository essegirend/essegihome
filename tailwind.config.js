/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {

      backgroundImage: theme => ({
        'pattern1': "url('/static/pattern1.png')",
      }),

      fontFamily:{
        borel : '"Quicksand", "sans-serif"',
        PlayFair : '"Sacramento", "cursive"',
        quick : '"Quicksand", "sans-serif"',
        boh : '"borel", "cursive"',
        
      }
    },
  },
  plugins: [],
}

