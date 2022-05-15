/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
};

