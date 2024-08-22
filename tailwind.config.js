/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        celeste: "#88CFBA",
        smooke: "#C4C4C4",
        whitee:"#c7ced8",
        greyStep:"#E8E8E8",
        marronB:"#554c4c",
        roseC:"#FFD1F5",
        roseeC:"#FFE8FB",
        rose3:"#FF16D6",
        rose2:"#FF6CE5",
        rose1:"#FFA4EF",
        celesteT:'#1673FF'
      },
      fraction: {
        '1/10': '10%',
      },
      fontFamily: {
        regular: ['Poppins', 'sans-serif'],
        clear:['DM Sans', 'sans-serif']
      },
      fontWeight: {
        regular: 400,
        clear:400,
      },
      fontStyle:{
        regular:'normal',
        clear:'normal'
      },
      theme: {
        extend: {
          transitionProperty: {
            'filter': 'filter',
          },
        },
      },
      variants: {
        extend: {
          filter: ['hover', 'group-hover'],
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
