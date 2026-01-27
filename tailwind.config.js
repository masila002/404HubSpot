/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'peach': {
          DEFAULT: '#FFB6A0',
          light: '#FFD4C4',
          dark: '#FF9A7A',
        },
        'teal': {
          DEFAULT: '#2D7D7D',
          light: '#4A9A9A',
          dark: '#1A5A5A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
