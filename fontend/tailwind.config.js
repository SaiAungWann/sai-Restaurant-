import { ssrModuleExportsKey } from "vite/module-runner";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FFc001",
        secondary: "#ff9c01",
      },
      container: {
        center: true,
        padding: {
          default: "10px",
        },
      },
      navbar: {
        hover: {
          text: "primary",
        },
      },
    },
  },
  plugins: [],
};
