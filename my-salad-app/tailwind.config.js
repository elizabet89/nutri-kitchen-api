/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
