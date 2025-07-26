/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        storm: '#1f2235',
        indigo: '#6366f1',
      },
    },
  },
  plugins: [],
};
