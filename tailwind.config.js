/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'main-purple': '#635FC7',
      'main-purple-hover': '#A8A4FF',
      black: '#000112',
      'very-dark-grey': '#20212C',
      'dark-grey': '#2B2C37',
      'lines-dark': '#3E3F4E',
      'medium-grey': '#828FA3',
      'lines-light': '#E4EBFA',
      'light-grey': '#F4F7FD',
      white: '#FFFFFF',
      red: '#EA5555',
      'red-hover': '#FF9898',
    },
    boxShadow: {
      normal: '0px 4px 6px rgba(54, 78, 126, 0.101545);',
    },
    fontSize: {
      xl: '24px',
      lg: '18px',
      md: '15px',
      sm: '13px',
      xs: '12px',
    },
    lineHeight: {
      md: '23px',
      normal: '15px',
    },
    extend: {},
  },
  plugins: [],
};
