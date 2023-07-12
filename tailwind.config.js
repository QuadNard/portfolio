/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          bubble: {
            100: '#6246ea',
          },
          whiteDark: {
            100: '#fffffe',
          },
          bubbleSecondary: {
            100: '#d1d1e9',
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'glass-gradient':
            'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)',
          person: 'url("../../public/person.jpg")',
        },
        boxShadow: {
          button: '0px 0px 68px 7px rgba(209, 209, 233)',
        },
      },
    },
  },
  plugins: [],
};
