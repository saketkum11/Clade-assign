/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E7E7E7",
        primary: "#DC4A2D",
        tretiary: "#FCB4A5",
        boldText: "#3D3D3D",
        normalText: "#888888",
        remove: "#FEF4F2",
        quaternary: "#B0B0B0",
        tab: "rgba(136, 136, 136, 1)",
        grayDot: "#D1D1D1",
        "utilitySuccess-300": "#17B26A",
        "utilitySuccess-200": "#ABEFC6",
        "utilitySuccess-50": "#ECFDF3",
        "utilitySuccess-700": "#067647",
        "utlitiyText-500": "#6E6D6D",
        "utlitiyText-400": "#4F4F4F",
        "utlitiy-600": "#FEF4F2",
        utilityBackground: "#FCFCFC",
      },
      borderRadius: {
        "4xl": "36px",
      },
    },
  },
  plugins: [],
};
