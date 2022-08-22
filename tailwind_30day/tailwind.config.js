module.exports = {
  mode: "jit",
  purge: {
    enable: true,
    content: ["./*.html", "./src/**/*.html", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
