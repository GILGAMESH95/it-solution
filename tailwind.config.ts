import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'bg-main': '#09090b',
                'bg-card': '#18181b',
                'border-color': '#27272a',
                'accent': '#00f0ff',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                heading: ['var(--font-space-grotesk)'],
                mono: ['var(--font-jetbrains-mono)'],
            },
        },
    },
    plugins: [],
};

export default config;
