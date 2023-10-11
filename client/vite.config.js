import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");

//   let baseUrl;

//   if (mode === "development") {
//     baseUrl = "http://localhost:9000";
//   } else if (mode === "production") {
//     baseUrl = "https://mern-blog-app-backend-93yn.onrender.com";
//   }

//   return {
//     plugins: [react()],
//     define: {
//       "import.meta.env.VITE_BASE_URL": JSON.stringify(baseUrl),
//     },
//   };
// });
