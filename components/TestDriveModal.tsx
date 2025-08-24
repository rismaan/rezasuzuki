
import React, { useState } from 'react';
import { CAR_DATA, WHATSAPP_NUMBER } from '../constants';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestDriveModal: React.FC<TestDriveModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    carModel: CAR_DATA[0]?.modelName || '',
    date: '',
    time: '',
    address: '',
  });

  if (!isOpen) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppLink = () => {
    const { name, carModel, date, time, address } = formData;
    if (!name || !carModel || !date || !time || !address) {
      alert('Mohon lengkapi semua data sebelum mengirim.');
      return '#';
    }
    const message = encodeURIComponent(
`Halo, saya ingin memesan jadwal Test Drive:

Nama: ${name}
Mobil: ${carModel}
Tanggal: ${date}
Waktu: ${time}
Alamat Jemput: ${address}

Terima kasih.`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <h2 id="modal-title" className="text-2xl font-bold text-suzuki-blue mb-6 text-center">Formulir Pemesanan Test Drive</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Pemesan</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-suzuki-blue focus:border-suzuki-blue" required />
            </div>
            
            <div>
              <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-1">Mobil yang di Pesan</label>
              <select id="carModel" name="carModel" value={formData.carModel} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-suzuki-blue focus:border-suzuki-blue bg-white" required>
                {CAR_DATA.map(car => (
                  <option key={car.modelName} value={car.modelName}>{car.modelName}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-suzuki-blue focus:border-suzuki-blue" required />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Waktu</label>
                <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-suzuki-blue focus:border-suzuki-blue" required />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap (Untuk Penjemputan)</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-suzuki-blue focus:border-suzuki-blue" required></textarea>
            </div>
            
            <div className="pt-4">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (generateWhatsAppLink() === '#') {
                    e.preventDefault();
                  }
                }}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                  <path d="M12.75 7.75a.75.75 0 00-1.5 0v1.5h-1.5a.75.75 0 000 1.5h1.5v1.5a.75.75 0 001.5 0v-1.5h1.5a.75.75 0 000-1.5h-1.5v-1.5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M8.5 4a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V4.5a.5.5 0 00-.5-.5h-3zM8 4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-11z" clipRule="evenodd" />
                </svg>
                Kirim via WhatsApp
              </a>
            </div>
          </form>
        </div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Tutup modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestDriveModal;
