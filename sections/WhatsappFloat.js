"use client"
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "7356010105";
    const message = "Hello! I'd like to make a reservation at Kaduk Restaurant.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-primary hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={25} />
      </button>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;