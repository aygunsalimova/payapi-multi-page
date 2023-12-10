/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{html,js,jsx,ts,tsx}',
    './src/components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color-1': '#BA4270',
        'main-color-2': '#FBFCFE',
        'main-color-3': '#EDF3F8',
        'main-color-4' : '#6C8294',
        'main-color-5': '#1B262F',
        'main-hover-1': '#DA6D97',
        'circle': "#36536B"
      },
      boxShadow: {
        'btn-shadow': '10px 10px 25px -10px rgba(54, 83, 107, 0.25)'
      },
      fontFamily: {
        'public-sans': "'Public Sans', sans-serif",
        'dm-serif': "'DM Serif Display', serif"

      },
      letterSpacing: {
        'm115' : '-0.115px',
        'm554': '-0.554px',
        'm369': '-0.369px'
      },
      lineHeight: {
        '18': '72px',
        '56': '56px'
      },
      width: {
        '100': "100%",
        '780': '780px',
        '257': '257px',
        '546': '546px',
        '445' :'445px'
      },
      padding: {
        '156': "156px",
        '75': "75px",
        '243': '243px',
        '100': '100px',
        '165': '165px'

      },
      height: {
        '780': '780px',
        '498': '498px',
        '243': '243px'
      },
      borderRadius: {
        '780': "780px"
      },
      spacing:{
        'm200': '-200px',
        'm150': "-150px",
        'm385': "-385px",
        '1665' : "1665px"
      }
    },
  },
  plugins: [],
}