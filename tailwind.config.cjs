/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./login/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#f2d846",
                
        "secondary": "#7c91f9",
                
        "accent": "#ff5aac",
                
        "neutral": "#27293A",
                
        "base-100": "#2E323E",
                
        "info": "#699BD8",
                
        "success": "#22c55e",
                
        "warning": "#F9A939",
                
        "error": "#E75440",

        "neon": "#ff5aac"
        },
      },
    ],
  },
}
