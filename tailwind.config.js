/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      backgroundImage: {
        'rinjani' : "url('/public/img/rinjani-unsplash.jpg')",
        'beach' : "url('/public/img/unsplash-beach.jpg')",
        'padar' : "url('/public/img/padar.jpg')"
      }
    },
  },
  plugins: [],
}
