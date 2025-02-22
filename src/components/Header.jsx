import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{
      backgroundColor: "transparent",
      backdropFilter: "blur(10px)",
    }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <FaShoppingCart className="me-2" />
          Price Comparison
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white text-decoration-none fw-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-decoration-none fw-bold" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-decoration-none fw-bold" to="/TodaysDeals">
                Today's Deals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;