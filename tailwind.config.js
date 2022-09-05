/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./common/components/**/*.tsx"
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        draw: {
          "1": '#f9f9f9',
          "2": '#f7f7f7',
          "3": '#f5f5f5'
        },
        font: '#7b7b7b'
      },
      black: '#000000',
      cyan: '#2A9BC5',
      magenta: '#F47EBD',
      yellow: '#F2C89A',
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
      satoshi: 'Satoshi, sans-serif',
      roboto: '"Roboto Mono", monospace',
    },
    screens: {
      hoverable: { 'raw': '(hover: hover) and (pointer: fine)' },
      xs: '400px',
      sm: '600px',
      md: '1000px'
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
        'width-opacity': 'width, opacity',
        'height-opacity': 'height, opacity'
      }
    }
  }
}
