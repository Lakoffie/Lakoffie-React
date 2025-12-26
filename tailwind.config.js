/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
  colors: {
    primary: "#92400e",     // kopi utama
    secondary: "#78350f",   // kopi gelap
    accent: "#d97706",      // caramel / gula jawa
    cream: "#fef3c7",       // background lembut
  },
    }
  },
  plugins: []
}
