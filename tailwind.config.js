 /** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          soft: "var(--color-bg-soft)",
          panel: "var(--color-bg-panel)",
          border: "var(--color-bg-border)",
        },

        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          faint: "var(--color-ink-faint)",
        },

        accent: {
          DEFAULT: "var(--color-accent)",
          light: "var(--color-accent-light)",
          violet: "var(--color-accent-violet)",
          blue: "var(--color-accent-blue)",
        },
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
      },

      boxShadow: {
        glow:
          "0 0 40px -10px rgba(99,102,241,0.35)",

        card:
          "0 4px 24px -8px var(--shadow-color)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },

        pulseSoft: {
          "0%,100%": {
            opacity: 0.6,
          },
          "50%": {
            opacity: 1,
          },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};