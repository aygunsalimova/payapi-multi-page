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
        'btn-shadow': '10px 10px 25px -10px rgba(54, 83, 107, 0.25)',
        'table' : '25px 25px 80px 0px rgba(54, 83, 107, 0.30)'
      },
      fontFamily: {
        'public-sans': "'Public Sans', sans-serif",
        'dm-serif': "'DM Serif Display', serif",
        'roboto': "'Roboto', sans-serif"

      },
      letterSpacing: {
        'm115' : '-0.115px',
        'm554': '-0.554px',
        'm369': '-0.369px',
        'm138': '-0.138px',
        'm246': '-0.246px',
        'm431': '-0.431px',
        '2': '2px',

      },
      lineHeight: {
        '18': '72px',
        '56': '56px',
        '48': '48px'
      },
      width: {
        'webkit-full': '-webkit-fill-available',
        '100': "100%",
        '129': '129px',
        '168': '168px',
        '780': '780px',
        '257': '257px',
        '546': '546px',
        '445' :'445px',
        '381': '381px',
        '730': '730px',
        '350': '350px',
        '253': '253px',
        '635': '635px',
      },
      padding: {
        '156': "156px",
        '75': "75px",
        '243': '243px',
        '100': '100px',
        '165': '165px',
        '150': '150px',
        '260': '260px'

      },
      height: {
        '780': '780px',
        '498': '498px',
        '243': '243px',
        '284': '284px',
        '180': '180px',
        '189': '189px',
        '01': '1px',
        '02': '2px'
      },
      borderRadius: {
        '780': "780px",
        '4xl': '48px'
      },
      spacing:{
        'm200': '-200px',
        'm150': "-150px",
        'm385': "-385px",
        '1665' : "1665px",
        'm527': '-527px',
        'm140': '-140px',
      },
      borderWidth: {
        '1': '1px'
      },
      fontSize: {
        '56': '56px',
        '32': '32px'
      },
      margin: {
        '72': '72px',
        '100': '100px',
        '265': '265px',
        '165': '165px',
      }
    },
  },
  plugins: [],
}
