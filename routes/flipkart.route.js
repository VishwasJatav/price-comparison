const express = require('express');
const router = express.Router();
const { searchFlipkart } = require('../controllers/product.controller');

router.get('/search', searchFlipkart);
router.get('/deals', async (req, res) => {
  try {
    const deals = await getFlipkartDeals();
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Flipkart deals' });
  }
});

module.exports = router;