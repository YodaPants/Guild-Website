const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppin', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        steel: {
          '50': '#f9fafa',
          '100': '#eef1f7',
          '200': '#d9dded',
          '300': '#b3bad6',
          '400': '#8891b7',
          '500': '#6b6e98',
          '600': '#55537a',
          '700': '#413d5b',
          '800': '#242038',
          '900': '#1a1926',
        },
        manatee: {
          '50': '#fafafa',
          '100': '#f2f1f5',
          '200': '#e3dbea',
          '300': '#c5b6d0',
          '400': '#a58bae',
          '500': '#87678e',
          '600': '#6d4c6f',
          '700': '#513852',
          '800': '#372637',
          '900': '#201721',
        },
        wisteria: {
          '50': '#fafbfa',
          '100': '#f3f1f5',
          '200': '#e5dbea',
          '300': '#c7b5cf',
          '400': '#a98aad',
          '500': '#8c668c',
          '600': '#714a6d',
          '700': '#543750',
          '800': '#392536',
          '900': '#211720',
        },
        plum: {
          '50': '#fafbfa',
          '100': '#f3f1f6',
          '200': '#e4dbeb',
          '300': '#c6b5d1',
          '400': '#a88ab1',
          '500': '#8b6692',
          '600': '#704a72',
          '700': '#543754',
          '800': '#382539',
          '900': '#201722',
        },
        gray: {
          '50': '#fafbfa',
          '100': '#f3f1f5',
          '200': '#e5daea',
          '300': '#c8b5cf',
          '400': '#aa8aad',
          '500': '#8e658d',
          '600': '#724a6e',
          '700': '#553751',
          '800': '#3a2537',
          '900': '#211620',
        },
        denim: {
          '50': '#fafafa',
          '100': '#f2f1f6',
          '200': '#e2dbec',
          '300': '#c3b6d3',
          '400': '#a38bb2',
          '500': '#866794',
          '600': '#6c4b74',
          '700': '#513856',
          '800': '#36263a',
          '900': '#1f1722',
        },
        beaver: {
          '50': '#fafbfa',
          '100': '#f3f1f6',
          '200': '#e5daeb',
          '300': '#c8b5d1',
          '400': '#ab89b0',
          '500': '#8e6590',
          '600': '#734a71',
          '700': '#563753',
          '800': '#3a2538',
          '900': '#211621',
        },
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
