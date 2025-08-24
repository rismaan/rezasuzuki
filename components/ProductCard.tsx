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
        <path d="M3.925 2.075A1.999 1.999 0 016.438 1.5l.21.043c.48.098.887.493 1.035.975l.492 1.637a.999.999 0 01-.35 1.038l-.68.544a1 1 0 00-.538 1.335c.67 1.34 1.838 2.508 3.179 3.179a1 1 0 001.335-.538l.544-.68c.28-.35.76-.453 1.038-.35l1.637.492c.482.147.877.554.975 1.035l.043.21a1.999 1.999 0 01-1.02 2.146l-1.42.568a1.999 1.999 0 01-2.23-.427c-2.454-2.453-5.26-5.26-7.713-7.713a1.999 1.999 0 01-.427-2.23l.568-1.42a1.999 1.999 0 012.146-1.02z" />
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