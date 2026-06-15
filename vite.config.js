import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Site is deployed under this sub-path on the VPS (nginx), so all
  // asset URLs (JS/CSS) must be prefixed with it. Root "/" 404s otherwise.
  base: "/static/portfolio/",
  plugins: [react()],
});
