import React, { useState } from 'react';
import { WHATSAPP_NUMBER, LOGO_URL } from '../constants';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!message.trim()) return;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Window */}
      <div 
        aria-hidden={!isOpen}
        className={`fixed bottom-24 right-4 sm:right-6 lg:right-8 w-80 sm:w-96 bg-white rounded-lg shadow-2xl z-50 transform transition-all duration-300 ease-out origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-suzuki-blue p-4 rounded-t-lg flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src={LOGO_URL} alt="Suzuki Bandung" className="w-12 h-12 object-contain bg-white p-1 border-2 border-white" />
              <span className="absolute -bottom-1 -right-1 block h-3.5 w-3.5 rounded-full bg-green-400 ring-2 ring-suzuki-blue" title="Online"></span>
            </div>
            <div>
              <p className="font-bold text-lg">Suzuki Bandung</p>
              <p className="text-sm text-gray-200">Layanan Pelanggan</p>
            </div>
          </div>
          <button onClick={toggleChat} className="text-white hover:text-gray-300" aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-4 h-48 overflow-y-auto bg-gray-50">
          <div className="flex justify-start mb-4">
            <div className="bg-gray-200 p-3 rounded-lg max-w-xs shadow-sm">
              <p className="text-sm text-gray-800">Halo! Ada yang bisa saya bantu? Silakan ketik pertanyaan Anda di bawah ini.</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ketik pesan Anda..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-suzuki-blue focus:border-suzuki-blue resize-none"
            rows={2}
            aria-label="Message input"
          />
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            Kirim via WhatsApp
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 sm:right-6 lg:right-8 bg-suzuki-red hover:bg-red-700 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-400"
        aria-label={isOpen ? "Close live chat" : "Open live chat"}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        )}
      </button>
    </>
  );
};

export default LiveChat;
