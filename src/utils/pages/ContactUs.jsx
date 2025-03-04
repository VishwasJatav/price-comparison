import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="price-comparison-app min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container">
          <h1 className="text-center text-white mb-5">Contact Us</h1>
          
          <div className="row">
            {/* Contact Information */}
            <div className="col-md-4 mb-4">
              <div className="contact-info bg-glass p-4 rounded h-100">
                <h3 className="text-white mb-4">Get in Touch</h3>
                
                <div className="contact-item mb-4">
                  <FaPhone className="text-primary me-2" />
                  <div>
                    <h4 className="text-white">Phone</h4>
                    <p className="text-light mb-0">+91 8160288281</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <FaEnvelope className="text-primary me-2" />
                  <div>
                    <h4 className="text-white">Email</h4>
                    <p className="text-light mb-0">support@pricecomparison.com</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <FaMapMarkerAlt className="text-primary me-2" />
                  <div>
                    <h4 className="text-white">Address</h4>
                    <p className="text-light mb-0">
                      Parul University, Vadodara<br />
                      
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaWhatsapp className="text-primary me-2" />
                  <div>
                    <h4 className="text-white">WhatsApp</h4>
                    <p className="text-light mb-0">+91 8160288281</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-8 mb-4">
              <div className="contact-form bg-glass p-4 rounded">
                <h3 className="text-white mb-4">Send us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">Name</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-0"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">Email</label>
                    <input
                      type="email"
                      className="form-control bg-dark text-white border-0"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-white">Subject</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-0"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-white">Message</label>
                    <textarea
                      className="form-control bg-dark text-white border-0"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;