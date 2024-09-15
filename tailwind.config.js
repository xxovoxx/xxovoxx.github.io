/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(240, 240, 240, 1)',
        'off-white': 'rgba(250,250,240,1)'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}