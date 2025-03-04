import React from 'react';
import { FaTrash, FaStar, FaTag } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { FaAmazon } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './SavedItems.css';
import { useSavedItems } from '../../hooks/useSavedItems';

const SavedItems = () => {
  const { savedItems, removeFromSavedItems } = useSavedItems();

  return (
    <div className="saved-items-page min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container">
          <h2 className="text-white mb-4">Saved Items ({savedItems.length})</h2>
          {savedItems.length === 0 ? (
            <div className="text-center text-white mt-5">
              <h3>No saved items yet</h3>
              <p>Items you save will appear here</p>
            </div>
          ) : (
            <div className="row">
              {savedItems.map(item => (
                <div key={item.id} className="col-md-6 mb-4">
                  <div className="saved-item-card">
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromSavedItems(item.id)}
                      title="Remove from saved items"
                    >
                      <FaTrash />
                    </button>
                    <div className="row g-0">
                      <div className="col-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h5 className="card-title text-truncate">{item.title}</h5>
                          <div className="rating mb-2">
                            <FaStar className="text-warning" />
                            <span className="ms-1">{item.rating}</span>
                            <span className="text-muted ms-2">({item.reviews} reviews)</span>
                          </div>
                          <div className="prices mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="platform">
                                <FaAmazon className="me-2" />Amazon:
                              </span>
                              <span className="price">{item.amazonPrice}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="platform">
                                <SiFlipkart className="me-2" />Flipkart:
                              </span>
                              <span className="price">{item.flipkartPrice}</span>
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                            <a href={item.amazonUrl} className="btn btn-amazon flex-grow-1" target="_blank" rel="noopener noreferrer">
                              <FaAmazon className="me-2" />Visit
                            </a>
                            <a href={item.flipkartUrl} className="btn btn-flipkart flex-grow-1" target="_blank" rel="noopener noreferrer">
                              <SiFlipkart className="me-2" />Visit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavedItems;