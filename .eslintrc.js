// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["@antfu", "plugin:unicorn/all"],
  plugins: ["unicorn"],
  rules: {
    // Default rules
    "no-console": "warn",
    // Unicorn rules
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    // Typescript rules
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/quotes": ["error", "double"],
  },
};
