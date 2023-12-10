/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "grayish-cyan": "hsl(184, 14%, 56%)",
        "light-grayish-cyan": "hsl(185, 41%, 84%)",
        "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        white: "#fff",
      },
      fontSize: {
        header: [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.5em",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
