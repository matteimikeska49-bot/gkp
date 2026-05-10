const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto('https://gkp-snowy.vercel.app/', { waitUntil: 'networkidle' });
  
  async function takeScreenshot(page, locatorOrSelector, filename) {
    try {
      const locator = page.locator(locatorOrSelector).first();
      await locator.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await locator.screenshot({ path: filename });
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Failed: ${e.message}`);
    }
  }

  // LegalSection has Legal in class maybe? Or just "налоговая безопасность"
  await takeScreenshot(page, 'section:has-text("налоговая безопасность")', 'desktop-8-legal.jpg');
  // Movement
  await takeScreenshot(page, 'section:has-text("Мы находимся в движении")', 'desktop-5-movement.jpg');
  
  await browser.close();
})();
