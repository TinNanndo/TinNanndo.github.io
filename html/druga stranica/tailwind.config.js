module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
         maxHeight: {
            '70p': '70%',
         },
        colors: {
            "bg-primary": "#F4F6F9",
            'primary': '#1479EC',
            'secondary': '#007AFF',
        },


    },
  },
  plugins: [
    "@tailwindcss/forms",
  ],
}
