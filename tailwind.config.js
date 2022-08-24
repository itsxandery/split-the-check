/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        magicMint: 'hsl(152, 73%, 84%)',
        cerulean: 'hsl(182, 87%, 39%)',
        caribbeanGreen: 'hsl(170, 97%, 40%)',
        silverTree: 'hsl(159, 43%, 59%)',
        downy: 'hsl(173, 46%, 59%)',
        eucalyptus: 'hsl(145, 63%, 40%)',
        greenHaze: 'hsl(166, 99%, 30%)'
      }
    },
  },
  plugins: [],
}
