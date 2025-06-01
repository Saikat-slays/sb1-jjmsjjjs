/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          dark: '#000000',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#666666',
          light: '#999999',
        },
        accent: {
          DEFAULT: '#FFFFFF',
          dark: '#F1F1F1',
        },
        charcoal: '#121213',
        'app-background': '#121213',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '400',
        semibold: '400',
        bold: '400',
      },
      keyframes: {
        rainbow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        rainbow: 'rainbow 8s linear infinite',
      },
    },
  },
  plugins: [],
};