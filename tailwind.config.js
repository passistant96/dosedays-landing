/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        foreground: '#2D2A26',
        muted: '#6B6560',
        border: '#E8E4DF',
        primary: {
          DEFAULT: '#8B9E82',
          light: '#A4B494',
          dark: '#6B7A64',
        },
        accent: {
          DEFAULT: '#C4826E',
          light: '#D4A090',
          dark: '#A4624E',
        },
        splash: {
          bg: '#1a1f16',
          text: '#A4B494',
        },
        day: {
          dose: '#8B9E82',
          integration: '#9B8AA6',
          baseline: '#A8A29E',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Lastone', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
