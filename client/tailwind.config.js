/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // sans: 'Roboto Mono, monospace',
      slab: ['Roboto Slab', 'serif'],
    },

    colors: {
      colorGrey0: 'var(--color-grey-0)',
      colorGrey50: 'var(--color-grey-50)',
      colorGrey100: 'var(--color-grey-100)',
      colorGrey200: 'var(--color-grey-200)',
      colorGrey300: 'var(--color-grey-300)',
      colorGrey400: 'var(--color-grey-400)',
      colorGrey500: 'var(--color-grey-500)',
      colorGrey600: 'var(--color-grey-600)',
      colorGrey700: 'var(--color-grey-700)',
      colorGrey800: 'var(--color-grey-800)',
      colorGrey900: 'var(--color-grey-900)',

      colorBlue100: 'var(--color-blue-100)',
      colorBlue700: 'var(--color-blue-700)',
      colorGreen100: 'var(--color-green-100)',
      colorGreen700: 'var(--color-green-700)',
      colorYellow100: 'var(--color-yellow-100)',
      colorYellow700: 'var(--color-yellow-700)',
      colorSilver100: 'var(--color-silver-100)',
      colorSilver700: 'var(--color-silver-700)',
      colorIndigo100: 'var(--color-indigo-100)',
      colorIndigo700: 'var(--color-indigo-700)',
      colorRed100: 'var(--color-red-100)',
      colorRed700: 'var(--color-red-700)',
      colorRed800: 'var(--color-red-800)',

      colorShadowSm: 'var(--shadow-sm)',
      colorShadowMd: 'var(--shadow-md)',
      colorShadowLg: 'var(--shadow-lg)',

      colorBrand1: 'var(--color-brand-1)',
      colorBrand2: 'var(--color-brand-2)',
      colorBrand3: 'var(--color-brand-3)',
      colorBrand4: 'var(--color-brand-4)',
      colorBrand5: 'var(--color-brand-5)',

      colorBrand50: 'var(--color-brand-50)',
      colorBrand100: 'var(--color-brand-100)',
      colorBrand200: 'var(--color-brand-200)',
      colorBrand300: 'var(--color-brand-300)',
      colorBrand400: 'var(--color-brand-400)',
      colorBrand500: 'var(--color-brand-500)',
      colorBrand600: 'var(--color-brand-600)',
      colorBrand700: 'var(--color-brand-700)',
      colorBrand800: 'var(--color-brand-800)',
      colorBrand900: 'var(--color-brand-900)',
    },

    extend: {
      fontSize: {
        logo: '3rem',
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.5rem',
        h4: '1.25rem',
      },
      fontWeight: {
        logo: 'extrabold',
        h1: 'extrabold',
        h2: 'semibold',
        h3: 'medium',
        h4: 'normal',
      },
      textColor: {
        logo: 'var(--color-brand-900)',
        h1: 'var(--color-grey-800)',
        h2: 'var(--color-grey-700)',
        h3: 'var(--color-grey-600)',
        h4: 'var(--color-grey-500)',
      },
      // margin: {
      //   h1: 'mb-6',
      //   h2: 'mb-5',
      //   h3: 'mb-4',
      //   h4: 'mb-3',
      // },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
