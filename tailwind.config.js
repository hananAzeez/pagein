/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        loopL: "loopTextLeft  4s linear infinite",
      },
      keyframes: {
        loopTextLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      transitionProperty: {
        height: "height",
      },
      backgroundColor: {
        offWhite: "#ECEEF3",
      },
      colors: {
        primary: "#D5FF3F",
        offBlack: "#303030",
        offWhite: "#ECEEF3",
      },
      fontFamily: {
        saira: "Saira",
        syne: "Syne",
      },
    },
  },
  plugins: [],
};
