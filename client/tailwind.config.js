// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{html,js}'],
//   theme: {
//     fontFamily: {
//       sans: 'Roboto Mono, monospace',
//     },
//     extend: {
//       fontSize: {
//         huge: ['80rem', { lineHeight: '1' }],
//       },
//       height: {
//         screen: '100dvh',
//       },
//       colors: {
//         // Light Mode
//         light: {
//           primaryBackground: '#F5F5F5',
//           primaryText: '#333333',
//           primaryAccent: '#007BFF',
//           secondaryAccent: '#FF8800',
//           backgroundHighlight: '#FFFFFF',
//           secondaryBackground: '#E5E5E5',
//           secondaryText: '#666666',
//         },
//         // Dark Mode
//         dark: {
//           primaryBackground: '#333333',
//           primaryText: '#F5F5F5',
//           primaryAccent: '#80B3FF',
//           secondaryAccent: '#FFAA33',
//           backgroundHighlight: '#444444',
//           secondaryBackground: '#666666',
//           secondaryText: '#C5C5C5',
//         },
//       },
//     },
//   },
//   // ... other configurations
// };

// /** @type {import('tailwindcss').Config} */
// // eslint-disable-next-line
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     fontFamily: {
//       sans: 'Roboto Mono, monospace',
//     },

//     extend: {
//       fontSize: {
//         huge: ['80rem', { lineHeight: '1' }],
//       },
//       height: {
//         screen: '100dvh',
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
