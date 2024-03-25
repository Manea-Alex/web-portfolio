/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-bg": "#1C1C27",
        "dark-bgLight": "#1C1E27",
        "dark-card": "#171721",
        "dark-cardLight": "#191924",
        "light-bg": "#FFFFFF",
        "light-bgLight": "#f0f0f0",
        "light-card": "#FFFFFF",
      },
      textColor: {
        "dark-primary": "#854CE6",
        "dark-textPrimary": "#F2F3F4",
        "dark-textSecondary": "#b1b2b3",
        "light-primary": "#be1adb",
        "light-textPrimary": "#111111",
        "light-textSecondary": "#48494a",
      },
      borderColor: {
        // ... if you have any theme-specific border colors, they go here.
      },
      gradientColorStops: {
        // ... if you have gradient colors, they go here.
      },
      // Add button colors
      buttonColor: {
        "dark-button": "#854CE6",
        "light-button": "#5c5b5b",
      },
      // Explicitly define white and black if desired
      colors: {
        "theme-white": "#FFFFFF",
        "theme-black": "#000000",
      },
    },
  },
  variants: {},
  plugins: [],
};
