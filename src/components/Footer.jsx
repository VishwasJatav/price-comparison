function Footer() {
    return (
      <footer className="bg-dark text-light py-4 mt-4 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5>About Us</h5>
              <p className="text-white text-decoration-none text-light ">
                We help you find the best deals across multiple <br />
                e-commerce platforms.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/terms" className="text-decoration-none text-white text-light">Terms & Conditions</a></li>
                <li><a href="/privacy" className="text-decoration-none text-white text-light">Privacy Policy</a></li>
                <li><a href="/contact" className="text-decoration-none text-white text-light">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Newsletter</h5>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary text-warning bg-dark border-1 rounded-end text-decoration-none ">Subscribe</button>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center text-muted">
            © 2024 Price Comparison. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;