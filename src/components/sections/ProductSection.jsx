import React from 'react';
import ProductCard from '@/components/ProductCard';

const ProductSection = ({ title, products, emoji }) => (
  <section className="mb-8">
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-2">{emoji}</span>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default ProductSection;