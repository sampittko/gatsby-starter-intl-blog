module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        green: "#1db954",
      },
      fill: (theme) => ({
        "gray-100": theme("colors.gray.100"),
        "gray-200": theme("colors.gray.200"),
        "gray-300": theme("colors.gray.300"),
        "gray-400": theme("colors.gray.400"),
        "gray-500": theme("colors.gray.500"),
        "gray-600": theme("colors.gray.600"),
        "gray-700": theme("colors.gray.700"),
        "gray-800": theme("colors.gray.800"),
        "gray-900": theme("colors.gray.900"),
        white: theme("colors.white"),
        green: theme("colors.green"),
      }),
    },
  },
  variants: {
    fill: ["responsive", "hover", "group-hover"],
    borderColor: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    cursor: ["responsive", "hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover", "dark"],
    boxShadow: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
