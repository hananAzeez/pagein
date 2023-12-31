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
        darkBg: "rgba(48,48,48,0.5)",
        ellipse:
          "radial-gradient(50% 50% at 50% 50%, #D5FF3F 0%, rgba(213, 255, 63, 0.00) 100%)",
        grey: "#777777",
      },
      colors: {
        primary: "#D5FF3F",
        offBlack: "#303030",
        offWhite: "#ECEEF3",
        grey: "#777777",
      },
      fontFamily: {
        saira: "Saira",
        syne: "Syne",
        benzin: "Benzin-Medium"
      },
      borderRadius: {
        btn: "64px",
      },
      screens: {
        '3xl': '2000px'
      }
    },
  },
  plugins: [],
};
