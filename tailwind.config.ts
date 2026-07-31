import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        cream: "#FFF6F0",
        blush: "#F7D6E0",
        rose: "#F4B6C2",
        lavender: "#D9C6F0",
        babyblue: "#CFE3F2",

        mauve: "#B99CC9",
        deeprose: "#C97C93",

        background: "#FFF8FB",
        foreground: "#6B4A57",
      },

      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        script: ["var(--font-dancing)", "cursive"],
        body: ["var(--font-quicksand)", "sans-serif"],
      },

      boxShadow: {
        soft: "0 8px 30px rgba(196,124,147,0.15)",
        medium: "0 12px 35px rgba(196,124,147,0.18)",
        large: "0 20px 45px rgba(196,124,147,0.22)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      maxWidth: {
        container: "1280px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      backgroundImage: {
        hero: "linear-gradient(135deg,#FFF6F0 0%,#F7D6E0 50%,#D9C6F0 100%)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        float: "float 4s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;