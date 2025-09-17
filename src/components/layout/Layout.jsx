
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import FloatingActionButtons from '@/components/FloatingActionButtons';

const Layout = () => {
  const location = useLocation();
  const getActiveTab = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/contact')) return 'contact';
    if (pathname.startsWith('/referral') || pathname.startsWith('/membership')) return 'referral';
    if (pathname.startsWith('/wishlist')) return 'wishlist';
    return 'home';
  };
  const [activeTab, setActiveTab] = useState(getActiveTab(location.pathname));

  React.useEffect(() => {
    setActiveTab(getActiveTab(location.pathname));
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow mobile-content">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <FloatingActionButtons />
    </div>
  );
};

export default Layout;
