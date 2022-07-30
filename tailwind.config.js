const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: `'Montserrat',Arial,Helvetica,sans-serif`,
            },
            height: {
                'header-pc': '66px',
                avatar: '28px',
                'search-avatar': '32px',
                search: '40px',
            },
            width: {
                avatar: '28px',
                'search-avatar': '32px',
                search: '420px',
            },
            colors: {
                primary: '#4AC6D2',
                text: '#292929',
                desc: '#0000008a',
            },
            lineHeight: {
                sm: '1.15',
            },
            transitionTimingFunction: {
                ease: 'ease',
            },
            transitionDuration: {
                300: '300ms',
            },
            backgroundImage: {
                '404-page':
                    'url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif")',
                'linear-primary':
                    'linear-gradient(107.61deg, #00A7B4 15.59%, #A4D96C 87.25%)',
            },
            aspectRatio: {
                image: '9 / 16',
            },
        },
        screens: {
            gx: '1112px',
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        plugin(function ({ addVariant }) {
            addVariant('not-last-child', '&:not(:last-child)');
        }),
    ],
};
