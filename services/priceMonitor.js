const PriceAlert = require('../models/PriceAlert');
const PriceHistory = require('../models/PriceHistory');
const Product = require('../models/Product');
const scrapeAmazon = require('../utils/scrapers/amazonScraper');
const scrapeFlipkart = require('../utils/scrapers/flipkartScraper');

const checkPriceAlerts = async () => {
  try {
    const activeAlerts = await PriceAlert.find({ isActive: true })
      .populate('product')
      .populate('user');

    for (const alert of activeAlerts) {
      const { product, targetPrice, user } = alert;
      
      // Check current prices from both platforms
      const [amazonPrice, flipkartPrice] = await Promise.all([
        scrapeAmazon(product.title).then(results => results[0]?.price),
        scrapeFlipkart(product.title).then(results => results[0]?.price)
      ]);

      const currentPrice = Math.min(
        amazonPrice || Infinity,
        flipkartPrice || Infinity
      );

      if (currentPrice <= targetPrice && !alert.notificationSent) {
        // Send notification to user (implement your notification logic here)
        console.log(`Price alert triggered for user ${user.email}`);
        
        alert.notificationSent = true;
        await alert.save();

        // Save price history
        await new PriceHistory({
          product: product._id,
          price: currentPrice,
          platform: amazonPrice < flipkartPrice ? 'amazon' : 'flipkart'
        }).save();
      }

      alert.lastChecked = new Date();
      await alert.save();
    }
  } catch (error) {
    console.error('Price monitoring error:', error);
  }
};

// Run price checks every hour
setInterval(checkPriceAlerts, 3600000);

module.exports = { checkPriceAlerts };