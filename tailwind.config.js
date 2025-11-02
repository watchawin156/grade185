/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4A90E2",
        "secondary": "#F5A623",
        "background-light": "#F4F6F8",
        "background-dark": "#101622",
        "content-light": "#FFFFFF",
        "content-dark": "#182131",
        "text-primary-light": "#4A4A4A",
        "text-primary-dark": "#E0E0E0",
        "text-secondary-light": "#9B9B9B",
        "text-secondary-dark": "#A0AEC0",
        "border-light": "#EAEAEA",
        "border-dark": "#2D3748",
      },
    },
  },
  plugins: [],
}
