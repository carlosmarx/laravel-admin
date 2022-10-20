const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                'layout': '12rem auto 20rem',

                // Complex site-specific column configuration
                'footer': '200px minmax(900px, 1fr) 100px',
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
