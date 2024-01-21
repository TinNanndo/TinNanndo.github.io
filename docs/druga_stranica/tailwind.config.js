module.exports = {
  content: ['./index.html', './node_modules/flowbite/**/*.js'],
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
    ['prettier-plugin-tailwindcss'],
    require('flowbite/plugin'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
