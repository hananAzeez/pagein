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
      backgroundColor: {
        offWhite: "#ECEEF3",
      },
      colors: {
        primary: "#D5FF3F",
        offBlack: "#303030",
      },
    },
  },
  plugins: [],
};
