import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  let baseUrl;

  if (mode === 'development') {
    baseUrl = 'http://localhost:8000';
  } else if (mode === 'production') {
    baseUrl = 'https://mern-blue-collar-app-backend-93yn.onrender.com';
  }

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_BASE_URL': JSON.stringify(baseUrl),
    },
  };
});
