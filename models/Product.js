const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  platform: {
    type: String,
    enum: ['amazon', 'flipkart'],
    required: true
  },
  productUrl: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    current: {
      type: Number,
      required: true
    },
    original: Number,
    discount: Number
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  reviews: {
    count: Number,
    url: String
  },
  category: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    enum: ['in_stock', 'out_of_stock', 'unknown'],
    default: 'unknown'
  },
  priceHistory: [{
    price: Number,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for better search performance
productSchema.index({ title: 'text', description: 'text' });

// Method to update price and maintain price history
productSchema.methods.updatePrice = function(newPrice) {
  if (this.price.current !== newPrice) {
    this.priceHistory.push({
      price: this.price.current,
      date: this.lastUpdated
    });
    this.price.current = newPrice;
    this.lastUpdated = new Date();
  }
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;