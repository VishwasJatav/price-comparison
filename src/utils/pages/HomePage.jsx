import { useState } from 'react';
import { FaSearch, FaAmazon, FaStar, FaTag } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { mockProducts } from '../../utils/mockData.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="price-comparison-app min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-4">
        {/* Search Bar */}
        <div className="container mb-4">
          <div className="row justify-content-center">
            <div className="col-md-6 mb-3">
              <div className="input-group search-bar">
                <span className="input-group-text bg-white border-end-0">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Comparison */}
        <div className="container">
          <div className="row">
            {/* Amazon Column */}
            <div className="col-md-6 mb-4">
              <div className="platform-column p-3 rounded">
                <h2 className="text-white mb-4">
                  <FaAmazon className="me-2 amazon-logo" /> Amazon
                </h2>
                {mockProducts.amazon.map(product => (
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
                          <h5 className="card-title text-truncate">{product.title}</h5>
                          <div className="d-flex align-items-center mb-2">
                            <FaStar className="text-warning" />
                            <span className="ms-1">4.5</span>
                            <span className="text-muted ms-2">(2.5k reviews)</span>
                          </div>
                          <div className={`price-badge ${product.price <= mockProducts.flipkart.find(p => p.id === product.id).price
                            ? 'better-price'
                            : 'higher-price'
                            }`}>
                            <FaTag className="me-1" />
                            {product.price}
                          </div>
                          <a
                            href={product.url}
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
                {mockProducts.flipkart.map(product => (
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
                          <h5 className="card-title text-truncate">{product.title}</h5>
                          <div className="d-flex align-items-center mb-2">
                            <FaStar className="text-warning" />
                            <span className="ms-1">4.3</span>
                            <span className="text-muted ms-2">(2.1k reviews)</span>
                          </div>
                          <div className={`price-badge ${product.price <= mockProducts.amazon.find(p => p.id === product.id).price
                            ? 'better-price'
                            : 'higher-price'
                            }`}>
                            <FaTag className="me-1" />
                            {product.price}
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
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;