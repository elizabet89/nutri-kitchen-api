/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // Ajusta según tus carpetas
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        greenfood: {
          light: "#A8E6A3",
          DEFAULT: "#4CAF50",
          dark: "#2E7D32"
        },
        sunshine: {
          light: "#FFF59D",
          DEFAULT: "#FFEB3B",
          dark: "#FBC02D"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}
