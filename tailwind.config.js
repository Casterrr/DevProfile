/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    
    extend: {
      colors: {
        'blue-1000': '#001338',
        'semi-blacky': '#080808',
        'primary': '#eba417',
        'primaryLight': '#ffdb77',
        'secondary': '#79c7ff',
        'success': '#12a454',
        'danger': '#e83f5b',
        'dark': '#121214',
        'light': '#f1f1f1',
        'gray500': '#a8a8b3',
        'gray800': '#29292e',
      }
    },
    fontFamily: {
      robotoRegular: ["Roboto_400Regular"],
      robotoBold: ["Roboto_700Bold"]
    }
  },
  plugins: [],
}
