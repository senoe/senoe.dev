/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-tailwindcss')
  ],
  trailingComma: 'none',
  singleQuote: true
};

module.exports = config;
