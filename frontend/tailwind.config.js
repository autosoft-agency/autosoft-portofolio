// import tailwindScrollbarHide from 'tailwind-scrollbar-hide'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-darker':'#0036D7',
        primary: {
          DEFAULT: '#3F61FF',
          "99": "#fefbff",
          "98": "#fbf8ff",
          "95": "#f0efff",
          "90": "#dee1ff",
          "80": "#bac3ff",
          "70": "#95a6ff",
          "60": "#7087ff",
          "50": "#4868ff",
          "40": "#1045fa",
          "35": "#0039e3",
          "30": "#0031c5",
          "25": "#0029a9",
          "20": "#00208d",
          "15": "#001973",
          "10": "#001159",
          "5": "#00093f",
          "0": "#000000",
        },
        secondary: {
          DEFAULT: '#005485',
          "100": "#ffffff",
          "99": "#fcfcff",
          "98": "#f7f9ff",
          "95": "#e8f2ff",
          "90": "#cee5ff",
          "80": "#97cbff",
          "70": "#55b2fe",
          "60": "#3297e1",
          "50": "#007cc2",
          "40": "#00639c",
          "35": "#005689",
          "30": "#004a77",
          "25": "#003e65",
          "20": "#003354",
          "15": "#002843",
          "10": "#001d33",
          "5": "#001222",
          "0": "#000000",
        },
        accent: {
          DEFAULT: '#FA8E18',
          "100": "#ffffff",
          "99": "#fffbff",
          "98": "#fff8f5",
          "95": "#ffede2",
          "90": "#ffdcc2",
          "80": "#ffb77c",
          "70": "#fc901b",
          "60": "#d97800",
          "50": "#b46200",
          "40": "#904d00",
          "35": "#7e4300",
          "30": "#6d3900",
          "25": "#5d3000",
          "20": "#4d2700",
          "15": "#3d1e00",
          "10": "#2e1500",
          "5": "#1f0c00",
          "0": "#000000",
        }
      }
    },
  },
  // plugins: [tailwindScrollbarHide],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#3F61FF',
          'primary-content': '#fff',
          'secondary': '#005485',
          'accent': '#FA8E18',
        },
      },
    ],
  }
}