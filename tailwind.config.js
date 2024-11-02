/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neomorph': '5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.8)',
        'neomorph-inset': 'inset 5px 5px 15px rgba(0,0,0,0.1), inset -5px -5px 15px rgba(255,255,255,0.8)',
      },
    },
  },
  plugins: [],
}
