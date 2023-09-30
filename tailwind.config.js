/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "monospace"],
      },
      colors: {
        userStrongCyan: "hsl(172, 67%, 45%)",
        userVeryDarkCyan: "hsl(183, 100%, 15%)",
        userDarkGrayishCyan: "hsl(186, 14%, 43%)",
        userGrayishCyan: "hsl(184, 14%, 56%)",
        userLightGrayishCyan: "hsl(185, 41%, 84%)",
        userVeryLightGrayishCyan: "hsl(189, 41%, 97%)",
        userErrorOrange: "hsl(13, 58%, 61%)",
        userDisabledButtonBg: "hsl(183, 79%, 24%)",
        userDisabledButtonText: "hsl(183, 92%, 20%)",
        userWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}