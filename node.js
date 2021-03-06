module.exports = {
  extends: './index.js',
  plugins: ['prefer-arrow', 'prefer-let', 'unicorn', 'node'],
  rules: {
    'node/no-unsupported-features/node-builtins': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',

    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/no-for-loop': 'error',

    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: false,
        singleReturnOnly: true,
        classPropertiesAllowed: false
      }
    ],
    'prefer-let/prefer-let': 'error',

    'template-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'prefer-rest-params': 'error',
    'constructor-super': 'error',
    'object-shorthand': 'error',
    'require-yield': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-var': 'error'
  },
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  }
};
