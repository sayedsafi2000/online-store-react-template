/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        "inter":['Inter', 'sans-serif'],
        'golos':['Golos Text','sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          DEFAULT: '#121212',
          surface: '#1E1E1E',
          border: '#2E2E2E',
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
        },
      },
      backgroundColor: {
        dark: {
          DEFAULT: '#121212',
          surface: '#1E1E1E',
        },
      },
      textColor: {
        dark: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
        },
      },
      borderColor: {
        dark: {
          DEFAULT: '#2E2E2E',
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

