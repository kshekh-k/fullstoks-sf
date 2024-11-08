const { tailwindConfig } = require('@storefront-ui/react/tailwind-config');
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@storefront-ui/react/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--jost)", ...defaultTheme.fontFamily.sans],    
        
      },
      colors: {
        primary: {
          "50": "#E6E9ED",
          "100": "#CED3DB",
          "200": "#9DA7B8",
          "300": "#6B7B94",
          "400": "#3A4F71",
          "500": "#09234D",
          "600": "#071C3E",
          "700": "#05152E",
          "800": "#040E1F",
          "900": "#02070F",
          "950": "#010308",
        },
  
        // 'persian-red'
        secondary: {
          "50": "#fef2f2",
          "100": "#fee2e3",
          "200": "#fecacc",
          "300": "#fca5a9",
          "400": "#f77277",
          "500": "#ee454c",
          "600": "#cc2229",
          "700": "#b81d23",
          "800": "#981c21",
          "900": "#7e1e22",
          "950": "#450a0c",
        },
        // 'persian-red'
        success: {
          "50": "#F0F2EF",
          "100": "#E0E4DF",
          "200": "#C1C9BE",
          "300": "#A3AF9E",
          "400": "#84947D",
          "500": "#65795D",
          "600": "#51614A",
          "700": "#3D4938",
          "800": "#283025",
          "900": "#141813",
          "950": "#0A0C09",
        },
        // 'persian-red'
        warning: {
          "50": "#F8F6F0",
          "100": "#F1ECE1",
          "200": "#E3D9C4",
          "300": "#D4C7A6",
          "400": "#C6B489",
          "500": "#B8A16B",
          "600": "#938156",
          "700": "#6E6140",
          "800": "#4A402B",
          "900": "#252015",
          "950": "#12100B",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} 
