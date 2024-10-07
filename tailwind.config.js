/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#160959",
        "pending": "#ffca33",
        "rejected": "#ff3333",
        "verified": "#1dd500",
        "inProgress": "#15b4e3",


      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]'],
}