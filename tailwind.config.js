/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient( circle,   #edbc5a41 0% , transparent 80%, transparent 85% , transparent 100%)",
      },
    },
  },
  plugins: [],
};
