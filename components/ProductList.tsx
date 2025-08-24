
import React from 'react';
import { CAR_DATA } from '../constants';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-suzuki-blue">Daftar Harga Mobil Suzuki</h2>
          <p className="text-lg text-gray-600 mt-2">Area Bandung & Sekitarnya</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAR_DATA.map((car, index) => (
            <ProductCard key={index} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
