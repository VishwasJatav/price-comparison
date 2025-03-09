const express = require('express');
const router = express.Router();
const { searchAmazon } = require('../controllers/product.controller');

router.get('/search', searchAmazon);
router.get('/deals', async (req, res) => {
  try {
    const deals = await getAmazonDeals();
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Amazon deals' });
  }
});

module.exports = router;