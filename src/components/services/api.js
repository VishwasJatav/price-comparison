import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// Get token from localStorage
const getAuthToken = () => localStorage.getItem('token');

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 15000
});

// Add request interceptor for authentication
api.interceptors.request.use(
  config => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Enhanced response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const { status, data } = error.response;
      
      // Handle authentication errors
      if (status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
      
      // Handle rate limiting
      if (status === 429) {
        console.error('Rate limit exceeded. Please try again later.');
      }

      console.error('API Error:', data);
    } else if (error.request) {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Enhanced search endpoints with error handling and retries
export const searchProducts = async (query, retries = 2) => {
  try {
    const response = await api.get(`/products/search?query=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    if (retries > 0 && !error.response) {
      return searchProducts(query, retries - 1);
    }
    throw error;
  }
};

export const getAmazonProducts = async (query) => {
  const response = await api.get(`/products/amazon/search?query=${encodeURIComponent(query)}`);
  return response.data;
};

export const getFlipkartProducts = async (query) => {
  const response = await api.get(`/products/flipkart/search?query=${encodeURIComponent(query)}`);
  return response.data;
};

// Enhanced product management endpoints with validation
export const saveProduct = async (productData) => {
  if (!productData.title || !productData.price) {
    throw new Error('Invalid product data');
  }
  const response = await api.post('/products/save', productData);
  return response.data;
};

export const getSavedProducts = async (page = 1, limit = 10) => {
  const response = await api.get(`/products/saved/list?page=${page}&limit=${limit}`);
  return response.data;
};

export const removeSavedProduct = async (productId) => {
  const response = await api.delete(`/products/saved/${productId}`);
  return response.data;
};

// Enhanced price alert endpoints with validation
export const setPriceAlert = async (productId, targetPrice) => {
  if (targetPrice <= 0) {
    throw new Error('Target price must be greater than 0');
  }
  const response = await api.post('/products/alert', { productId, targetPrice });
  return response.data;
};

export const getPriceAlerts = async (status = 'active') => {
  const response = await api.get(`/products/alerts?status=${status}`);
  return response.data;
};

export const deletePriceAlert = async (alertId) => {
  const response = await api.delete(`/products/alert/${alertId}`);
  return response.data;
};

// Enhanced category endpoints with caching
let categoriesCache = null;
let categoriesCacheTime = null;

export const getCategories = async () => {
  // Return cached categories if less than 5 minutes old
  if (categoriesCache && categoriesCacheTime && Date.now() - categoriesCacheTime < 300000) {
    return categoriesCache;
  }

  const response = await api.get('/products/categories');
  categoriesCache = response.data;
  categoriesCacheTime = Date.now();
  return response.data;
};

export const getProductsByCategory = async (category, page = 1, limit = 20) => {
  const response = await api.get(
    `/products/category/${encodeURIComponent(category)}?page=${page}&limit=${limit}`
  );
  return response.data;
};

// Enhanced deals endpoints with filtering
export const getTodaysDeals = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  const response = await api.get(`/products/deals?${params}`);
  return response.data;
};

export const getDealsbyCategory = async (category, filters = {}) => {
  const params = new URLSearchParams(filters);
  const response = await api.get(`/products/deals/${encodeURIComponent(category)}?${params}`);
  return response.data;
};

// New comparison endpoints
export const compareProducts = async (productIds) => {
  const response = await api.post('/products/compare', { productIds });
  return response.data;
};

// New price history endpoint
export const getPriceHistory = async (productId, duration = '30d') => {
  const response = await api.get(`/products/${productId}/price-history?duration=${duration}`);
  return response.data;
};