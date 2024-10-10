module.exports = {
  mode: 'jit', // Enable Just-In-Time mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  style: {
    
    postcssOptions: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ],
    },
},
};

