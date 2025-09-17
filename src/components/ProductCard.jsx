import React from 'react';
import { motion } from 'framer-motion';
import { Star, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { isMember } = useAuth();

  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি—তবে চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀"
    });
  };

  return (
    <motion.div 
      className="bg-white rounded-lg card-shadow p-4 transition-all duration-300 hover:scale-105"
      whileHover={{ y: -2 }}
    >
      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
        <img  alt={product.name} className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
      </div>
      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
      <div className="flex items-center justify-between mb-3 min-h-[28px]">
        {isMember ? (
          <span className="text-lg font-bold text-gray-800">{product.price}</span>
        ) : (
          <div className="flex items-center gap-2 text-sm text-orange-600 font-semibold">
            <Lock size={16} />
            <span>সদস্যদের জন্য</span>
          </div>
        )}
        <div className="flex items-center">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-500 ml-1">৪.৫</span>
        </div>
      </div>
      {isMember ? (
        <Button 
          className="w-full"
          onClick={showToast}
        >
          অর্ডার করুন
        </Button>
      ) : (
        <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
          <Link to="/membership">
            দাম দেখতে মেম্বার হোন
          </Link>
        </Button>
      )}
    </motion.div>
  );
};

export default ProductCard;