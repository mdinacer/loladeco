module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      grayscale: {
        50: "50%",
        70: "70%",
        80: "80%",
      },
      backgroundImage: {},
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        BebasNeue: ["Bebas Neue", "sans-serif"],
        GreatVibes: ["Great Vibes", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        RobotoC: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
