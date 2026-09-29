import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default [
    {
        // Carried over from the old .eslintignore. None of these exist today;
        // they are Doks entry points that would be vendored code if added.
        ignores: ['assets/js/index.js', 'assets/js/katex.js', 'assets/js/vendor/**'],
    },
    js.configs.recommended,
    {
        plugins: {
            '@stylistic': stylistic,
        },
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.commonjs,
                ...globals.es2015,
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
        },
        rules: {
            'no-console': 'off',
            // The core quotes and comma-dangle rules are deprecated and leave
            // ESLint in v11; ESLint Stylistic carries them on unchanged.
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'ignore',
                },
            ],
        },
    },
    {
        // A copy of @thulite/doks-core's search-modal.js that differs only in its
        // import (see the comment in the file). Upstream's style is left alone so
        // the two can still be compared with diff.
        files: ['assets/js/search-modal.js'],
        rules: {
            '@stylistic/comma-dangle': 'off',
        },
    },
];
