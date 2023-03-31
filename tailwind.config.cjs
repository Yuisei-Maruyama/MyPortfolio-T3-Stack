/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      green: {
        one: '#E7F3EF',
        two: '#DDEEE9',
        three: '#C6E2D9',
        four: '#8CC5B3',
        five: '#39705E',
      },
      gray: {
        one: '#E5E7EB',
        two: '#D1D5DB',
        three: '#4B5563',
        four: '#374151',
        five: '#111827',
      },
      olive: {
        one: '#E1EAE2',
        two: '#DAE5DB',
        three: '#A5C0A7',
        four: '#729C76',
      },
      cream: {
        one: '#FFFFFF',
        two: '#FEFEFB',
        three: '#FDFCF7',
        four: '#FCFBF4',
      },
      steel: {
        one: '#FAFAFA',
        two: '#F5F5F5',
        three: '#737373',
      },
      leaf: {
        one: '#E0E7A1',
      },
    },
    screens: {
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1440px",
    },
    // colors: {
    //   blue: "#1fb6ff",
    //   purple: "#7e5bef",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   yellow: "#ffc82c",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    // },
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        // 128: "32rem",
        // 144: "36rem",
      },
      borderRadius: {
        // "4xl": "2rem",
      },
    },
  },
  plugins: [],
}
