import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Heart, Gift, LogIn } from 'lucide-react';
import { useSearch } from '@/context/SearchContext';

const MobileBottomNav = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const { openSearch } = useSearch();

  const handleNavigation = (path, tab) => {
    setActiveTab(tab);
    navigate(path);
  }

  // The search button is now hidden on mobile, so this function is not directly used by a visible button.
  // It's kept for completeness in case the search functionality is re-introduced differently.
  const handleSearchClick = () => {
    setActiveTab('search');
    openSearch();
  };

  return (
    <nav className="mobile-bottom-nav md:hidden">
      <div className="flex justify-around">
        <button 
          onClick={() => handleNavigation('/', 'home')}
          className={`flex flex-col items-center py-1 px-2 ${activeTab === 'home' ? 'text-teal-600' : 'text-gray-600'}`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">হোম</span>
        </button>
        <button 
          onClick={() => handleNavigation('/wishlist', 'wishlist')}
          className={`flex flex-col items-center py-1 px-2 ${activeTab === 'wishlist' ? 'text-teal-600' : 'text-gray-600'}`}
        >
          <Heart className="w-5 h-5" />
          <span className="text-xs mt-1">উইশলিস্ট</span>
        </button>
        {/* Search button is hidden on mobile view */}
        {/* <button 
          onClick={handleSearchClick}
          className={`hidden md:flex flex-col items-center py-1 px-2 ${activeTab === 'search' ? 'text-teal-600' : 'text-gray-600'}`}
        >
          <Search className="w-5 h-5" />
          <span className="text-xs mt-1">অনুসন্ধান</span>
        </button> */}
        <button 
          onClick={() => handleNavigation('/membership', 'referral')}
          className={`flex flex-col items-center py-1 px-2 ${activeTab === 'referral' ? 'text-teal-600' : 'text-gray-600'}`}
        >
          <Gift className="w-5 h-5" />
          <span className="text-xs mt-1">মেম্বারশিপ</span>
        </button>
        <button 
          onClick={() => handleNavigation('/login', 'login')}
          className={`flex flex-col items-center py-1 px-2 ${activeTab === 'login' ? 'text-teal-600' : 'text-gray-600'}`}
        >
          <LogIn className="w-5 h-5" />
          <span className="text-xs mt-1">লগইন</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileBottomNav;