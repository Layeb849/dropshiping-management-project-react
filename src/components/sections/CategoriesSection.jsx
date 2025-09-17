import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getCategories } from '@/data/categories';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = () => {
      const storedCategories = getCategories();
      setCategories(storedCategories);
    };

    fetchCategories();
    
    window.addEventListener('categoriesUpdated', fetchCategories);

    return () => {
      window.removeEventListener('categoriesUpdated', fetchCategories);
    };
  }, []);

  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি—তবে চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀"
    });
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">আপনার পছন্দের ক্যাটাগরি থেকে কেনাকাটা করুন</h2>
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {categories.map((category, index) => (
              <CarouselItem key={category.id} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8">
                <motion.button
                  className="w-full"
                  onClick={showToast}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={`${category.color} p-4 rounded-lg text-center`}>
                    <div className="text-3xl md:text-4xl mb-2">{category.icon}</div>
                    <div className="text-xs md:text-sm font-medium text-gray-700 truncate">{category.name}</div>
                  </div>
                </motion.button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default CategoriesSection;