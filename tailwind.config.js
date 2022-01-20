module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#e6f1ff',
      'black': '#000000',
      'navy': '#0a192f',
      'light-navy': '#112240',
      'lightest-navy': '#233554',
      'slate': '#8892b0',
      'light-slate': '#a8b2d1',
      'lightest-slate': '#ccd6f6',
      'green': '#64ffda',
      'pink': '#ff00ed'
    },
    fontFamily: {
      'Inter': ['Inter', 'system-ui', 'sans-serif'],
      'Roboto': ["Roboto Mono", 'monospace'],
    },
    extend: {
      fontSize: {
        'xs-sm': '.8rem',
        '6-7xl': '4.5rem',
      },
    },
  },
  plugins: [],
}