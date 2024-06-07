/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "perfectionist", "import"],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: ["builtin", "external", "internal", "index", "sibling"],
        "newlines-between": "never",
      },
    ],
    "perfectionist/sort-imports": "off",
    "perfectionist/sort-interfaces": [
      "error",
      {
        "partition-by-new-line": true,
      },
    ],
    "perfectionist/sort-object-types": [
      "error",
      {
        "partition-by-new-line": true,
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        "partition-by-new-line": true,
      },
    ],
  },
};
module.exports = config;
