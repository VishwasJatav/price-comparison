import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaAmazon, FaStar, FaShoppingCart, FaCheck, FaTruck, FaSearch, FaArrowLeft, FaHeart } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { mockProducts } from '../../utils/mockData.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isWishlist, setIsWishlist] = useState(false);
  const [loading, setLoading] = useState(true);

  const amazonProduct = mockProducts.amazon.find(p => p.id === id);
  const flipkartProduct = mockProducts.flipkart.find(p => p.id === id);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="price-comparison-app min-vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!amazonProduct || !flipkartProduct) {
    return (
      <div className="price-comparison-app min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-white text-center">
          <h2>Product Not Found</h2>
          <button 
            className="btn btn-outline-light mt-3"
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const bestPrice = Math.min(amazonProduct.price, flipkartProduct.price);
  const priceDifference = Math.abs(amazonProduct.price - flipkartProduct.price);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
    // Add wishlist functionality here
  };

  return (
    <div className="price-comparison-app min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Search and Navigation */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-4">
                <button 
                  onClick={() => navigate(-1)} 
                  className="btn btn-link text-white me-3"
                  aria-label="Go back"
                >
                  <FaArrowLeft className="fs-4" />
                </button>
                <form onSubmit={handleSearch} className="search-bar-wrapper w-100">
                  <div className="input-group search-bar">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search for other products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Search products"
                    />
                    <button 
                      className="btn btn-search" 
                      type="submit"
                      aria-label="Search"
                    >
                      <FaSearch className="text-white-50" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Product Image Section */}
            <div className="col-lg-4 mb-4">
              <div className="platform-column p-4 position-relative">
                <button
                  className={`btn btn-wishlist position-absolute top-0 end-0 m-3 ${isWishlist ? 'active' : ''}`}
                  onClick={toggleWishlist}
                  aria-label={isWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <FaHeart className={isWishlist ? 'text-danger' : 'text-white-50'} />
                </button>
                <img
                  src={amazonProduct.image}
                  alt={amazonProduct.title}
                  className="img-fluid rounded product-detail-image"
                />
              </div>
            </div>

            {/* Product Info Section */}
            <div className="col-lg-8">
              <div className="platform-column p-4">
                <h1 className="text-white mb-4">{amazonProduct.title}</h1>
                
                {/* Savings Alert */}
                {priceDifference > 0 && (
                  <div className="alert alert-success mb-4">
                    <strong>Save ₹{priceDifference}</strong> by choosing the better price!
                  </div>
                )}
                
                {/* Key Features */}
                <div className="mb-4">
                  <h3 className="text-white-50 mb-3">Key Features</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-unstyled text-white-50">
                        <li className="mb-2">
                          <FaCheck className="text-success me-2" />
                          6.1-inch Super Retina XDR display
                        </li>
                        <li className="mb-2">
                          <FaCheck className="text-success me-2" />
                          5G Capable
                        </li>
                        <li className="mb-2">
                          <FaCheck className="text-success me-2" />
                          A15 Bionic chip
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled text-white-50">
                        <li className="mb-2">
                          <FaCheck className="text-success me-2" />
                          Dual-camera system
                        </li>
                        <li className="mb-2">
                          <FaCheck className="text-success me-2" />
                          Face ID
                        </li>
                        <li className="mb-2">
                          <FaCheck className="text-success me-2" />
                          Up to 19 hours video playback
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Price Comparison */}
                <div className="row g-4">
                  {/* Amazon Card */}
                  <div className="col-md-6">
                    <div className="product-card h-100">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <FaAmazon className="text-warning fs-2 me-2" />
                          <h3 className="mb-0">Amazon</h3>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="rating-box">
                            <FaStar className="text-warning me-1" />
                            <span>4.5</span>
                            <span className="text-muted ms-1">(2.5k reviews)</span>
                          </div>
                        </div>
                        <div className={`price-badge mb-3 ${amazonProduct.price === bestPrice ? 'better-price' : 'higher-price'}`}>
                          ₹{amazonProduct.price}
                          {amazonProduct.price === bestPrice && (
                            <span className="ms-2 badge bg-success">Best Price</span>
                          )}
                        </div>
                        <div className="text-success mb-3">
                          <FaTruck className="me-2" />
                          Free Delivery
                        </div>
                        <a
                          href={amazonProduct.url}
                          className="btn btn-amazon w-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaShoppingCart className="me-2" />
                          Buy on Amazon
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Flipkart Card */}
                  <div className="col-md-6">
                    <div className="product-card h-100">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <SiFlipkart className="text-primary fs-2 me-2" />
                          <h3 className="mb-0">Flipkart</h3>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="rating-box">
                            <FaStar className="text-warning me-1" />
                            <span>4.3</span>
                            <span className="text-muted ms-1">(2.1k reviews)</span>
                          </div>
                        </div>
                        <div className={`price-badge mb-3 ${flipkartProduct.price === bestPrice ? 'better-price' : 'higher-price'}`}>
                          ₹{flipkartProduct.price}
                          {flipkartProduct.price === bestPrice && (
                            <span className="ms-2 badge bg-success">Best Price</span>
                          )}
                        </div>
                        <div className="text-success mb-3">
                          <FaTruck className="me-2" />
                          Free Delivery
                        </div>
                        <a
                          href={flipkartProduct.url}
                          className="btn btn-flipkart w-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaShoppingCart className="me-2" />
                          Buy on Flipkart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;