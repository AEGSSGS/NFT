/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        search_shadow:"1px solid var(--system-gray-05-light, #E5E5EA)",
        '3xl':'0px 18px 34px 0px rgba(5, 16, 55, 0.15)'
      }
    },
  },
  plugins: [],
}