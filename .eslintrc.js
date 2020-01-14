module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json"
  },
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:node/recommended",
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {}
};
