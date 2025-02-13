/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.7rem',
      },
      fontFamily: {
        vazir: ['Vazir'],
      },
      borderRadius: {
        lg: '10px',
      },
    },
  },
  plugins: [],
};
