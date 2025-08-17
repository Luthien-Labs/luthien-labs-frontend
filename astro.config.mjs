import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.luthien-labs.net",
  base: "/",
  output: "static",
  server: {
    host: "0.0.0.0",
  },
});
