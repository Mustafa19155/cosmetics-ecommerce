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
        inter: ["Inter"],
      },
      colors: {
        primary: "#FB6B90",
        secondary: "#1D1D1DB0",
        "gray-1": "#F8F9FA",
        "gray-2": "#EAEAEA",
        "gray-3": "#555F7E",
      },
      boxShadow: {
        "custom-1": "0px 2px 8px 0px #99999933",
        "custom-2":
          "-5.784615516662598px 2.892307758331299px 11.569231033325195px 0px #99999933",
        "dropdown-shadow": "0px 4px 14px 0px #0000001A",
        "select-input": "0px 2px 8px 0px #99999933",
        "review-box": "0px 4px 4px 0px #00000040",
        "cart-wrapper": "0px 4px 26px 0px #0000000F",
        "input-2": "0px 1.7529879808425903px 7.011951923370361px 0px #99999933",
        "admin-navbar": "0px 4px 10px 0px #0000001A",
        "pink-btn": "4px 4px 6px rgba(251, 107, 144, 0.5)",
        "trans-btn": "4px 4px 6px rgba(0,0,0,0.2)",
        "dashboard-card":
          "0px 7.440000057220459px 29.780000686645508px 0px #3326AE14",
      },
    },
  },
  plugins: [],
};
