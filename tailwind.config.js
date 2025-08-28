/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        // Paleta de verdes (reemplaza a 'gold')
        primary: {
          '50': '#f4f6f3',
          '100': '#eaf0e9',
          '200': '#d3dcd2',
          '300': '#b9c7b8',
          '400': '#8da689',
          '500': '#5a7d55',
          '600': '#456240',
          '700': '#31432d', // Tu color base, oscuro y elegante
          '800': '#2b3a27',
          '900': '#263423',
          '950': '#1c261a', 
        },
        wine: {
          '50': '#fef4f7',  // El más claro, un rosa casi blanco
          '100': '#fddce9', // Tono rosado muy pálido
          '200': '#faaac8', // Rosé suave
          '300': '#f877a3', 
          '400': '#f54a83', 
          '500': '#e32865', 
          '600': '#b81d4e', 
          '700': '#8c0032', 
          '800': '#700028', 
          '900': '#5c001f', 
          '950': '#3d0015', 
        },
        gold: {
          '50': '#fffbeb', 
          '100': '#fef9d6', 
          '200': '#fef0a0', 
          '300': '#fde06a', 
          '400': '#fcd34d', // TU COLOR BASE: dorado vibrante y principal
          '500': '#f5b914', 
          '600': '#d39e08', 
          '700': '#b18405', 
          '800': '#8f6904', 
          '900': '#785903', 
          '950': '#4a3601', 
        }
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}