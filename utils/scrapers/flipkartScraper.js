const puppeteer = require('puppeteer');

async function scrapeFlipkart(query) {
  let browser;
  let page;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      defaultViewport: { width: 1920, height: 1080 },
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--window-size=1920,1080',
        '--disable-features=site-isolation-trials'
      ],
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    });

    page = await browser.newPage();
    
    // Block unnecessary resources
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (['image', 'stylesheet', 'font'].includes(request.resourceType())) {
        request.abort();
      } else {
        request.continue();
      }
    });

    // Set headers
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });

    // Navigate to Flipkart search
    const searchUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`;
    await page.goto(searchUrl, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Wait for page load
    await page.waitForTimeout(2000);

    // Take screenshot for debugging
    await page.screenshot({ path: 'flipkart-debug.png' });

    // Check if page loaded correctly
    const content = await page.content();
    if (content.includes('Access Denied') || content.includes('CAPTCHA')) {
      throw new Error('Access blocked by Flipkart');
    }

    // Try multiple selectors with longer timeout
    const possibleSelectors = [
      'div._1YokD2._3Mn1Gg',
      'div._1AtVbE',
      'div._4ddWXP',
      'div._2kHMtA',
      'div[data-id]',
      'a._1fQZEK'
    ];

    let foundSelector = null;
    for (const selector of possibleSelectors) {
      try {
        const element = await page.$(selector);
        if (element) {
          foundSelector = selector;
          break;
        }
      } catch (e) {
        continue;
      }
    }

    if (!foundSelector) {
      console.log('Debug: Page content -', await page.content());
      throw new Error('No product selectors found');
    }

    // Rest of the code remains the same...
    const products = await page.evaluate(() => {
      const items = [];
      const productCards = document.querySelectorAll('div._1AtVbE, div._4ddWXP, div._2kHMtA, div[data-id]');

      productCards.forEach(card => {
        try {
          const titleEl = 
            card.querySelector('div._4rR01T') || 
            card.querySelector('a.s1Q9rs') ||
            card.querySelector('div._2WkVRV');

          const priceEl = 
            card.querySelector('div._30jeq3._1_WHN1') ||
            card.querySelector('div._30jeq3');

          const linkEl = 
            card.querySelector('a._1fQZEK') ||
            card.querySelector('a.s1Q9rs') ||
            card.querySelector('a[href*="/p/"]');

          if (titleEl && priceEl && linkEl) {
            const price = priceEl.innerText.replace(/[₹,]/g, '').trim();
            
            items.push({
              title: titleEl.innerText.trim(),
              price: {
                current: parseFloat(price),
                original: null,
                discount: null
              },
              platform: 'flipkart',
              productUrl: 'https://www.flipkart.com' + linkEl.getAttribute('href'),
              imageUrl: null,
              rating: null
            });
          }
        } catch (err) {
          // Skip invalid products
        }
      });

      return items;
    });

    console.log('Raw products found:', products.length);
    
    const validProducts = products.filter(item => 
      item.title && 
      item.price.current > 0 && 
      item.productUrl.includes('/p/')
    );

    await browser.close();
    console.log(`Successfully scraped ${validProducts.length} valid products from Flipkart`);
    return validProducts;

  } catch (error) {
    console.error('Flipkart scraping error:', error);
    if (page) {
      const html = await page.content();
      require('fs').writeFileSync('flipkart-debug.html', html);
    }
    if (browser) await browser.close();
    return [];
  }
}

module.exports = scrapeFlipkart;