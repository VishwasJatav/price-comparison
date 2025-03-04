import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./About.css";

const About = () => {
  return (
    <div className=" price-comparison-app min-vh-100 d-flex flex-column ">
      <Header />
      <main className="flex-grow-1 py-4">
        <div className="container mt-5">
          <div className="about-section text-white text-bold p-4">
            <h2 className="mb-4 text-black text-white">Best Price Comparison Website in India</h2>
            <div className="row">
              <div className="col-md-12">
                <p className="about-text mb-4 text-white ">
                  Searching for your favourite products at the best possible prices? At PriceCompare we give you easy access to the best deals that can help you save more money while shopping.
                </p>
                <p className="about-text mb-4 text-white">
                  Shortlisting, filtering, and researching takes away a lot of time, and when you have finally decided on what you want to buy, it can get cumbersome to find the best deals on that particular product. With <span className="text-danger">Amazon</span>, <span className="text-primary">Flipkart</span>, <span className="text-warning">Myntra</span>, <span className="text-info">Paytm</span> and other similar platforms offering varied discounts, it can also get tough to fish out the best offers. That's when you are going to need a platform like PriceCompare – a one stop solution for online price comparisons across multiple product categories.
                </p>

                <h3 className="mb-3 text-white">How to Compare price online?</h3>
                <p className="about-text mb-4 text-white">
                  It's simple! Simply visit PriceCompare and search for the product you are looking for. The website will throw a pool of results for your search; here you will see the best prices available online for that product, so you can compare prices online, click on your choice and make the purchase.
                </p>

                <h3 className="mb-3 text-white">Compare Price and Shop Online for your Favorite Category Products</h3>
                <p className="about-text mb-4 text-white">
                  You could be shopping for mobile phones, laptops, refrigerators, air conditioners, air purifiers, television or anything else; we always have them listed with us. Perhaps the most user-friendly search engine, PriceCompare tells you which websites is a particular product available on and what are the variants on offer. PriceCompare also gives a quick overview of specs, user reviews, and their prices. Additionally, you can also set a custom price drop alert for your favourite products and receive them on your e-mail, so you will know when there is a 5%, 10% or 15% price drop.
                </p>

                <h3 className="mb-3 text-white">How Do Price Comparison Sites Work?</h3>
                <p className="about-text mb-4 text-white">
                  Price comparison sites work by dynamically fetching updated prices, features, reviews, descriptions, and all essential information on various products from different e-commerce sites. All this data is then tailored in a structured manner for your easy understanding. So, when you are searching for a product, the price comparison site fetches prices and gives you results using which you can make the best purchase. Many of these price comparison sites allow browser notifications, and many even let you set alerts for price drops.
                </p>

               
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;