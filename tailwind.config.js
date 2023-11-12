/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,ts}"],
  prefix: "st-",
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
