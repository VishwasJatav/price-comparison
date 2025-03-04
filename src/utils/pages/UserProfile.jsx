import React from 'react';
import { FaUser, FaBell, FaHistory, FaHeart, FaCog } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/150',
    alerts: 5,
    savedItems: 12,
    compareHistory: 8
  };

  return (
    <div className="price-comparison-app min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container">
          <div className="profile-section p-4">
            <div className="profile-header">
              <img src={user.avatar} alt={user.name} className="profile-avatar" />
              <div className="profile-info">
                <h2 className="mb-2">{user.name}</h2>
                <p className="mb-0">{user.email}</p>
              </div>
            </div>

            <div className="profile-tabs">
              <div className="profile-tab active">Overview</div>
              <div className="profile-tab">Price Alerts</div>
              <div className="profile-tab">Saved Items</div>
              <div className="profile-tab">Settings</div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="bg-glass p-4 rounded text-center">
                  <FaBell className="text-primary mb-3" size={24} />
                  <h4 className="text-white">{user.alerts}</h4>
                  <p className="text-white-50 mb-0">Active Price Alerts</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="bg-glass p-4 rounded text-center">
                  <FaHeart className="text-primary mb-3" size={24} />
                  <h4 className="text-white">{user.savedItems}</h4>
                  <p className="text-white-50 mb-0">Saved Items</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="bg-glass p-4 rounded text-center">
                  <FaHistory className="text-primary mb-3" size={24} />
                  <h4 className="text-white">{user.compareHistory}</h4>
                  <p className="text-white-50 mb-0">Comparisons Made</p>
                </div>
              </div>
            </div>

            <div className="bg-glass p-4 rounded mt-4">
              <h3 className="text-white mb-4">Recent Activity</h3>
              <div className="text-white-50">
                <p>No recent activity to show</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;