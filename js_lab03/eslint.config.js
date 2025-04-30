import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint'; // requires typescript-eslint v6+

export default tseslint.config(
  pluginJs.configs.recommended,
  tseslint.configs.recommended, // Adds TS-specific rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // your custom rules here
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      // ...
    },
  }
);
