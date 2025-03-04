import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const PriceAlert = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Price Alert Set:', { email, targetPrice });
    handleClose();
  };

  const handleClose = () => {
    setShowModal(false);
    setEmail('');
    setTargetPrice('');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <div 
        className="price-alert-badge"
        onClick={() => setShowModal(true)}
      >
        <FaBell size={24} />
      </div>

      {showModal && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={handleBackdropClick}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="price-alert-modal">
              <div className="modal-header border-0">
                <h5 className="modal-title">Set Price Alert</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="alert-input"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="targetPrice" className="form-label">Target Price</label>
                    <input
                      type="number"
                      className="alert-input"
                      id="targetPrice"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                      placeholder="Enter target price"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Set Alert
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceAlert;