/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
      },
      textColor: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
      },
      borderColor: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)'
      }
    },
  },
  plugins: [],
}
