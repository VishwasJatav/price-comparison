import { createContext, useState, useContext } from 'react';
import { searchProducts, getAmazonProducts, getFlipkartProducts } from '../components/services/api';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState({ amazon: [], flipkart: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError(null);
      
      const [amazonData, flipkartData] = await Promise.all([
        getAmazonProducts(query),
        getFlipkartProducts(query)
      ]);

      setSearchResults({
        amazon: amazonData,
        flipkart: flipkartData
      });
    } catch (err) {
      setError('Failed to fetch search results');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    searchResults,
    loading,
    error,
    handleSearch
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export default SearchContext;