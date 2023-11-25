/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const myConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#ecfdf7',
          100: '#d1faea',
          200: '#a8f2da',
          300: 'var(--highlight-color)',
          400: '#36d1ad',
          500: '#12b796',
          600: '#06957b',
          700: '#057766',
          800: '#075e51',
          900: '#074d44',
          950: '#022c28',
        },
        primaryRed: '#F05454',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        display: ['CalSans-SemiBold'],
        subtitle: ['IBM Plex Mono'],
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out forwards',
        title: 'title 3s ease-out forwards',
        'fade-left': 'fade-left 3s ease-in-out forwards',
        'fade-right': 'fade-right 3s ease-in-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0%',
          },
          '75%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        'fade-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        title: {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25em',
            opacity: '0',
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%',
          },
          '80%': {
            opacity: '100%',
          },

          '100%': {
            'line-height': '100%',
            opacity: '100%',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default myConfig;
