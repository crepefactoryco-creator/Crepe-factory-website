import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        babyPink: {
          50: "#FFF1F7",
          100: "#FFE4F0",
          200: "#FFCDE6",
          300: "#FFB3DA",
          400: "#FF96CD",
          500: "#FF7FC0",
          600: "#FF66B1",
          700: "#E85A9F",
          800: "#BF4C86",
          900: "#933A63",
        },
        roseInk: {
          900: "#2B1B23",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(255, 127, 192, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;

