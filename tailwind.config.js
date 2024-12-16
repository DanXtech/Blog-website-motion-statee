/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_02": "#150e06" },
        while: { "900_03": "#ffffff" },
        blue: { 100: "#cbe9ff" },
        blue_gray: {
          500: "#eceff4",
          100: "#d9d9d9",
          400: "#828794",
          900: "#373737",
          "600_bf": "#5a7184bf",
          "900_01": "#313131",
          "900_02": "#292c32",
        },
        deep_purple: {
          a200_0a: "#7c4ee40a",
          a200_11: "#7c4ee411",
        },
        gray: {
          600: "#7a7a7a",
          800: "#4c4c4c",
          "400_01": "#fbfbfb",
          "400_b2": "#b3b3b3b2",
          "50_01": "#fafafa",
          "700_19": "#66666619",
          "700_b2": "#666666b2",
        },
        primary_color_1: "#7c4ee4",
        secondary_color_2: "#333333",
        secondary_color_3: "#666666",
        text: { default_in_field: "#999999" },
        boxShadow: {
          xs: "3px 1px 43px 0 #7c4ee40a",
          sm: "7px 8px 54px 0 #7c4ee411",
        },
      },

      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },

      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      background: {
        light_blue: { 0: "#f7f6feb2", 1: "#f7f6f6" },
        while: "#ffffff",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-light text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};

//  fontFamily: {
//         roboto: "Roboto",
//         outfit: "Outfit",
//         urbanist: "Urbanist",
//         opensans: "Open Sans",
//         raleway: "Raleway",
//       },
