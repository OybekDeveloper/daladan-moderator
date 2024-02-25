// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 0px 0px 4px rgba(21, 112, 239, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        modal:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
      },
      backdropBlur: {
        10: "10px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".img-container": {
          "scrollbar-width": "thin",
          "scrollbar-color": "transparent transparent",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
