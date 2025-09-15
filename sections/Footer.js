import { Separator } from "../components/ui/separator";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brown text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/kaduk1.png"
                alt="Kaduk Restaurant Logo"
                className="w-24 h-12 sm:w-28 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 object-contain"
              />
              <h3 className="text-2xl font-playfair font-bold text-gold">
                Kaduk Restaurant Mukkam
              </h3>
            </div>
            <p className="text-sm font-inter opacity-90">
              Authentic family recipes and exceptional dining experiences. Where
              tradition meets taste in every dish we serve.
            </p>
          </div>
          {/* Social Media Links */}
          <div className="pt-4">
            <h5 className="text-sm font-semibold text-gold mb-3">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/amwajkerala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 text-gold hover:text-cream transition-colors" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6 text-gold hover:text-cream transition-colors" />
              </a>
              <a
                href="https://wa.me/7356010105"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6 text-gold hover:text-cream transition-colors" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-gold">
              Services
            </h4>
            <ul className="space-y-2 text-sm font-inter">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Dine In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Takeaway
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Online Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-gold">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm font-inter">
              <p>Y Bridge Thiruvambady Road Kumaranallur, Mukkam, Kozhikode </p>
              <p>Phone: +91 7356010105</p>
              <p>Phone: +91 6235789450</p>
              <p>Email: kadukrestaurantmukkam@gmail.com</p>
              <p>Hours: 9 AM - 11 PM Daily</p>
            </div>
          </div>
        </div>
        <Separator className="bg-cream/20 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-inter opacity-75">
          <p>&copy; 2025 Kaduk Restaurant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
