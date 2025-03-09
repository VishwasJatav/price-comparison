const Product = require('../models/Product');

async function saveProductsToDatabase(products) {
  try {
    if (!Array.isArray(products) || products.length === 0) {
      console.log("❌ No products to save.");
      return;
    }

    for (const product of products) {
      await Product.findOneAndUpdate(
        { productUrl: product.productUrl }, // Find by product URL
        {
          $set: {
            title: product.title,
            description: product.description || "",
            platform: product.platform,
            imageUrl: product.imageUrl,
            price: {
              current: product.price.current,
              original: product.price.original || product.price.current,
              discount: product.price.discount || 0
            },
            rating: product.rating || null,
            reviews: {
              count: product.reviews.count || 0,
              url: product.reviews.url || ""
            },
            category: product.category || "Unknown",
            availability: product.availability || "unknown",
            lastUpdated: new Date()
          },
          $push: {
            priceHistory: { price: product.price.current, date: new Date() }
          }
        },
        { upsert: true, new: true }
      );
    }

    console.log(`✅ Saved/Updated ${products.length} products in MongoDB`);
  } catch (error) {
    console.error("❌ Database save error:", error.message);
  }
}

module.exports = saveProductsToDatabase;
