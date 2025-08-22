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
          100: '#eaf0e9', // Verde muy claro para fondos sutiles
          500: '#5a7d55', // Verde medio para textos y acentos
          700: '#31432d', // Tu color base
          900: '#263423', // Verde muy oscuro
        },
        // Mantenemos la paleta de vinos
        wine: {
          900: '#5c001f',
          700: '#8c0032',
        },
        gold: {
          100: '#c98912',
          300: '#fde68a', // Un dorado suave para textos
          400: '#c98912',
          500: '#f59e0b', // Un dorado más intenso para acentos
        },
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