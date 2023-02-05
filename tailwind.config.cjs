/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      extend: {
        fontFamily: {
          inter: ["inter", "serif"],
        },
      },
    },
  },
  plugins: [],
};
