/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#160959"
      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]'],
}