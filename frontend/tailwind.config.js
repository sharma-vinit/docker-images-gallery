/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};


