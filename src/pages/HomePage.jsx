
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/sections/HeroSection';
import PromoCarousel from '@/components/sections/PromoCarousel';
import CategoriesSection from '@/components/sections/CategoriesSection';
import ProductSection from '@/components/sections/ProductSection';
import ReferralSection from '@/components/sections/ReferralSection';
import { allProducts as products } from '@/data/products';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>লেটসড্রপশিপ - আপনার চূড়ান্ত শপিং গন্তব্য</title>
        <meta name="description" content="আকর্ষণীয় ডিল সহ দারুণ সব পণ্য আবিষ্কার করুন। ঘরে বসে কেনাকাটা করুন এবং আমাদের রেফারেল প্রোগ্রামের মাধ্যমে বড় সঞ্চয় করুন!" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <HeroSection />
      </div>
      
      <PromoCarousel />
      
      <CategoriesSection />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductSection 
          title="নতুন পণ্য" 
          products={products.slice(0, 4)} 
          emoji="🆕"
        />
        
        <ProductSection 
          title="সর্বাধিক বিক্রিত পণ্য" 
          products={products.slice(2, 6)} 
          emoji="📈"
        />
        
        <ProductSection 
          title="অফার প্যাক" 
          products={products.slice(1, 5)} 
          emoji="🎁"
        />
        
        <ProductSection 
          title="ছেলেদের ফ্যাশন" 
          products={products.filter(p => p.category === 'men' || p.id <= 2).slice(0, 4)} 
          emoji="👕"
        />
        
        <ProductSection 
          title="মেয়েদের ফ্যাশন" 
          products={products.filter(p => p.category === 'women' || (p.id >= 3 && p.id <= 4)).slice(0, 4)} 
          emoji="👗"
        />
        
        <ProductSection 
          title="ঘর ও লাইফস্টাইল" 
          products={products.slice(3, 7)} 
          emoji="🏡"
        />
        
        <ProductSection 
          title="গ্যাজেট ও ইলেকট্রনিক্স" 
          products={products.filter(p => p.category === 'electronics').slice(0, 4)} 
          emoji="📱"
        />
        
        <ProductSection 
          title="কিডস জোন" 
          products={products.filter(p => p.category === 'kids' || p.id === 5).slice(0, 4)} 
          emoji="👶"
        />
        
        <ProductSection 
          title="কম্বো প্যাক ও গিফট প্যাক" 
          products={products.slice(0, 4)} 
          emoji="🎀"
        />
        
        <ProductSection 
          title="কাস্টমার গিফট জোন" 
          products={products.slice(4, 8)} 
          emoji="🛍"
        />
      </div>

      <ReferralSection />
    </>
  );
};

export default HomePage;
