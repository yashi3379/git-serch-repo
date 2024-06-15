module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-blue': 'inset 0 0 0 2px rgba(59, 130, 246, 1)', 
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['focus'],
    },
  },
  plugins: [],
}

