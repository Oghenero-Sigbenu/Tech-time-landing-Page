/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        spinnaker: ["Spinnaker", "sans-serif"],
      },
      colors: {
        primary: "#004DB3",
      },
    },
  },
  plugins: [],
};
