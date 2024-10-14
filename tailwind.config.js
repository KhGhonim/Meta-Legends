/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(27, 18, 29, 1) 0%, rgba(18, 15, 47, 1) 50%, rgba(27, 18, 29, 1) 100%)'
      },
      boxShadow: {
        'custom': '0px 0px 34px 7px rgba(77, 5, 77, 1)',
      },
      dropShadow: {
        'custom': '0 5px 20px rgba(204, 0, 255, 0.15)', // Your custom drop shadow
      },

      rotate: {
        'y-31': '150deg',
      },
      

    },

  },
  plugins: [],
};
