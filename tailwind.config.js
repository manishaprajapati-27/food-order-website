/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "",
      light: "#ffffff",
      lightAlt: "#f5f1eb",
      primary: "#17605d",
      secondary: "#e84242",
      dark: "#1b1a1b",
      darkAlt: "#3f3d3f",
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
      clipPath: {
        "custom-polygon":
          "polygon(50% 0%, 100% 0, 100% 100%, 50% 86%, 0 100%, 0 0)",
      },
      backgroundImage: {
        "special-burger": "url('src/assets/images/special-burger.jpg')",
      },
      textShadow: {
        border:
          "2.5px 2.5px 0 #17605d, -2.5px -2.5px 0 #17605d, 2.5px -2.5px 0 #17605d, -2.5px 2.5px 0 #17605d",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, e }) {
      const clipPaths = theme("clipPath", {});
      const utilities = Object.keys(clipPaths).map((key) => ({
        [`.${e(`clip-${key}`)}`]: {
          "clip-path": clipPaths[key],
        },
      }));
      addUtilities(utilities);
    }),
    plugin(function ({ addUtilities, theme, e }) {
      const textShadows = theme("textShadow", {});
      const utilities = Object.keys(textShadows).map((key) => ({
        [`.${e(`text-shadow-${key}`)}`]: {
          "text-shadow": textShadows[key],
        },
      }));
      addUtilities(utilities);
    }),
  ],
};
