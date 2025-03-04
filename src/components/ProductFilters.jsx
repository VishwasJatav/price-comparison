import React, { useState } from 'react';
import { FaFilter, FaSort } from 'react-icons/fa';

const ProductFilters = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState('');
  const [brand, setBrand] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleFilterChange = (type, value) => {
    switch(type) {
      case 'price':
        setPriceRange(value);
        break;
      case 'brand':
        setBrand(value);
        break;
      case 'sort':
        setSortBy(value);
        break;
      default:
        break;
    }
    onFilterChange({ priceRange, brand, sortBy });
  };

  return (
    <div className="filter-section">
      <div className="d-flex align-items-center mb-4">
        <FaFilter className="text-white me-2" />
        <h3 className="text-white mb-0">Filters</h3>
      </div>

      <div className="filter-group">
        <label className="filter-label">Price Range</label>
        <select 
          className="filter-select form-select"
          value={priceRange}
          onChange={(e) => handleFilterChange('price', e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="0-20000">Under ₹20,000</option>
          <option value="20000-40000">₹20,000 - ₹40,000</option>
          <option value="40000-60000">₹40,000 - ₹60,000</option>
          <option value="60000+">Above ₹60,000</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Brand</label>
        <select 
          className="filter-select form-select"
          value={brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="oneplus">OnePlus</option>
          <option value="xiaomi">Xiaomi</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label d-flex align-items-center">
          <FaSort className="me-2" />
          Sort By
        </label>
        <select 
          className="filter-select form-select"
          value={sortBy}
          onChange={(e) => handleFilterChange('sort', e.target.value)}
        >
          <option value="">Featured</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
          <option value="discount">Discount</option>
        </select>
      </div>

      <button 
        className="btn btn-outline-light w-100 mt-3"
        onClick={() => {
          setPriceRange('');
          setBrand('');
          setSortBy('');
          onFilterChange({});
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFilters;