/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#BB4D1A',
            secondary: '#90A1B9',
            tertiary: '#74D4FF',
        },
    },
  },
  plugins: [],
}