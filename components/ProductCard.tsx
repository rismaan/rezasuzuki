
import React from 'react';
import type { CarModel, CarVariant } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  car: CarModel;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const WhatsAppButton: React.FC<{ modelName: string, variantName: string }> = ({ modelName, variantName }) => {
  const message = encodeURIComponent(
    `Halo, saya tertarik dengan ${modelName} varian ${variantName}. Mohon informasinya.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.193 2.004a8 8 0 10-8.189 8.977L2 18l7.019-.99a8 8 0 001.174-9.006zM10 16.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/>
          <path d="M10.99 6.075c-.244-.122-.512-.19-.785-.19-.488 0-.951.17-1.341.512l-.39.39c-.1.1-.15.22-.15.35v.02c.01.13.06.25.15.34l.39.39c.39.342.853.512 1.341.512.273 0 .541-.068.785-.19l.315-.15c.19-.09.31-.26.31-.46v-.02c0-.2-.12-.37-.31-.46l-.315-.15zM8.52 9.475c-.244-.122-.512-.19-.785-.19-.488 0-.951.17-1.341.512l-.39.39c-.1.1-.15.22-.15.35v.02c.01.13.06.25.15.34l.39.39c.39.342.853.512 1.341.512.273 0 .541-.068.785-.19l.315-.15c.19-.09.31-.26.31-.46v-.02c0-.2-.12-.37-.31-.46l-.315-.15z"/>
      </svg>
      Pesan
    </a>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <img className="w-full h-56 object-cover" src={car.imageUrl} alt={car.modelName} />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-suzuki-blue mb-4">{car.modelName}</h3>
        <div className="flex-grow space-y-3">
          {car.variants.map((variant, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-b-0">
              <div className="flex-1 mr-2">
                <p className="text-gray-700 font-medium">{variant.name}</p>
                <p className="text-suzuki-red font-semibold text-sm">{formatCurrency(variant.price)}</p>
              </div>
              <WhatsAppButton modelName={car.modelName} variantName={variant.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
