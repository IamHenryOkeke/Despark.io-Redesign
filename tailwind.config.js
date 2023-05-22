/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Body': ['Inter', 'sans-serif'],
      },
      colors:{
        indigo : {
          1000 : "#8B1FF4"
        }
      }
    },
  },
  plugins: [],
}

