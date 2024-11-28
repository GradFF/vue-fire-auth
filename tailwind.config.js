/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F73A38',
        black: '#252528',
        gray: '#E7ECF2',
        white: '#FFFFFF'
      }
    }
  },
  plugins: []
}
