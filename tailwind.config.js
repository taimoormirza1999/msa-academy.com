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
      },
      animation: {
        'spin-fast': 'spin 0.8s linear infinite',
      },
    },
  },
  plugins: [],
}

