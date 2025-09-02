/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'humanbo': {
          'white': '#FEFEFE',
          'off-white': '#FAFAFA',
          'cream': '#F8F8F7',
          'black': '#0A0A0A',
          'gray': '#5B5B5B',
          'light-gray': '#8E8E8E',
          'blue': '#3A86FF',
          'divider': '#E8E8E8',
          'subtle': '#F5F5F4',
        }
      },
      maxWidth: {
        'humanbo': '1100px',
      },
      spacing: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'premium': '0.05em',
      },
      lineHeight: {
        'ultra-tight': '0.9',
        'premium': '1.1',
      }
    },
  },
  plugins: [],
}
