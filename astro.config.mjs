// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jbarrera094.github.io",
  base: "/landing-tesla",
  vite: {
    plugins: [tailwindcss()],
  },
});
