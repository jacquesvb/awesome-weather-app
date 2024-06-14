import withMT from "@material-tailwind/react/utils/withMT";
import colors from "tailwindcss/colors";

// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      neutral: colors.neutral,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,
      blue: colors.blue,
      slate: colors.slate,
      purple: colors.purple,
      green: colors.green,
      sky: colors.sky,
      red: colors.red,
    },
    fontFamily: {
      sans: ["graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
});
