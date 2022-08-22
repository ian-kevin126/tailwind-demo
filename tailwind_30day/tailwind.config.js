module.exports = {
  mode: "jit",
  purge: {
    enable: true,
    content: ["./*.html", "./src/**/*.html", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
