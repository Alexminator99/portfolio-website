import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2022,
            // script.js is a classic browser script (loaded via <script src>),
            // not an ES module — keep it in script scope.
            sourceType: 'script',
            globals: {
                ...globals.browser,
            },
        },
    },
    // Disable rules that conflict with Prettier; keep this last.
    prettier,
];
