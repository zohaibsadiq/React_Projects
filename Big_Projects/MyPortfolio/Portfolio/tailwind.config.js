/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '980px',
      xl: '1200px',
      '2xl': '1500px',
    },
    fontFamily: {
      primary: ['JetBrains Mono', 'sans-serif'], // Reference the font here
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.5s ease-out',
        'accordion-up': 'accordion-up 0.5s ease-out',
      },
    },
    plugins: [require('tailwindcss-animate')],
  },
};
