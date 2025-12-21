/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B7077',
          50: '#E6F5F6',
          100: '#CCEBED',
          200: '#99D7DB',
          300: '#66C3C9',
          400: '#33AFB7',
          500: '#0B7077',
          600: '#095A60',
          700: '#074449',
          800: '#052E32',
          900: '#02181B',
        },
      },
    },
  },
  plugins: [],
}

