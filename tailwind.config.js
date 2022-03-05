const colors = require('tailwindcss/colors')

module.exports = {
  variants: {
    extend: {
      rotate: ["active", "group-hover"],
    },
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#25292C',
      'white': '#FFFFFF',
      blue: colors.blue,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      pink: colors.pink,
      'leafy-green': '#F5E0E1',
      'rose-gold-900': '#F2B5A7',
      'rose-gold-700': '#86434D',
      'rose-gold-600': '#A5525F',
      'rose-gold-500': '#B76E79',
      'rose-gold-300': '#C68D95',
      'rose-gold-200': '#D5ABB2',
      'rose-gold-100': '#E5CACE',
      'rose-gold-50': '#FFFFFF',
      'gold': '#A67A52',
      'gold-lighter': '#D6AD60',
      'gold-darker': '#B68D40',
      'purple': '#9A76A7',
      'lighter-purple': '#A97199',
      'rose-gold-purple': '#B36E89',
      'cream': '#F4EBD0',
      'maroon': '#A7483F',
      'maroon-300': '#D10C54',
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "641px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1728px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
};
