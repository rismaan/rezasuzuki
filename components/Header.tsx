
import React from 'react';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  onTestDriveClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTestDriveClick }) => {
  return (
    <header className="bg-suzuki-blue text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={LOGO_URL} alt="Suzuki Logo" className="h-12 w-auto mr-4" />
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Suzuki Bandung
              </h1>
              <p className="hidden sm:block text-sm font-light text-gray-300">Promo Mobil Terbaik</p>
            </div>
          </div>
          <button 
            onClick={onTestDriveClick}
            className="bg-suzuki-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Test Drive
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
