import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#111827", paper: "#fafaf9", accent: { DEFAULT: "#0f8a5f", dark: "#0b6e4b" } } } },
  plugins: [],
} satisfies Config;
