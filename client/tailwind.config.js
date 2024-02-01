 /** @type {import('tailwindcss').Config} */


export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{ 
        mainBg: '#03001C',
        primaryDark: '#2b373d',
        lightWhite: '#FAFAFA',
        lightPrimary: 'rgba( 255, 255, 255, 0.3 )',
      }
    },
  },
  plugins: [],
}

