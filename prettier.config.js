/**
 * @type {import("prettier").Config &
 *   import("prettier-plugin-tailwindcss").PluginOptions}
 */
const config = {
  plugins: [
    "prettier-plugin-jsdoc",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
