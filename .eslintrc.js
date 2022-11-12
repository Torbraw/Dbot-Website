module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.astro'],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-unused-css-selector': 'error',
      },
    },
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:astro/recommended',
  ],
  root: true,
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-unsafe-argument': ['warn'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
  },
};
