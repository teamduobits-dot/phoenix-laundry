import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/phoenix-laundry-site/" // 👈 your repo name between slashes
});