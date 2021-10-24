module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: ["Poppins"],
    },
    extend: {
      colors: {
        "main-blue": "#28536B",
        "main-purple": "#9312C1",
        "main-orange": "#EFB551",
        "main-yellow": "#FFFF06",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-children")],
};
