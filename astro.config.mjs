import { defineConfig } from "astro/config";
import staticAdapter from "@astrojs/adapter-static";

export default defineConfig({
  site: "https://www.luthien-labs.net",
  base: "/",
  output: "static",
  adapter: "static",
  server: {
    host: "0.0.0.0",
  },
});
