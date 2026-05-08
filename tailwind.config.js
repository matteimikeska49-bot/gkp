/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: '#111318',
          light: '#171A1F',
          dark: '#0E1116',
        },
        steel: '#2A2F36',
        'section-light': '#F3F4F6',
        'section-alt': '#F6F7F9',
        'card-border': '#E2E5EA',
        accent: {
          DEFAULT: '#D71920',
          hover: '#B9151B',
        },
        'text-dark': '#101828',
        'text-muted': '#667085',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}
