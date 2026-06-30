
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ossfe: {
          blue: '#333F50',   // primary OSSFE blue
          dark: '#26303D',   // section alternation
          darker: '#1E2731', // footer / deepest
        },
        accent: {
          DEFAULT: '#FFB347', // amber CTA  (swap for #4FD1C5 teal if preferred)
          hover: '#FFA21E',
        },
        ink: {
          DEFAULT: '#FFFFFF',
          muted: '#E2E8F0',
          faint: '#94A3B8',
        },
      },
      fontFamily: {
        // Place Coolvetica in /public/fonts and declare @font-face in global.css
        display: ['Coolvetica', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};