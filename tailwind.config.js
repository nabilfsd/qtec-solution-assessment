/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // -- background colors
      "container-bg": "#F7F7FA",
      "card-bg": "#ffffff",
      "chat-bg": "#F4F7FA",
      "border-bg": "#E3E4E8",
      "active-bg": "#FF645A",
      "active-bg-opacity": "rgba(255, 232, 231, 0.30)",
      'active-bg-contact': '#00FF19',
      'inactive-bg-contact': '#D9DBDB',
      // -- text colors
      "primary-fg": "#141B34",
      "secondary-fg": "#686D82",
      "active-fg": "#FF645A",
      "inactive-fg": "rgba(28, 29, 34, 0.50)",
    },
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      2.5: "10px",
      3: "12px",
      4: "16px",
      4.5: "20px",
      5: "24px",
      5.5: "30px",
      6: "32px",
      6.5: "38px",
      7: "48px",
      8: "64px",
      9: "72px",
    },
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      inter: ["Inter", "serif"],
    },
    extend: {
      fontSize: {
        'dashboard': '15px',
      },
      zIndex: {
        '5': '5',
        '15': '15',
      }
    },
  },
  plugins: [],
};
