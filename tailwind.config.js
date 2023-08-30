/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: '#171717',
        light: '#F1F1F1',
        glass: '#E3EFFF',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
