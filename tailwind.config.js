import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1201px",
        "2xl": "1401px",
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FB6B90",
        secondary: "#1D1D1DB0",
        "gray-1": "#F8F9FA",
      },
      boxShadow: {
        "custom-1": "0px 2px 8px 0px #99999933",
        "custom-2":
          "-5.784615516662598px 2.892307758331299px 11.569231033325195px 0px #99999933",
        "dropdown-shadow": "0px 4px 14px 0px #0000001A",
        "select-input": "0px 2px 8px 0px #99999933",
        "review-box": "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
