/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode tokens only
        'bg': '#FFFFFF',
        'wash': '#F7F9FB', 
        'text': '#0D0F12',
        'subtext': '#515761',
        'border': '#E8EBEF',
        'primary': '#0A84FF',
        'accent': '#10B981',
        
        // Humanbo brand colors
        humanbo: {
          'white': '#FFFFFF',
          'off-white': '#F7F9FB',
          'cream': '#F7F9FB',
          'black': '#0D0F12',
          'gray': '#515761',
          'light-gray': '#A4ADBB',
          'blue': '#0A84FF',
          'divider': '#E8EBEF',
          'subtle': '#F7F9FB',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
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
      },
      transitionTimingFunction: {
        'theme': 'cubic-bezier(0.22,1,0.36,1)',
      },
      transitionDuration: {
        '160': '160ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'stagger': 'stagger 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
