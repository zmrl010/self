import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import path from 'path';
import svelteParser from 'svelte-eslint-parser';
import { fileURLToPath } from 'url';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname
});

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const configs = [
  {
    ignores: [
      '.DS_Store',
      'node_modules',
      '/build',
      '/.svelte-kit',
      '/package',
      '.env',
      '.env.*',
      'pnpm-lock.yaml'
    ]
  },
  eslint.configs.recommended,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:svelte/recommended'),
  ...compat.extends('prettier'),
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser
      }
    },
    plugins: {
      svelte: sveltePlugin
    }
  },
  {
    files: ['static/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];

export default configs;
