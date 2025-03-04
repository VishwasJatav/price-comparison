import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="price-comparison-app min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container terms-container">
          <h1 className="text-white text-center mb-4">Terms and Conditions</h1>
          <div className="terms-content bg-glass p-4 rounded">
            <section className="mb-4">
              <h2 className="text-white mb-3">1. Introduction</h2>
              <p className="text-light">
                Welcome to Price Comparison. By accessing our website, you agree to these terms and conditions. Please read them carefully.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="text-white mb-3">2. Use of Service</h2>
              <p className="text-light">
                Our service provides price comparisons from various e-commerce platforms. The information provided is for reference only and prices may vary.
              </p>
              <ul className="text-light">
                <li>Prices are updated regularly but may not reflect real-time changes</li>
                <li>Product availability is subject to change</li>
                <li>We are not responsible for purchases made through linked websites</li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="text-white mb-3">3. User Responsibilities</h2>
              <p className="text-light">
                Users must:
              </p>
              <ul className="text-light">
                <li>Provide accurate information when using our services</li>
                <li>Not misuse or attempt to manipulate our platform</li>
                <li>Respect intellectual property rights</li>
                <li>Not use our service for any illegal purposes</li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="text-white mb-3">4. Privacy Policy</h2>
              <p className="text-light">
                We respect your privacy and protect your personal information. Please refer to our Privacy Policy for details on how we collect and use your data.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="text-white mb-3">5. Disclaimer</h2>
              <p className="text-light">
                We provide this service "as is" without any warranties. We are not responsible for:
              </p>
              <ul className="text-light">
                <li>Accuracy of prices or product information from third-party sellers</li>
                <li>Quality of products purchased through linked websites</li>
                <li>Any damages or losses resulting from use of our service</li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="text-white mb-3">6. Changes to Terms</h2>
              <p className="text-light">
                We reserve the right to modify these terms at any time. Continued use of our service after changes constitutes acceptance of new terms.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="text-white mb-3">7. Contact Information</h2>
              <p className="text-light">
                For any questions regarding these terms, please contact us at:
                <br />
                Email: support@pricecomparison.com
                <br />
                Phone: +91 8160288281
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;