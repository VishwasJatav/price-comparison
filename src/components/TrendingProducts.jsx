import React from 'react';
import { FaFire, FaStar, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SamsungTV from "./assets/ProductImages/Samsung Tv.jpeg";

const TrendingProducts = () => {
  const trendingProducts = [
    {
      id: 1,
      title: "Apple iPhone 16 Pro Max",
      image: "data:image/jpeg;base64,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",
      amazonPrice: "₹1,37,900",
      flipkartPrice: "₹1,37,900",
      rating: 4.8,
      reviews: "2.5k",
      discount: "15% OFF"
    },
    {
      id: 2,
      title: "Samsung Galaxy S22 Ultra",
      image: "data:image/jpeg;base64,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BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q==",
      amazonPrice: "₹71,999",
      flipkartPrice: "₹84,500",
      rating: 4.5,
      reviews: "1.8k",
      discount: "20% OFF"
    },
    {
      id: 3,
      title: "Samsung 55-inch Crystal 4K UHD Smart TV",
      image: SamsungTV,
      rating: 4.8,
      reviews: 3421,
      amazonPrice: "₹47,999",
      flipkartPrice: "₹46,999",
      discount: "18% Off",
      platform: "amazon",
      productLink: "https://www.flipkart.com/samsung-crystal-4k-neo-series-138-cm-55-inch-ultra-hd-4k-led-smart-tizen-tv-voice-search/p/itm8d4117869e600?"
    },
  ];

  return (
    <section className="trending-section">
      <h2 className="trending-title">
        <FaFire className="text-warning" />
        Trending Products
      </h2>
      <div className="row">
        {trendingProducts.map(product => (
          <div key={product.id} className="col-md-6 col-lg-4 mb-4">
            <div className="trending-card">
              <div className="discount-badge">
                {product.discount}
              </div>
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="card-body">
                <h3 className="h5 text-white mb-3">{product.title}</h3>
                <div className="rating-box mb-3">
                  <span className="stars">
                    <FaStar className="text-warning" />
                    {product.rating}
                  </span>
                  <span className="reviews">({product.reviews} reviews)</span>
                </div>
                <div className="prices mb-3 text-white ">
                  <div className="platform-price">
                    <span className="text-amazon">Amazon:</span>
                    <span className="current-price ms-2">{product.amazonPrice}</span>
                  </div>
                  <div className="platform-price">
                    <span className="text-flipkart">Flipkart:</span>
                    <span className="current-price ms-2">{product.flipkartPrice}</span>
                  </div>
                </div>
                <div className="delivery-info mb-3">
                  <FaShoppingCart className="me-2" />
                  Free Delivery
                </div>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary w-100"
                >
                  Compare Prices
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;