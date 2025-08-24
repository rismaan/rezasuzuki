
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang promo Suzuki.')}`;
  return (
    <footer className="bg-suzuki-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h4 className="text-xl font-bold">Suzuki Mobil Bandung</h4>
            <p className="text-gray-300">Dealer Resmi Suzuki Area Bandung</p>
          </div>
          <div className="text-center sm:text-right">
            <p className="font-semibold">Hubungi Kami Sekarang!</p>
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-green-300 hover:text-green-200 transition-colors"
            >
              WhatsApp: 0882-2200-1243
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Suzuki Car Promotion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
