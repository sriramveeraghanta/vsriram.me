module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [],
  extends: ['eslint:recommended', 'plugin:astro/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
  ignorePatterns: ['dist/', '.astro/', 'node_modules/', '.superpowers/', 'public/'],
};
