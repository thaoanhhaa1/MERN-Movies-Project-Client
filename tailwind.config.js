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
                search: '40px',
            },
            width: {
                avatar: '28px',
            },
            colors: {
                primary: '#4AC6D2',
            },
            lineHeight: {
                sm: '1.15',
            },
        },
    },
    plugins: [],
};
