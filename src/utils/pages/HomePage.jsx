import { useState } from 'react';
import { FaAmazon, FaStar, FaTag, FaHeart } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { mockProducts } from '../../utils/mockData.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TrendingProducts from '../../components/TrendingProducts';
import ProductFilters from '../../components/ProductFilters';
import PriceAlert from '../../components/PriceAlert';
import { useSavedItems } from '../../hooks/useSavedItems';

const HomePage = () => {
  const { addToSavedItems, removeFromSavedItems, isItemSaved } = useSavedItems();
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const formatPrice = (price) => {
    if (!price) return "N/A";
    const numericPrice = price.toString().replace(/[^0-9.]/g, '');
    return parseFloat(numericPrice) || 0;
  };

  const handleFilterChange = (filters) => {
    let amazonFiltered = mockProducts.amazon;
    let flipkartFiltered = mockProducts.flipkart;

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      amazonFiltered = amazonFiltered.filter(product => {
        const price = formatPrice(product.price);
        return price >= min && price <= max;
      });
      flipkartFiltered = flipkartFiltered.filter(product => {
        const price = formatPrice(product.price);
        return price >= min && price <= max;
      });
    }

    if (filters.rating) {
      amazonFiltered = amazonFiltered.filter(product =>
        parseFloat(product.rating || 0) >= filters.rating
      );
      flipkartFiltered = flipkartFiltered.filter(product =>
        parseFloat(product.rating || 0) >= filters.rating
      );
    }

    if (filters.category && filters.category !== 'all') {
      amazonFiltered = amazonFiltered.filter(product =>
        product.category === filters.category
      );
      flipkartFiltered = flipkartFiltered.filter(product =>
        product.category === filters.category
      );
    }

    setFilteredProducts({ amazon: amazonFiltered, flipkart: flipkartFiltered });
  };

  const comparePrices = (product, platform) => {
    const otherPlatform = platform === 'amazon' ? 'flipkart' : 'amazon';
    const otherProduct = filteredProducts[otherPlatform].find(p => p.id === product.id);
    if (!otherProduct) return '';

    const currentPrice = formatPrice(product.price);
    const otherPrice = formatPrice(otherProduct.price);
    return currentPrice <= otherPrice ? 'better-price' : 'higher-price';
  };

  return (
    <div className="price-comparison-app min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container mb-5">
          <TrendingProducts />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <ProductFilters onFilterChange={handleFilterChange} />
            </div>

            <div className="col-md-9">
              <div className="row">
                {/* Amazon Column */}
                <div className="col-md-6 mb-4">
                  <div className="platform-column p-3 rounded">
                    <h2 className="text-white mb-4">
                      <FaAmazon className="me-2 amazon-logo" /> Amazon
                    </h2>
                    {filteredProducts.amazon.map(product => (
                      <div key={product.id} className="card product-card mb-3">
                        <div className="row g-0">
                          <div className="col-4">
                            <img
                              src={product.image}
                              className="img-fluid rounded-start product-image"
                              alt={product.title}
                            />
                          </div>
                          <div className="col-8">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-start">
                                <h5 className="card-title text-truncate">{product.title}</h5>
                                <button
                                  className={`btn btn-sm ${isItemSaved(product.id) ? 'btn-danger' : 'btn-outline-danger'}`}
                                  onClick={() => isItemSaved(product.id)
                                    ? removeFromSavedItems(product.id)
                                    : addToSavedItems(product)
                                  }
                                >
                                  <FaHeart />
                                </button>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <FaStar className="text-warning" />
                                <span className="ms-1">{product.rating || 'N/A'}</span>
                                <span className="text-muted ms-2">({product.reviews || '0'} reviews)</span>
                              </div>
                              <div className={`price-badge ${comparePrices(product, 'amazon')}`}>
                                <FaTag className="me-1" />
                                ₹{formatPrice(product.price).toLocaleString('en-IN')}
                              </div>
                              <a
                                href={product.url || product.link}
                                className="btn btn-amazon w-100 mt-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaAmazon className="me-2" /> Visit Store
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flipkart Column */}
                <div className="col-md-6 mb-4">
                  <div className="platform-column p-3 rounded">
                    <h2 className="text-white mb-4">
                      <SiFlipkart className="me-2 flipkart-logo" /> Flipkart
                    </h2>
                    {filteredProducts.flipkart.map(product => (
                      <div key={product.id} className="card product-card mb-3">
                        <div className="row g-0">
                          <div className="col-4">
                            <img
                              src={product.image}
                              className="img-fluid rounded-start product-image"
                              alt={product.title}
                            />
                          </div>
                          <div className="col-8">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-start">
                                <h5 className="card-title text-truncate">{product.title}</h5>
                                <button
                                  className={`btn btn-sm ${isItemSaved(product.id) ? 'btn-danger' : 'btn-outline-danger'}`}
                                  onClick={() => isItemSaved(product.id)
                                    ? removeFromSavedItems(product.id)
                                    : addToSavedItems(product)
                                  }
                                >
                                  <FaHeart />
                                </button>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <FaStar className="text-warning" />
                                <span className="ms-1">{product.rating || 'N/A'}</span>
                                <span className="text-muted ms-2">({product.reviews || '0'} reviews)</span>
                              </div>
                              <div className={`price-badge ${comparePrices(product, 'flipkart')}`}>
                                <FaTag className="me-1" />
                                ₹{formatPrice(product.price).toLocaleString('en-IN')}
                              </div>
                              <a
                                href={product.url}
                                className="btn btn-flipkart w-100 mt-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <SiFlipkart className="me-2" /> Visit Store
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
      <PriceAlert />
    </div>
  );
};

export default HomePage;