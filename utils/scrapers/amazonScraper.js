const puppeteer = require('puppeteer');

const scrapeAmazon = async (searchQuery) => {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: null
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
    
    const url = `https://www.amazon.in/s?k=${encodeURIComponent(searchQuery)}`;
    await page.goto(url, { waitUntil: 'networkidle2' });

    const products = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.s-result-item[data-component-type="s-search-result"]'));
      
      return items.map(item => {
        const title = item.querySelector('h2 span')?.textContent.trim();
        const priceElement = item.querySelector('.a-price-whole');
        const price = priceElement ? parseFloat(priceElement.textContent.replace(/[,.]/g, '')) : null;
        const originalPriceElement = item.querySelector('.a-text-price .a-offscreen');
        const originalPrice = originalPriceElement ? 
          parseFloat(originalPriceElement.textContent.replace(/[₹,.]/g, '')) : price;
        
        const ratingElement = item.querySelector('.a-icon-star-small .a-icon-alt');
        const rating = ratingElement ? 
          parseFloat(ratingElement.textContent.split(' ')[0]) : null;
        
        const reviewsElement = item.querySelector('span[aria-label*="reviews"]');
        const reviews = reviewsElement ? 
          parseInt(reviewsElement.textContent.replace(/[(),]/g, '')) : 0;
        
        const imageUrl = item.querySelector('.s-image')?.src;
        const productUrl = item.querySelector('a.a-link-normal')?.href;

        return {
          title,
          price,
          originalPrice,
          discount: originalPrice > price ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0,
          rating,
          reviews,
          imageUrl,
          productUrl,
          platform: 'amazon'
        };
      }).filter(product => product.title && product.price);
    });

    return products;
  } catch (error) {
    console.error('Amazon scraping error:', error);
    throw error;
  } finally {
    await browser.close();
  }
};

module.exports = scrapeAmazon;