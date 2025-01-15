/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ee00a7e4',
        red: '#f02d00',
        ferozi: '#00ffff',
        purple:'#7f7fff',
        pink200:'#ff00ff',
        gray636: '#636363',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #7f7fff, #ff00ff)', // Custom gradient
      },
      width: {
        '99': '99%',
        '98': '98%',
        '97': '97%',
        '95': '95%',
        '90': '90%',
        '85': '85%',
        '80': '80%',
      },
      borderRadius: {
        'primary': '1.8rem', 
      },
      animation: {
        'spin-fast': 'spin 0.8s linear infinite',
      },
      borderWidth: {
        '3': '3px',
      },
      
    },
  },
  plugins: [],
}

