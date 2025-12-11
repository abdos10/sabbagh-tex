/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'slider-lg': '1080px', // Custom breakpoint for slider to shrink at 1080px instead of 1024px
      },
    },
  },
  plugins: [],
}