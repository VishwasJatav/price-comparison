import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="footer-brand d-flex align-items-center mb-3">
              <HiMiniDevicePhoneMobile className="me-2 fs-1" />
              <span className="fs-3 fw-bold">PriceHunter</span>
            </Link>
            <p className="text-light opacity-75">
              Find the best deals on smartphones and accessories across multiple platforms.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="footer-link">Home</Link></li>
              <li className="mb-2"><Link to="/categories" className="footer-link">Categories</Link></li>
              <li className="mb-2"><Link to="/TodaysDeals" className="footer-link">Today's Deals</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-3">Connect</h5>
            <ul className="list-unstyled">
              <li className="text-light opacity-75 mb-2">Email: info@pricehunter.com</li>
              <li className="text-light opacity-75 mb-2">Phone: 8160288281</li>
              <li className="mb-2">
                <Link to="/ContactUs" className="footer-link">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/TermsAndConditions" className="footer-link">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-3">Follow Us</h5>
            <div className="social-links d-flex gap-3">
              <a href="#" className="social-link">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="social-link">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="social-link">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="container">
          <p className="text-center mb-0 py-3 text-light opacity-75">
            © {new Date().getFullYear()} PriceHunter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;