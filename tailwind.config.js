/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#121212',
          light: '#ffffff',
        },
        secondary: {
          dark: '#1f1f1f',
          light: '#f8f9fa',  // Updated light mode secondary color
        },
        accent: {
          cyan: {
            DEFAULT: '#00bcd4',
            dark: '#00bcd4',
            light: '#0097a7',  // Darker cyan for better visibility on light backgrounds
          },
          teal: {
            DEFAULT: '#03dac6',
            dark: '#03dac6',
            light: '#00897b',  // Darker teal for better visibility on light backgrounds
          },
        },
        // Light mode specific colors
        lightbg: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          tertiary: '#edf2f7',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        tilt: 'tilt 10s ease-in-out infinite',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
