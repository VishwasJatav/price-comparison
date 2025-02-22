import React from 'react';
import { FaAmazon, FaStar, FaTag, FaPercent } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const TodaysDeals = () => {
  const deals = [
    {
      id: 1,
      title: "Apple iPhone 16 ProMax",
      originalPrice: "₹1,49,900",
      discountedPrice: "₹1,37,900",
      discount: "8%",
      platform: "amazon",
      image: "AmazonIphone16",
      rating: 4.5,
      reviews: "2.5k",
      dealEnds: "12:00:00",
      url: "https://www.amazon.in/iPhone-16-Pro-Max-256/dp/B0DGJ3L6LR"
    },
    {
      id: 2,
      title: "Samsung Galaxy S22 Ultra",
      originalPrice: "₹89,999",
      discountedPrice: "₹71,999",
      discount: "20%",
      platform: "flipkart",
      image: "https://shorturl.at/jlwGO",
      rating: 4.3,
      reviews: "1.8k",
      dealEnds: "08:30:00",
      url: "https://www.flipkart.com"
    },
    {
      id: 3,
      title: "OnePlus 12",
      originalPrice: "₹69,999",
      discountedPrice: "₹59,999",
      discount: "15%",
      platform: "amazon",
      image: "https://shorturl.at/jlwGO",
      rating: 4.4,
      reviews: "1.2k",
      dealEnds: "15:45:00",
      url: "https://www.amazon.in"
    },
    {
      id: 4,
      title: "Google Pixel 8 Pro",
      originalPrice: "₹79,999",
      discountedPrice: "₹69,999",
      discount: "12%",
      platform: "flipkart",
      image: "https://shorturl.at/jlwGO",
      rating: 4.6,
      reviews: "950",
      dealEnds: "10:20:00",
      url: "https://www.flipkart.com"
    },
    {
      id: 5,
      title: "Nothing Phone 2",
      originalPrice: "₹49,999",
      discountedPrice: "₹39,999",
      discount: "20%",
      platform: "amazon",
      image: "https://shorturl.at/jlwGO",
      rating: 4.2,
      reviews: "1.5k",
      dealEnds: "18:00:00",
      url: "https://www.amazon.in"
    },
    {
      id: 6,
      title: "Xiaomi 14 Pro",
      originalPrice: "₹59,999",
      discountedPrice: "₹49,999",
      discount: "16%",
      platform: "flipkart",
      image: "https://shorturl.at/jlwGO",
      rating: 4.1,
      reviews: "800",
      dealEnds: "14:30:00",
      url: "https://www.flipkart.com"
    }
  ];

  return (
    <div className="price-comparison-app min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container">
          <h2 className="text-center text-white mb-4">Today's Best Deals</h2>
          
          <div className="row g-4">
            {deals.map((deal) => (
              <div key={deal.id} className="col-md-6 col-lg-4">
                <div className="card deal-card">
                  <div className="discount-badge">
                    <FaPercent className="me-1" /> {deal.discount} OFF
                  </div>
                  
                  <div className="card-body">
                    <div className="platform-badge d-flex align-items-center">
                      {deal.platform === 'amazon' ? (
                        <>
                          <FaAmazon className="text-amazon me-2" />
                          <span>Amazon</span>
                        </>
                      ) : (
                        <>
                          <SiFlipkart className="text-flipkart me-2" />
                          <span>Flipkart</span>
                        </>
                      )}
                    </div>
                    
                    <img 
                      src={deal.image} 
                      alt={deal.title} 
                      className="deal-image mb-3"
                    />
                    
                    <h5 className="card-title text-truncate">{deal.title}</h5>
                    
                    <div className="d-flex align-items-center mb-2">
                      <FaStar className="text-warning" />
                      <span className="ms-1">{deal.rating}</span>
                      <span className="text-muted ms-2">({deal.reviews} reviews)</span>
                    </div>
                    
                    <div className="prices mb-3">
                      <span className="original-price text-muted text-decoration-line-through">
                        {deal.originalPrice}
                      </span>
                      <span className="discounted-price ms-2">
                        {deal.discountedPrice}
                      </span>
                    </div>
                    
                    <div className="deal-timer mb-3">
                      Deal ends in: <span className="text-danger">{deal.dealEnds}</span>
                    </div>
                    
                    <a 
                      href={deal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn w-100 ${deal.platform === 'amazon' ? 'btn-amazon' : 'btn-flipkart'}`}
                    >
                      View Deal
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TodaysDeals;