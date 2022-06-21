/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50 : '#e0e2ef',
          100 : '#b3b8d6',
          200 : '#8088bb',
          300 : '#4d589f',
          400 : '#26358b',
          500 : '#001176',
          600 : '#000f6e',
          700 : '#000c63',
          800 : '#000a59',
          900 : '#000546',
          A100 : '#7a7dff',
          A200 : '#474bff',
          A400 : '#141aff',
          A700 : '#0005fa',
        },
        secondary: {
          50 : '#e2efe0',
          100 : '#b8d6b3',
          200 : '#88bb80',
          300 : '#589f4d',
          400 : '#358b26',
          500 : '#117600',
          600 : '#0f6e00',
          700 : '#0c6300',
          800 : '#0a5900',
          900 : '#054600',
          A100 : '#7dff7a',
          A200 : '#4bff47',
          A400 : '#1aff14',
          A700 : '#05fa00',
        },
        warn: {
          50 : '#efe0e2',
          100 : '#d6b3b8',
          200 : '#bb8088',
          300 : '#9f4d58',
          400 : '#8b2635',
          500 : '#760011',
          600 : '#6e000f',
          700 : '#63000c',
          800 : '#59000a',
          900 : '#460005',
          A100 : '#ff7a7d',
          A200 : '#ff474b',
          A400 : '#ff141a',
          A700 : '#fa0005',
        },
      }
    },
  },
  plugins: [],
  important: true
};
