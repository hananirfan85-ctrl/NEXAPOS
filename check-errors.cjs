const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log('BROWSER CONSOLE:', msg.text());
  });

  page.on('pageerror', exception => {
    console.log('UNCAUGHT EXCEPTION:', exception.message);
  });

  try {
    console.log('Loading /login...');
    await page.goto('http://127.0.0.1:3000/login', { waitUntil: 'networkidle', timeout: 8000 });
    
    // Fill in email
    await page.fill('input[type="email"]', 'debug@nexapos.com');
    // Fill in password
    await page.fill('input[type="password"]', 'password123');
    
    // Fill in captcha
    // Find the label "Solve this: X + Y = ?"
    const text = await page.innerText('label:has-text("Solve this:")');
    console.log('Captcha label:', text);
    const match = text.match(/Solve this: (\d+) \+ (\d+) = \?/);
    if (match) {
      const ans = parseInt(match[1]) + parseInt(match[2]);
      await page.fill('input[type="number"]', ans.toString());
    }
    
    // Check Terms
    await page.check('input[type="checkbox"]');
    
    // Click login
    console.log('Clicking login...');
    await page.click('button[type="submit"]');
    
    await page.waitForTimeout(3000);
    console.log('Done waiting.');
  } catch(e) {
    console.log('Login failed script:', e.message);
  }
  
  await browser.close();
})();
