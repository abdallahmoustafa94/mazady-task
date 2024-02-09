/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      divideColor: ['last'],

      colors: {
        gray: "#828282",
        card: "#fff",
        gradient: "linear-gradient(90deg, #D20653 100%, #FF951D 100%)",
        lightOrange: "#FFF5E9",
        darkOrange: "#FF951D",
        red: "#D20653",
      },
    },
  },
  plugins: [],
};
