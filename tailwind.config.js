/** @type {import('tailwindcss').Config} */
export default {
  content: ["./portafolio.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'cyber-purple': '#8b5cf6',
        'cyber-pink': '#ec4899',
        'cyber-blue': '#3b82f6',
        'cyber-yellow': '#f59e0b',
        'cyber-green': '#10b981',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'floating': 'floating 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        }
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-border': '0 0 5px currentColor, inset 0 0 5px currentColor',
      }
    },
  },
  plugins: [],
}