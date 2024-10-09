/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url(@/assets/pattern-bg.png)'
      },
      fontFamily: {
        Rubik: ['Rubik']
      }
    }
  },
  plugins: []
}
