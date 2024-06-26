/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#4a00ff",
        "primary-content-light": "#d1dbff",
        "secondary-light": "#ff00d3",
        "secondary-content-light": "#fff8fd",
        "accent-light": "#00d7c0",
        "accent-content-light": "#00110e",
        "neutral-light": "#2b3440",
        "neutral-content-light": "#d7dde4",
        "base-light": {
          100: "#ffffff",
          200: "#f2f2f2",
          300: "#e5e6e6",
          400: "#D0D2D2",
        },
        "base-light-content": "#1f2937",
        "info-light": "#00b5ff",
        "info-content-light": "#000000",
        "success-light": "#00a96e",
        "success-content-light": "#000000",
        "warning-light": "#ffbe00",
        "warning-content-light": "#ffbe00",
        "error-light": "#ff5861",
        "error-content-light": "#000000",

        "primary-dark": "#7480ff",
        "primary-content-dark": "#050617",
        "secondary-dark": "#ff52d9",
        "secondary-content-dark": "#190211",
        "accent-dark": "#00cdb7",
        "accent-content-dark": "#000f0c",
        "neutral-dark": "#2a323c",
        "neutral-content-dark": "#a6adbb",
        "base-dark": {
          100: "#1d232a",
          200: "#191e24",
          300: "#15191e",
          400: "#111418",
        },
        "base-dark-content": "#a6adbb",
        "info-dark": "#00b5ff",
        "info-content-dark": "#000000",
        "success-dark": "#00a96e",
        "success-content-dark": "#000000",
        "warning-dark": "#ffbe00",
        "warning-content-dark": "#000000",
        "error-dark": "#ff5861",
        "error-content-dark": "#000000",
      },
    },
  },

  darkMode: "selector",
  plugins: [require("daisyui")],
};
