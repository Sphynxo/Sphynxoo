/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Share Tech Mono", "monospace"],
      },

      colors: {
        dark: "#1B1B1B",
        green: "#00c896",
        gray: "#464646",
      },

      screens: {
        "xl-mid": "1440px",
        "3xl": "1728px",
      },
    },
  },
  plugins: [],
};
