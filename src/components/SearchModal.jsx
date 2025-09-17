import React, { useEffect, useState } from 'react';
import { useSearch } from '@/context/SearchContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Loader2 } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';
import ProductCard from './ProductCard';

const SearchModal = () => {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery, searchResults, isLoading } = useSearch();
  const [inputValue, setInputValue] = useState(searchQuery);

  const debounced = useDebouncedCallback(
    (value) => {
      setSearchQuery(value);
    },
    300 
  );

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setInputValue(searchQuery);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSearchOpen, searchQuery]);

  if (!isSearchOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex flex-col"
        onClick={closeSearch}
      >
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-white w-full max-w-4xl mx-auto rounded-b-2xl shadow-2xl flex flex-col p-4 sm:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">পণ্য খুঁজুন</h2>
            <button onClick={closeSearch} className="p-2 rounded-full hover:bg-gray-100">
              <X className="text-gray-600" />
            </button>
          </div>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="আপনি কী খুঁজছেন?"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-shadow"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                debounced(e.target.value);
              }}
              autoFocus
            />
          </div>
          
          <div className="flex-grow overflow-y-auto min-h-[40vh] max-h-[60vh] -mx-4 px-4">
            {isLoading && (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-red-500" />
              </div>
            )}
            {!isLoading && searchResults.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {searchResults.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            {!isLoading && searchResults.length === 0 && searchQuery && (
              <div className="text-center py-10">
                <p className="text-gray-600">"{searchQuery}" এর জন্য কোনো ফলাফল পাওয়া যায়নি।</p>
              </div>
            )}
             {!isLoading && !searchQuery && (
              <div className="text-center py-10">
                <p className="text-gray-500">আপনার পছন্দের পণ্যটি খুঁজতে শুরু করুন।</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchModal;