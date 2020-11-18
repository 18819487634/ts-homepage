module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: [
    'vue',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.VUE_APP_BASE_URL === 'prod' ? 2 : 0,
    'prefer-promise-reject-errors': 0,
    'no-useless-return': 0,
    'indent': [2, 2],
    // 允许存在声明但未使用的变量
    'no-unused-vars': [0, {'vars': 'all', 'args': 'after-used'}],
    // 空行个数最多不超过2行
    'no-multiple-empty-lines': [1, {'max': 2}],
    'quotes': [2, 'single']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
