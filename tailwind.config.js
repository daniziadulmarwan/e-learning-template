/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFDFA",
          200: "#FFF9F0",
          300: "#FFF4E5",
          400: "#FFEACC",
          500: "#FFD599",
          600: "#FFCA80",
          700: "#FFBF66",
          800: "#FF9500",
        },
        secondary: {
          100: "#B3B3B3",
          200: "#98989A",
          300: "#656567",
          400: "#59595A",
          500: "#4C4C4D",
          600: "#333333",
          700: "#262626",
          800: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};
