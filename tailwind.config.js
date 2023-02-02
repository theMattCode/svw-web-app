/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
