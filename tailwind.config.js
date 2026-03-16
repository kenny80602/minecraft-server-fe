/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#35355f",
        "primary-hover": "#4a4a7a",
        "background-light": "#f6f6f7",
        "background-dark": "#16161c",
        "sidebar-dark": "#1a1a24",
        "card-dark": "#1f1f29",
        "input-dark": "#2a2a35",
        "terminal-dark": "#0c0c11",
        "surface-dark": "#161b22",
        "surface-border": "#30363d",
      },
      fontFamily: {
        display: ["Inter", "Noto Sans TC", "sans-serif"],
        sans: ["Inter", "Noto Sans TC", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
