/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1A1A41",
      light: "#F4F4FB",
      base: {
        100: "#BCBCC8",
        200: "#A2A2B4",
        300: "#8C8C9C",
      },
      danger: "#BC3756",
      success: "#1A5F6D",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
