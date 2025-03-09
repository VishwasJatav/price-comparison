require('dotenv').config();
const connectDB = require('../config/db');
const scrapeAmazon = require('../utils/scrapers/amazonScraper');
const scrapeFlipkart = require('../utils/scrapers/flipkartScraper');
const Product = require('../models/Product');

async function testScrapers() {
  try {
    // 🛠 Connect to MongoDB
    console.log('\n🔹 Connecting to MongoDB...');
    await connectDB();
    console.log('✅ Successfully connected to MongoDB.');

    // 🔍 Set test search query
    const testQuery = 'iphone 14';
    console.log(`\n🔍 Testing scrapers with query: "${testQuery}"`);

    let amazonProducts = [];
    let flipkartProducts = [];

    // 🚀 **Test Amazon Scraper** with retry logic
    console.log('\n🚀 Testing Amazon scraper...');
    for (let i = 0; i < 3; i++) {
      try {
        amazonProducts = await scrapeAmazon(testQuery);
        console.log(`✅ Found ${amazonProducts.length} products on Amazon.`);
        if (amazonProducts.length > 0) {
          console.log('📌 Sample Amazon Product:', JSON.stringify(amazonProducts[0], null, 2));
        }
        break; // Exit loop if successful
      } catch (error) {
        console.error(`❌ Amazon scraper attempt ${i + 1} failed:`, error.message);
        if (i === 2) console.error('❌ Amazon scraping failed after 3 attempts.');
      }
    }

    // 🚀 **Test Flipkart Scraper** with retry logic
    console.log('\n🚀 Testing Flipkart scraper...');
    for (let i = 0; i < 3; i++) {
      try {
        flipkartProducts = await scrapeFlipkart(testQuery);
        console.log(`✅ Found ${flipkartProducts.length} products on Flipkart.`);
        if (flipkartProducts.length > 0) {
          console.log('📌 Sample Flipkart Product:', JSON.stringify(flipkartProducts[0], null, 2));
        }
        break;
      } catch (error) {
        console.error(`❌ Flipkart scraper attempt ${i + 1} failed:`, error.message);
        if (i === 2) console.error('❌ Flipkart scraping failed after 3 attempts.');
      }
    }

    // 🔄 **Combine and Validate Products**
    const allProducts = [...amazonProducts, ...flipkartProducts];
    if (allProducts.length === 0) {
      console.warn('\n⚠️ No products found. Exiting process.');
      process.exit(0);
    }

    // 💾 **Save Products to MongoDB (Upsert)**
    console.log('\n💾 Saving products to the database...');
    try {
      const bulkOps = allProducts.map(product => ({
        updateOne: {
          filter: { productUrl: product.productUrl }, // Ensuring unique product URLs
          update: { $set: product },
          upsert: true
        }
      }));

      const result = await Product.bulkWrite(bulkOps, { ordered: false });
      console.log(`✅ Successfully saved/updated ${result.upsertedCount} new products.`);
    } catch (dbError) {
      console.error('❌ Database save error:', dbError);
    }

    // 📊 **Verify Saved Products**
    const savedCount = await Product.countDocuments({ platform: { $in: ['amazon', 'flipkart'] } });
    console.log(`\n📊 Total products in database: ${savedCount}`);

    // 📝 **Display Recently Saved Products**
    console.log('\n📝 Recently Saved Products:');
    const savedProducts = await Product.find().sort({ createdAt: -1 }).limit(3);
    savedProducts.forEach((product, index) => {
      console.log(`\n#${index + 1}`);
      console.log(`🛒 Title: ${product.title}`);
      console.log(`💰 Price: ${product.price?.current ? `₹${product.price.current}` : 'N/A'}`);
      console.log(`📦 Platform: ${product.platform}`);
      console.log(`🔗 URL: ${product.productUrl}`);
      console.log('--------------------------');
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

// **Run the Test**
console.log('🚀 Starting scraper test...');
testScrapers();
