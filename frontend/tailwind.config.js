// import tailwindScrollbarHide from 'tailwind-scrollbar-hide'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // plugins: [tailwindScrollbarHide],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1F6EEE",
        },
      },
    ],
  },
};
