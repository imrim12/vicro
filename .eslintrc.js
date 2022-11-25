module.export = {
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["@antfu", "plugin:unicorn/all"],
  plugins: ["unicorn"],
  rules: {},
};
