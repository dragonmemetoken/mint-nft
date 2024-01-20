/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  content: [
    './src/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/home/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      },
    },
  },
  plugins: [],
}