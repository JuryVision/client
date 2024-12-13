/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#892cfe",
        secondary: "#17f4a9",
        accent: "#579cd1",
        background: "#000000",
        foreground: "#ffffff",
        front: "#fff",
        back: "#1a1a1a",
        tertiary: "#1b1c1d",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
        360: "360ms"
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
