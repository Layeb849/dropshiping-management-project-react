import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutUsPage from '@/pages/AboutUsPage';
import ContactPage from '@/pages/ContactPage';
import ReferralPage from '@/pages/ReferralPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import WishlistPage from '@/pages/WishlistPage';
import { Toaster } from '@/components/ui/toaster';
import OurStoryPage from '@/pages/OurStoryPage';
import CareersPage from '@/pages/CareersPage';
import PressPage from '@/pages/PressPage';
import ReturnPolicyPage from '@/pages/ReturnPolicyPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TrackOrderPage from '@/pages/TrackOrderPage';
import SupportPage from '@/pages/SupportPage';
import MembershipPage from '@/pages/MembershipPage';
import SearchModal from '@/components/SearchModal';
import PrivateRoute from '@/components/PrivateRoute';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DashboardPage from '@/pages/DashboardPage';
import MyProductsPage from '@/pages/dashboard/MyProductsPage';
import ConnectStorePage from '@/pages/dashboard/ConnectStorePage';
import BillingPage from '@/pages/dashboard/BillingPage';
import AccountSettingsPage from '@/pages/dashboard/AccountSettingsPage';
import AnalyticsPage from '@/pages/dashboard/AnalyticsPage';
import ReferralDashboardPage from '@/pages/dashboard/ReferralDashboardPage';
import OrderTrackingDashboardPage from '@/pages/dashboard/OrderTrackingDashboardPage';
import AdminRoute from '@/components/AdminRoute';
import AdminLayout from '@/components/layout/AdminLayout';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import ManageCategoriesPage from '@/pages/admin/ManageCategoriesPage';
import ManageProductsPage from '@/pages/admin/ManageProductsPage';
import ManageUsersPage from '@/pages/admin/ManageUsersPage';
import ManageOrdersPage from '@/pages/admin/ManageOrdersPage';
import AdminLoginPage from '@/pages/admin/AdminLoginPage';
import ManageHomepagePage from '@/pages/admin/ManageHomepagePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="referral" element={<ReferralPage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="press" element={<PressPage />} />
          <Route path="return-policy" element={<ReturnPolicyPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="track-order" element={<TrackOrderPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>

        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="my-products" element={<MyProductsPage />} />
          <Route path="connect-store" element={<ConnectStorePage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="referral-program" element={<ReferralDashboardPage />} />
          <Route path="order-tracking" element={<OrderTrackingDashboardPage />} />
          <Route path="settings" element={<AccountSettingsPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route 
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboardPage />} />
          <Route path="products" element={<ManageProductsPage />} />
          <Route path="categories" element={<ManageCategoriesPage />} />
          <Route path="users" element={<ManageUsersPage />} />
          <Route path="orders" element={<ManageOrdersPage />} />
          <Route path="homepage" element={<ManageHomepagePage />} />
        </Route>

      </Routes>
      <Toaster />
      <SearchModal />
    </>
  );
}

export default App;