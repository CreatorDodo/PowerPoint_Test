/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard-Regular', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.2s ease-out',
      },
      transitionProperty: {
        transform: 'transform',
      },
      transitionTimingFunction: {
        'zoom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        zoom: '200ms',
      },
    },
  },
  plugins: [],
};
