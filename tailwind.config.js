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

    },

  },
  plugins: [],
};
