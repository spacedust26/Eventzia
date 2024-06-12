/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        '4': '4 4 0%',
        '3': '3 3 0%',
      },
      colors: {
        'custom-dark': '#321E1E',
        'custom-medium': '#8C6A5D',
      },
    },
  },
  plugins: [],
};
