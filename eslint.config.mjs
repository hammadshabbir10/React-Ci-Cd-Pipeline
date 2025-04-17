import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJest from 'eslint-plugin-jest';
import babelParser from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      globals: {
        test: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      react: eslintPluginReact,
      jest: eslintPluginJest,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'jest/no-disabled-tests': 'warn',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
