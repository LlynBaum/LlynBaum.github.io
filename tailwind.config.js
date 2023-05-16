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
        '128' : '36rem'
      },
      backgroundImage: {
        'banner': "url('../public/img/banner.png')"
      },
      fontFamily: {
        'Sedgwick': ['"Sedgwick Ave Display"', 'cursive']
      },
      colors: {
        'purple-black': '#20072b',
        'purple-mid': '#6815ab',
        'purple-950': 'rgba(100, 11, 154, 90%);'
      },
      backgroundPosition: {
        'c-45' : 'center 45%',
        'c-10' : '53% 17.2%'
      },
      brightness: {
        25: '.25'
      },
      minHeight: {
        '80': '20rem',
        '1/2' : '50%'
      },
      minWidth: {
        '2/3': '66.666667%',
        '1/2' : '50%'
      },
      maxWidth: {
        '1/2': '50%',
      }
    }
  },
  plugins: [],
}
