module.exports = {
  mode: 'jit',,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { brightness: ["hover", "focus"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
