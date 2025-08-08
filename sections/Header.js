"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
              alt="Kaduk Restaurant mukkam"
              className="w-24 h-12 sm:w-28 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 object-contain transition-all duration-300"
            />
            <h1 className="ml-3 opacity-0 text-4xl font-playfair font-bold text-white">
              Kaduk Restaurant
            </h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              About
            </a>
            <Link
              href={"/menu"}
              className="text-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Menu
            </Link>
            <a
              href="#reviews"
              className="text-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </nav>
          {/* CTA Button */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <a href="https://maps.app.goo.gl/5DxsRH1ryPAP4UGW8" target="_blank">
            <Button className="border-white  hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105">
              Map
            </Button>
            </a>
          </div> */}
          {/* Mobile Menu Button */}
          <button
            className="block md:hidden p-2 z-[100] fixed top-6 right-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 fixed left-0 rounded-2xl right-0 top-0 z-50 bg-white shadow-lg" style={{height: 'fit-content'}}>
            <div className="flex flex-col space-y-4 px-4 pt-8">
              <a
                href="#home"
                className="text-black hover:text-primary transition-colors animate-fade-in"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-black hover:text-primary transition-colors animate-fade-in"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#menu"
                className="text-black hover:text-primary transition-colors animate-fade-in"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#reviews"
                className="text-black hover:text-primary transition-colors animate-fade-in"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <Button
                variant=""
                className="border-black text-black hover:bg-primary hover:text-white w-full animate-fade-in"
              >
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
