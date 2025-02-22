import React from 'react';
import { FaMobile, FaLaptop, FaHeadphones, FaTshirt, FaHome, FaBook, FaGamepad, FaCamera } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Smartphones',
      icon: <FaMobile size={30} />,
      color: '#FF6B6B',
      items: '150+ items',
      path: '/category/smartphones'
    },
    {
      id: 2,
      name: 'Laptops',
      icon: <FaLaptop size={30} />,
      color: '#4ECDC4',
      items: '100+ items',
      path: '/category/laptops'
    },
    {
      id: 3,
      name: 'Headphones',
      icon: <FaHeadphones size={30} />,
      color: '#45B7D1',
      items: '80+ items',
      path: '/category/headphones'
    },
    {
      id: 4,
      name: 'Fashion',
      icon: <FaTshirt size={30} />,
      color: '#96CEB4',
      items: '200+ items',
      path: '/category/fashion'
    },
    {
      id: 5,
      name: 'Home & Living',
      icon: <FaHome size={30} />,
      color: '#D4A5A5',
      items: '120+ items',
      path: '/category/home'
    },
    {
      id: 6,
      name: 'Gaming',
      icon: <FaGamepad size={30} />,
      color: '#9B5DE5',
      items: '90+ items',
      path: '/category/gaming'
    },
    {
      id: 7,
      name: 'Cameras',
      icon: <FaCamera size={30} />,
      color: '#F15BB5',
      items: '70+ items',
      path: '/category/cameras'
    },
    {
      id: 8,
      name: 'Books',
      icon: <FaBook size={30} />,
      color: '#00BBF9',
      items: '300+ items',
      path: '/category/books'
    }
  ];

  return (
    <div className="price-comparison-app min-vh-100 d-flex flex-column">
      <Header />
      
      <div className="categories-section py-5 flex-grow-1">
        <div className="container">
          <h2 className="text-center text-white mb-5">Browse Categories</h2>
          
          <div className="row g-4">
            {categories.map((category) => (
              <div key={category.id} className="col-6 col-md-4 col-lg-3">
                <div 
                  className="category-card" 
                  style={{ backgroundColor: `${category.color}15` }}
                  onClick={() => window.location.href = category.path}
                >
                  <div 
                    className="category-icon" 
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h3 className='text-white'>{category.name}</h3>
                  <p className='text-white'>{category.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;