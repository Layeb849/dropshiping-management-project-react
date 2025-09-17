import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const WishlistPage = () => {
  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি—তবে চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀"
    });
  };

  const wishlistItems = [
    { id: 2, name: "ওয়্যারলেস ইয়ারবাডস প্রো", price: "৳৭৯৯", image: "নয়েজ ক্যান্সেলেশন সহ উচ্চ মানের ওয়্যারলেস ইয়ারবাড", inStock: true },
    { id: 4, name: "স্মার্ট ওয়াচ সিরিজ", price: "৳১৯৯৯", image: "স্বাস্থ্য ট্র্যাকিং সহ উন্নত স্মার্টওয়াচ", inStock: true },
    { id: 7, name: "গেমিং হেডসেট", price: "৳১২৯৯", image: "আরজিবি লাইটিং সহ পেশাদার গেমিং হেডসেট", inStock: false },
  ];

  return (
    <>
      <Helmet>
        <title>আমার পছন্দের তালিকা - LetsDropship</title>
        <meta name="description" content="আপনার পছন্দের পণ্যগুলো দেখুন এবং পরিচালনা করুন।" />
      </Helmet>
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              আমার পছন্দের তালিকা
            </h1>
            <p className="text-gray-600 mt-2">আপনার পছন্দের পণ্যগুলো এখানে সংরক্ষিত আছে।</p>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 border-b pb-6 last:border-b-0 last:pb-0">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg flex-shrink-0">
                      <img  alt={item.name} className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-xl font-bold text-gray-900 my-1">{item.price}</p>
                      <span className={`text-sm font-semibold ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {item.inStock ? 'স্টকে আছে' : 'স্টক আউট'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <Button 
                        onClick={showToast} 
                        disabled={!item.inStock}
                        className="flex items-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        কার্টে যোগ করুন
                      </Button>
                      <Button variant="outline" size="icon" onClick={showToast}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center bg-white rounded-xl shadow-lg p-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800">আপনার পছন্দের তালিকা খালি</h2>
              <p className="text-gray-600 mt-2 mb-6">পণ্য ব্রাউজ করুন এবং আপনার পছন্দের আইটেম যোগ করুন।</p>
              <Button asChild size="lg">
                <Link to="/">কেনাকাটা শুরু করুন</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;