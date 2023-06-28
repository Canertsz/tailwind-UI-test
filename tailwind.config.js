/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "15": "3.75rem",
        "150": "37.5rem"
      },
      colors: {
        "orange": "#e54d27",
        "blue": "#29A4D9",
        "yellow": "#F7DF1E",
        "purple": "#7478AE",
        "navy": "#4479A1",
        "twitter": "#1da1f2",
        "lecture": "#bdc8d4"
      }
    },
  },
  plugins: [],
}

