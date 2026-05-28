const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });

  page.on('pageerror', exception => {
    console.log('UNCAUGHT EXCEPTION:', exception.message);
  });

  try {
    await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle', timeout: 8000 });
    console.log('Page loaded. Checking for errors...');
  } catch(e) {
    console.log('Navigation failed:', e.message);
  }
  
  await browser.close();
})();
