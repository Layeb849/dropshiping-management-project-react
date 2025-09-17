import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-3xl font-extrabold tracking-tight text-white">
              <span className="text-white">Lets</span>
              <span className="text-red-500">Drop</span>
              <span className="text-white">ship</span>
            </span>
            <p className="mt-4 text-gray-300 text-sm">আপনার ড্রপশিপিং ব্যবসার জন্য সেরা প্ল্যাটফর্ম।</p>
          </div>
          <div>
            <span className="font-semibold text-lg mb-4 block">কোম্পানি</span>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/our-story" className="hover:text-white transition-colors">আমাদের গল্প</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">ক্যারিয়ার</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">প্রেস</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-lg mb-4 block">গ্রাহক সেবা</span>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">যোগাযোগ করুন</Link></li>
              <li><Link to="/return-policy" className="hover:text-white transition-colors">ফেরত নীতি</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">গোপনীয়তা নীতি</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-lg mb-4 block">দ্রুত অ্যাক্সেস</span>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/track-order" className="hover:text-white transition-colors">অর্ডার ট্র্যাক করুন</Link></li>
              <li><Link to="/wishlist" className="hover:text-white transition-colors">উইশলিস্ট</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">সাপোর্ট</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; ২০২৪ লেটসড্রপশিপ। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;