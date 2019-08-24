module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['warn', { 'props': false }],
    'import/prefer-default-export': 'off',
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["package-scripts.js"]}]
  }
};
