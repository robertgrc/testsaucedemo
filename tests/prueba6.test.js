const { test, expect } = require("@playwright/test");
test("verify that the items are sorted alphabetically in descending order", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  const inventoryContainer = page.locator(".inventory_container");
  await expect(inventoryContainer).toBeVisible();
  //should show items sorted alphabetically in descending order
  await page.locator(".product_sort_container").click();
  await page.selectOption(".product_sort_container", "za");
});
