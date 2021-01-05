module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': [
        'google',
    ],
    'globals': {
        'expect': 'readable',
        'test': 'readable',
        'describe': 'readable',
        'beforeEach': 'readable',
        'afterEach': 'readable',
        'jest': 'readable',
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
        },
        'ecmaVersion': 11,
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
        'indent': ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['error', { 'ignoreComments': true }],
        'require-jsdoc': 0,
        'valid-jsdoc': 0,
        'no-unused-vars': 0,
    },
};
