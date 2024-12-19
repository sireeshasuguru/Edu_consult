// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        // 'cinzel':['Cinzel', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'custom-image': "url('https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'welcome-image': "url('https://images.unsplash.com/photo-1498079022511-d15614cb1c02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
      colors: {
        customBrown: '#E6E6FA',
        title: '#284b63',
        productsBg: '#3C6E71',
        subtitle: '#353535',
        btnBg: '#D9D9D9' // Define your custom color
      },
    },
  },
  plugins: [],
}

