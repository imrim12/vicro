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
    "comma-dangle": "off",
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
    "@typescript-eslint/comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "never",
        functions: "never",
      },
    ],
  },
};
