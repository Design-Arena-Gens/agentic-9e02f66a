import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        parchment: {
          50: "#fdfaf5",
          100: "#f7f0e0",
          200: "#efe0c2",
          300: "#e4cda1",
          400: "#d6b77c",
          500: "#c09b54",
          600: "#a17c3e",
          700: "#805e2e",
          800: "#604320",
          900: "#3f2a14"
        }
      }
    }
  },
  plugins: []
};

export default config;
