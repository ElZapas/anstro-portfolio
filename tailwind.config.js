/**
 * @future
 * Por lo que se, tailwindcss no soporta fuentes variables, pero se puede hacer un workaround
 * para que funcione. En este caso, se puede usar la fuente variable de Satoshi, pero no se implementará desde aqui
 * Lo que se va a hacer es simplemente usar estilos css para usar los estilos, estos estan en global.css
 */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Incluye todos los archivos JS y JSX
    './src/styles/satoshi.css', // Incluye satoshi.css para que Tailwind pueda extraer las clases
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-light-italic': ['Satoshi-LightItalic', 'sans-serif'],
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-medium-italic': ['Satoshi-MediumItalic', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-bold-italic': ['Satoshi-BoldItalic', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', 'sans-serif'],
        'satoshi-black-italic': ['Satoshi-BlackItalic', 'sans-serif'],
        'satoshi-variable': ['Satoshi-Variable', 'sans-serif'],
        'satoshi-variable-italic': ['Satoshi-VariableItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};