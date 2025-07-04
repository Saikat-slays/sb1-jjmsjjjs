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
        aurora: {
          blue: '#60A5FA',
          purple: '#A78BFA',
          emerald: '#34D399',
          cyan: '#22D3EE',
          violet: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      keyframes: {
        rainbow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        aurora: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        }
      },
      animation: {
        rainbow: 'rainbow 8s linear infinite',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        aurora: 'aurora 20s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};