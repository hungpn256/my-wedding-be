import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';

const tabWidth = 2;

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', tabWidth],
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
