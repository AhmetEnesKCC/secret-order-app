module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-blue": "#28536B",
        "main-purple": "#413BFE",
        "main-orange": "#EFB551",
        "main-yellow": "#FFFF06",
        "main-blue-v2": "#3BA3FE",
        "main-blue-dark": "#3934CF",
        "bundle-bg": "#0C0F12",
        "bundle-box": "#373737",
      },
      fontFamily: {
        main: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-children")],
};
