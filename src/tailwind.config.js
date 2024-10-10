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
    // why use postcssOptions? -> https://github.com/dilanx/craco/issues/353
    postcssOptions: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ],
    },
},
};

