import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Base path is environment-driven:
  //   - Firebase Hosting serves from root, so default to "/".
  //   - VPS (nginx) serves under a sub-path; `npm run build:vps` sets
  //     BASE_PATH=/static/portfolio/ so JS/CSS resolve there (root 404s).
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
