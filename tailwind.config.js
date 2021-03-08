const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.tsx"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        bungee: ["Bungee"],
      },
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
        orange: colors.orange,
        helix: "#FFA827",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
