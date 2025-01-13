/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'unroll': 'unroll 0.8s ease-in-out forwards',
      },
      keyframes: {
        unroll: {
          '0%': { height: '4rem' },
          '100%': { height: '80vh' },
        },
      },
    },
  },
  plugins: [],
}

