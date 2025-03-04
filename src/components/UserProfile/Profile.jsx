import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Profile.css';
import Auth from './Auth';
import { useAuth } from '../../utils/auth/authContext.jsx';
import { validateEmail, validatePhone } from '../../utils/auth/authUtils.js';

const Profile = () => {
  const { isAuthenticated, user, logout } = useAuth();  // Add logout from useAuth
  
  const userProfile = user || {
    name: 'Guest User',
    email: 'guest@example.com',
    phone: 'Not provided',
    address: 'Not provided',
    avatar: 'https://via.placeholder.com/150'
  };

  const handleLogout = () => {
    logout();
    // The user will be redirected to Auth component due to !isAuthenticated condition
  };

  return (
    <div className="profile-page">
      <Header />
      {!isAuthenticated ? (
        <Auth />
      ) : (
        <div className="container py-5">
          <div className="profile-container">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-sidebar">
                  <div className="profile-image-container">
                    <img src={userProfile.avatar} alt="Profile" className="profile-image" />
                    <button className="edit-photo-btn">
                      <FaEdit /> Edit Photo
                    </button>
                  </div>
                  <div className="profile-stats">
                    <div className="stat-item">
                      <h4>Saved Items</h4>
                      <span>15</span>
                    </div>
                    <div className="stat-item">
                      <h4>Price Alerts</h4>
                      <span>8</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="logout-button mt-4"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="col-md-8">
                <div className="profile-content">
                  <h2>Profile Information</h2>
                  <div className="profile-info">
                    <div className="info-item">
                      <FaUser className="info-icon" />
                      <div className="info-content">
                        <label>Full Name</label>
                        <p>{userProfile.name}</p>
                      </div>
                      <button className="edit-btn"><FaEdit /></button>
                    </div>
                    <div className="info-item">
                      <FaEnvelope className="info-icon" />
                      <div className="info-content">
                        <label>Email</label>
                        <p>{userProfile.email}</p>
                      </div>
                      <button className="edit-btn"><FaEdit /></button>
                    </div>
                    <div className="info-item">
                      <FaPhone className="info-icon" />
                      <div className="info-content">
                        <label>Phone</label>
                        <p>{userProfile.phone}</p>
                      </div>
                      <button className="edit-btn"><FaEdit /></button>
                    </div>
                    <div className="info-item">
                      <FaMapMarkerAlt className="info-icon" />
                      <div className="info-content">
                        <label>Address</label>
                        <p>{userProfile.address}</p>
                      </div>
                      <button className="edit-btn"><FaEdit /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Profile;