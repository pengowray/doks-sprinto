export default {
    extends: 'stylelint-config-standard-scss',
    plugins: ['@stylistic/stylelint-plugin'],
    rules: {
        // Stylelint 16 removed its formatting rules. Stylelint Stylistic keeps
        // the two this project set before: 4-space indents and double quotes.
        '@stylistic/indentation': 4,
        '@stylistic/string-quotes': 'double',

        // doks-core compiles this SCSS with LibSass, which predates CSS Color 4.
        // It fails the build on rgb() with space-separated values or with a
        // fourth (alpha) argument, and passes a percentage alpha through as
        // plain text. Colours stay in rgb(r, g, b) / rgba(r, g, b, 0.5) form.
        'color-function-notation': null,
        'color-function-alias-notation': null,
        'alpha-value-notation': null,
    },
};
