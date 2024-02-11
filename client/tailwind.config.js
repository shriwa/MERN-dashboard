/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5aa4",
        secondary: "#d8cbfc",
        "light-white": "rgba(255,255,255,0.18)",
      },
    },
  },
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
};
