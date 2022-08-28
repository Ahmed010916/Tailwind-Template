/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    container: {
      center: true,
      padding: 20,
    },
    extend: {
      colors: {
        "site": {
          'blue': '#2878EB',
          'black': '#120F2D',
          'red': '#F14D5D',
          'green': '#28a745',
          'yellow':'#ffc107',
          'section': '#ECF4FF',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
