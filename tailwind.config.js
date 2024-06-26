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
        primary: "#25a9ff",
        secondary: "#C23631",
        tertiary: "#1b1c1d",
        background: "#000000",
        foreground: "#0a0b0c",
        front: "#FFFFFF",
        back: "#000000",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
        360: "360ms",
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
