/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Montserrat", "sans-serif"],
      },
      colors: {
        bgcolor: "#F5F5F5",
        primaryColor: "#FFD529",
        titleColor: "#BF4C51",
        titleColor2: "#BF4C50",
        section3: "#D9D9D9",
        ozColor: "#DF912F",
        btnStory: "#BE4B4F",
        borderSlide: "#FED73C",
        contentStory: "#FEF100",
        colorFolowM: "#000000",
        menuColor: {
          titleItems: "#3C3C3C",
          paramItems: "#141414",
        },
      },
    },
  },
  // add vào plugin cài thêm nhé (npm add -D @tailwindcss/line-clamp --legacy-peer-deps)
  plugins: [require("@tailwindcss/line-clamp")],
};
