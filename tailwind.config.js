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
        'custom-gradient': 'linear-gradient(to right, #7f7fff, #ff00ff)',
      },
      spacing: {
        104: '26rem', 
        128: '32rem', 
      },
      width: {
        '99': '99%',
        '98': '98%',
        '97': '97%',
        '95': '95%',
        '90': '90%',
        '85': '85%',
        '80': '80%',
        '60': '60%',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw'
      },
      height: {
        '99': '99%',
        '98': '98%',
        '97': '97%',
        '95': '95%',
        '90': '90%',
        '85': '85%',
        '80': '80%',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw'
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

