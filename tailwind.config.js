/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: "#ffffff",
      primary: "#ffad0f",
      secondary: "#121063",
      dark: "#1b1a1b",
      // metal: "#565584",
      // tahiti: "#3ab7bf",
      // silver: "#ecebff",
      // bermuda: "#78dcca",
    },
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      container: {
        center: true,
      },
      backgroundColor: {
        body: "rgb(1, 18, 26)",
      },
      fontFamily: {
        cursive: ["Pacifico", "cursive"],
        sansSerif: ["Poppins", "sans-serif"],
        sansSerifAlt: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
