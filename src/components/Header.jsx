import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaHeart, FaBell } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Set sticky state when scrolling past the top
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fs-5 navbar-dark ${isSticky ? 'sticky' : ''}`}
      style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        backdropFilter: 'blur(15px)',
        padding: '1rem 0',
        boxShadow: isSticky ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none', // Box shadow when sticky
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-brand fs-2 text-white fw-bold underline-hover d-flex align-items-center me-4">
          <BsCart3 className="me-2 fs-1" style={{ color: '#4CAF50' }} />
          <span>PriceHunt</span>
        </Link>

        {/* Navigation Links */}
        <div className="d-flex align-items-center me-4">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold underline-hover" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold underline-hover" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold underline-hover" to="/TodaysDeals">
                Deals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold underline-hover" to="/SavedItems">
                Saved Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold underline-hover" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="d-flex mx-auto justify-content-center">
          <form className="input-group search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Right Icons */}
        <div className="d-flex align-items-center ms-4">
          <Link to="/SavedItems" className="text-white position-relative px-3">
            <FaHeart size={25} className="hover-icon" />
          </Link>
          <Link to="/notifications" className="text-white position-relative px-3">
            <FaBell size={25} className="hover-icon" />
          </Link>
          <Link to="/profile" className="text-white px-3">
            <FaUser size={25} className="hover-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
