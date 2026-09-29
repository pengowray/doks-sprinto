export default {
    extends: 'stylelint-config-standard-scss',
    plugins: ['@stylistic/stylelint-plugin'],
    rules: {
        // Stylelint 16 removed its formatting rules. Stylelint Stylistic keeps
        // the two this project set before: 4-space indents and double quotes.
        '@stylistic/indentation': 4,
        '@stylistic/string-quotes': 'double',

        // These were turned off while this SCSS was compiled with LibSass,
        // which failed the build on rgb() with space-separated values or with
        // a fourth (alpha) argument. Since thulite 3 it is compiled with Dart
        // Sass, which accepts the CSS Color 4 forms, so these rules can be
        // turned back on once the colours in _custom.scss are rewritten.
        'color-function-notation': null,
        'color-function-alias-notation': null,
        'alpha-value-notation': null,
    },
};
