import React from "react";
import { FaStar, FaTag } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./TodaysDeals.css";
import samsungGalaxyS22Ultra from  "../../components/assets/ProductImages/SamsungImage.png";
import SonyWh1000XM4 from  "../../components/assets/ProductImages/Sony WH-1000XM4.jpeg";
import DellInspiron from "../../components/assets/ProductImages/Dell Inspiron.jpeg";
import SamsungTV from "../../components/assets/ProductImages/Samsung Tv.jpeg";
import Applewatch from "../../components/assets/ProductImages/Apple Watch.jpeg";

const todaysDeals = [
  {
    id: 1,
    title: "Apple iPhone 14 (128GB) - Midnight",
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg",
    rating: 4.5,
    reviews: 10532,
    amazonPrice: "₹67,999",
    flipkartPrice: "₹66,999",
    discount: "10% Off",
    platform: "amazon",
    productLink: "https://www.amazon.in/Apple-iPhone-14-256GB-Midnight/dp/B0BDJ6N5D6/",
    timer: new Date().setHours(new Date().getHours() + 5),
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra 5G (256GB, 12GB RAM) - Phantom Black",
    image: samsungGalaxyS22Ultra,
    rating: 4.7,
    reviews: 8401,
    amazonPrice: "₹1,24,999",
    flipkartPrice: "₹1,22,999",
    discount: "12% Off",
    platform: "flipkart",
    productLink: "https://www.flipkart.com/samsung-galaxy-s23-ultra-5g-phantom-black-512-gb/p/itm15952643ba06d?",
    timer: new Date().setHours(new Date().getHours() + 6),
  },
  {
    id: 3,
    title: "Sony WH-1000XM4 Noise Cancelling Headphones",
    image: SonyWh1000XM4,
    rating: 4.6,
    reviews: 5432,
    amazonPrice: "₹24,999",
    flipkartPrice: "₹23,999",
    discount: "15% Off",
    platform: "amazon",
    productLink:"https://www.amazon.in/Sony-WH-1000XM4-Cancelling-Headphones-Bluetooth/dp/B0863TXGM3/ref=sr_1_1?",
    timer: new Date().setHours(new Date().getHours() + 4),
  },
  {
    id: 4,
    title: "Dell Inspiron 15 Laptop (i5, 8GB RAM, 512GB SSD)",
    image: DellInspiron,
    rating: 4.3,
    reviews: 7654,
    amazonPrice: "₹59,999",
    flipkartPrice: "₹58,499",
    discount: "10% Off",
    platform: "flipkart",
    timer: new Date().setHours(new Date().getHours() + 7),
  },
  {
    id: 5,
    title: "Samsung 55-inch Crystal 4K UHD Smart TV",
    image: SamsungTV,
    rating: 4.8,
    reviews: 3421,
    amazonPrice: "₹47,999",
    flipkartPrice: "₹46,999",
    discount: "18% Off",
    platform: "amazon",
    productLink:"https://www.flipkart.com/samsung-crystal-4k-neo-series-138-cm-55-inch-ultra-hd-4k-led-smart-tizen-tv-voice-search/p/itm8d4117869e600?",
    timer: new Date().setHours(new Date().getHours() + 8),
  },
  {
    id: 6,
    title: "Apple Watch Series 8 (GPS, 41mm)",
    image:Applewatch,
    rating: 4.7,
    reviews: 2215,
    amazonPrice: "₹41,999",
    flipkartPrice: "₹40,999",
    discount: "14% Off",
    platform: "flipkart",
    timer: new Date().setHours(new Date().getHours() + 6),
  },
];

const TodaysDeals = () => {
  return (
    <>
      <Header />
      <div className="todays-deals-container ">
        <h2 className="text-white">🔥 Today's Best Deals</h2>
        <div className="deals-grid">
          {todaysDeals.map((deal) => (
            <div className="deal-card" key={deal.id}>
              <div className="discount-badge">
                <FaTag /> {deal.discount}
              </div>
              <div className="deal-platform">
                {deal.platform === "amazon" ? (
                  <>
                    <FaAmazon className="platform-icon amazon" /> Amazon
                  </>
                ) : (
                  <>
                    <SiFlipkart className="platform-icon flipkart" /> Flipkart
                  </>
                )}
              </div>
              <img src={deal.image} alt={deal.title} className="deal-image" />
              <h3>{deal.title}</h3>
              <div className="ratings">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    className={index < Math.round(deal.rating) ? "star filled" : "star"}
                  />
                ))}
                <span className="reviews">({deal.reviews})</span>
              </div>
              <div className="price-details">
                <p>
                  <strong>Amazon:</strong> <span className="price">{deal.amazonPrice}</span>
                </p>
                <p>
                  <strong>Flipkart:</strong> <span className="price">{deal.flipkartPrice}</span>
                </p>
              </div>
              <p className="deal-timer">⏳ Ends in: {new Date(deal.timer).toLocaleTimeString()}</p>
              <div className="delivery-info">🚚 Free Delivery</div>
              {deal.platform === "amazon" ? (
                <Link to={deal.productLink}  className="buy-button amazon">🛒 Buy on Amazon</Link>
              ) : (
                <Link to={deal.productLink} className="buy-button flipkart">🛒 Buy on Flipkart</Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TodaysDeals;
