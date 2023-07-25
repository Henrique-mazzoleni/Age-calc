/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--poppins)'],
      },
      colors: {
        purple: '#854dff',
        lightred: '#ff5757',
        offwhite: '#f0f0f0',
        lightgrey: '#dbdbdb',
        smokeygrey: '#716f6f',
        offblack: '#141414',
      },
      letterSpacing: {
        xtrawide: '.25em',
      },
    },
  },
  plugins: [],
};
