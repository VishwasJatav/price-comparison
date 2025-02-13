import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
    }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <FaShoppingCart className="me-2" />
          Price Comparison
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white text-decoration-none fw-bold  " href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-decoration-none fw-bold " href="/categories">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-decoration-none fw-bold " href="/deals">Today's Deals</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;