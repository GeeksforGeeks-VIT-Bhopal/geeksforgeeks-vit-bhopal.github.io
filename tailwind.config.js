const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        background: {
          primary: {
            dark: "#151719",
            light: defaultTheme.colors.gray[50],
          },
          secondary: {
            dark: "#181a1c",
            light: defaultTheme.colors.gray[100],
          },
        },
        primary: "#308d46",
        secondary: "#25282c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
