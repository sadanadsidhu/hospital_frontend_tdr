module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure paths are correct
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-light': '#e5e7eb',
        'custom-gray-dark': '#d1d5db',
        customBlue: '#5B8AB8'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        

      });
    },
  ],
};

