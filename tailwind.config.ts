import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#123047', teal: '#12a897', mist: '#f3f7f8' }, fontFamily: { sans: ['Arial', 'sans-serif'] } } }, plugins: [] };
export default config;
