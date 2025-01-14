import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui,
    //require('@tailwindcss/typography'),
  ], // Agrega DaisyUI como plugin
  //plugins: [daisyui, require('@tailwindcss/typography'), ], // Agrega DaisyUI como plugin
  daisyui: {
    themes: ["dark"], // Elige los temas que quieres habilitar
  },
  css: {
    postcss: './postcss.config.cjs',
  },
};