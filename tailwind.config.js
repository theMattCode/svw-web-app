/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "svw-blue": {
          lightest: "#9BEBFF",
          lighter: "#5EB2EA",
          light: "#3999d9",
          default: "#057DB1",
          dark: "#015d98",
          darker: "#004877",
          darkest: "#00173F",
        },
      },
      backgroundImage: {
        hero: "url('/media/hero/bg.jpg') ",
        "hero-rehasport": "url('/media/hero/rehasport-hero-2024-01-29.jpg')",
        "soccer-match-bg": "url('/media/res/matchbg.png')",
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
      gridTemplateColumns: {
        match: "10fr 1fr 10fr",
      },
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
};
