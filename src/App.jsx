import { Routes, Route } from 'react-router-dom';
import HomePage from './utils/pages/HomePage';
import Categories from './utils/pages/categories';
import TodaysDeals from './utils/pages/TodaysDeals';
import TermsAndConditions from './utils/pages/TermsAndConditions';
import ContactUs from './utils/pages/ContactUs';
import SavedItems from './utils/pages/SavedItems';
import SearchResults from './utils/pages/SearchResults';
import About from './utils/pages/About';
import Profile from './components/UserProfile/Profile.jsx';
import { AuthProvider } from './utils/auth/authContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
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
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;