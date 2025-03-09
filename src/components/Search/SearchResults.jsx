import React from 'react';
import { useSearch } from '../../context/SearchContext';
import { useLocation } from 'react-router-dom';
import ProductCard from '../Product/ProductCard';
import './SearchResults.css';

const SearchResults = () => {
  const { searchResults, loading, error } = useSearch();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  if (loading) {
    return (
      <div className="search-results-loading">
        <div className="loader"></div>
        <p>Searching across platforms...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="search-results-error">
        <p>{error}</p>
      </div>
    );
  }

  const { amazon, flipkart } = searchResults;

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      
      <div className="platform-results">
        <div className="amazon-results">
          <h3>Amazon Results</h3>
          <div className="products-grid">
            {amazon.map((product) => (
              <ProductCard key={product._id} product={product} platform="amazon" />
            ))}
          </div>
        </div>

        <div className="flipkart-results">
          <h3>Flipkart Results</h3>
          <div className="products-grid">
            {flipkart.map((product) => (
              <ProductCard key={product._id} product={product} platform="flipkart" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;