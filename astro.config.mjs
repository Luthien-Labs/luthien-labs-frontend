import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.luthien-labs.net",
  base: "/luthien-labs-frontend",
  output: "static",
  server: {
    host: "0.0.0.0",
  },
});
