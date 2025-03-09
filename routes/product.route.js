const express = require('express');
const router = express.Router();
const { 
  searchProducts,
  getCategories,
  getProduct,
  saveProduct,
  getSavedProducts,
  removeSavedProduct,
  setPriceAlert,
  getPriceAlerts,
  searchAmazon,
  searchFlipkart
} = require('../controllers/product.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

// Public routes
router.get('/search', searchProducts);
router.get('/categories', getCategories);
router.get('/amazon/search', searchAmazon);
router.get('/flipkart/search', searchFlipkart);
router.get('/:id', getProduct);

// Protected routes
router.post('/save', authMiddleware, saveProduct);
router.get('/saved/list', authMiddleware, getSavedProducts);
router.delete('/saved/:id', authMiddleware, removeSavedProduct);
router.post('/alert', authMiddleware, setPriceAlert);
router.get('/alerts', authMiddleware, getPriceAlerts);

module.exports = router;