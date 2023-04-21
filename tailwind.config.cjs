/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '720px'
      }
    }
  },
  darkMode: ['class'],
  plugins: []
};

module.exports = config;
