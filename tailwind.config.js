/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "baramey-orange": "#F7A11F",
      },
      fontFamily: {
        gagalin: ["Gagalin", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
