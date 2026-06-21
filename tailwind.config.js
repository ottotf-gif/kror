/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ljus, jordnära VVS-palett
        sand: {
          50: '#FCFBF8',
          100: '#FAF8F4',
          200: '#F2EDE4',
          300: '#E7DFD1',
        },
        ink: {
          DEFAULT: '#16202B',
          soft: '#3A4754',
          muted: '#6B7682',
        },
        marine: {
          DEFAULT: '#0E3A5C',
          600: '#0C3350',
          700: '#0A2A42',
          50: '#EAF1F6',
        },
        copper: {
          DEFAULT: '#C8602F',
          600: '#B0521F',
          50: '#FBEFE7',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};