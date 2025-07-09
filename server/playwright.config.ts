import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: "./tests/out",

  use: {
    baseURL: "http://localhost:3000",
  },
});
