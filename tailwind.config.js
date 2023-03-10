/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "svw-blue": {
          lightest: "#9BEBFF",
          lighter: "#5EB2EA",
          default: "#057DB1",
          darker: "#004877",
          darkest: "#00173F",
        },
      },
      // that is animation class
      animation: {
        fade: "fadeOut 8s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 1 },
          "80%": { opacity: 1 },
          "100%": { opacity: 0.2 },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  safelist: [
    {
      pattern: /^(w-)|(mt-).*/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
  ],
  plugins: [],
};
