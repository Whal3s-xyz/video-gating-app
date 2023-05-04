/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/lib/transitions.ts',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'sidebar-image-mobile': "url('/assets/images/bg-sidebar-mobile.svg')",
                'sidebar-image-desktop': "url('/assets/images/bg-sidebar-desktop.svg')"

            },
            colors: {
                'whal3s': {
                    '50': '#edf0ff',
                    '100': '#dee5ff',
                    '200': '#c4cdff',
                    '300': '#a0acff',
                    '400': '#7a80ff',
                    '500': '#5d5afa',
                    '600': '#503eef',
                    '700': '#422fd3',
                    '800': '#3729aa',
                    '900': '#302986',
                },
                "primary-marine-blue": '#02295a',
                'primary-purplish-blue': '#473dff',
                'primary-pastel-blue': '#adbeff',
                'primary-light-blue': '#bfe2fd',
                'primary-starberry-red': '#ed3548',
                'neutral-cool-gray': '#9699ab',
                'neutral-light-gray': '#d6d9e6',
                'neutral-magnolia': '#f0f6ff',
                'neutral-alabaster': '#fafbff'
            },

        },
    },
    plugins: [
        // require('@tailwindcss/forms'),
        require("daisyui")
    ],
    daisyui: {

        themes: [
            {
                mytheme: {

                    "primary": "#5d5afa",
                    "secondary": "#fedf7a",
                    "accent": "#f8f9fd",

                    "neutral": "#3D4451",

                    "base-100": "#FFFFFF",

                    "info": "#3ABFF8",

                    "success": "#36D399",

                    "warning": "#FBBD23",

                    "error": "#F87272",
                },
            },
        ],

        darkTheme: "mytheme",
    },
}
