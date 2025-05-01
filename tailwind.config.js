/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offWhite: '#F9F7F2',
        cinzaAreia: '#D8D3C3',
        cinzaPardo: '#AFA89B',
        begeNatural: '#E2C9A5',
        carameloClaro: '#C69C6D',
        terracota: {
          DEFAULT: '#B67E5E',
          dark: '#A66E4E'
        }
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.im.ge/2025/05/01/vwveZ4.img-bolos.md.jpeg')"
      }
    },
  },
  plugins: [],
};