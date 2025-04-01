// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "landing-tesla",
  site: "https://jbarrera094.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
});
