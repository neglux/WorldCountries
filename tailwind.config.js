/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkgray: {
        100: "#D8D8D8",
        300: "#707070",
        500: "#4D4D4D",
        700: "#303030",
        900: "#1E1E1E",
      },
      blue: "#94CBFF",
    },
  },
  plugins: [],
};
