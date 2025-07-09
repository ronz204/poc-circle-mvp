import { expect, test } from "@playwright/test";

test("should return a successful 'pong' response", async ({ request }) => {
  const response = await request.get("/api/ping");
  expect(response.ok()).toBeTruthy();

  const payload = await response.json();
  expect(payload).toEqual({ ping: "pong" });
});
