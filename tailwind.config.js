module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "too-blue":  "#2B3378",
          "creme":  "#F1EEEA",
          "too-blue-dark": "#0F145B",
          "periwinkle": "#7F7198",
          "golden": "#FFC43E",
          "turquoise": "#58C3C4",
          "coral": "#F05D5D",
        },
      },
      fontSize: {
        "2xs": "0.625rem"
      },
      screens: {
        "2xs": "375px",
        "xs": "480px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}
