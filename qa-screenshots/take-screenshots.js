const { chromium } = require('playwright');

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  
  const siteUrl = 'https://gkp-snowy.vercel.app/';
  
  // DESKTOP
  console.log('Starting Desktop capture...');
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const dPage = await desktopContext.newPage();
  await dPage.goto(siteUrl, { waitUntil: 'networkidle' });
  
  // Helper to safely screenshot an element
  async function takeScreenshot(page, locatorOrSelector, filename) {
    try {
      const locator = typeof locatorOrSelector === 'string' ? page.locator(locatorOrSelector).first() : locatorOrSelector.first();
      await locator.waitFor({ state: 'visible', timeout: 5000 });
      await locator.scrollIntoViewIfNeeded();
      // wait a bit for animations/images
      await page.waitForTimeout(1000);
      await locator.screenshot({ path: filename });
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Failed to capture ${filename}: ${e.message}`);
    }
  }

  await takeScreenshot(dPage, '#hero', 'desktop-1-hero.jpg');
  await takeScreenshot(dPage, '#services', 'desktop-2-services.jpg');
  
  // Click first "Подробнее" button inside #services
  console.log('Opening modal...');
  const btn = dPage.locator('#services button:has-text("Подробнее")').first();
  await btn.scrollIntoViewIfNeeded();
  await btn.click();
  await dPage.waitForTimeout(1000); // Wait for modal animation
  await takeScreenshot(dPage, 'div[role="dialog"]', 'desktop-3-modal.jpg');
  
  // Close modal (assuming Esc works or clicking close button)
  await dPage.keyboard.press('Escape');
  await dPage.waitForTimeout(1000);

  // Remaining sections
  await takeScreenshot(dPage, 'section:has-text("Ваш груз не станет")', 'desktop-4-pain.jpg');
  await takeScreenshot(dPage, 'section:has-text("Всегда в движении: 12 часов")', 'desktop-5-movement.jpg');
  await takeScreenshot(dPage, 'section:has-text("Вы платите за перевозку")', 'desktop-6-economy.jpg');
  await takeScreenshot(dPage, 'section:has-text("Цифровая прозрачность")', 'desktop-7-transparency.jpg');
  await takeScreenshot(dPage, 'section:has-text("Аудит налоговой")', 'desktop-8-legal.jpg');
  await takeScreenshot(dPage, '#process', 'desktop-9-process.jpg');
  await takeScreenshot(dPage, '#why-us', 'desktop-10-whyus.jpg');
  await takeScreenshot(dPage, '#contact', 'desktop-11-cta.jpg');
  await takeScreenshot(dPage, 'footer', 'desktop-12-footer.jpg');
  
  await desktopContext.close();
  
  // MOBILE
  console.log('Starting Mobile capture...');
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const mPage = await mobileContext.newPage();
  await mPage.goto(siteUrl, { waitUntil: 'networkidle' });
  
  await takeScreenshot(mPage, '#hero', 'mobile-1-hero.jpg');
  await takeScreenshot(mPage, '#services', 'mobile-2-services.jpg');
  
  const mBtn = mPage.locator('#services button:has-text("Подробнее")').first();
  await mBtn.scrollIntoViewIfNeeded();
  await mBtn.click();
  await mPage.waitForTimeout(1000);
  await takeScreenshot(mPage, 'div[role="dialog"]', 'mobile-3-modal.jpg');
  await mPage.keyboard.press('Escape');
  await mPage.waitForTimeout(1000);
  
  await takeScreenshot(mPage, '#process', 'mobile-4-process.jpg');
  await takeScreenshot(mPage, '#contact', 'mobile-5-cta.jpg');
  await takeScreenshot(mPage, 'footer', 'mobile-6-footer.jpg');
  
  await mobileContext.close();
  await browser.close();
  console.log('Done!');
})();
