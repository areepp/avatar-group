/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-grey': '#E7EAF4',
        'neutral-black': '#767B87',
      },
      width: {
        'avatar-xs': '32px',
        'avatar-sm': '36px',
        'avatar-md': '40px',
        'avatar-lg': '44px',
      },
      height: {
        'avatar-xs': '32px',
        'avatar-sm': '36px',
        'avatar-md': '40px',
        'avatar-lg': '44px',
      },
    },
  },
  plugins: [],
}
