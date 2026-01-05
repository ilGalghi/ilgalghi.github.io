/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We don't need a toggle, but strictly dark. We can just force dark style.
                     // Or just use the colors directly without 'dark:' prefix since it's ALWAYS dark.
                     // The user said "STRICT DARK MODE ONLY". So we can just design in dark colors by default.
  theme: {
    extend: {
      colors: {
        // Custom palette
        bg: {
          DEFAULT: '#09090b', // Zinc 950
          secondary: '#18181b', // Zinc 900
        },
        text: {
          primary: '#f4f4f5', // Zinc 100
          secondary: '#a1a1aa', // Zinc 400
        },
        accent: {
          DEFAULT: '#06b6d4', // Cyan 500
          glow: '#22d3ee', // Cyan 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We need to import Inter in index.css
      }
    },
  },
  plugins: [],
}
