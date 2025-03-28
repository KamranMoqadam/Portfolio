/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./**/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                batman_black: "0 0 0 50px rgba(0, 0, 0, 1)",
                batman_white: "0 0 0 50px rgba(255, 255, 255, 1)",
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                ubuntu: ['Ubuntu', 'sans-serif'],
            },
            colors: {
                'custom-dark': '#001020',
                'custom-light': '#FFFFFF',
                'second-dark': '#073575',
                'three-dark': '#DC086A',
                'fourth-dark': '#3392EF',
                'fifth-dark': '#CA397B',
                'sixth-dark': '#00ff88',
            }
        },
    },
    plugins: [],
};
