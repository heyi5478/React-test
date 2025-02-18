/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    data: {
      active: 'active~="true"', // data-active="true"
    },
    extend: {},
  },
};
