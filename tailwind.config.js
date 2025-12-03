// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'libertinus' is your new utility class (e.g., font-libertinus)
        // 'Libertinus Serif' must match the name in your @font-face rule
        'libertinus': ['Libertinus Serif', 'serif'],
      },
    },
  },
  plugins: [],
}