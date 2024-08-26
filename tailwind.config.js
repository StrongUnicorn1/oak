/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {backgroundImage: {'header-bg': "url(../img/header-bg.png)"},
  },
  colors: {
    'regal-gold': '#EEBC80',
    'regal-gray': '#82828282',
    'bg1': '#172029',
    'bg2': '#0A0F15',
    'grey': '#DDDDDD',
    'gold1': '#FFFFCF',
    'gold2': '#DCAA74',
    'white': '#FFFFFF',
    'black': '#000000'
  },
  plugins: [],
  
}}
const colors = require('tailwindcss/colors')
