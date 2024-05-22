/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffaa07",
        primaryLight: "#000000",
        light: "#fffefc",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        login:
          "url('https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=720&dpr=1')",
        hero: "url('https://i.imgur.com/ilO0GRo.png')",
        heroBackground: "url('https://i.imgur.com/kdcDmva.png')",
        loginbg: "url('https://i.imgur.com/fwOnfAP.png')",
        signbg: "url('https://i.imgur.com/2rfL75H.png')",
      },
      
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};
