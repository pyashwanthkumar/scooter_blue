module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
