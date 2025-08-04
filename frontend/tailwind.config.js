module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-500': '#ff0077',
        'blue-500': '#00aaff',
        'btn-bg-color': '#F0F0F0', // Set to your button background color
        'btn-bg-color-hover': '#CCCCCC', // Set to your hover background color
        'font-color-black': '#000000', // Set to your text color
      },
      animation: {
        moveUpInitial: 'moveUpInitial 0.2s forwards',
        moveUpEnd: 'moveUpEnd 0.2s forwards 0.2s',
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 0, 119, 0.5)',
      },
      keyframes: {
        moveUpInitial: {
          '100%': {
            transform: 'translate3d(0, -105%, 0)',
          },
        },
        moveUpEnd: {
          '0%': {
            transform: 'translate3d(0, 100%, 0)',
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      fontFamily: {
        body: [
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
        ],
        code: [
          'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'
        ],
      },
    },
  },
 plugins: [require('@tailwindcss/typography')],

};