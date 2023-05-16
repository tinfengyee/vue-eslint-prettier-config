module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],
  rules: {}
}
