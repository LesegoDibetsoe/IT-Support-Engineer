/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070b16',
          900: '#0b1120',
          800: '#111a2e',
          700: '#1a2742',
          600: '#28365a',
          500: '#3b4d77',
        },
        accent: {
          50: '#eff8ff',
          100: '#daeeff',
          200: '#bce0ff',
          300: '#8ccbff',
          400: '#56aeff',
          500: '#2d8efb',
          600: '#1672f0',
          700: '#0f5cd6',
          800: '#134baa',
          900: '#164286',
        },
        mint: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        amberx: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(45, 142, 251, 0.45)',
        card: '0 10px 30px -12px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
