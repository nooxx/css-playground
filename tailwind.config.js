const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1366px',
    },
    extend: {
      colors: {
        'primary': colors.indigo['500'],
        'white': '#ededed'
      },
    }
  },
  plugins: [],
}
