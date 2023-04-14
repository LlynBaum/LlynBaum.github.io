/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '18' : '68px',
      },
      backgroundImage: {
        'banner': "url('../public/banner.png')"
      },
      fontFamily: {
        'Sedgwick': ['"Sedgwick Ave Display"', 'cursive']
      }
    },
  },
  plugins: [],
}
