const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Store files
  page.on('response', async (response) => {
    const url = response.url();
    if (url.match(/\.(css|js|png|jpg|jpeg|svg|webp|woff|woff2)$/)) {
      try {
        const buffer = await response.body();
        const fileName = url.split('/').pop().split('?')[0];
        fs.writeFileSync(fileName, buffer);
      } catch (e) {}
    }
  });

  await page.goto('https://www.akshayiscoding.me/', {
    waitUntil: 'networkidle'
  });

  // Save full rendered HTML
  const html = await page.content();
  fs.writeFileSync('index.html', html);

  await page.waitForTimeout(5000);
  await browser.close();
})();
