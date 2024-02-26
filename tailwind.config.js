/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
      screens: {
        xs: "450px",
       
      },
    },
  },
  plugins: [],
};
