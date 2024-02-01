import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  let baseUrl;

  if (mode === 'development') {
    baseUrl = 'http://localhost:7000';
  } else if (mode === 'production') {
    baseUrl = 'https://www.bluekollars.com';
    // baseUrl = 'https://mern-blue-collar-app-backend-93yn.onrender.com';
  }

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_BASE_URL': JSON.stringify(baseUrl),
    },
  };
});
