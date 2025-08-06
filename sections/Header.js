"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/kaduk.png" 
              alt="Kaduk Restaurant Logo" 
              className="h-12 w-12"
            />
            <h1 className="ml-3 text-2xl font-playfair font-bold text-white">
              <span className="text-primary">Kaduk</span> Restaurant
            </h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary transition-all duration-300 hover:scale-105">
              Home
            </a>
            <a href="#about" className="text-white hover:text-primary transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#menu" className="text-white hover:text-primary transition-all duration-300 hover:scale-105">
              Menu
            </a>
            <a href="#reviews" className="text-white hover:text-primary transition-all duration-300 hover:scale-105">
              Reviews
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </nav>
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="border-white  hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105">
              Map
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-primary transition-colors animate-fade-in">
                Home
              </a>
              <a href="#about" className="text-white hover:text-primary transition-colors animate-fade-in">
                About
              </a>
              <a href="#menu" className="text-white hover:text-primary transition-colors animate-fade-in">
                Menu
              </a>
              <a href="#reviews" className="text-white hover:text-primary transition-colors animate-fade-in">
                Reviews
              </a>
              <a href="#contact" className="text-white hover:text-primary transition-colors animate-fade-in">
                Contact
              </a>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full animate-fade-in">
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;