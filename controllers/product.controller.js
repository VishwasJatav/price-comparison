const Product = require('../models/Product');
const scrapeAmazon = require('../utils/scrapers/amazonScraper');
const scrapeFlipkart = require('../utils/scrapers/flipkartScraper');

const productController = {
  searchProducts: async (req, res) => {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
      }

      // Fetch products from both platforms
      const [amazonProducts, flipkartProducts] = await Promise.all([
        scrapeAmazon(query),
        scrapeFlipkart(query)
      ]);

      // Combine and save products
      const allProducts = [...amazonProducts, ...flipkartProducts];
      await Product.insertMany(allProducts, { ordered: false });

      res.json(allProducts);
    } catch (error) {
      console.error('Search error:', error);
      res.status(500).json({ message: 'Error searching products' });
    }
  },

  searchAmazon: async (req, res) => {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
      }

      const products = await scrapeAmazon(query);
      await Product.insertMany(products, { ordered: false });
      res.json(products);
    } catch (error) {
      console.error('Amazon search error:', error);
      res.status(500).json({ message: 'Error searching Amazon products' });
    }
  },

  searchFlipkart: async (req, res) => {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
      }

      const products = await scrapeFlipkart(query);
      await Product.insertMany(products, { ordered: false });
      res.json(products);
    } catch (error) {
      console.error('Flipkart search error:', error);
      res.status(500).json({ message: 'Error searching Flipkart products' });
    }
  },

  getCategories: async (req, res) => {
    try {
      const categories = await Product.distinct('category');
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching categories' });
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product' });
    }
  },

  saveProduct: async (req, res) => {
    try {
      const userId = req.user._id;
      const productData = req.body;

      let product = await Product.findOne({ productUrl: productData.productUrl });
      if (!product) {
        product = await Product.create(productData);
      }

      // Update user's saved products
      await User.findByIdAndUpdate(userId, {
        $addToSet: { savedProducts: product._id }
      });

      res.json({ message: 'Product saved successfully', product });
    } catch (error) {
      console.error('Save error:', error);
      res.status(500).json({ message: 'Error saving product' });
    }
  },

  getSavedProducts: async (req, res) => {
    try {
      const user = await User.findById(req.user._id).populate('savedProducts');
      res.json(user.savedProducts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching saved products' });
    }
  },

  removeSavedProduct: async (req, res) => {
    try {
      const userId = req.user._id;
      const productId = req.params.id;

      await User.findByIdAndUpdate(userId, {
        $pull: { savedProducts: productId }
      });

      res.json({ message: 'Product removed from saved items' });
    } catch (error) {
      res.status(500).json({ message: 'Error removing product' });
    }
  },

  setPriceAlert: async (req, res) => {
    try {
      const { productId, targetPrice } = req.body;
      const userId = req.user._id;

      await User.findByIdAndUpdate(userId, {
        $push: {
          priceAlerts: {
            product: productId,
            targetPrice,
            createdAt: new Date()
          }
        }
      });

      res.json({ message: 'Price alert set successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error setting price alert' });
    }
  },

  getPriceAlerts: async (req, res) => {
    try {
      const user = await User.findById(req.user._id)
        .populate('priceAlerts.product');
      res.json(user.priceAlerts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching price alerts' });
    }
  }
};

module.exports = productController;