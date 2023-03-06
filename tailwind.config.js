/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ss: '460px',
      xs: '500px',
      ms: '560px',
      gs: '600px',
      sm: '648px',
      md: '700px',
      mk: '750px',
      mx: '800px',
      mg: '822px',
      mz: '865px',
      lg: '930px',
      gm: '950px',
      gg: '1000px',
      xg: '1090px',
      xz: '1115px',
      xlg: '1120px',
      xjg: '1500px',
      exl: '1999px'
    },
    extend: {
      colors: {
        kingBlack: '#000',
        mainBlack: '#0E0E0E',
        mainWhite: '#E2E2E2',
        mainGrey: '#838485',
        mainPink: '#FFD2DD',
        semiGrey: '#969696',
        darkBlue: '#0B0F15',
        outGrey: '#8E8E8E',
        darkHold: '#1B1B1B',
      },
      fontFamily: {
        dmsans: 'DM Sans',
        nunito: 'Nunito',
        quicksand: 'Quicksand',
        worksans: 'Work Sans',
        roboto: 'Roboto Mono',
        publicsans: 'Public Sans',
        eveLight: 'eveLight, sans-serif',
        eveMed: 'eveMed, sans-serif',
        eveBold: 'eveBold, sans-serif',
        poppins: 'Poppins, sans-serif',
        inter: 'Inter, sans-serif',
        fira: 'Fira Code, monospace'
      },
      animation: {
        colorAni: 'colorAni 5s ease infinite',
      },
      backgroundImage: {
        'gridSquare': "url('/libraries/img/background/bgGridS-01.svg')",
        'gridEffect': "url('/libraries/img/background/bgEffect.png')",
        'woman': "url('/libraries/img/background/woman.jpg')",
      },
      keyframes: {
        colorAni: {
          '0%, 100%': {
            'background-size': '150% 150%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '150% 150%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
