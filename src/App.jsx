import { Routes, Route } from 'react-router-dom';
import HomePage from './utils/pages/HomePage';
import Categories from './utils/pages/categories';
import TodaysDeals from './utils/pages/TodaysDeals';
import TermsAndConditions from './utils/pages/TermsAndConditions';
import ContactUs from './utils/pages/ContactUs';
import SavedItems from './utils/pages/SavedItems';
import SearchResults from './utils/pages/SearchResults';
import About from './utils/pages/About';
import './App.css';
import Profile from './components/UserProfile/Profile.jsx';  // Added .jsx extension
import { AuthProvider } from './utils/auth/authContext.jsx';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/todaysdeals" element={<TodaysDeals />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SavedItems" element={<SavedItems />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;