/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    colors: {
      colorBg: 'var(--color-background)',
      colorText: 'var(--color-text)',
      colorAccent: 'var(--color-accent)',
      colorButton: 'var(--color-button)',
      colorHighlight: 'var(--color-highlight)',
      colorCards: 'var(--color-cards)',
      colorSecondaryText: 'var(--color-secondary-text)',
    },
    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
