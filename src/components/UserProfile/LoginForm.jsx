import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './Auth.css';

const LoginForm = ({ switchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login:', formData);
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p className="auth-switch">
        Don't have an account? 
        <button onClick={switchToSignup} className="switch-btn">Sign Up</button>
      </p>
    </div>
  );
};

export default LoginForm;