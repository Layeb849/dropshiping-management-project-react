import React, { createContext, useContext, useState } from 'react';
import { allProducts } from '@/data/products';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = (query) => {
    setIsLoading(true);
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }
    
    setTimeout(() => {
      const filteredResults = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsLoading(false);
    }, 500); 
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const value = {
    isSearchOpen,
    openSearch,
    closeSearch,
    searchQuery,
    setSearchQuery: performSearch,
    searchResults,
    isLoading
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};