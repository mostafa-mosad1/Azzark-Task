/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.8rem",
          md: "5rem",
          lg: "8rem",
          xl: "12.5rem",
        },
      },
      colors: {
        mainColor:"#CE9461",
        secondColor:"#1E3231",
      },
      fontFamily: {
        harmattan: ["Harmattan", "sans-serif"],
        baloo: ["Baloo Bhaijaan 2", "sans-serif"],
      },
     keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 15s linear infinite',
      },
    },
  },
  plugins: [],
};
