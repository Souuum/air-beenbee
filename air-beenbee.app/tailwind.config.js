/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     // custom colots from coolers :
    //  --raisin-black: #2e1f27ff;
    //  --russet: #854d27ff;
    //  --cocoa-brown: #dd7230ff;
    //  --saffron: #f4c95dff;
    //  --flax: #e7e393ff;
    primary: {
      100: '#f4c95dff',
      200: '#dd7230ff',
      300: '#854d27ff',
      400: '#2e1f27ff',
    },
    secondary: {
      100: '#e7e393ff',
      200: '#f4c95dff',
      300: '#dd7230ff',
      400: '#854d27ff',
    },
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    
    },

  },
  plugins: [],
}