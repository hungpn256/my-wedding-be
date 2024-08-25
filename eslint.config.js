export default [
  {
    plugins: ['@stylistic/js'],
    rules: {
      '@stylistic/js/indent': ['error', 2],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': 'off',
      'no-console': 'error',
      'no-magic-numbers': 'error',
      '@stylistic/js/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'block-like', next: 'block-like' },
      ],
    },
  },
];
