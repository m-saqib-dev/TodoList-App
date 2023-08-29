/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        opcity:{
          rgba:'rgb(161,161,161,50%)',
        }
        // primary:{
        //   light:'rgb(161,161,161,50%)'
        // },
      }
    },
  },
  plugins: [],
}

