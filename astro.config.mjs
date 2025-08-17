import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://luthien-labs.github.io/luthien-labs-frontend",
  base: "/luthien-labs-frontend",
  output: "static",
  server: {
    host: "0.0.0.0",
  },
});
