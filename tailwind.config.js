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
        terracota: '#B67E5E',
        terracotaHover: '#A66E4E',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        workSans: ['Work Sans', 'sans-serif'],
      },
      backgroundImage: {
        'cake-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgNjBMMCAwaDYweiIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L3N2Zz4=')",
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideUp: 'slideUp 0.8s ease-out',
        bounceSlow: 'bounce 3s infinite',
        pulseSlow: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
};