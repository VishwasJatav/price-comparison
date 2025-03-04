import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaPhone } from 'react-icons/fa';
import './Auth.css';
import { validateEmail, validatePassword, validatePhone, formatAuthError } from '../../utils/auth/authUtils.js';
import { useAuth } from '../../utils/auth/authContext.jsx';

const Auth = () => {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email');
      return;
    }
    
    if (!validatePassword(formData.password)) {
      alert('Password must contain uppercase, lowercase, number, and special character');
      return;
    }

    if (!isLogin && formData.phone && !validatePhone(formData.phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      login(formData);
      console.log('Form submitted:', formData);
    } catch (error) {
      alert(formatAuthError(error));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
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
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </>
          )}
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
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          {!isLogin && (
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
          )}
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="auth-switch">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="switch-btn">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;