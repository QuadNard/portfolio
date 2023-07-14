/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bubble: {
          100: '#7796ed',
        },
        whiteDark: {
          100: '#e6e4e8',
        },
        bubbleSecondary: {
          100: '#d1d1e9',
        },
      },
      backgroundImage: {
        'new-gradient':
          'bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-200 via-cyan-100 to-blue-300',
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
  plugins: [],
};
