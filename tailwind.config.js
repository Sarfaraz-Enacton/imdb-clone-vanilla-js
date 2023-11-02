/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "1280px",
        },
      },
      colors: {
        primary: "#ffffff",
        secondary: {
          DEFAULT: "#000000",
          300: "#1f1f1f",
        },
        yellow: "#f5c518",
        blue: "#5799ef",
      },
    },
  },
  plugins: [],
};
