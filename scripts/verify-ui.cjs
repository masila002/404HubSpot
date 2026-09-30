// Run against a local development/preview server. No production form submissions.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const base = process.env.BASE_URL || "http://127.0.0.1:5173";
const routes = [
  "/",
  "/programming-classes",
  "/contact",
  "/our-process",
  "/services/web-development",
  "/services/software-development",
  "/services/mobile-apps",
  "/services/m-pesa-integration",
  "/services/graphics-design",
  "/sign-in",
  "/sign-up",
];
(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROMIUM_PATH
      ? { executablePath: process.env.CHROMIUM_PATH }
      : {}),
  });
  const page = await browser.newPage();
  const errors = [];
  let checks = 0;
  page.on("pageerror", (error) => errors.push(error.message));
  fs.mkdirSync("docs/design/evidence", { recursive: true });
  for (const width of [360, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(base + route);
      await page.locator("h1, h2").first().waitFor();
      assert.equal(await page.locator("header.site-header").count(), 1);
      assert.equal(await page.locator("footer.site-footer").count(), 1);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      assert.equal(overflow, false, `${route} overflows at ${width}`);
      checks++;
    }
    await page.goto(base);
    assert.equal(await page.locator(".service-card").count(), 6);
    assert.equal(await page.locator(".team-card").count(), 5);
    await page.locator("#team").scrollIntoViewIfNeeded();
    await page.waitForFunction(() =>
      [...document.querySelectorAll("img")].every(
        (img) => img.complete && img.naturalWidth > 0,
      ),
    );
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `docs/design/evidence/landing-${width}.png`,
      fullPage: true,
    });
    checks++;
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement.textContent.trim()), "Skip to content");
  await page.keyboard.press("Enter");
  assert.equal(await page.evaluate(() => document.activeElement.id), "main-content");
  checks++;
  await page.goto(base + "/contact");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  assert.equal(await page.evaluate(() => document.activeElement.id), "main-content");
  checks++;
  await page.goto(base);
  const services = page.getByRole("button", { name: "Services", exact: true });
  await services.focus();
  await page.keyboard.press("Enter");
  assert.equal(await services.getAttribute("aria-expanded"), "true");
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(() => document.activeElement.textContent.trim()),
    "Web Development",
  );
  await page.keyboard.press("Escape");
  assert.equal(await services.getAttribute("aria-expanded"), "false");
  assert.equal(
    await services.evaluate((el) => el === document.activeElement),
    true,
  );
  await services.click();
  await page.locator("h1").click();
  assert.equal(await services.getAttribute("aria-expanded"), "false");
  await services.click();
  await page
    .locator("#service-navigation")
    .getByRole("link", { name: "Mobile Apps" })
    .click();
  await page.waitForURL("**/services/mobile-apps");
  assert.equal(await page.evaluate(() => scrollY), 0);
  checks++;
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto(base);
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  assert.equal(await page.locator("#primary-navigation").isVisible(), true);
  await page.getByRole("button", { name: "Services", exact: true }).click();
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#service-navigation").count(), 0);
  await page.keyboard.press("Escape");
  assert.equal(
    await toggle.evaluate((el) => el === document.activeElement),
    true,
  );
  await toggle.click();
  await page
    .locator("#primary-navigation")
    .getByRole("link", { name: "Our Process", exact: true })
    .click();
  await page.waitForURL("**/our-process");
  assert.equal(await page.locator("#primary-navigation").isVisible(), false);
  assert.notEqual(
    await page.evaluate(() => getComputedStyle(document.body).overflow),
    "hidden",
  );
  checks++;
  await page.goto(base);
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.setViewportSize({ width: 360, height: 1000 });
  await page.waitForTimeout(150);
  assert.equal(await page.locator("#primary-navigation").isVisible(), false);
  checks++;
  await page.getByRole("link", { name: "Explore our services" }).click();
  await page.waitForURL("**/#services");
  assert.ok((await page.locator("#services").boundingBox()).y >= 70);
  checks++;
  await page.emulateMedia({ reducedMotion: "reduce" });
  const duration = await page
    .locator(".service-card")
    .first()
    .evaluate((el) => getComputedStyle(el).transitionDuration);
  assert.equal(duration, "0s");
  for (const anchor of await page.locator('a[target="_blank"]').all()) {
    assert.ok((await anchor.getAttribute("rel")).includes("noopener"));
  }
  assert.equal(await page.locator('a[href*="your-"]').count(), 0);
  assert.deepEqual(errors, []);
  checks++;
  const result = {
    checkedAt: new Date().toISOString(),
    checks,
    routeViewportChecks: 55,
    runtimeErrors: errors,
    browser: await browser.version(),
    playwright: require(
      path.join(process.env.PLAYWRIGHT_MODULE || "playwright", "package.json"),
    ).version,
    limitations:
      "Chromium only; no live contact submission, external social validation, or screen-reader audit.",
  };
  fs.writeFileSync(
    "docs/design/evidence/browser-results.json",
    JSON.stringify(result, null, 2) + "\n",
  );
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
