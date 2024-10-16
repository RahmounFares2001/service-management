/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary' : '#1f2127',
        'secondly' : '#252730',
        'thirdly' : '#0d0d0f',
        'forthly' : '#191a1c',
      },
      height: {
        '600': '550px'
      },
      width: {
        '2000': '2000px'
      },
    },
  },
  plugins: [],
};
