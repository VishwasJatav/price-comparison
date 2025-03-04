import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaAmazon, FaStar, FaTag, FaHeart } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { mockProducts } from '../../utils/mockData.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSavedItems } from '../../hooks/useSavedItems';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState({ amazon: [], flipkart: [] });
  const { addToSavedItems, removeFromSavedItems, isItemSaved } = useSavedItems();

  useEffect(() => {
    if (query) {
      const filteredAmazon = mockProducts.amazon.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      const filteredFlipkart = mockProducts.flipkart.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults({ amazon: filteredAmazon, flipkart: filteredFlipkart });
    }
  }, [query]);

  const handleSaveItem = (product, platform) => {
    const itemToSave = {
      ...product,
      platform,
      amazonPrice: platform === 'amazon' ? product.price : results.amazon.find(p => p.id === product.id).price,
      flipkartPrice: platform === 'flipkart' ? product.price : results.flipkart.find(p => p.id === product.id).price
    };

    if (isItemSaved(product.id)) {
      removeFromSavedItems(product.id);
    } else {
      addToSavedItems(itemToSave);
    }
  };

  return (
    <div className="search-results-page min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container">
          <h2 className="text-white mb-4">Search Results for "{query}"</h2>
          {results.amazon.length === 0 && results.flipkart.length === 0 ? (
            <div className="text-center text-white mt-5">
              <h3>No results found</h3>
              <p>Try searching with different keywords</p>
            </div>
          ) : (
            <div className="row">
              {/* Amazon Results */}
              <div className="col-md-6">
                <div className="platform-column p-3 rounded">
                  <h3 className="text-white mb-4">
                    <FaAmazon className="me-2 amazon-logo" /> Amazon Results
                  </h3>
                  {results.amazon.map(product => (
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
                                onClick={() => handleSaveItem(product, 'amazon')}
                              >
                                <FaHeart />
                              </button>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <FaStar className="text-warning" />
                              <span className="ms-1">{product.rating}</span>
                              <span className="text-muted ms-2">({product.reviews} reviews)</span>
                            </div>
                            <div className="price-badge">
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

              {/* Flipkart Results */}
              <div className="col-md-6">
                <div className="platform-column p-3 rounded">
                  <h3 className="text-white mb-4">
                    <SiFlipkart className="me-2 flipkart-logo" /> Flipkart Results
                  </h3>
                  {results.flipkart.map(product => (
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
                          // In the Flipkart Column section, update the card-body div:
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start">
                              <h5 className="card-title text-truncate">{product.title}</h5>
                              <button 
                                className={`btn btn-sm ${isItemSaved(product.id) ? 'btn-danger' : 'btn-outline-danger'}`}
                                onClick={() => handleSaveItem(product, 'flipkart')}
                              >
                                <FaHeart />
                              </button>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <FaStar className="text-warning" />
                              <span className="ms-1">{product.rating || '4.5'}</span>
                              <span className="text-muted ms-2">({product.reviews || '1k'} reviews)</span>
                            </div>
                            <div className="price-badge">
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;