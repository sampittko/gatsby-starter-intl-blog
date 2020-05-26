module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        brown: "#56574d",
      },
      fontSize: {
        "12xl": "8rem",
      },
      minHeight: {
        "2/5-screen": "40vh",
        "1/2-screen": "50vh",
      },
      skew: {
        "-11": "-11deg",
        "11": "11deg",
      },
      inset: {
        "14": "3.5rem",
        "16": "4rem",
        "40": "10rem",
        "52": "13rem",
        "-26": "-6.5rem",
        "-32": "-8rem",
      },
      borderWidth: {
        "12": "12px",
      },
      screens: {
        xl: "1280px",
      },
      height: {
        "26": "6.5rem",
      },
      width: {
        content: "700px",
        "content-compact": "520px",
        "max-content": "max-content",
      },
      fill: {
        white: "#fff",
      },
    },
  },
  variants: {
    fill: ["responsive", "hover"],
    borderWidth: ["responsive", "hover"],
  },
  plugins: [],
};
