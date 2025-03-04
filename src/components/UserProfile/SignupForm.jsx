import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import './Auth.css';

const SignupForm = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup:', formData);
  };

  return (
    <div className="auth-box">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <FaPhone className="input-icon" />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            required
          />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <p className="auth-switch">
        Already have an account? 
        <button onClick={switchToLogin} className="switch-btn">Login</button>
      </p>
    </div>
  );
};

export default SignupForm;