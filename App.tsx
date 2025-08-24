
import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TestDriveModal from './components/TestDriveModal';
import { CAROUSEL_IMAGES } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <Header onTestDriveClick={handleOpenModal} />
      <main>
        <Carousel images={CAROUSEL_IMAGES} />
        <ProductList />
        <Testimonials />
      </main>
      <Footer />
      <TestDriveModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
