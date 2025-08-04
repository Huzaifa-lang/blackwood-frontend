/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0.3 },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      fontSize: {
        custom12: '12px',    // Example custom size
        custom22: '22px',    // Example custom size
        // add more if needed
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        lightBlack: "#686868",
        lightWhite: "#F2F0EC",
        greenCustom: "#3C7460",

      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

