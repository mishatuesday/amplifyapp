/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '390px',
      'sm': '500px',
      'md': '768px',
      'lg': '1100px',
      'xl': '1400px'
    },
    extend: {},
  },
  plugins: [],
}

