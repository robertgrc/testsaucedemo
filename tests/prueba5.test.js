const { test, expect } = require("@playwright/test");
test(" checkout a selected item", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();

  const inventoryContainer = page.locator(".inventory_container");
  await expect(inventoryContainer).toBeVisible();

  await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();
  await page.locator("#shopping_cart_container").click();

  // Should show the 'Sauce Labs Fleece Jacket' item label.
  const cartItemLabel = page.locator(".cart_item_label");
  await expect(cartItemLabel).toContainText("Sauce Labs Fleece Jacket");

  // Should show one cart item.
  const cartItem = page.locator(".cart_item");
  await expect(cartItem).toHaveCount(1);

  await page.locator("#checkout").click();

  await page.locator("#first-name").fill("Franz Marcelo");
  await page.locator("#last-name").fill("Rodriguez Corrales");
  await page.locator("#postal-code").fill("0000");
  // should show  Checkout: Overview
  await page.locator("#continue").click();

  // await page.pause();
});
