/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      },
      colors: {
        slate: {
          900: 'rgb(15 23 42)'
        },
        neutral: {
          900: 'rgb(23 23 23)'
        }
      }
    }
  },
  plugins: []
})
