import { Routes, Route } from 'react-router-dom';
import HomePage from './utils/pages/HomePage';
import Categories from './utils/pages/categories';
import TodaysDeals from './utils/pages/TodaysDeals';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/todaysdeals" element={<TodaysDeals />} />

    </Routes>
  );
}

export default App;  // Make sure this line is present