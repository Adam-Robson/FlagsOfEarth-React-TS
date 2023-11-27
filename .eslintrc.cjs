module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    `plugin:react/jsx-runtime`,
    `plugin:react/recommended`,
    'plugin:react-hooks/recommended',
    `plugin:@typescript-eslint/strict-type-checked`,
    `plugin:@typescript-eslint/stylistic-type-checked`,
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'database.types.ts', '/functions/cat-endpoint.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: '.',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
